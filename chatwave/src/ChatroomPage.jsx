


// Chatroom component
function Chatroom() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the chatroom component mounts
    axios.get("http://127.0.0.1:5000/users")
      .then((response) => {
        // Update the state with the list of users
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleAddFriend = (userId) => {
    // Assuming you have a function to add a friend to the list
    // You can modify this logic based on your actual implementation
    // For now, let's assume you have a setFriends function to update the friends list
    setFriends((prevFriends) => [...prevFriends, users.find(user => user.id === userId)]);
  };

  return (
    <div className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center mb-4">
        <div className="text-white text-2xl font-bold">Chatwave</div>
        <div className="flex space-x-4">
          
        </div>
      </nav>

      <div>
        <h2 className="text-white text-3xl mb-4">Chatroom</h2>
        <div>
          <h3 className="text-white text-xl mb-2">Users in the Chatroom:</h3>
          {users.map((user) => (
            <div key={user.id} className="bg-white p-4 mb-2 flex justify-between items-center">
              <span>{user.username}</span>
              <button
                onClick={() => handleAddFriend(user.id)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Add Friend
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chatroom;