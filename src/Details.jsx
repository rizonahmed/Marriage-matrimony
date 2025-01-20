import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';  // Heart icon for Add to Favourites

const Details = () => {
    const biodata = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6 sm:px-8 mt-28">
            {/* Biodata Details Card */}
            <div className="bg-white shadow-xl rounded-3xl max-w-4xl mx-auto p-8 border border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">

                {/* Profile Image and Name Section */}
                <div className="flex justify-center mb-8">
                    <div className="w-full md:w-10/12 h-64 rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-110">
                        <img
                            src={biodata.profileImage || 'https://via.placeholder.com/150'}
                            alt={`${biodata.name || 'No Name'}'s Profile`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Biodata Info Section */}
                <div className="flex flex-wrap gap-6 justify-between">
                    <div className="w-full sm:w-1/2 lg:w-1/3 text-lg text-gray-700 space-y-3">
                        <p className="font-semibold text-xl"><strong>Name:</strong> {biodata.name || 'No Name'}</p>
                        <p><strong>Biodata Type:</strong> {biodata.biodataType || 'N/A'}</p>
                        <p><strong>Age:</strong> {biodata.age || 'N/A'}</p>
                        <p><strong>Occupation:</strong> {biodata.occupation || 'N/A'}</p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 text-lg text-gray-700 space-y-3">
                        <p><strong>Height:</strong> {biodata.height || 'N/A'}</p>
                        <p><strong>Relationship Status:</strong> {biodata.relationshipStatus || 'N/A'}</p>
                        <p><strong>Division:</strong> {biodata.permanentDivision || 'N/A'}</p>
                        <p><strong>Race:</strong> {biodata.race || 'N/A'}</p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 text-lg text-gray-700 space-y-3">
                        <p><strong>Father's Name:</strong> {biodata.fatherName || 'N/A'}</p>
                        <p><strong>Mother's Name:</strong> {biodata.motherName || 'N/A'}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex gap-6 justify-center">
                    {/* Add to Favourites Button */}
                    <button className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl transform transition-transform hover:bg-blue-700 hover:scale-105 focus:outline-none">
                        <AiFillHeart className="mr-2 text-xl" />
                        Add to Favourites
                    </button>

                    {/* Request Contact Information Button */}
                    <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-xl transform transition-transform hover:bg-green-700 hover:scale-105 focus:outline-none">
                        Request Contact Information
                    </button>
                </div>

                {/* Contact Information (Only for Premium Users) */}
                <div className="mt-6 text-gray-700 space-y-2 text-center">
                    <p><strong>Contact Email:</strong> {biodata.contactEmail || 'N/A'}</p>
                    <p><strong>Mobile Number:</strong> {biodata.mobileNumber || 'N/A'}</p>
                </div>
            </div>

            {/* Footer Section */}
            <div className="text-center mt-12 text-gray-500 text-sm">
                <p>&copy; 2025 All rights reserved. Designed by Your Name</p>
            </div>
        </div>
    );
};

export default Details;
