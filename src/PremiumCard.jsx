import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PremiumCard = () => {
    const [biodata, setBiodata] = useState([]);
    const [premiumUsers, setPremiumUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        // Fetch biodata
        axios.get('https://find-partner-server.vercel.app/biodata')
            .then((response) => {
                setBiodata(response.data);
            })
            .catch((error) => {});

        // Fetch premium users
        axios.get('https://find-partner-server.vercel.app/premium')
            .then((response) => {
                const premiumData = response.data;

                // Filter premium users by status 'premium'
                const filteredPremiumUsers = premiumData.filter(user => user.status === 'premium');

                // Sort premium users by age in descending order
                const sortedPremiumUsers = filteredPremiumUsers.sort((a, b) => {
                    const bioA = biodata.find(bio => bio.contactEmail === a.email);
                    const bioB = biodata.find(bio => bio.contactEmail === b.email);

                    if (bioA && bioB) {
                        return bioB.age - bioA.age; // Descending order
                    }
                    return 0;
                });

                setPremiumUsers(sortedPremiumUsers);
            })
            .catch((error) => {});
    }, [biodata]);

    // Calculate the current page's items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = premiumUsers.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(premiumUsers.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className="container py-12 w-11/12 mx-auto">
            <h1 className="text-3xl mb-8 font-serif text-center text-green-600 rounded-2xl md:w-2/12 mx-auto border bg-green-50 animated-border border-green-500">
                Premium Users
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentItems.map((user) => {
                    const matchingBiodata = biodata.find(bio => bio.contactEmail === user.email);

                    return matchingBiodata ? (
                        <div
                            key={user.email}
                            className="w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
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

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mr-2 rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PremiumCard;
