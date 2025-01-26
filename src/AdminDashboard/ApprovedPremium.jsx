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
                setRequests(res.data); // Set the fetched requests to the state
            } catch (err) {
                console.error('Error fetching premium requests:', err);
            }
        };

        fetchPremiumRequests(); // Call the function on mount
    }, [axiosSecure]);

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-5">Approved Premium Requests</h2>
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Biodata Id</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.length > 0 ? (
                        requests.map((request) => (
                            <tr key={request._id}>
                                <td className="px-4 py-2 border">{request.name}</td>
                                <td className="px-4 py-2 border">{request.contactEmail}</td>
                                <td className="px-4 py-2 border">{request.biodataId}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center py-4 text-gray-600">
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
