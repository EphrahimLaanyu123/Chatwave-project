import React, { useState, useEffect } from 'react';

const PersonalChatComponent = ({ currentUser, recipientUser, socket }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // Subscribe to the recipient user's private channel
    socket.emit('subscribe', `private-${recipientUser.id}`);

    // Listen for messages from the recipient user
    socket.on(`private-${recipientUser.id}`, (msg) => {
      setChatMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      // Unsubscribe when the component is unmounted
      socket.emit('unsubscribe', `private-${recipientUser.id}`);
    };
  }, [socket, recipientUser]);

  const handleMessageSend = () => {
    if (message.trim() !== '') {
      const newMessage = {
        sender: currentUser.username,
        content: message,
      };

      // Send the private message to the recipient user's channel
      socket.emit('private-message', {
        channel: `private-${recipientUser.id}`,
        message: newMessage,
      });

      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div>
      <h3>Chatting with: {recipientUser.username}</h3>
      <div className="chat-messages">
        {chatMessages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
};

export default PersonalChatComponent;
