import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    AiOutlinePlus,
    AiOutlineFile,
    AiOutlineHeart,
    AiOutlineLogout,
    AiOutlineUsergroupAdd,
} from 'react-icons/ai';

const Dashboard = ({ role }) => {
    const location = useLocation();

    const userMenuItems = [
        { name: "Create Biodata", link: "/dashboard/createData", icon: <AiOutlinePlus /> },
        { name: "View Biodata", link: "/dashboard/viewBiodata", icon: <AiOutlineFile /> },
        { name: "My Favourites", link: "/dashboard/myFavourite", icon: <AiOutlineHeart /> },
        { name: "My Requests", link: "/dashboard/myRequest", icon: <AiOutlineFile /> },
        { name: "Logout", link: "/dashboard/userLogout", icon: <AiOutlineLogout />, isLogout: true },
    ];

    const adminMenuItems = [
        { name: "Admin Dashboard", link: "/dashboard/admin", icon: <AiOutlineUsergroupAdd /> },
        { name: "Manage Users", link: "/dashboard/manage-users", icon: <AiOutlineUsergroupAdd /> },
        { name: "Approved Premium", link: "/dashboard/approved-premium", icon: <AiOutlineFile /> },
        { name: "Approved Contact Request", link: "/dashboard/approved-contact-request", icon: <AiOutlineFile /> },
        { name: "Logout", link: "/logout", icon: <AiOutlineLogout />, isLogout: true },
    ];

    const menuItems = role === "admin" ? adminMenuItems : userMenuItems;

    return (
        <div className="w-11/12 mx-auto min-h-screen bg-gray-100 grid grid-cols-12 mt-28">
            {/* Sidebar Menu */}
            <div className="col-span-3 bg-white shadow-md p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                    {role === "admin" ? "Admin Dashboard" : "User Dashboard"} Menu
                </h2>
                <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.link}
                                className={`block font-medium text-center py-2 md:px-4 rounded-lg shadow-sm flex items-center gap-3 transition duration-300
                                    ${
                                        location.pathname === item.link
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                    }
                                    ${item.isLogout ? 'text-red-500 hover:text-red-700' : ''}
                                    text-sm`} // Mobile responsive text size
                            >
                                {/* Icon visibility logic */}
                                <span
                                    className={`${
                                        item.isLogout
                                            ? "block" // Always visible for logout
                                            : "hidden md:block" // Hidden on mobile, visible from md
                                    }`}
                                >
                                    {item.icon}
                                </span>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content Area */}
            <div className="col-span-9 bg-gray-50 p-6 shadow-inner">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
