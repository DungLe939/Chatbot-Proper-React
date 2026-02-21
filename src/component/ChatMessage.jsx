import '.././index.css'

const botAvatar = "https://supersimple.dev/projects/chatbot/robot.png";
const humanAvatar = "https://supersimple.dev/projects/chatbot/user.png";

export default function ChatMessage({ text, avatar }) {
    const isBot = avatar === 'bot';
    return (
        <div className={`flex items-end gap-3 p-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
            {isBot && (
                <img src={botAvatar} alt="Bot" className="w-10 h-10 rounded-full shadow-md" />
            )}
            <div
                className={`max-w-xs px-4 py-3 rounded-lg shadow ${isBot
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-blue-500 text-white'
                    }`}
            >
                {text}
            </div>
            {!isBot && (
                <img src={humanAvatar} alt="User" className="w-10 h-10 rounded-full shadow-md" />
            )}
        </div>
    );
}