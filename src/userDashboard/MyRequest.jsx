import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyRequest = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [requests, setRequests] = useState([]);

    // Fetch payment requests for the logged-in user
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axiosSecure.get(`/payments?email=${user?.email}`);
                setRequests(response.data);
            } catch (error) {
                Swal.fire({
                    title: "Error",
                    text: "Failed to load contact requests.",
                    icon: "error",
                });
            }
        };

        if (user?.email) {
            fetchRequests();
        }
    }, [user?.email, axiosSecure]);

    // Handle delete request
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action will permanently delete the payment request!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Call the delete endpoint
                    await axiosSecure.delete(`/payments/${id}`);

                    // Update the local state to reflect deletion
                    setRequests(requests.filter((req) => req._id !== id));

                    Swal.fire("Deleted!", "The payment request has been deleted.", "success");
                } catch (error) {
                    Swal.fire("Error", "Failed to delete contact request.", "error");
                }
            }
        });
    };

    return (
        <div className="container mx-auto mb-8 p-4">
            <h2 className="text-2xl font-semibold text-center mb-6">My Contact Requests</h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Biodata ID</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Mobile No</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center py-4">
                                    No requests found
                                </td>
                            </tr>
                        ) : (
                            requests.map((request) => (
                                <tr key={request._id} className="hover:bg-gray-100">
                                    <td className="px-4 py-2">{request.name}</td>
                                    <td className="px-4 py-2">{request.biodataId}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-3 py-1 rounded-full ${
                                                request.status === "approved"
                                                    ? "bg-green-500 text-white"
                                                    : "bg-yellow-500 text-white"
                                            }`}
                                        >
                                            {request.status}
                                        </span>
                                    </td>
                                    {request.status === "approved" ? (
                                        <>
                                            <td className="px-4 py-2">{request.mobileNumber}</td>
                                            <td className="px-4 py-2">{request.contactEmail}</td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                        </>
                                    )}
                                    <td className="px-4 py-2">
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg"
                                            onClick={() => handleDelete(request._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRequest;
