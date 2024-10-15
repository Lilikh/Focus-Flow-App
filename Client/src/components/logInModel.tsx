import { useState } from 'react';

const LoginModal = ({ onClose }: { onClose: () => void }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can make a POST request to your backend to create/login user
    const response = await fetch('/api/users/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email }),
    });
    const data = await response.json();
    console.log('User created:', data);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-black">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
