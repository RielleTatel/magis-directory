"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Sparkles, SendHorizontal, BookOpen, User, MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  sources?: string[];
}

const QUICK_QUESTIONS = [
  "What is the grading system at AdZU?",
  "How do I form a new student org?",
  "What are the university core values?",
  "What services does AdZU offer students?",
];

const KNOWLEDGE_AREAS = [
  { emoji: "📋", label: "Student Handbook" },
  { emoji: "🏫", label: "University Services" },
  { emoji: "🎓", label: "Academic Policies" },
  { emoji: "🤝", label: "Student Organizations" },
  { emoji: "📍", label: "Campus Life" },
];

function getMockResponse(question: string): { text: string; sources: string[] } {
  const q = question.toLowerCase();

  if (q.includes("form") || q.includes("establish") || q.includes("new org")) {
    return {
      text: "To establish a new student organization, you need: (1) at least 15 founding members, (2) a faculty moderator, (3) a constitution and by-laws, and (4) endorsement from the Office of Student Affairs. Applications are accepted at the start of each academic year.",
      sources: ["Student Handbook §4.5"],
    };
  }
  if (q.includes("grad") || q.includes("grading") || q.includes("grade")) {
    return {
      text: "AdZU uses a percentage-based grading system. The passing grade is 75%. Final grades are computed from class standing (60%) and a final examination (40%). Incomplete grades (INC) must be completed within one year, or the grade defaults to 5.0.",
      sources: ["Academic Policies §3.1"],
    };
  }
  if (q.includes("org") || q.includes("organization") || q.includes("join") || q.includes("freshman")) {
    return {
      text: "AdZU is home to over 40 recognized student organizations spanning academic, cultural, civic, sports, and faith-based communities. As a freshman, you can join any organization after passing their respective orientation and application process. Organizations hold general assemblies each semester — watch the bulletin boards and official Facebook pages for announcements.",
      sources: ["Student Handbook §4.2", "Magis Directory"],
    };
  }
  if (q.includes("value") || q.includes("mission") || q.includes("ignatian") || q.includes("magis")) {
    return {
      text: "AdZU is guided by four Ignatian core values: Competence, Conscience, Compassion, and Commitment. The university's mission is rooted in the Jesuit tradition of 'cura personalis' — care for the whole person — and the call to Magis, striving always to do and be more for the greater glory of God.",
      sources: ["University Mission & Vision"],
    };
  }
  if (q.includes("service") || q.includes("office")) {
    return {
      text: "AdZU offers a range of student services including the Guidance & Counseling Center, Health Services, Library & Learning Commons, Registrar's Office, Student Affairs Office, and the University Canteen. The Student Affairs Office is your primary point of contact for org-related concerns.",
      sources: ["University Services Directory"],
    };
  }
  if (q.includes("load") || q.includes("unit") || q.includes("academic load")) {
    return {
      text: "Regular full-time students are expected to carry 18–21 units per semester. Overloads beyond 21 units require written permission from the Dean. Students on academic probation are limited to 15 units.",
      sources: ["Academic Policies §2.3"],
    };
  }
  return {
    text: "That's a great question! I can help you with information about student organizations, academic policies, the student handbook, and university services at AdZU. Could you try rephrasing your question or choose one of the suggested topics on the left?",
    sources: [],
  };
}

function simulateResponse(question: string): Promise<{ text: string; sources: string[] }> {
  const delay = 1200 + Math.random() * 600;
  return new Promise((resolve) => setTimeout(() => resolve(getMockResponse(question)), delay));
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking, scrollToBottom]);

  const adjustTextareaHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 96) + "px";
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isThinking) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setIsThinking(true);

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: trimmed })
  });

