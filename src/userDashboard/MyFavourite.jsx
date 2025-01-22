import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";

const MyFavourite = () => {
    const { user } = useContext(AuthContext); // Get the logged-in user's email
    const [favourites, setFavourites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const response = await axios.get("http://localhost:5000/favourites");
                const userFavourites = response.data.filter(
                    (item) => item.userEmail === user.email
                );
                setFavourites(userFavourites);
            } catch (error) {
                console.error("Error fetching favourites:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Failed to load favourites. Please try again later.",
                });
            } finally {
                setLoading(false);
            }
        };

        fetchFavourites();
    }, [user.email]);

    // Delete functionality
    const handleDelete = async (id, biodataId) => {
        const confirmDelete = await Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "Do you want to remove this biodata from your favourites?",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirmDelete.isConfirmed) {
            try {
                const response = await axios.delete("http://localhost:5000/favourites", {
                    data: {
                        biodataId: biodataId,
                        userEmail: user.email, // Get the email from your auth context or state
                    },
                });

                if (response.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Deleted!",
                        text: "The biodata has been removed from your favourites.",
                    });

                    // Remove the deleted item from the state
                    setFavourites(favourites.filter((item) => item._id !== id));
                }
            } catch (error) {
                console.error("Error deleting favourite:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Failed to delete. Please try again later.",
                });
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen pt-8 pb-12 px-6 sm:px-8">
            <h1 className="text-2xl font-bold text-center mb-8">My Favourite Biodata</h1>
            {favourites.length === 0 ? (
                <div className="text-center text-lg text-gray-500">
                    You have no favourite biodata.
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white shadow-lg rounded-xl border border-gray-200">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                <th className="px-6 py-3 border-b border-gray-300">Name</th>
                                <th className="px-6 py-3 border-b border-gray-300">Biodata ID</th>
                                <th className="px-6 py-3 border-b border-gray-300">Permanent Address</th>
                                <th className="px-6 py-3 border-b border-gray-300">Occupation</th>
                                <th className="px-6 py-3 border-b border-gray-300">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favourites.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 border-b border-gray-300">{item.name || "N/A"}</td>
                                    <td className="px-6 py-4 border-b border-gray-300">{item.biodataId || "N/A"}</td>
                                    <td className="px-6 py-4 border-b border-gray-300">{item.permanentDivision || "N/A"}</td>
                                    <td className="px-6 py-4 border-b border-gray-300">{item.occupation || "N/A"}</td>
                                    <td className="px-6 py-4 border-b border-gray-300">
                                        <button
                                            onClick={() => handleDelete(item._id, item.biodataId)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyFavourite;
