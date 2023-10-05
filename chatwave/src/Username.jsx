import React from "react";


function Username({newUser, handleChange, logNewUser}){
    return (
        <div className="w-full text-center">
          <div className="flex justify-center">
            <div className="w-12/12">
              <h5 className="text-lg">Enter your Username</h5>
              <div className="flex justify-center">
                <input
                  type="text"
                  name="username"
                  value={newUser}
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="username here"
                  onChange={(e) => handleChange(e)}
                  onKeyDown={(e) => (e.code === "Enter" ? logNewUser() : null)}
                />
              </div>
            </div>
          </div>
        </div>
      );
      
   
}
export default Username