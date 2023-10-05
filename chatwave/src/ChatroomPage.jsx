import React, { useState, useEffect } from "react";
import axios from "axios";

function Chatroom() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the chatroom component mounts
    axios.get("http://127.0.0.1:5000/chatroom/users")
      .then((response) => {
        // Update the state with the list of users
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>Chatroom</h2>
      <div>
        <h3>Users in the Chatroom:</h3>
        <p>
          {users.map((user) => (
            <span key={user.id}>{user.username}, </span>
          ))}
        </p>
      </div>
      


      <div className='card w-full'>
          <div className='flex'>
            <div className='w-full lg:w-12/12 xl:w-12/12'>
              <div className='py-2 px-4 w-full border-b lg:flex lg:flex-wrap lg:items-center lg:sticky lg:top-0 bg-white'>
                <div className='flex items-center py-1'>
                  <div className='relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VNXvlir729N2bYDKWWj22oLwSDfMhfUK2C6N3m3a0LjZQqs3yRh1&usqp=CAE&s' className='rounded-full mx-2' />
                  </div>
                  <div className='flex-grow'>
                    <strong>Logged in as {user}</strong>
                  </div>
                </div>
              </div>
              {/* chat header */}
              <div className="mt-auto items-end border-info py-3 px-4 border-t hidden lg:block">
  <div className="flex flex-grow">
    <input
      type="text"
      className="flex-grow form-input"
      name="message"
      value={message}
      placeholder="Type here..."
      onChange={({currentTarget: input}) => setMessage(input.value)}
    />
     <button className="ml-2 btn btn-info">Send</button>
      </div>
        </div>

            </div>
          </div>
        </div>
    </div>
  );
}

export default Chatroom;
