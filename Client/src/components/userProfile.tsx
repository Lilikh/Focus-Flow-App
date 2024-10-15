/* // components/UserProfile.tsx
import React, { useState } from 'react';

const UserProfile: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/users/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email }),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Create User Profile</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    required 
                    className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
                />
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                    className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
                />
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition "
                >
                    Create Profile
                </button>
            </form>
        </div>
    );
};

export default UserProfile;
 */