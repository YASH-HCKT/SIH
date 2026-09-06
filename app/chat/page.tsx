"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Sparkles, BookOpen, ShieldCheck, FileSearch, Lightbulb } from "lucide-react";

const samplePrompts = [
  {
    icon: ShieldCheck,
    title: "Patent Eligibility",
    query: "Is my novel polyherbal formulation eligible for a patent under Indian Patent Law?",
  },
  {
    icon: FileSearch,
    title: "TKDL Prior Art Check",
    query: "Check if Ashwagandha + Brahmi formulation exists in traditional knowledge databases.",
  },
  {
    icon: BookOpen,
    title: "AYUSH Compliance",
    query: "What are the AYUSH license requirements for exporting Ayurvedic cosmetics to EU?",
  },
  {
    icon: Lightbulb,
    title: "IP Strategy",
    query: "How can I protect a proprietary extraction process for medicinal plants?",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    {
      sender: "ai",
      text: "Namaste! I am IP-SAKTI Sahayak, your multilingual RAG-based AI assistant for Ayurveda Intellectual Property and Regulatory Compliance. How can I assist your formulation or research today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: "user" as const, text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          sender: "ai",
          text: `Analysis for "${query}":\n\n1. IP Vulnerability Status: Low prior-art conflict identified across TKDL & Global Patent Registries.\n2. Regulatory Regime: Governed under AYUSH Guidelines & Chapter IV-A of Drugs & Cosmetics Act.\n3. Action Recommended: File provisional patent specification with documented efficacy data and source-cited botanical authentication.`,
        },
      ]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
          <Sparkles className="w-4 h-4" /> Multilingual RAG AI Engine
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          AI <span className="text-primary">Assistant</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Query global IP databases, TKDL prior art, and AYUSH regulatory frameworks in real time.
        </p>
      </div>

      {/* Chat Container */}
      <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-md mb-6 min-h-[450px]">
        {/* Messages */}
        <div className="space-y-4 overflow-y-auto max-h-[420px] pr-2 scrollbar-thin">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "ai" && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black shrink-0 font-bold">
                  <Bot className="w-5 h-5" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-xl p-4 text-sm sm:text-base whitespace-pre-line ${
                  msg.sender === "user"
                    ? "bg-primary text-black font-medium"
                    : "bg-white/10 text-gray-200 border border-white/10"
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                  <User className="w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start items-center text-gray-400 text-sm italic">
              <Bot className="w-5 h-5 animate-pulse text-primary" /> Searching TKDL and IP Databases...
            </div>
          )}
        </div>

        {/* Sample Suggestions */}
        {messages.length <= 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-white/10">
            {samplePrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt.query)}
                className="text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex items-start gap-3 group"
              >
                <prompt.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-primary transition-colors">
                    {prompt.title}
                  </div>
                  <div className="text-xs text-gray-400 line-clamp-1">{prompt.query}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask IP-SAKTI about your Ayurveda formulation, patent claims, or regulatory rules..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-black font-semibold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2 shrink-0 disabled:opacity-50"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
