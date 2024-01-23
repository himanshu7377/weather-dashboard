// components/UserModal.js
import React from 'react';

const UserModal = ({ user, onClose }) => {

    console.log(user)
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 absolute top-0 left-0 w-full h-full"></div>
      <div className="bg-gray-300 p-6 rounded-md shadow-md z-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">User Details</h2>
        <p className="text-lg text-blue-500">
          <span className="font-semibold ">Name:</span> {user.name}
        </p>
        <p className="text-lg text-blue-500">
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p className="text-lg text-blue-500">
          <span className="font-semibold">City:</span> {user.city}
        </p>
        <button
          className="mt-4 bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
