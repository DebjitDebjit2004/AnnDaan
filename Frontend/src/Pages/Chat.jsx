import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Dummy users for demonstration
const USERS = [
  { id: 1, name: "NGO", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Event Manager", avatar: "https://i.pravatar.cc/40?img=2" },
];

const INITIAL_MESSAGES = [
  { sender: 1, text: "Hello, how can we collaborate for the event?", time: "10:00 AM" },
  { sender: 2, text: "Hi! We need volunteers and food support.", time: "10:01 AM" },
];

const Chat = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [currentUser, setCurrentUser] = useState(1); // 1: NGO, 2: Event Manager
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const now = new Date();
    setMessages([
      ...messages,
      {
        sender: currentUser,
        text: input,
        time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setInput("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 pt-24 pb-12 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg flex flex-col h-[80vh] mt-8">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div className="flex items-center gap-3">
              <img
                src={USERS[currentUser - 1].avatar}
                alt={USERS[currentUser - 1].name}
                className="w-10 h-10 rounded-full border-2 border-orange-400"
              />
              <span className="font-semibold text-orange-700">
                {USERS[currentUser - 1].name}
              </span>
            </div>
            {/* Switch user for demo */}
            <button
              className="text-xs bg-orange-100 px-3 py-1 rounded hover:bg-orange-200"
              onClick={() => setCurrentUser(currentUser === 1 ? 2 : 1)}
              title="Switch User (Demo)"
            >
              Switch to {USERS[currentUser === 1 ? 1 : 0].name}
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 bg-orange-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === currentUser ? "justify-end" : "justify-start"}`}
              >
                {msg.sender !== currentUser && (
                  <img
                    src={USERS[msg.sender - 1].avatar}
                    alt={USERS[msg.sender - 1].name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg shadow text-sm ${
                    msg.sender === currentUser
                      ? "bg-orange-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                  <div className="text-[10px] text-right mt-1 opacity-70">{msg.time}</div>
                </div>
                {msg.sender === currentUser && (
                  <img
                    src={USERS[msg.sender - 1].avatar}
                    alt={USERS[msg.sender - 1].name}
                    className="w-8 h-8 rounded-full ml-2"
                  />
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <form
            className="flex items-center border-t px-4 py-3 bg-white"
            onSubmit={handleSend}
          >
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="ml-3 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition"
              title="Send"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chat;