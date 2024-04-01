import express from 'express';
import { OpenAI } from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect, insertThread } from './db.js';

dotenv.config();
connect();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  const { task } = req.body;
  console.log(task);
  try {
    const assistant = await openai.beta.assistants.retrieve("asst_hJn16BvHRKZl5XFr06eO5X6s");
    console.log(assistant);

    const thread = await openai.beta.threads.create();
    console.log("check for threadID " + thread.id);
    const threadId = thread.id;

    // Inserting the thread ID into the database
    await insertThread(threadId);

    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: task // Using the task from the request body
    });

    const runthread = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant.id,
      instructions: "Response less than 100 words always",
    });

    let run = await openai.beta.threads.runs.retrieve(threadId, runthread.id);
    while (run.status !== 'completed') {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      run = await openai.beta.threads.runs.retrieve(threadId, runthread.id);
    }
    console.log(run); // Run completed

    const messages = await openai.beta.threads.messages.list(thread.id);
    console.log("threadID after messages: " + thread.id);
    const response = []; 

    // Handling messages with a check for the structure
    messages.body.data.forEach(message => {
      if (message.role === 'assistant' && message.content && message.content.length > 0) {
        message.content.forEach(part => {
          if (part.type === 'text' && part.text) {
            console.log(part.text.value);
            response.push(part.text.value); //stores response need to send this to front end 
            console.log("Response variable content:", response); //storing as an array
          }
        });
      }
    });
// Respond with the processed responses
   res.json({ responses: response });

    // Respond with the processed messages
    // res.json(messages.body.data.filter(message => message.role === 'assistant').map(message => {
    //   return message.content.map(part => part.text ? part.text.value : 'Message structure unexpected').join('');
    // }));
  } catch (error) {
    console.error('OpenAI API request failed:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
