import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDash = () => {
    const [totalBiodata, setTotalBiodata] = useState(0);
    const [maleBiodata, setMaleBiodata] = useState(0);
    const [femaleBiodata, setFemaleBiodata] = useState(0);
    const [premiumBiodata, setPremiumBiodata] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        // Fetch total biodata and filter male/female
        axios.get('http://localhost:5000/biodata')
            .then((response) => {
                const biodata = response.data;
                setTotalBiodata(biodata.length);
                setMaleBiodata(biodata.filter(item => item.biodataType === 'Male').length);
                setFemaleBiodata(biodata.filter(item => item.biodataType === 'Female').length);
            })
            .catch((error) => console.error("Error fetching biodata:", error));

        // Fetch premium biodata
        axios.get('http://localhost:5000/premium')
            .then((response) => setPremiumBiodata(response.data.length))
            .catch((error) => console.error("Error fetching premium biodata:", error));

        // Fetch total revenue
        axios.get('http://localhost:5000/allPayments')
            .then((response) => {
                const revenue = response.data.length * 5; // Calculate total revenue by multiplying length by 5
                setTotalRevenue(revenue);
            })
            .catch((error) => console.error("Error fetching payments:", error));
    }, []);

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Total Biodata</h2>
                    <p className="text-3xl font-bold text-blue-500">{totalBiodata}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Male Biodata</h2>
                    <p className="text-3xl font-bold text-blue-500">{maleBiodata}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Female Biodata</h2>
                    <p className="text-3xl font-bold text-blue-500">{femaleBiodata}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Premium Biodata</h2>
                    <p className="text-3xl font-bold text-blue-500">{premiumBiodata}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Total Revenue</h2>
                    <p className="text-3xl font-bold text-blue-500">${totalRevenue}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDash;
