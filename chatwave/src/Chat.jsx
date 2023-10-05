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

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const socket = io('http://localhost:5000');

  useEffect(() => {
    // Listen for new messages from the server
    socket.on('new_message', (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      // Clean up the socket connection when the component unmounts
      socket.disconnect();
    };
  }, [messages]);

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        user: { username: 'Current User' }, // Replace with actual user info
        message_content: messageInput,
      };
      socket.emit('new_message', newMessage);
      setMessageInput('');
    }
  };

  return (
    <div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>
            {message.user.username}: {message.message_content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
