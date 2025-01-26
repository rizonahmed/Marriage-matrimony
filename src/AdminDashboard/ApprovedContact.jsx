import React, { useState, useEffect } from 'react';
import useAxiosSecure from "../Hooks/useAxiosSecure"; // Custom hook for secure API calls
import Swal from 'sweetalert2'; // SweetAlert for alerts

const ApprovedContact = () => {
    const [requests, setRequests] = useState([]);
    const axiosSecure = useAxiosSecure();

    // Fetch approved contact requests
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axiosSecure.get('/payments'); // Fetch all contact requests
                // Filter the requests with status 'approved'
                const approvedRequests = res.data.filter(req => req.status === 'approved');
                setRequests(approvedRequests);
            } catch (err) {
                console.error('Error fetching approved requests:', err);
            }
        };
        fetchRequests();
    }, [axiosSecure]);

    // Handle approve button click
    const handleApprove = async (paymentId) => {
        try {
            const res = await axiosSecure.patch(`/payments/${paymentId}`, { status: 'approved' }); 
            Swal.fire({
                title: 'Success!',
                text: 'The contact request has been approved!',
                icon: 'success',
            });
            setRequests(prevRequests => prevRequests.filter(req => req._id !== paymentId)); // Remove from UI after approving
        } catch (err) {
            console.error('Error approving contact request:', err);
            Swal.fire({
                title: 'Oops!',
                text: 'There was an error approving the request. Please try again.',
                icon: 'error',
            });
        }
    };

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-5">Approved Contact Requests</h2>
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Biodata Id</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.length > 0 ? (
                        requests.map((request) => (
                            <tr key={request._id}>
                                <td className="px-4 py-2 border">{request.name}</td>
                                <td className="px-4 py-2 border">{request.contactEmail}</td>
                                <td className="px-4 py-2 border">{request.biodataId}</td>
                                <td className="px-4 py-2 border">{request.status}</td>
                                <td className="px-4 py-2 border">
                                    <button
                                        onClick={() => handleApprove(request._id)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none"
                                    >
                                        Approve
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4 text-gray-600">
                                No approved contact requests found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedContact;
