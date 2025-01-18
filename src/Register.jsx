import React, { useState } from 'react';
import animationTwo from '../src/assets/lottie/animation-2.json';
import Lottie from 'lottie-react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photoURL: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Registration successful!');
        setFormData({
            name: '',
            email: '',
            password: '',
            photoURL: '',
        });
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center px-5 gap-10">

        {/* <Helmet>
            <title>Register/Champion Marathons</title>
        </Helmet> */}
    
        <div className="w-full max-w-lg shadow-2xl bg-gray-200 p-6 rounded-lg ">
            <form className="space-y-6">
                <p className="text-3xl font-bold text-center text-black mb-6">
                    Register to Your Account
                </p>
    
                {/* Full Name */}
                <div className="space-y-1">
                    <label className="text-base font-medium text-black">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        name="name"
                    />
                </div>
    
                {/* Photo URL */}
                <div className="space-y-1">
                    <label className="text-base font-medium text-black">Photo URL</label>
                    <input
                        type="url"
                        placeholder="Enter photo URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="photo"
                    />
                </div>
    
                {/* Email */}
                <div className="space-y-1">
                    <label className="text-base font-medium text-black">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        name="email"
                    />
                </div>
    
                {/* Password */}
                <div className="space-y-1">
                    <label className="text-base font-medium text-black">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        name="password"
                    />
                </div>
    
                {/* Register Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#3B9DF8] text-white font-bold rounded-lg   focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Register
                    </button>
                </div>
            </form>
    
            {/* Google Login Button */}
            <div className="mt-6">
                <button
                    // onClick={handleGoogleLogin}
                    className="w-full py-3 bg-black text-white flex items-center justify-center gap-2 rounded-lg"
                >
                    <FaGoogle /> Login with Google
                </button>
            </div>
    
            {/* Login Link */}
            <p className="text-center mt-6 text-black">
                Already have an account?{" "}
                <Link className="underline text-blue-600" to="/login">
                    Login Now
                </Link>
            </p>
        </div>
    
        {/* Animation Section */}
        <div className="w-96 lg:w-1/2 lg:flex-shrink-0 xl:w-1/3">
            <Lottie animationData={animationTwo} />
        </div>
    </div>
    
    
    );
};

export default Register;
