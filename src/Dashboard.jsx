import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = ({ role }) => {
 
    const userMenuItems = [
        { name: "Edit Biodata", link: "/dashboard/edit-biodata" },
        { name: "View Biodata", link: "/dashboard/view-biodata" },
        { name: "My Contact Requests", link: "/dashboard/my-contact-requests" },
        { name: "Favourites Biodata", link: "/dashboard/favourites-biodata" },
        { name: "Logout", link: "/logout" },
    ];

    const adminMenuItems = [
        { name: "Admin Dashboard", link: "/dashboard/admin" },
        { name: "Manage Users", link: "/dashboard/manage-users" },
        { name: "Approved Premium", link: "/dashboard/approved-premium" },
        { name: "Approved Contact Request", link: "/dashboard/approved-contact-request" },
        { name: "Logout", link: "/logout" },
    ];

    const menuItems = role === "admin" ? adminMenuItems : userMenuItems;

    return (
        <div className="w-11/12 mx-auto min-h-screen bg-gray-100 grid grid-cols-12 mt-28">

            <div className="col-span-3 bg-white shadow-md p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                    {role === "admin" ? "Admin Dashboard" : "User Dashboard"} Menu
                </h2>
                <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.link}
                                className="block text-gray-700 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition duration-300"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="col-span-9 bg-gray-50 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
