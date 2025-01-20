// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../AuthProvider";
// import axios from "axios";

// const ViewBiodata = () => {
//     const { user } = useContext(AuthContext);  // Get the current user from context
//     const [biodata, setBiodata] = useState(null);  // State to store fetched biodata
//     const [isLoading, setIsLoading] = useState(true);  // To manage loading state
//     const [isError, setIsError] = useState(false);  // To handle errors

//     // Fetch user biodata from the server
//     useEffect(() => {
//         if (user && user.email) {
//             axios
//                 .get(`http://localhost:5000/biodata/${user.email}`)  // API endpoint to get biodata using the user's Gmail
//                 .then((response) => {
//                     setBiodata(response.data);  // Update state with the fetched data
//                     setIsLoading(false);  // Set loading state to false
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching biodata:", error);
//                     setIsError(true);  // Handle any errors during the fetch
//                     setIsLoading(false);  // Set loading state to false
//                 });
//         }
//     }, [user]);

//     // Handle when no data is available
//     if (isLoading) return <div>Loading...</div>;
//     if (isError) return <div>Failed to load biodata. Please try again later.</div>;
//     if (!biodata) return <div>No biodata available for this user.</div>;

//     return (
//         <div className="max-w-4xl mx-auto p-6 mt-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Biodata</h2>

//             {/* Biodata Card */}
//             <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
//                 <div className="flex flex-col md:flex-row items-center gap-6">
//                     <img
//                         src={biodata.profileImage || "https://via.placeholder.com/150"}
//                         alt="Profile"
//                         className="w-32 h-32 object-cover rounded-full border border-gray-300"
//                     />
//                     <div className="flex-1">
//                         <h3 className="text-xl font-bold text-gray-800">{biodata.name}</h3>
//                         <p className="text-gray-600">{biodata.biodataType || "Biodata Type not provided"}</p>
//                     </div>
//                 </div>

//                 {/* Biodata Information */}
//                 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <p className="font-medium text-gray-600">Date of Birth:</p>
//                         <p className="text-gray-800">{biodata.dateOfBirth || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Height:</p>
//                         <p className="text-gray-800">{biodata.height || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Weight:</p>
//                         <p className="text-gray-800">{biodata.weight || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Age:</p>
//                         <p className="text-gray-800">{biodata.age || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Occupation:</p>
//                         <p className="text-gray-800">{biodata.occupation || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Race (Skin Color):</p>
//                         <p className="text-gray-800">{biodata.race || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Father's Name:</p>
//                         <p className="text-gray-800">{biodata.fatherName || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Mother's Name:</p>
//                         <p className="text-gray-800">{biodata.motherName || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Permanent Division:</p>
//                         <p className="text-gray-800">{biodata.permanentDivision || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Present Division:</p>
//                         <p className="text-gray-800">{biodata.presentDivision || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Expected Partner Age:</p>
//                         <p className="text-gray-800">{biodata.expectedPartnerAge || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Expected Partner Height:</p>
//                         <p className="text-gray-800">{biodata.expectedPartnerHeight || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Expected Partner Weight:</p>
//                         <p className="text-gray-800">{biodata.expectedPartnerWeight || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Contact Email:</p>
//                         <p className="text-gray-800">{biodata.contactEmail || "Not provided"}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium text-gray-600">Mobile Number:</p>
//                         <p className="text-gray-800">{biodata.mobileNumber || "Not provided"}</p>
//                     </div>
//                 </div>

//                 {/* Make Premium Button */}
//                 <div className="mt-6 text-center">
//                     <button
//                         className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
//                     >
//                         Make Biodata Premium
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewBiodata;
