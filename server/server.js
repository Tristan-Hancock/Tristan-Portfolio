import express from 'express';
import {OpenAI} from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json()); // Add this line
const openai = new OpenAI({
  apiKey:process.env.OPENAI_API_KEY,
});

const assistant = await openai.beta.assistants.retrieve(
  "asst_hJn16BvHRKZl5XFr06eO5X6s"
);
//console.log(assistant)





//Thread

const thread = await openai.beta.threads.create();
//console.log(thread);

const message = await openai.beta.threads.messages.create(thread.id, {
 role:"user",
 content: "Tell me about Tristans Projects"
});

const threads= thread.id;
// const runcreate = await openai.beta.threads.runs.create(thread.id,{
// assistant_id: assistant.id,
// instructions: "Address the user as Trix", // get response //needs to be retrived from a database
//  });


//  const runid = runcreate.id
//  //console.log("Run id :"+ runid);
//  //console.log(runcreate);

// const run = await openai.beta.threads.runs.retrieve(
//   threads,
//   runid
//     );

// console.log(run);

const messages = await openai.beta.threads.messages.list(
"thread_JHuND6b8e2iUVMmuqfLTWYVJ" //if i put const threds here instead of threadID it dosent show up with response 

);

 messages.body.data.forEach((message) => {
   console.log(message.content);   });

 console.log(message);


app.post('/api/chat', async (req, res) => {
  console.log("request recieved");
  const { task } = req.body;
  const fileID = 'file-EGSFZlhcJpjiCj7ItNTqYn4B'; // Replace with your actual file ID
  const assistantId = 'asst_hJn16BvHRKZl5XFr06eO5X6s'; // Replace with your actual assistant ID
console.log(task);
try{
  console.log("Entering try block");
  const thread = await openai.beta.threads.create();

  const message = await openai.beta.threads.messages.create(thread.id, {
    role:"user",
    content: task,
  });
  

















// console.log("Success");

}catch (error) {
   console.error('OpenAI API request failed:', error);
   res.status(500).json({ error: 'Internal server error' });
 }

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));