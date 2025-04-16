import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === 'user') {
      toast.success('Registering as User...');
      setTimeout(() => navigate('/'), 1000);
    } else {
      toast.success('Registering as Service Provider...');
      setTimeout(() => navigate('/register/provider-register'), 1000);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <div className="flex justify-between">
        <button
          onClick={() => handleClick('user')}
          className="w-1/2 py-2 font-semibold text-center border-b-2 border-blue-500 text-blue-500"
        >
          Register as User
        </button>
        <button
          onClick={() => handleClick('provider')}
          className="w-1/2 py-2 font-semibold text-center border-b-2 border-blue-500 text-blue-500"
        >
          Register as Service Provider
        </button>
      </div>
    </div>
  );
};

export default Register;
