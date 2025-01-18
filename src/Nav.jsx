import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';

import logo from '../src/assets/lottie/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full z-50 bg-[#ffffff00] backdrop-blur-xl ">
            <div className="w-11/12 mx-auto">
                <nav className="flex items-center justify-between w-full relative shadow-md rounded-full px-[10px] py-[8px] bg-transparent">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="w-[70px]" />
                        <h1 className="text-2xl">Find Partners</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                        <NavLink
                            to="/"
                            activeClassName="text-black border-black"
                            className="  border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                        >
                            <li>Home</li>
                        </NavLink>
                        <NavLink
                            to="/bioData"
                            activeClassName="text-black border-black"
                            className="border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                        >
                            <li>BioData</li>
                        </NavLink>
                        <NavLink
                            to="/about"
                            activeClassName="text-black border-black"
                            className="border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                        >
                            <li>About Us</li>
                        </NavLink>
                        <NavLink
                            to="/contact"
                            activeClassName="text-black border-black"
                            className="border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                        >
                            <li>Contact Us</li>
                        </NavLink>
                    </ul>

                    {/* Right Section */}
                    <div className="items-center gap-[10px] flex">
                        <Link to="/login">
                            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
                                Sign Up
                            </button>
                        </Link>

                        {/* Mobile Menu Icon */}
                        <CiMenuFries
                            className="text-[1.8rem] mr-1 text-[#424242] cursor-pointer lg:hidden flex"
                            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                        />
                    </div>

                    {/* Mobile Sidebar */}
                    <aside
                        className={`${
                            mobileSidebarOpen
                                ? "translate-x-0 opacity-100 z-20"
                                : "translate-x-[200px] opacity-0 z-[-1]"
                        } lg:hidden bg-white shadow-md p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
                    >
                        <div className="relative mb-5">
                            <input
                                className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                                placeholder="Search..."
                            />
                            <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
                        </div>
                        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                            <NavLink
                                to="/"
                                activeClassName="text-black border-black"
                                className="border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                            >
                                <li>Home</li>
                            </NavLink>
                            <NavLink
                                to="/bioData"
                                activeClassName="text-black border-black"
                                className="border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                            >
                                <li>BioData</li>
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeClassName="text-black border-black"
                                className="border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                            >
                                <li>About Us</li>
                            </NavLink>
                            <NavLink
                                to="/contact"
                                activeClassName="text-black border-black"
                                className="border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                            >
                                <li>Contact Us</li>
                            </NavLink>
                        </ul>
                    </aside>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
