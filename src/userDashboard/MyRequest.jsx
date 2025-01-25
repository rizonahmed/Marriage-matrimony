import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [requests, setRequests] = useState([]);

  // Fetch contact requests for the logged-in user
  useEffect(() => {
    const fetchRequests = async () => {
        try {
            // Make the delete request
            await axiosSecure.delete(`/payments/${paymentId}`);
            setRequests((prevRequests) =>
              prevRequests.filter((request) => request._id !== paymentId)
            );
            Swal.fire(
              "Deleted!",
              "The payment request has been deleted successfully. ✅",
              "success"
            );} catch (err) {
        console.error(err);
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
  const handleDelete = async (transactionId) => {
    try {
      await axiosSecure.delete(`/payments/${transactionId}`);
      setRequests(requests.filter(req => req.transactionId !== transactionId));
      Swal.fire({
        title: "Deleted",
        text: "The contact request has been deleted.",
        icon: "success",
      });
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Failed to delete contact request.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container mx-auto my-8 p-4">
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
                <td colSpan="6" className="text-center py-4">No requests found</td>
              </tr>
            ) : (
              requests.map((request) => (
                <tr key={request.transactionId} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{request.name}</td>
                  <td className="px-4 py-2">{request.biodataId}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full ${request.status === "Approve" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}
                    >
                      {request.status}
                    </span>
                  </td>
                  {request.status === "Approve" ? (
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
                      onClick={() => handleDelete(request.transactionId)}
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
