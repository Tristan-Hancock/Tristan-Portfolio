import { MongoClient } from 'mongodb';
// Replace this with your actual connection string
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
  }
}

export async function insertThread(threadId) {
  try {
    const database = client.db("ChatBot");
    const threads = database.collection("ChatThreads");
    const doc = { threadId: threadId, status: "queued", response: null };
    const result = await threads.insertOne(doc);
    console.log(`Thread added with _id: ${result.insertedId}`);
    return result.insertedId; // This ID can be used later if needed
  } catch (error) {
    console.error('Error inserting thread:', error);
    throw error; // It's better to throw the error to be handled by the calling function
  }
}

export async function getMessagesByThreadId(threadId) {
  try {
    const database = client.db("ChatBot");
    const threads = database.collection("ChatThreads");
    const thread = await threads.findOne({ threadId: threadId });
    if (!thread) {
      throw new Error('Thread not found');
    }
    return thread.messages; // Assuming you store messages in the thread document
  } catch (error) {
    console.error('Error retrieving messages by thread ID:', error);
    throw error;
  }
}

