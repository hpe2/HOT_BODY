import React, { useState } from 'react';

const PtChat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]); // 채팅 메시지 저장
  const [inputMessage, setInputMessage] = useState(''); // 입력된 메시지

  // 새로운 메시지 추가
  const addMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, inputMessage]);
      setInputMessage('');
    }
  };

  return (
      <div className="modal-content">
        <div className='chatHeader'>
          <h2>채팅</h2>
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="message">{message}</div>
          ))}
        </div>
        <div className="chat-input-container">
          <input className='chatting'type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
          <button onClick={addMessage}>전송</button>
        </div>
      </div>
  );
};

export default PtChat;