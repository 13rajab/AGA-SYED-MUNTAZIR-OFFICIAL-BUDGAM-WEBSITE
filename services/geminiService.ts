
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateGrievanceSummary(description: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Please provide a professional, one-sentence summary for the following citizen grievance in the context of an MLA's office.
      
      Grievance: ${description}`,
      config: {
        systemInstruction: "You are a senior administrator in the MLA's office of Budgam. Your job is to summarize complex public issues concisely for the MLA's dashboard."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Summary unavailable.";
  }
}

export async function getSmartSuggestions(sector: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `As an expert in public governance, suggest 3 high-impact development initiatives for the ${sector} sector in Budgam, Kashmir. Keep them practical and localized.`,
      config: {
        systemInstruction: "You are an advisor to Hon'ble MLA Aga Syed Muntazir Mehdi of Budgam."
      }
    });
    return response.text;
  } catch (error) {
    return "Suggestions currently unavailable.";
  }
}

export function createMadadgaarChat() {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are "MADADGAAR", an AI assistant for the constituency of Budgam, Jammu & Kashmir. 
      You represent the office of Hon'ble MLA Aga Syed Muntazir Mehdi. 
      Your tone is professional, polite, and community-focused. 
      You help citizens with:
      - Understanding how to file grievances.
      - Information about developmental projects in Budgam (like road macadamization, hospital wards, etc.).
      - Basic constituency details.
      - If users ask in Urdu, respond in Urdu. If in English, respond in English.
      - Keep responses concise and focused on public service.`,
    },
  });
}
