// import React from "react";

// function Chat({ user, message, setMessage}){
//     return (
//         <div className='card w-full'>
//           <div className='flex'>
//             <div className='w-full lg:w-12/12 xl:w-12/12'>
//               <div className='py-2 px-4 w-full border-b lg:flex lg:flex-wrap lg:items-center lg:sticky lg:top-0 bg-white'>
//                 <div className='flex items-center py-1'>
//                   <div className='relative'>
//                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VNXvlir729N2bYDKWWj22oLwSDfMhfUK2C6N3m3a0LjZQqs3yRh1&usqp=CAE&s' className='rounded-full mx-2' />
//                   </div>
//                   <div className='flex-grow'>
//                     <strong>Logged in as {user}</strong>
//                   </div>
//                 </div>
//               </div>
//               {/* chat header */}
//               <div className="mt-auto items-end border-info py-3 px-4 border-t hidden lg:block">
//   <div className="flex flex-grow">
//     <input
//       type="text"
//       className="flex-grow form-input"
//       name="message"
//       value={message}
//       placeholder="Type here..."
//       onChange={({currentTarget: input}) => setMessage(input.value)}
//     />
//      <button className="ml-2 btn btn-info">Send</button>
//       </div>
//         </div>

//             </div>
//           </div>
//         </div>
//       );
      
// }
// export default Chat

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server URL

const Chat = ({ currentUser, recipientUser }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageSend = () => {
    if (message.trim() !== '') {
      const newMessage = {
        content: message,
        sender: currentUser,
        recipient: recipientUser,
      };

      setMessages([...messages, newMessage]);
      setMessage('');

      // Emit the new message to the server
      socket.emit('private_message', newMessage);
    }
  };

  useEffect(() => {
    // Set up event listener for incoming messages
    socket.on('private_message', (receivedMessage) => {
      setMessages([...messages, receivedMessage]);
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      socket.off('private_message');
    };
  }, [messages]);

  return (
    <div>
      <h3>Chatting with: {recipientUser}</h3>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
