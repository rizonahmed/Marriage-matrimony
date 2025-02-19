import React, { useContext } from 'react';
import animationTwo from '../src/assets/lottie/animation-2.json';
import Lottie from 'lottie-react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from './firebase.init';
import axios from 'axios';

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const validatePassword = (password) => {
            const errors = [];
            if (password.length < 6) {
                errors.push('Password must be at least 6 characters long.');
            }
            if (!/[A-Z]/.test(password)) {
                errors.push('Password must include at least one uppercase letter.');
            }
            if (!/[a-z]/.test(password)) {
                errors.push('Password must include at least one lowercase letter.');
            }
            return errors;
        };

        const validationErrors = validatePassword(password);
        if (validationErrors.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                html: `<ul>${validationErrors.map((err) => `<li>${err}</li>`).join('')}</ul>`,
            });
            return;
        }

        createUser(email, password)
            .then(async (result) => {
                form.reset();
                Swal.fire({
                    title: 'Register Success!',
                    text: 'Wait a moment!',
                    icon: 'success',
                });
                const profile = {
                    displayName: name,
                    photoURL: photo,
                };
                await updateProfile(auth.currentUser, profile);

                // Post user data to the server
                axios.post(`http://localhost:5000/users?email=${email}`, {
                    name,
                    email,
                    photo,
                    signUpMethod: 'Email and Password',
                    role: 'user'
                });

                navigate('/');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Register Failed',
                    text: error.message,
                });
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(async (result) => {
                Swal.fire({
                    title: 'Login Success!',
                    text: 'Wait a moment!',
                    icon: 'success',
                });

                // Post Google user data to the server
                const user = result.user;
                await axios.post(`http://localhost:5000/users?email=${user.email}`, {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    signUpMethod: 'Google',
                    role:'user',
                });

                navigate('/');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            });
    };

    return (
        <div className="min-h-[80vh] flex flex-col md:flex-row justify-center items-center px-5 gap-10">
            <div className="w-full max-w-lg shadow-2xl bg-gray-200 p-6 rounded-lg  mt-32 mb-8">
                <form onSubmit={handleRegister} className="space-y-6">
                    <p className="text-3xl font-bold text-center text-black mb-6">
                        Register to Your Account
                    </p>
                    <div className="space-y-1">
                        <label className="text-base font-medium text-black">Full Name</label>
                        <input type="text" placeholder="Enter your full name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required name="name" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-base font-medium text-black">Photo URL</label>
                        <input type="url" placeholder="Enter photo URL" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="photo" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-base font-medium text-black">Email</label>
                        <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required name="email" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-base font-medium text-black">Password</label>
                        <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required name="password" />
                    </div>
                    <div>
                        <button type="submit" className="w-full py-3 bg-[#3B9DF8] text-white font-bold rounded-lg   focus:outline-none focus:ring-2 focus:ring-blue-600">
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-6">
                    <button onClick={handleGoogleLogin} className="w-full py-3 bg-black text-white flex items-center justify-center gap-2 rounded-lg">
                        <FaGoogle /> SignUp with Google
                    </button>
                </div>
                <p className="text-center mt-6 text-black">
                    Already have an account? <Link className="underline text-blue-600" to="/login">Login Now</Link>
                </p>
            </div>
            <div className="w-96 lg:w-1/2 lg:flex-shrink-0 xl:w-1/3">
                <Lottie animationData={animationTwo} />
            </div>
        </div>
    );
};

export default Register;
