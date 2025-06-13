import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const commonQuestions = [
    "What services do you offer?",
    "How much do your services cost?",
    "How far in advance should I book?",
    "Do you handle destination events?"
  ];

  const handleSend = () => {
    if (!input.trim())
      return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);

    // Simulate bot response
    setTimeout(() => {
      let response = "Thank you for your message. One of our team members will get back to you soon.";
      
      // Simple response matching
      if (input.toLowerCase().includes('service')) {
        response = "We offer a wide range of event planning services including weddings, corporate events, private parties, and more. Would you like to know more about a specific service?";
      } else if (input.toLowerCase().includes('cost') || input.toLowerCase().includes('price')) {
        response = "Our pricing varies depending on the type and scale of the event. We'd be happy to provide a custom quote after learning more about your specific needs.";
      } else if (input.toLowerCase().includes('book')) {
        response = "We recommend booking at least 6-12 months in advance for large events, though this can vary depending on the type and size of your event.";
      }

      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);

    setInput('');
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-white rounded-xl shadow-2xl">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-xl">
            <h3 className="text-lg font-semibold">Chat with Us</h3>
            <p className="text-sm opacity-90">We typically reply within a few minutes</p>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Common Questions */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Common Questions:</p>
            <div className="flex flex-wrap gap-2">
              {commonQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;