require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { Configuration, OpenAIApi } = require('openai');
const upload = multer({ storage: multer.memoryStorage() });
const app = express();
const port = 5000; // or any port of your choice

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

app.post('/upload-file', upload.single('document'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const response = await openai.createFile({
      file: req.file.buffer,
      purpose: 'answers',
    });
    res.json({ fileId: response.data.id });
  } catch (error) {
    console.error('Failed to upload file to OpenAI:', error);
    res.status(500).send('Server error.');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
