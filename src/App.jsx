import { useState } from 'react';
import ChatInput from './component/ChatInput';
import ChatMessageComponent from './component/ChatMessageComponent';
import './index.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-screen max-h-screen flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <h1 className="text-2xl font-bold">Chat Assistant</h1>
        </div>
        {chatMessages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-gray-400 bg-gray-50">
            <p>Start a conversation...</p>
          </div>
        ) : (
          <ChatMessageComponent chatMessages={chatMessages} />
        )}
        <div className="border-t border-gray-200 p-4">
          <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
        </div>
      </div>
    </div>
  );
}

export default App;