import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert
import { AuthContext } from "./AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext); // Access user from context
  const biodata = useLoaderData();
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const checkIfPremium = async () => {
      try {
        // Fetch the premium biodata list
        const response = await axios.get("http://localhost:5000/premium");
        const premiumBiodata = response.data;

        const foundPremium = premiumBiodata.some(
          (item) => item.email === user?.email && item.status === "premium"
        );
        setIsPremium(foundPremium);
      } catch (error) {
        console.error("Error fetching premium data:", error);
      }
    };

    checkIfPremium();
  }, [biodata.id]); // Dependency array to run the effect when biodata.id changes

  const handleAddToFavourites = async () => {
    try {
      const response = await axios.post("http://localhost:5000/favourites", {
        biodataId: biodata.id,
        name: biodata.name,
        age: biodata.age,
        occupation: biodata.occupation,
        height: biodata.height,
        relationshipStatus: biodata.relationshipStatus,
        permanentDivision: biodata.permanentDivision,
        race: biodata.race,
        fatherName: biodata.fatherName,
        motherName: biodata.motherName,
        contactEmail: biodata.contactEmail,
        mobileNumber: biodata.mobileNumber,
        profileImage: biodata.profileImage,
        userEmail: user?.email, // Include the logged-in user's email
      });

      if (response.status === 201) {
        // Success SweetAlert
        Swal.fire({
          icon: "success",
          title: "Added to Favourites!",
          text: `${biodata.name} has been successfully added to your favourites 💖`,
          confirmButtonColor: "#3B9DF8",
        });
      } else if (response.data.message === "Already added") {
        // Already Added SweetAlert
        Swal.fire({
          icon: "info",
          title: "Already Added",
          text: `${biodata.name} is already in your favourites! 😊`,
          confirmButtonColor: "#3B9DF8",
        });
      } else {
        // Generic Error SweetAlert
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Failed to add to favourites. Please try again.",
          confirmButtonColor: "#3B9DF8",
        });
      }
    } catch (error) {
      console.error("Error adding to favourites:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
        confirmButtonColor: "#3B9DF8",
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 sm:px-8 mt-28">
      <div className="bg-white shadow-xl rounded-3xl max-w-4xl mx-auto p-8 border border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
        <div className="flex justify-center mb-8">
          <div className="w-full md:w-10/12 h-64 rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-110">
            <img
              src={biodata.profileImage || "https://via.placeholder.com/150"}
              alt={`${biodata.name || "No Name"}'s Profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3 text-lg text-gray-700 space-y-3">
            <p className="font-semibold text-xl">
              <strong>Name:</strong> {biodata.name || "No Name"}
            </p>
            <p>
              <strong>Biodata Type:</strong> {biodata.biodataType || "N/A"}
            </p>
            <p>
              <strong>Age:</strong> {biodata.age || "N/A"}
            </p>
            <p>
              <strong>Occupation:</strong> {biodata.occupation || "N/A"}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 text-lg text-gray-700 space-y-3">
            <p>
              <strong>Height:</strong> {biodata.height || "N/A"}
            </p>
            <p>
              <strong>Relationship Status:</strong> {biodata.relationshipStatus || "N/A"}
            </p>
            <p>
              <strong>Division:</strong> {biodata.permanentDivision || "N/A"}
            </p>
            <p>
              <strong>Race:</strong> {biodata.race || "N/A"}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 text-lg text-gray-700 space-y-3">
            <p>
              <strong>Father's Name:</strong> {biodata.fatherName || "N/A"}
            </p>
            <p>
              <strong>Mother's Name:</strong> {biodata.motherName || "N/A"}
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-6 justify-center">
          <button
            onClick={handleAddToFavourites}
            className="flex items-center justify-center bg-pink-500 text-white px-6 py-3 rounded-full shadow-xl transform transition-transform hover:bg-pink-600 hover:scale-105 focus:outline-none"
          >
            <AiFillHeart className="mr-2 text-xl" />
            Add to Favourites
          </button>

          <Link to={`/payment/${biodata?._id}`}>
            <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-xl transform transition-transform hover:bg-green-700 hover:scale-105 focus:outline-none">
              Request Contact Information
            </button>
          </Link>
        </div>

        {/* Conditional Rendering of Contact Information */}
        {isPremium && (
          <div className="mt-6 text-gray-700 space-y-2 text-center">
            <p>
              <strong>Contact Email:</strong> {biodata.contactEmail || "N/A"}
            </p>
            <p>
              <strong>Mobile Number:</strong> {biodata.mobileNumber || "N/A"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
