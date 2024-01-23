// components/UserDetails.js
import React, { useState } from 'react';
import UserModal from './UserModal';

const UserDetails = ({ user }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  

  return (
    <div className="mb-6 bg-gray-300 text-center">
      {/* Circular container for the profile picture look */}
      <div
        className="w-20 h-20 bg-blue-800 rounded-full mx-auto flex items-center justify-center cursor-pointer"
        onClick={openModal}
      >
        {/* Display user's initials or profile image */}
        
          <p
            
            
            className="w-full h-full object-cover rounded-full items-center mt-14"
          >{user.name}</p>
       
         
        
      </div>

     

      {isModalOpen && <UserModal user={user} onClose={closeModal} />}
    </div>
  );
};

export default UserDetails;
