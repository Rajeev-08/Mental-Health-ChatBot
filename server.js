require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Your name is nemo, You are a chatbot designed to provide mental health and emotional support to students.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Store chat history in memory
let chatHistory = [];

// Format chat history for the AI model
function formatHistoryForModel(history) {
  return history.map(message => ({
    role: message.role,
    parts: [{ text: message.text }]
  }));
}

app.get('/', (req, res) => {
  res.render('index', { chatHistory });
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  // Push the user's message to chat history
  chatHistory.push({ role: 'user', text: userMessage });
  const formattedHistory = formatHistoryForModel(chatHistory);
  
  const chatSession = model.startChat({ generationConfig, history: formattedHistory });

  try {
    const result = await chatSession.sendMessage(userMessage);
    const botResponse = result.response.text();

    // Save bot response to chat history
    chatHistory.push({ role: 'model', text: botResponse });

    res.json({ botResponse });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
