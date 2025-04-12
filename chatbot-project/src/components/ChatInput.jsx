import { useState } from 'react'
import { Chatbot } from 'supersimpledev'


export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (isLoading || inputText === "") {
            return;
        }
        setIsLoading(true);
        setInputText("");

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID(),
            },
        ];

        setChatMessages([
            ...newChatMessages,
            {
                message: (
                    <img
                        className="loading-spinner"
                        src="https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif"
                    />
                ),
                sender: "robot",
                id: crypto.randomUUID(),
            },
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: "robot",
                id: crypto.randomUUID(),
            },
        ]);

        setIsLoading(false);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            sendMessage();
        } else if (event.key === "Escape") {
            setInputText("");
        }
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to Chatbot"
                size="30"
                onKeyDown={handleKeyDown}
                onChange={saveInputText}
                value={inputText}
                className="chat-input"
            />
            <button className="send-button" onClick={sendMessage}>
                Send
            </button>
        </div>
    );
}