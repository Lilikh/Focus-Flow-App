import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import LoginModal from './logInModel'; // Import the modal

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-blue-300 text-white shadow-md">
      <h1 className="text-2xl font-bold">Focus & Flow</h1>
      <div
        className="cursor-pointer flex items-center"
        onClick={() => setShowModal(true)} // Show modal on click
      >
        <FaUserCircle size={32} />
        <span className="ml-2">Login</span>
      </div>

      {showModal && <LoginModal onClose={() => setShowModal(false)} />} {/* Show modal */}
    </header>
  );
};

export default Header;
