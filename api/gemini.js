import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("The GEMINI_API_KEY has not been found");
}

const gemini = new GoogleGenerativeAI(API_KEY);

export default async (req, res) => {
  const { prompt } = req.body;
  try {
    const model = gemini.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.status(200).json({ text: text });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: 'Failed to generate content from Gemini API.', details: error.message });
  }
};