import React, {useState} from "react";
import Username from './Username'
import Chat from './Chat'


function Main({socket}){
    const [newUser, setNewUser] = useState(' ')
    const [user, setUser] = useState('')
    const [message, setMessage] = useState('')
  
    function handleChange({currentTarget : input}){
            setNewUser(input.value)
  
    }
  
    function logNewUser(){
      setUser(newUser)
      socket.auth = {username : newUser}
      socket.connect();
    }
    return(
        <main>
        <div class="margin top 3">
         {user && (
           <Chat user={user} message={message} setMessage={setMessage} />
         )}
         {!user && (
           <Username  handleChange={handleChange} logNewUser={logNewUser} newUser={newUser}/>
        )}
       
        </div>
     </main>
    )
}

export default Main