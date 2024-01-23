// components/UserDetails.js
import React, { useState } from "react";
import UserModal from "./UserModal";
import { useAuth } from '../context/AuthContext';

const UserDetails = () => {
  const {user} = useAuth()
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mb-6 bg-gray-300 text-center">
     
      <div
        className="w-20 h-20 bg-blue-800 rounded-full mx-auto flex items-center justify-center cursor-pointer"
        onClick={openModal}
      >
       

        <p className="w-full h-full items-center mt-14">
          {user.name}
        </p>
      </div>

      {isModalOpen && <UserModal user={user} onClose={closeModal} />}
    </div>
  );
};

export default UserDetails;
