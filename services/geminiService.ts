
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateBeautyTips = async (concern: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional beauty consultant at Paradise Spa & Salon. A client is asking about: "${concern}". Provide a concise, professional, and friendly recommendation (under 100 words) including a suggested spa service.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our experts are currently busy. Please contact us directly for personalized advice!";
  }
};
