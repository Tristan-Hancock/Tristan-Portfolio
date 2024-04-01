import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css'; // This will contain the CSS for your chat components
import { BsChatRight } from "react-icons/bs";
import { IoIosExit } from "react-icons/io";
import ava from './owl.webp'
const ChatButton = ({ onClick }) => (
  <button className="chat-button" onClick={onClick}>
    <div className="icon-circle">
      <BsChatRight />
    </div>
  </button>
);

const ChatBox = ({ onClose }) => {
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
// Before sending the request, log headers
//console.log(axios.defaults.headers);

  const sendMessage = async () => {
    if (message.trim() === '') return; // Prevent sending empty messages

    try {
      const response = await axios.post('/api/chat', { task: message },{
        headers: {
            'Content-Type':'application/json'
        }
      });
      setMessages(prev => [...prev, ...response.data.responses]);
      console.log(response.data.responses);
        } catch (error) {
      console.error('Failed to send message:', error.response || error);
      // Handle the error, e.g., display an error message to the user
    }

    setMessage(''); // Clear the input field after sending
  };

  return (


    <div className="chat-box">
  <div className="chat-header">
    <h1 className="chat-title">Tristan AI Assistant</h1>
    <button className="close-button" onClick={onClose}>X</button>
  </div>
  <div className="chat-body">
    <div className="messages-container">
    {messages.map((msg, index) => (
        <div key={index} className="message">{msg}</div>
      ))}
    </div>
  </div>
  <div className="message-box">
    <input
      type="text"
      className="message-input"
      placeholder="Type message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <button type="submit" className="message-submit" onClick={sendMessage}>
      <svg className="send-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="#6B6C7B" d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"/>
      </svg>
    </button>
  </div>
</div>

  );
};

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <>
      {isChatOpen ? (
        <ChatBox onClose={toggleChat} />
      ) : (
        <ChatButton onClick={toggleChat} />
      )}
    </>
  );
};

export default Chat;
