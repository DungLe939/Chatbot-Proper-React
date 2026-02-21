import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import '.././index.css'
import dayjs, { Dayjs } from 'dayjs';

export default function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleOnSubmit = async () => {
        if (isLoading || inputText === '') return;
        setIsLoading(true);

        const humanText = {
            id: crypto.randomUUID(),
            message: inputText,
            avatar: 'human',
            time: dayjs().valueOf()
        };
        const loadingBotText = {
            id: crypto.randomUUID(),
            message: 'Loading...',
            avatar: 'bot',
            time: dayjs().valueOf()
        };

        setChatMessages([...chatMessages, humanText, loadingBotText]);
        setInputText('');

        // Add delay to simulate thinking time (adjust delay as needed)
        await new Promise(resolve => setTimeout(resolve, 1000));
        const newText = await Chatbot.getResponse(inputText);

        const botText = {
            id: crypto.randomUUID(),
            message: newText,
            avatar: 'bot',
            time: dayjs().valueOf()
        };

        setChatMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = botText;
            return updatedMessages;
        });
        setIsLoading(false);
    };

    const handleOnReset = () => {
        setChatMessages([]);
    };

    return (
        <div className="flex gap-2 p-4 bg-white rounded-lg shadow-lg">
            <input
                type="text"
                placeholder="Send a message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleOnSubmit();
                    else if (e.key === 'Escape') handleOnReset();
                }}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                onClick={handleOnSubmit}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition active:scale-95"
            >
                Send
            </button>
            <button
                onClick={handleOnReset}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition active:scale-95"
            >
                Reset
            </button>
        </div>
    );
}