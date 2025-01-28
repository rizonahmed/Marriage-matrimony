import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";

const ViewBiodata = () => {
    const { user } = useContext(AuthContext);
    const [biodata, setBiodata] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`https://find-partner-server.vercel.app/biodata`)
                .then((response) => {
                    const data = response.data.find((item) => item.contactEmail === user.email);
                    if (data) {
                        // Remove _id and use id only
                        const updatedData = { ...data };
                        delete updatedData._id; // Completely remove _id
                        setBiodata(updatedData);
                    } else {
                        setBiodata(null);
                    }
                })
                .catch((error) => {
                })
                .finally(() => setIsLoading(false));
        }
    }, [user]);

    const handleMakePremium = () => {
        Swal.fire({
            title: "Make Your Biodata Premium?",
            text: "Are you sure you want to send this biodata for premium approval?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Make Premium!",
            cancelButtonText: "No, Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                const postData = {
                    name: biodata.name,
                    email: user.email,
                    biodataId: biodata.id,
                    isPremium: false,
                };

                axios
                    .post(`https://find-partner-server.vercel.app/premium`, postData)
                    .then(() => {
                        Swal.fire("Success", "Your biodata has been sent for premium approval!", "success");
                    })
                    .catch((error) => {
                        Swal.fire("Error", "Already requested !! wait for admin response", "error");
                    });
            }
        });
    };

    if (isLoading) return <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
    if (!biodata) return <div>No biodata found for this user.</div>;

    return (
        <div className="max-w-3xl mx-auto p-6  bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Your Biodata</h2>

            <div className="text-center">
                <img
                    src={biodata.profileImage || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="w-32 h-32 object-cover rounded-full mx-auto border border-gray-300"
                />
            </div>

            <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">
                    Name: {biodata.name || "No Name"}
                </h3>
            </div>

            <div className="mt-6 space-y-4">
                {/* Display ID at the top of details */}
                <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500 capitalize">ID:</span>
                    <span className="text-gray-700 font-medium">{biodata.id}</span>
                </div>

                {/* Other biodata details */}
                {Object.entries(biodata).map(([key, value]) => (
                    key !== "profileImage" &&
                    key !== "id" &&
                    key !== "name" && (
                        <div key={key} className="flex justify-between border-b pb-2">
                            <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                            <span className="text-gray-700 font-medium">{value || "Not provided"}</span>
                        </div>
                    )
                ))}
            </div>

            <div className="mt-8 text-center">
                <button 
                 
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={handleMakePremium}
                >
                    Make Biodata Premium
                </button>
            </div>
        </div>
    );
};

export default ViewBiodata;
