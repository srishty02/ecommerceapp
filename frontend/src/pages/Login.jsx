import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({ backendUrl }) => {
    const [currentState, setCurrentState] = useState('Sign Up');
    const [usePhone, setUsePhone] = useState(false);
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const requestOtp = async () => {
        try {
            await axios.post(`${backendUrl}/send-otp`, { phone });
            toast.success('OTP sent!');
            setOtpSent(true);
        } catch {
            toast.error('Failed to send OTP');
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate('/Register');
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-600 to-pink-500 px-4 py-12">
            {/* Animated Background Circles */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                {[...Array(30)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute text-black bg-black rounded-full opacity-10 animate-bubble"
                        style={{
                            width: `${10 + Math.random() * 20}px`,
                            height: `${10 + Math.random() * 20}px`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 6}s`,
                            bottom: `-${Math.random() * 100}px`,
                        }}
                    />
                ))}
            </div>

            {/* Form */}
            <form
                onSubmit={onSubmitHandler}
                className="relative z-10 w-full max-w-md text-black bg-white p-8 rounded-2xl shadow-2xl animate-float"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    {currentState}
                </h2>

                <button
                    type="button"
                    onClick={() => setUsePhone(!usePhone)}
                    className="block w-full text-sm text-indigo-600 hover:underline text-center mb-6"
                >
                    {usePhone ? 'Use Email & Password' : 'Use Phone OTP'}
                </button>

                {usePhone ? (
                    <>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="input-style"
                            required
                        />
                        {!otpSent ? (
                            <button
                                type="button"
                                onClick={requestOtp}
                                className="btn-primary mt-4"
                            >
                                Send OTP
                            </button>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="input-style"
                                    required
                                />
                                <button type="submit" className="btn-primary mt-4">
                                    Verify OTP
                                </button>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        {currentState === 'Sign Up' && (
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input-style"
                                required
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-style"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-style"
                            required
                        />
                        <button type="submit" className="btn-primary mt-4">
                            {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
                        </button>
                    </>
                )}

                <div className="flex justify-between text-sm text-gray-600 mt-6">
                    <p className="cursor-pointer hover:text-gray-800">Forgot password?</p>
                    {currentState === 'Login' ? (
                        <p
                            onClick={() => setCurrentState('Sign Up')}
                            className="cursor-pointer hover:text-gray-800"
                        >
                            Create account
                        </p>
                    ) : (
                        <p
                            onClick={() => setCurrentState('Login')}
                            className="cursor-pointer hover:text-gray-800"
                        >
                            Login here
                        </p>
                    )}
                </div>

                <style>{`
                    .input-style {
                        width: 100%;
                        padding: 12px 16px;
                        margin-top: 12px;
                        border: 1px solid #d1d5db;
                        border-radius: 0.5rem;
                        outline: none;
                        transition: border 0.3s ease;
                    }
                    .input-style:focus {
                        border-color: #7c3aed;
                    }
                    .btn-primary {
                        width: 100%;
                        padding: 12px 16px;
                        background: linear-gradient(to right, #7c3aed, #9333ea);
                        color: white;
                        font-weight: 600;
                        border: none;
                        border-radius: 0.5rem;
                        cursor: pointer;
                        transition: transform 0.2s ease;
                    }
                    .btn-primary:hover {
                        transform: scale(1.03);
                        background: linear-gradient(to right, #6d28d9, #a855f7);
                    }

                    @keyframes float {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-8px); }
                        100% { transform: translateY(0); }
                    }

                    .animate-float {
                        animation: float 5s ease-in-out infinite;
                    }

                    @keyframes bubble {
                        0% {
                            transform: translateY(0) scale(1);
                            opacity: 0.4;
                        }
                        100% {
                            transform: translateY(-100vh) scale(1.4);
                            opacity: 0;
                        }
                    }

                    .animate-bubble {
                        animation-name: bubble;
                        animation-timing-function: ease-in;
                        animation-iteration-count: infinite;
                    }
                `}</style>
            </form>
        </div>
    );
};

export default Login;
