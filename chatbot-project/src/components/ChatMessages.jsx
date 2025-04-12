import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';

function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useRef(null);
    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [chatMessages]);
    if (chatMessages.length === 0) {
        return (
            <div className="welcome-text">
                Welcome to Chatbot Project! Send a message using the textbox below
            </div>
        );
    }

    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessages) => {
                return (
                    <ChatMessage
                        message={chatMessages.message}
                        sender={chatMessages.sender}
                        key={chatMessages.id}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessages