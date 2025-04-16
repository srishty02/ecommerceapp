import React, { useState } from "react";
import { MessageCircle, X, Send, CheckCircle } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you? 😊", sender: "bot" }]);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [userInput, setUserInput] = useState(""); 
  const [showAssistant, setShowAssistant] = useState(false);

  const promptQuestions = [
    { text: "📅 Issues regarding Booking process", response: "For booking issues, please check our FAQ or contact support." },
    { text: "❗ Complain about the services", response: "We're sorry for any inconvenience. Please describe your issue." },
    { text: "💼 Apply for the job", response: "You can apply on our careers page or send your resume to hr@example.com." },
    { text: "❓ Others", response: "" }
  ];

  const handlePromptClick = (question) => {
    setMessages([...messages, { text: question.text, sender: "user" }, { text: question.response, sender: "bot" }]);
    if (question.text === "❓ Others") {
      setSelectedMenu("Others");
    }
  };

  const handleUserSubmit = () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, sender: "user" }, { text: "We will connect with you soon. 😊", sender: "bot" }]);
      setUserInput("");
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setShowAssistant(true);
    setTimeout(() => setShowAssistant(false), 2500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      <button
        onClick={toggleChatbot}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
        Chat
      </button>

      {/* Tooltip that appears when hovering over the button */}
      {!isOpen && (
        <div className="absolute bottom-full mb-2 left-1/1 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max bg-gray-700 text-white p-3 rounded-lg text-sm flex items-center gap-2 shadow-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Assistant" className="w-6 h-6" />
          <span>Hi! How can I help you? 😊</span>
        </div>
      )}

      {showAssistant && (
        <div className="fixed bottom-20 right-8 bg-white p-3 rounded-lg shadow-lg border border-gray-300 flex items-center animate-fadeIn transition-all">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Assistant" className="w-10 h-10 mr-2" />
          <p className="text-black font-semibold">Hi! How can I help you? 😊</p>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700 flex flex-col animate-slideIn">
          <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-lg">
            <h3 className="text-lg font-semibold">Chat with Us 🤖</h3>
            <button onClick={() => setIsOpen(false)}><X className="w-6 h-6 hover:text-gray-300" /></button>
          </div>

          <div className="flex justify-around bg-gray-800 p-2 text-sm">
            {["Home", "Support", "Help", "Others"].map((menu) => (
              <button
                key={menu}
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all ${
                  selectedMenu === menu ? "text-blue-400 font-bold bg-gray-700" : "hover:text-blue-400"
                }`}
                onClick={() => setSelectedMenu(menu)}
              >
                {selectedMenu === menu && <CheckCircle className="w-4 h-4 text-green-400" />}
                {menu}
              </button>
            ))}
          </div>

          <div className="p-3 h-60 overflow-y-auto text-gray-200 space-y-2">
            {selectedMenu === "Support" ? (
              <div className="space-y-4">
                <div className="text-center bg-gray-700 p-3 rounded-lg">
                  <p className="text-lg font-semibold">📞 Support Details</p>
                  <p>📲 Phone: <strong>9871469803</strong></p>
                  <p>📧 Email: <strong>doorz@gmail.com</strong></p>
                </div>

                <div className="text-center bg-gray-700 p-3 rounded-lg ">
                  <p className="text-lg font-semibold p-2">💼 Looking for a Job?</p>
                  <a href="mailto:hr@example.com" className="bg-blue-600 text-white p-1 rounded-lg hover:bg-blue-700 transition-all">
                    Apply Now
                  </a>
                </div>
              </div>
            ) : selectedMenu === "Help" ? (
              <div className="text-center bg-gray-700 p-3 rounded-lg ">
                <p className="text-lg font-semibold">🎧💬 Help Center</p>
                <p>Our customer service will contact you soon. 😊</p>
                <div className="bg-blue-700 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">⚠️ Service Complaint</h3>
                  <p className="text-gray-300">We’re sorry for any inconvenience. Tell us your issue.</p>
                  <button className="bg-red-500 text-white p-2 mt-3 rounded-md w-full hover:bg-red-600 transition-all">
                    📢 Report an Issue
                  </button>
                </div>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 my-1 max-w-[75%] ${
                    msg.sender === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-700 text-white self-start"
                  } rounded-lg`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          {selectedMenu !== "Support" && selectedMenu !== "Help" && (
            <div className="p-3 bg-gray-800">
              {promptQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(q)}
                  className="w-full bg-gray-700 p-2 my-1 border border-gray-600 rounded-lg text-left hover:bg-gray-600 transition-all"
                >
                  {q.text}
                </button>
              ))}
            </div>
          )}

          {selectedMenu === "Others" && (
            <div className="p-3 bg-gray-800 flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 p-2 border border-gray-600 rounded-l-lg bg-gray-700 text-white placeholder-gray-400"
                placeholder="Describe your issue..."
              />
              <button onClick={handleUserSubmit} className="bg-blue-600 text-white px-3 rounded-r-lg hover:bg-blue-700 transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
