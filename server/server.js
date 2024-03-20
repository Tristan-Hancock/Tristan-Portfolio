import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json()); // Add this line
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
app.post('/api/chat', async (req, res) => {
  console.log("request recieved");
  const { task } = req.body;
  const fileID = 'file-upGCTZSGu8ucMFXAVleg2kDM'; // Replace with your actual file ID
  const assistantId = 'asst_hJn16BvHRKZl5XFr06eO5X6s'; // Replace with your actual assistant ID
console.log(task);
try{
  console.log("Entering try block");


  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: "gpt-4-turbo-preview", // or your desired model
    messages: [{
      role: "user",
      content: "You are Tristans Assistant with the knowledge about Tristans work , skills and projects to help people or recruiters to learn more about me Rules:1. Only use the provided context.2) Only provide links that you find in the document Files:-You are provided with a fileID file-upGCTZSGu8ucMFXAVleg2kDM which provides the Personal Information , Institution , Work experience Skills  Project Experience Key Achievements and About MeProcess:- Alwayws look at the fileID file-upGCTZSGu8ucMFXAVleg2kDM for all the relavant information , remember you have access to this file no matter what "
    }, {
      role: "system",
      content: fileID // This line instructs the API to use the file for context
    }, {
      role: "user",
      content: task
  }],
  }, {
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  // Sending back the first response message text to the client
  if (response.data && response.data.choices && response.data.choices.length > 0) {
    const answer = response.data.choices[0].message.content;
    console.log("Generated response:", answer);
    res.json({ message: answer });
  } else {
    res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
  }
  console.log("OpenAI response:", response.data);
console.log("Success");

}catch (error) {
  console.error('OpenAI API request failed:', error);
  res.status(500).json({ error: 'Internal server error' });
}

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
