import dayjs from 'dayjs';
import '.././index.css'

const botAvatar = "https://supersimple.dev/projects/chatbot/robot.png";
const humanAvatar = "https://supersimple.dev/projects/chatbot/user.png";

export default function ChatMessage({ text, avatar, time }) {
    const isBot = avatar === 'bot';
    const formattedTime = dayjs(time).format('h:mm A');
    return (
        <div className={`flex items-end gap-3 p-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
            {isBot && (
                <img src={botAvatar} alt="Bot" className="w-10 h-10 rounded-full shadow-md" />
            )}
            <div
                className={`max-w-xs px-4 py-3 rounded-lg shadow flex flex-col ${isBot
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-blue-500 text-white'
                    }`}
            >
                <span className="text-base">{text}</span>
                <span className={`text-xs mt-1 ${isBot ? 'text-gray-500' : 'text-blue-200'}`}>
                    {formattedTime}
                </span>
            </div>
            {!isBot && (
                <img src={humanAvatar} alt="User" className="w-10 h-10 rounded-full shadow-md" />
            )}
        </div>
    );
}