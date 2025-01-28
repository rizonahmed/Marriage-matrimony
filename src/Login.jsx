import React, { useContext, useState } from 'react';
import animationOne from '../src/assets/lottie/animation-1.json';
import Lottie from 'lottie-react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                form.reset();
                Swal.fire({
                    title: 'Login Success!',
                    text: 'Wait a moment!',
                    icon: 'success',
                });

                setTimeout(() => {
                    navigate('/');
                }, 1500);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message || 'Something went wrong!',
                });
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(async (result) => {
                const user = result.user;

                // Post Google user data to the server
                await axios.post('https://find-partner-server.vercel.app/users', {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    signUpMethod: 'Google',
                    role: 'user'
                });

                Swal.fire({
                    title: 'Login Success!',
                    text: 'Wait a moment!',
                    icon: 'success',
                });

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message || 'Something went wrong!',
                });
            });
    };

    return (
        <div className=" min-h-[80vh] flex flex-col md:flex-row justify-center items-center px-5 gap-10">

            <div
                className="w-full max-w-md shrink-0 shadow-lg p-6 bg-gray-200 rounded-xl mt-32 md:mb-14"
                style={{
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
            >
                <form onSubmit={handleLogin} className="space-y-6">
                    <p className="text-3xl font-bold text-center text-black">
                        Login to Your Account
                    </p>

                    {/* Email Input */}
                    <div className="space-y-1">
                        <label className="text-base text-black font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            name="email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1">
                        <label className="text-base text-black font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            name="password"
                        />
                        <a
                            href="#"
                            className="block text-sm text-blue-500 hover:underline text-right mt-2"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button className="w-full py-3 bg-[#3B9DF8] text-white font-bold rounded-lg  ">
                            Login
                        </button>
                    </div>
                </form>

                {/* Google Login Button */}
                <div className="mt-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full py-3 bg-black text-white flex items-center justify-center gap-2 rounded-lg"
                    >
                        <FaGoogle /> Login with Google
                    </button>
                </div>

                {/* Registration Link */}
                <p className="text-center mt-6 text-black">
                    Don't have an account?{' '}
                    <Link className="underline text-blue-600" to="/register">
                        Register Now
                    </Link>
                </p>
            </div>

            {/* Animation */}
            <div className="w-96 lg:w-1/2 lg:flex-shrink-0 xl:w-1/3">
                <Lottie animationData={animationOne} />
            </div>
        </div>
    );
};

export default Login;
