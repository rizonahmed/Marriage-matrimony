import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { axiosSecure } from '../Hooks/useAxiosSecure';

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [premium, setPremium] = useState([])

    // Fetch users from the server
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/users');
            const uniqueUsers = [];
            const seenEmails = new Set();

            // Filter out duplicates by email
            response.data.forEach((user) => {
                if (!seenEmails.has(user.email)) {
                    uniqueUsers.push(user);
                    seenEmails.add(user.email);
                }
            });

            // Sort users to show admins first
            uniqueUsers.sort((a, b) => (a.role === 'admin' ? -1 : 1));

            setUsers(uniqueUsers);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchPremium = async () => {
            try {
                const res = await axiosSecure.get('/premium')
                const data = await res.data
                const filteredData = data.filter((p) => {
                    return p?.isPremium === false && p?.status !== 'premium';
                });

                setPremium(filteredData);

            }
            catch (error) {
            }
        }
        fetchPremium()
    }, [])

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    // Handle Make Admin action
    const handleMakeAdminClick = (user) => {
        Swal.fire({
            title: 'Are you sure? 🤔',
            html: `Do you want to make <strong>${user.name}</strong> an <strong>Admin</strong>?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make admin! 😎',
            cancelButtonText: 'Cancel ❌',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Update role on the server
                    await axios.patch(`http://localhost:5000/users/${user._id}`, {
                        role: 'admin',
                    });

                    // Update UI after successful action
                    setUsers((prevUsers) =>
                        prevUsers.map((u) =>
                            u._id === user._id ? { ...u, role: 'admin' } : u
                        )
                    );

                    // Show success alert
                    Swal.fire({
                        title: 'Success! 🎉',
                        text: `${user.name} is now an Admin!`,
                        icon: 'success',
                        confirmButtonText: 'Awesome! 👍',
                    });
                } catch (error) {

                    // Show error alert
                    Swal.fire({
                        title: 'Error! 😞',
                        text: 'Failed to make the user an Admin. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    });
                }
            }
        });
    };

    const handleMakePremium = async (userId) => {
        try {
            const res = await axiosSecure.patch(`/premium/${userId}`, { status: 'premium' });
            if (res.data.message === 'User status updated to premium') {
                // Update the `premium` state to reflect the changes dynamically
                setPremium((prevPremium) =>
                    prevPremium.filter((user) => user._id !== userId)
                );
    
                // Update the `users` state if required
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user._id === userId ? { ...user, isPremium: true } : user
                    )
                );
    
                Swal.fire({
                    title: 'Success!',
                    text: 'The user has been upgraded to premium!',
                    icon: 'success',
                });
            } else {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                });
            }
        } catch (err) {
            Swal.fire({
                title: 'Oops!',
                text: 'There was an error making the user premium. Please try again.',
                icon: 'error',
            });
        }
    };
    
    

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Manage Users</h1>

            {loading ? (
                <div className="flex justify-center  h-screen">
                    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="px-6 py-3 text-gray-600 font-medium">#</th>
                                    <th className="px-6 py-3 text-gray-600 font-medium">Name</th>
                                    <th className="px-6 py-3 text-gray-600 font-medium">Email</th>
                                    <th className="px-6 py-3 text-gray-600 font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr
                                        key={user._id}
                                        className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                            } ${user.role === 'admin' ? '' : ''}`} // Removed border classes
                                    >
                                        <td className="px-6 py-4 text-gray-800">{index + 1}</td>
                                        <td className="px-6 py-4 text-gray-800">{user.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{user.email}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                {user.role !== 'admin' ? (
                                                    <button
                                                        onClick={() => handleMakeAdminClick(user)}
                                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                                    >
                                                        Make Admin
                                                    </button>
                                                ) : (
                                                    <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                                                        Super Admin
                                                    </button>
                                                )}
                                                {user.role !== 'admin' &&
                                                    premium.map((p, index) => {
                                                        if (p.email === user.email && p.isPremium === false) {
                                                            return (
                                                                <button
                                                                    key={index} 
                                                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mb-2"
                                                                    onClick={() => handleMakePremium(p._id)}
                                                                >
                                                                    Make Premium
                                                                </button>
                                                            );
                                                        }
                                                        return null; 
                                                    })}

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageUser;
