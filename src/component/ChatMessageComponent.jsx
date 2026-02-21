import { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import '.././index.css'

export default function ChatMessageComponent({ chatMessages }) {
    const chatMessageRef = useRef(null);

    useEffect(() => {
        if (chatMessageRef.current) {
            chatMessageRef.current.scrollTop = chatMessageRef.current.scrollHeight;
        }
    }, [chatMessages]);

    return (
        <div
            ref={chatMessageRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
        >
            {chatMessages.map((message) => (
                <ChatMessage
                    key={message.id}
                    text={message.message}
                    avatar={message.avatar}
                />
            ))}
        </div>
    );
}