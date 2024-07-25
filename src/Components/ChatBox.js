// Components/ChatBox.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './ChatBox.css';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);
        setInput('');

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt: generatePrompt([...messages, userMessage]),
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.7,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer sk-proj-hHQbORRlzqKDW49QoDukT3BlbkFJE1lplCNsuDsfJHDxH5BY`
                }
            });

            if (response.data && response.data.choices) {
                const aiMessage = { text: response.data.choices[0].text.trim(), sender: 'ai' };
                setMessages([...messages, userMessage, aiMessage]);
            } else {
                throw new Error('Invalid response from OpenAI');
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = { text: 'Error occurred while fetching the response.', sender: 'ai' };
            setMessages([...messages, userMessage, errorMessage]);
        }
    };

    const generatePrompt = (messages) => {
        return messages.map(msg => msg.sender === 'user' ? `User: ${msg.text}` : `AI: ${msg.text}`).join('\n');
    };

    return (
        <div className="chatbox">
            <div className="chatbox-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`chatbox-message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chatbox-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatBox;
