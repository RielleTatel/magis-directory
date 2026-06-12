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

${handbookContext}

--- END ADZU KNOWLEDGE BASE ---`;

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      console.error("[chat] DEEPSEEK_API_KEY is not set");
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_INSTRUCTION },
          { role: "user", content: question },
        ],
        temperature: 0.2,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`DeepSeek API error (${response.status}):`, errorText);
      if (response.status === 429 || errorText.includes("rate_limit")) {
        return NextResponse.json({
          text: "The assistant is temporarily unavailable due to high demand. Please try again in a moment.",
          sources: [],
        }, { status: 200 });
      }
      if (response.status === 413 || errorText.includes("too large") || errorText.includes("context_length")) {
        return NextResponse.json({
          text: "The request was too large. Please try asking a more specific question.",
          sources: [],
        }, { status: 200 });
      }
      throw new Error(`DeepSeek API error: ${response.status} — ${errorText}`);
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

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
