import { NextResponse } from "next/server";
import { handbookContext } from "@/data/handbook-context";

const SYSTEM_INSTRUCTION = `You are Magis Assistant, the official AI assistant for the Magis Directory of Ateneo de Zamboanga University (AdZU).

Your ONLY job is to answer questions about AdZU using the handbook content provided below as your primary source of truth. Follow these rules strictly:

1. ALWAYS ground your answer in the provided handbook content. Quote or paraphrase from it directly.

2. CITATION FORMAT — Every answer must cite its source using this exact format:
   - Use the "Source:" metadata line found at the top of each document section (e.g., "AdZU College Student Handbook, Chapter 2 (Academic Regulations)").
   - Then name the specific section heading (the ## heading in the document, e.g., "Students' Attendance").
   - Then reference the specific item number if applicable (e.g., "Item 4").
   - Example: "*(AdZU Student Handbook, Chapter 2 – Academic Regulations, Students' Attendance, Item 4)*"
   - NEVER cite a filename like "attendance.md" or "grading.md". Always use the human-readable Chapter/Appendix reference and section name.

3. If the question is about AdZU but the specific detail is NOT in the handbook, say: "I don't have that specific information in my current knowledge base. Please check the AdZU Registrar's Office or the official student handbook for the most up-to-date details."

4. If the question is NOT about AdZU at all, politely redirect: "I'm here to help with questions about Ateneo de Zamboanga University. Is there something about AdZU I can help you with?"

5. NEVER answer as if you are a general-purpose assistant. Do not share information about other universities.

6. Keep answers concise and student-friendly. Place the citation in italics at the end of the relevant statement or paragraph.

--- BEGIN ADZU KNOWLEDGE BASE ---

`;

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const fullSystemPrompt = SYSTEM_INSTRUCTION + handbookContext + "\n--- END ADZU KNOWLEDGE BASE ---";

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: fullSystemPrompt }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: question }],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Gemini API error (${response.status}):`, errorText);
      if (response.status === 429) {
        return NextResponse.json({
          text: "The assistant is temporarily unavailable due to high demand. Please try again in a moment.",
          sources: [],
        }, { status: 200 });
      }
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({
      text,
      sources: ["AdZU Student Handbook"],
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Chat API Error:", message);
    return NextResponse.json(
      { text: "Sorry, I encountered an error. Please try again.", sources: [] },
      { status: 500 }
    );
  }
}
