import React, { useState } from 'react';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import Swal from 'sweetalert2';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            console.log(`Email submitted: ${email}`);
            setEmail(''); // Clear the email input

            // Display SweetAlert modal for feedback
            Swal.fire({
                title: 'Thank you for subscribing!',
                text: 'How was your experience?',
                icon: 'success',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Good 😊',
                denyButtonText: 'Bad 😞',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('We’re glad you liked it!', '', 'success');
                } else if (result.isDenied) {
                    Swal.fire('We’re sorry to hear that.', '', 'error');
                }
            });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">About Us</a></li>
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Careers</a></li>
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Press</a></li>
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Blog</a></li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Community</a></li>
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Guides</a></li>
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Products Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Features</a></li>
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">Integrations</a></li>
                            <li><a href="#" className="hover:text-primary focus:text-primary transition">API</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
                        <p className="text-sm mb-4 text-gray-400">Get the latest updates and news in your inbox.</p>
                        <form className="flex items-center" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-2 px-4 text-black rounded-l-md outline-none border focus:ring-2 focus:ring-primary"
                                placeholder="Enter your email"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark focus:bg-primary-dark transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-6 flex flex-col items-center">
                    {/* Logo */}
                    <img
                        src="https://i.ibb.co/ZHYQ04D/footer-logo.png"
                        alt="Logo"
                        className="w-32 mb-4"
                    />
                    {/* Copyright Text */}
                    <p className="text-sm text-gray-400 text-center">
                        © 2024 ZenUI Library. All Rights Reserved.
                    </p>
                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary focus:text-primary transition text-xl"
                        >
                            <CgFacebook />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary focus:text-primary transition text-xl"
                        >
                            <BsTwitter />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary focus:text-primary transition text-xl"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary focus:text-primary transition text-xl"
                        >
                            <BsLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
