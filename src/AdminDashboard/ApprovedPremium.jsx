import React, { useState, useEffect } from 'react';
import useAxiosSecure from "../Hooks/useAxiosSecure"; // Custom hook for secure API calls
import Swal from 'sweetalert2'; // SweetAlert for alerts

const ApprovedPremium = () => {
    const [requests, setRequests] = useState([]);
    const axiosSecure = useAxiosSecure();

    // Fetch premium requests from backend
    useEffect(() => {
        const fetchPremiumRequests = async () => {
            try {
                const res = await axiosSecure.get('/premium'); // Fetch premium requests from /premium route
                setRequests(res.data);
            } catch (err) {
                console.error('Error fetching premium requests:', err);
            }
        };

        fetchPremiumRequests(); // Call the function on mount
    }, [axiosSecure]);



    const handleMakePremium = async (userId) => {
        try {
            const res = await axiosSecure.patch(`/premium/${userId}`, { status: 'premium' });
            if (res.data.message === 'User status updated to premium') {
                Swal.fire({
                    title: 'Success!',
                    text: 'The user has been upgraded to premium!',
                    icon: 'success',
                });
                setRequests(prevRequests =>
                    prevRequests.map(req =>
                        req._id === userId ? { ...req, status: 'premium' } : req
                    )
                ); // Update the user status in UI without fetching again
            } else {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                });
            }
        } catch (err) {
            console.error('Error making user premium:', err);
            Swal.fire({
                title: 'Oops!',
                text: 'There was an error making the user premium. Please try again.',
                icon: 'error',
            });
        }
    };


    return (
        <div className="overflow-x-auto bg-gray-50 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Approved Premium Requests</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="px-6 py-4 text-left font-semibold">Name</th>
                        <th className="px-6 py-4 text-left font-semibold">Email</th>
                        <th className="px-6 py-4 text-left font-semibold">Biodata Id</th>
                        <th className="px-6 py-4 text-left font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.length > 0 ? (
                        requests.map((request) => (
                            <tr key={request._id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{request.name}</td>
                                <td className="px-6 py-4">{request.contactEmail}</td>
                                <td className="px-6 py-4">{request.biodataId}</td>
                                <td className="px-6 py-4">
                                    {request.status !== 'premium' ? (
                                        <button
                                            onClick={() => handleMakePremium(request._id)}
                                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none transition-all duration-300"
                                        >
                                            Make Premium
                                        </button>
                                    ) : (
                                        <span className="px-6 py-2 bg-green-500 text-white rounded-lg">
                                            Premium
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4 text-gray-600">
                                No premium requests found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedPremium;
