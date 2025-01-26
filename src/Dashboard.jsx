import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
    AiOutlinePlus,
    AiOutlineFile,
    AiOutlineHeart,
    AiOutlineLogout,
    AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import useAdmin from './Hooks/useAdmin';
import { GiEngagementRing } from 'react-icons/gi';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();  
    const [isAdmin, isAdminLoading] = useAdmin();
    const role = isAdmin.role;

    if (isAdminLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
        );
    }

    const handleLogout = () => {
         
        navigate('userLogout'); 
    };

    const userMenuItems = [
        { name: 'Create Biodata', link: '/dashboard/createData', icon: <AiOutlinePlus /> },
        { name: 'View Biodata', link: '/dashboard/viewBiodata', icon: <AiOutlineFile /> },
        { name: 'My Favourites', link: '/dashboard/myFavourite', icon: <AiOutlineHeart /> },
        { name: 'My Requests', link: '/dashboard/myRequest', icon: <AiOutlineFile /> },
        { name: 'Got Married', link: '/dashboard/gotMarried', icon: <GiEngagementRing /> },
        { name: 'Logout', isLogout: true },
    ];

    const adminMenuItems = [
        { name: 'Admin Dashboard', link: '/dashboard/adminDash', icon: <AiOutlineUsergroupAdd /> },
        { name: 'Manage Users', link: '/dashboard/manageUser', icon: <AiOutlineUsergroupAdd /> },
        { name: 'Approved Contact Request', link: '/dashboard/approvedContact', icon: <AiOutlineFile /> },
        { name: 'Approved Premium Request', link: '/dashboard/approvedPremium', icon: <AiOutlineFile /> },
        { name: 'Logout', isLogout: true },
    ];

    const menuItems = role === 'admin' ? adminMenuItems : userMenuItems;

    return (
        <div className="w-11/12 mx-auto min-h-screen grid grid-cols-12 mt-28">
            {/* Sidebar Menu */}
            <div className="col-span-3 shadow-md p-4 rounded-lg">
                <h2 className="text-lg md:text-2xl font-bold mb-6">
                    {role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'} Menu
                </h2>
                <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.isLogout ? (
                                // Logout Button
                                <button
                                    onClick={handleLogout}
                                    className="w-full py-2 px-4 rounded-lg shadow-sm text-sm md:text-base flex items-center gap-1 justify-center font-medium transition duration-300
                                        text-red-500 bg-white border border-red-500 hover:bg-red-500 hover:text-white"
                                >
                                    <span>{item.icon || <AiOutlineLogout />}</span>
                                    <span>{item.name}</span>
                                </button>
                            ) : (
                                // Normal Link
                                <Link
                                    to={item.link}
                                    className={`block font-medium text-center py-2 md:px-4 rounded-lg shadow-sm flex items-center gap-3 transition duration-300
                                        ${
                                            location.pathname === item.link
                                                ? 'bg-black text-white'
                                                : 'text-sky-500 bg-gray-50 hover:bg-black hover:text-white'
                                        }
                                        text-sm`}
                                >
                                    <span className="hidden md:block">{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            )}
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
