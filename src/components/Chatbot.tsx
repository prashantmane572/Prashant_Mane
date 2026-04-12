"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "streaming" || status === "submitted";
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-[100] flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-semibold">Prashant's AI Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-accent/80 p-1 rounded-md transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4 relative">
              {messages.length === 0 && (
                <div className="text-center text-slate-500 my-auto p-4 text-sm mt-10">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot size={32} />
                  </div>
                  Hi! I'm Prashant's AI Assistant. How can I help you today? Ask me about his data analytics skills, projects, or services.
                </div>
              )}
              
              {messages.map((m) => (
                <div 
                  key={m.id} 
                  className={`flex gap-3 max-w-[85%] ${m.role === "user" ? "self-end flex-row-reverse" : "self-start"}`}
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-blue-100 text-blue-600" : "bg-primary text-white"}`}>
                    {m.role === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div 
                    className={`p-3 rounded-2xl text-sm shadow-sm ${
                      m.role === "user" 
                        ? "bg-primary text-white rounded-tr-none" 
                        : "bg-white border border-slate-200 text-slate-700 rounded-tl-none whitespace-pre-wrap"
                    }`}
                  >
                    {m.parts ? m.parts.map((part, i) => part.type === 'text' ? part.text : '').join('') : (m as any).text || (m as any).content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="self-start flex gap-2 max-w-[85%]">
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-2xl rounded-tl-none text-slate-500 text-sm flex gap-1 items-center">
                    <span className="animate-pulse">●</span>
                    <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>●</span>
                    <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>●</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form 
              onSubmit={handleSubmit} 
              className="p-3 bg-white border-t border-slate-200 flex gap-2"
            >
              <input
                className="flex-1 bg-slate-100 border-none px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                value={input}
                placeholder="Ask something..."
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-accent text-white p-2 rounded-full transition-colors disabled:opacity-50 flex items-center justify-center h-10 w-10 shrink-0"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary hover:bg-accent text-white p-4 rounded-full shadow-lg shadow-blue-900/40 z-[100] transition-transform hover:scale-110"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