const response = await res.json();

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      text: response.text,
      sources: response.sources,
    };

    setIsThinking(false);
    setMessages((prev) => [...prev, botMsg]);
  }, [isThinking]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input);
      }
    },
    [input, sendMessage]
  );

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* Sidebar */}
          <aside className="flex flex-col gap-8">
            {/* Quick Questions */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[#1B3F8B]" />
                <span className="text-[#1B3F8B] text-sm font-semibold uppercase tracking-widest">
                  Quick Questions
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    disabled={isThinking}
                    className="bg-[#F0F4FB] hover:bg-[#D6E4F5] text-[#2C3E55] text-sm font-medium px-4 py-2 rounded-md cursor-pointer transition-all text-left disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Knowledge Areas */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[#1B3F8B]" />
                <span className="text-[#1B3F8B] text-sm font-semibold uppercase tracking-widest">
                  Knowledge Areas
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {KNOWLEDGE_AREAS.map(({ emoji, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-4 py-2 rounded-md bg-[#F0F4FB] text-sm text-[#2C3E55] font-medium"
                  >
                    <span>{emoji}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Chat window */}
          <div className="border-2 border-[#D6E4F5] rounded-lg overflow-hidden flex flex-col h-[600px]">

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-6">
              {messages.length === 0 && !isThinking ? (
                /* Welcome state */
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="h-16 w-16 bg-[#1B3F8B] rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-bold text-[#2C3E55] mb-2">
                    Hi, I&apos;m Magis Assistant
                  </h2>
                  <p className="text-[#2C3E55]/60 text-sm leading-relaxed mb-8 max-w-md">
                    I can answer questions about AdZU&apos;s student handbook, organizations,
                    academic policies, and university services.
                  </p>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-lg">
                    {QUICK_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="bg-[#F0F4FB] hover:bg-[#D6E4F5] border border-[#C8D6E8] rounded-md p-3 text-sm text-[#2C3E55] font-medium cursor-pointer transition-all text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((msg) =>
                    msg.role === "user" ? (
                      /* User bubble */
                      <div key={msg.id} className="flex items-start gap-3 flex-row-reverse">
                        <div className="h-8 w-8 bg-[#4A7FC1] rounded-md flex-shrink-0 flex items-center justify-center">
                          <User className="h-4 w-4 text-white" strokeWidth={2} />
                        </div>
                        <div className="bg-[#1B3F8B] rounded-lg rounded-tr-none px-4 py-3 max-w-[80%]">
                          <p className="text-white text-sm leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    ) : (
                      /* Bot bubble */
                      <div key={msg.id} className="flex items-start gap-3">
                        <div className="h-8 w-8 bg-[#1B3F8B] rounded-md flex-shrink-0 flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col gap-2 max-w-[80%]">
                          <div className="bg-[#F0F4FB] rounded-lg rounded-tl-none px-4 py-3">
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                p: ({ children }) => <p className="text-[#2C3E55] text-sm leading-relaxed mb-2 last:mb-0">{children}</p>,
                                strong: ({ children }) => <strong className="font-semibold text-[#1B3F8B]">{children}</strong>,
                                em: ({ children }) => <em className="italic text-[#2C3E55]/80">{children}</em>,
                                ul: ({ children }) => <ul className="list-disc list-inside space-y-1 text-sm text-[#2C3E55] my-2">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 text-sm text-[#2C3E55] my-2">{children}</ol>,
                                li: ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
                                h3: ({ children }) => <h3 className="font-bold text-[#2C3E55] text-sm mt-3 mb-1">{children}</h3>,
                                h4: ({ children }) => <h4 className="font-semibold text-[#2C3E55] text-sm mt-2 mb-1">{children}</h4>,
                                code: ({ children }) => <code className="bg-[#D6E4F5] text-[#1B3F8B] text-xs px-1 py-0.5 rounded font-mono">{children}</code>,
                                table: ({ children }) => <div className="overflow-x-auto my-3"><table className="text-xs w-full border-collapse">{children}</table></div>,
                                thead: ({ children }) => <thead className="bg-[#D6E4F5]">{children}</thead>,
                                th: ({ children }) => <th className="text-left text-[#1B3F8B] font-semibold px-3 py-2 border border-[#C8D6E8]">{children}</th>,
                                td: ({ children }) => <td className="px-3 py-2 border border-[#C8D6E8] text-[#2C3E55]">{children}</td>,
                                tr: ({ children }) => <tr className="even:bg-[#F0F4FB]">{children}</tr>,
                                hr: () => <hr className="border-[#C8D6E8] my-3" />,
                              }}
                            >
                              {msg.text}
                            </ReactMarkdown>
                          </div>
                          {msg.sources && msg.sources.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {msg.sources.map((src) => (
                                <span
                                  key={src}
                                  className="inline-flex items-center gap-1 bg-[#D6E4F5] text-[#1B3F8B] text-xs font-semibold px-2 py-0.5 rounded"
                                >
                                  <BookOpen className="h-3 w-3" strokeWidth={2} />
                                  {src}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  )}

                  {/* Thinking indicator */}
                  {isThinking && (
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 bg-[#1B3F8B] rounded-md flex-shrink-0 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-white" strokeWidth={1.5} />
                      </div>
                      <div className="bg-[#F0F4FB] rounded-lg rounded-tl-none px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <div
                            className="h-2 w-2 bg-[#4A7FC1] rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          />
                          <div
                            className="h-2 w-2 bg-[#4A7FC1] rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          />
                          <div
                            className="h-2 w-2 bg-[#4A7FC1] rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input bar */}
            <div className="border-t-2 border-[#D6E4F5] p-4 bg-white">
              <div className="flex items-end gap-3">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    adjustTextareaHeight();
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about AdZU…"
                  rows={1}
                  className="flex-1 resize-none bg-[#F0F4FB] border border-[#C8D6E8] rounded-md px-4 py-3 text-sm text-[#2C3E55] placeholder:text-[#2C3E55]/40 focus:outline-none focus:border-[#1B3F8B] transition-colors"
                  style={{ minHeight: "44px", maxHeight: "96px" }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isThinking}
                  className="h-10 w-10 bg-[#1B3F8B] hover:bg-[#163472] disabled:opacity-40 rounded-md flex items-center justify-center transition-all flex-shrink-0"
                >
                  <SendHorizontal className="h-4 w-4 text-white" strokeWidth={2} />
                </button>
              </div>
              <p className="text-xs text-[#2C3E55]/40 mt-2">
                Press Enter to send · Shift+Enter for new line
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
