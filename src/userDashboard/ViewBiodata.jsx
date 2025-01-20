import React, { useState } from 'react';

const ViewBiodata = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMakePremium = () => {
        setIsModalOpen(true);
    };

    const handleConfirmPremium = () => {
        // Mock API call for approval
        console.log("Biodata sent for premium approval.");
        setIsModalOpen(false);
        alert("Your biodata has been sent for premium approval!");
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-4 max-w-2xl mx-auto bg-white rounded shadow">
            <h1 className="text-xl font-bold mb-4">View Biodata</h1>
            <div className="space-y-2">
                <p><strong>Biodata Type:</strong> Male</p>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Date of Birth:</strong> 01-01-1990</p>
                <p><strong>Height:</strong> 5'8"</p>
                <p><strong>Weight:</strong> 70kg</p>
                <p><strong>Occupation:</strong> Engineer</p>
                <p><strong>Contact Email:</strong> john.doe@example.com</p>
                <p><strong>Mobile Number:</strong> +123456789</p>
            </div>
            <button 
                onClick={handleMakePremium} 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Make Biodata Premium
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-md max-w-sm">
                        <h2 className="text-lg font-bold mb-4">Confirm Premium</h2>
                        <p>Are you sure you want to make your biodata premium?</p>
                        <div className="mt-4 flex justify-end space-x-2">
                            <button 
                                onClick={handleCancel} 
                                className="bg-gray-300 px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleConfirmPremium} 
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewBiodata;
