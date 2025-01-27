import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PremiumCard = () => {
    const [biodata, setBiodata] = useState([]);
    const [premiumUsers, setPremiumUsers] = useState([]);

    useEffect(() => {
        // Fetch biodata
        axios.get('http://localhost:5000/biodata')
            .then((response) => {
                setBiodata(response.data);
            })
            .catch((error) => console.error("Error fetching biodata:", error));

        // Fetch premium users
        axios.get('http://localhost:5000/premium')
            .then((response) => {
                const premiumData = response.data;

                // Filter premium users by status 'premium'
                const filteredPremiumUsers = premiumData.filter(user => user.status === 'premium');

                // Sort premium users by age in descending order
                const sortedPremiumUsers = filteredPremiumUsers.sort((a, b) => {
                    const matchingBiodataA = biodata.find(bio => bio.contactEmail === a.email);
                    const matchingBiodataB = biodata.find(bio => bio.contactEmail === b.email);

                    if (matchingBiodataA && matchingBiodataB) {
                        return matchingBiodataB.age - matchingBiodataA.age; // Sorting in descending order by age
                    }
                    return 0;
                });

                setPremiumUsers(sortedPremiumUsers); // Set sorted premium users
            })
            .catch((error) => console.error("Error fetching premium data:", error));
    }, [biodata]);

    return (
        <div className="container py-12 w-11/12 mx-auto">
            <h1 className="text-3xl pb-8 font-serif text-center text-gray-800">Premium Users</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {premiumUsers.map((user) => {
                    const matchingBiodata = biodata.find(bio => bio.contactEmail === user.email);

                    return matchingBiodata ? (
                        <div key={user.email} className="w-full bg-white  shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="relative">
                                {/* Image */}
                                <img
                                    alt="premium-user/image"
                                    src={matchingBiodata.profileImage || "https://via.placeholder.com/150"}
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />

                                {/* Premium Label */}
                                <div className="absolute top-4 right-4">
                                    <span className="bg-green-100 px-2 py-1 text-center text-green-500 font-semibold text-base border-2 border-green-300 rounded-lg">
                                        Premium
                                    </span>
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="p-6 space-y-4 flex flex-col justify-between min-h-[300px]">
                                <p className="text-sm font-semibold text-gray-500">Biodata ID: {matchingBiodata.id}</p>
                                <h4 className="text-lg font-semibold text-gray-800">{matchingBiodata.name}</h4>

                                <div className="text-sm text-gray-600 space-y-1">
                                    <p><strong>Biodata Type:</strong> {matchingBiodata.biodataType}</p>
                                    <p><strong>Age:</strong> {matchingBiodata.age} years</p>
                                    <p><strong>Occupation:</strong> {matchingBiodata.occupation}</p>
                                    <p><strong>Division:</strong> {matchingBiodata.permanentDivision}</p>
                                </div>

                                <Link to={`/premiumDetails/${user.email}`}>
                                    <button
                                        className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                                    >
                                        View Profile
                                        <MdKeyboardArrowRight className="text-xl" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};

export default PremiumCard;
