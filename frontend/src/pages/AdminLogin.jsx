import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const validUsername = 'admin';
    const validPassword = 'admin123';

    if (username === validUsername && password === validPassword) {
      onLogin();
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-600 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border-2 border-white backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 font-sans">
          🌟 Admin Login
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1 font-medium" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 bg-gray-100"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-1 font-medium" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 bg-gray-100"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-2 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
        >
          🚀 Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
