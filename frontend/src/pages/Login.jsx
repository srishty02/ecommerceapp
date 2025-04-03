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
            toast.success('OTP sent to your phone!');
            setOtpSent(true);
        } catch (error) {
            toast.error('Error sending OTP');
        }
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        navigate('/home'); // Redirect to home page immediately upon clicking Sign In
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            
            <button type='button' onClick={() => setUsePhone(!usePhone)} className='text-blue-600 underline'>
                {usePhone ? 'Use Email & Password' : 'Use Phone OTP'}
            </button>

            {usePhone ? (
                <>
                    <input
                        type='text'
                        className='w-full px-3 py-2 border border-gray-800'
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    {!otpSent ? (
                        <button type='button' onClick={requestOtp} className='bg-black text-white font-light px-8 py-2'>
                            Send OTP
                        </button>
                    ) : (
                        <>
                            <input
                                type='text'
                                className='w-full px-3 py-2 border border-gray-800'
                                placeholder='Enter OTP'
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                            <button type='submit' className='bg-green-500 text-white font-light px-8 py-2'>
                                Verify OTP
                            </button>
                        </>
                    )}
                </>
            ) : (
                <>
                    {currentState === 'Sign Up' && (
                        <input
                            type='text'
                            className='w-full px-3 py-2 border border-gray-800'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type='email'
                        className='w-full px-3 py-2 border border-gray-800'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type='password'
                        className='w-full px-3 py-2 border border-gray-800'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4'>
                        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
                    </button>
                </>
            )}

            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forgot your password</p>
                {currentState === 'Login' ? (
                    <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
                ) : (
                    <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
                )}
            </div>
        </form>
    );
};

export default Login;
