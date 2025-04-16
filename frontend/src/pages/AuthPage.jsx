import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login/Register
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({ name: '', email: '', password: '' }); // Reset form when toggling
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegister ? '/api/user/register' : '/api/user/login';

    try {
      const response = await axios.post(url, formData);
      toast.success(response.data.message || (isRegister ? 'Registered!' : 'Logged in!'));
      // Save token or user info as needed here
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isRegister ? 'Create an Account' : 'Welcome Back'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black bg-white placeholder-gray-500"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-black bg-white placeholder-gray-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-black bg-white placeholder-gray-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={toggleForm}
            className="ml-1 text-blue-600 hover:underline font-medium"
          >
            {isRegister ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

