import React, { useContext, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoIosArrowUp, IoIosSearch } from 'react-icons/io';

import logo from '../src/assets/lottie/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { FiUser } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbLogout2 } from 'react-icons/tb';

const Nav = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const [accountMenuOpen, setAccountMenuOpen] = useState(false)
    const [isProductHover, setIsProductHover] = useState(false)
    const [productMobileMegaMenu, setProductMobileMegaMenu] = useState(false)
    const [megaMenuSubItem, setMegaMenuSubItem] = useState("")

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    icon: "error",
                    title: "Sign Out Successfully",
                    text: "Login again for all features!",
                });
            })
            .catch((error) => {
            });
    };


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
                            className="font-semibold  border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                        >
                            <li>Home</li>
                        </NavLink>
                        <NavLink
                            to="/bioData"
                            activeClassName="text-black border-black"
                            className=" font-semibold border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                        >
                            <li>BioData</li>
                        </NavLink>
                        <NavLink
                            to="/about"
                            activeClassName="text-black border-black"
                            className="font-semibold border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                        >
                            <li>About Us</li>
                        </NavLink>
                        <NavLink
                            to="/contact"
                            activeClassName="text-black border-black"
                            className="font-semibold border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                        >
                            <li>Contact Us</li>
                        </NavLink>
                        {
                            user && <NavLink
                                to="/dashboard/createData"
                                activeClassName="text-black border-black"
                                className="font-semibold border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                            >
                                <li>Dashboard</li>
                            </NavLink>
                        }
                    </ul>

                    {/* Right Section */}
                    <div className="items-center gap-[10px] flex">
                        {
                            user ?
                                <>



                                    <div className="flex items-center gap-[15px]">
                                        <div
                                            className="flex items-center gap-[10px] cursor-pointer relative"
                                            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                                        >
                                            <div className="relative">
                                                <img
                                                    src={user?.photoURL}
                                                    alt="avatar"
                                                    className="w-[50px] h-[50px] rounded-full object-cover z-10"
                                                />
                                                <div
                                                    className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"
                                                ></div>
                                            </div>

                                            <h1 className="text-[1rem] font-bold text-gray-600 sm:block hidden">
                                                {user?.displayName}
                                            </h1>

                                            <div
                                                className={`${accountMenuOpen
                                                    ? "translate-y-0 opacity-100 z-[1]"
                                                    : "translate-y-[10px] opacity-0 z-[-1]"
                                                    } bg-gray-200 w-max rounded-md boxShadow absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}
                                            >
                                                <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                                                    <FiUser />
                                                    View Profile
                                                </p>
                                                <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                                                    <IoSettingsOutline />
                                                    Settings
                                                </p>

                                                <div className="mt-3 border-t border-gray-200 pt-[5px]">
                                                    <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50">
                                                        <TbLogout2 />
                                                        <Link to="/login">
                                                            <button
                                                                onClick={handleSignOut}
                                                                className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
                                                                Sign out
                                                            </button>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>

                                            <IoIosArrowUp
                                                className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"
                                                    } transition-all duration-300 text-gray-600 sm:block hidden`}
                                            />
                                        </div>
                                    </div>





                                </>
                                : <>
                                    <Link to="/login">
                                        <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
                                            Login
                                        </button>
                                    </Link>
                                    <Link to="/register">
                                        <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
                                            Sign Up
                                        </button>
                                    </Link> </>
                        }

                        {/* Mobile Menu Icon */}
                        <CiMenuFries
                            className="text-[1.8rem] mr-1 text-[#424242] cursor-pointer lg:hidden flex"
                            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                        />
                    </div>

                    {/* Mobile Sidebar */}
                    <aside
                        className={`${mobileSidebarOpen
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
                                className="border border-gray-300 font-semibold px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                            >
                                <li>Home</li>
                            </NavLink>
                            <NavLink
                                to="/bioData"
                                activeClassName="text-black border-black"
                                className="font-semibold border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                            >
                                <li>BioData</li>
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeClassName="text-black border-black"
                                className="border border-gray-300 px-3 font-semibold py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                            >
                                <li>About Us</li>
                            </NavLink>
                            <NavLink
                                to="/contact"
                                activeClassName="text-black border-black"
                                className="border border-gray-300 px-3 font-semibold py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                            >
                                <li>Contact Us</li>
                            </NavLink>

                            {
                                user && <NavLink
                                    to="/dashboard/createData"
                                    activeClassName="text-black border-black"
                                    className="font-semibold border border-gray-300 px-3 py-1 rounded-2xl transition-all duration-300 hover:text-[#3B9DF8] hover:border-[#3B9DF8]"
                                >
                                    <li>Dashboard</li>
                                </NavLink>
                            }

                        </ul>
                    </aside>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
