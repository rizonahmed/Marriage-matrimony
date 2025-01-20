import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';

const CreateData = () => {
    const { user } = useContext(AuthContext);

    const [biodata, setBiodata] = useState({
        biodataType: '',
        name: '',
        profileImage: '',
        dateOfBirth: '',
        height: '',
        weight: '',
        age: '',
        occupation: '',
        race: '',
        fatherName: '',
        motherName: '',
        permanentDivision: '',
        presentDivision: '',
        relationshipStatus: '',
        contactEmail: user?.email || '', // Set user's email here
        mobileNumber: '',
    });

    // Function to calculate age from the date of birth
    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();

        // Adjust age if the birthday hasn't occurred yet this year
        if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // If the date of birth is changed, calculate the age
        if (name === 'dateOfBirth') {
            const age = calculateAge(value);
            setBiodata({
                ...biodata,
                [name]: value,
                age: age, // Update the age dynamically
            });
        } else {
            setBiodata({
                ...biodata,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/biodata', biodata);

            if (response.status === 201) {
                alert('Biodata created successfully!');
            } else {
                alert('Error creating biodata.');
            }
        } catch (error) {
            console.error('Error submitting biodata:', error);
        }
    };

    return (
        <div className="container mx-auto p-6 mt-10">
            <h2 className="text-2xl font-semibold mb-6">Create or Edit Biodata</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Biodata Type */}
                <div>
                    <label className="block font-medium">Biodata Type</label>
                    <select
                        name="biodataType"
                        value={biodata.biodataType}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* Name */}
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={biodata.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Profile Image */}
                <div>
                    <label className="block font-medium">Profile Image Link</label>
                    <input
                        type="url"
                        name="profileImage"
                        value={biodata.profileImage}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Date of Birth */}
                <div>
                    <label className="block font-medium">Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={biodata.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Age */}
                <div>
                    <label className="block font-medium">Age</label>
                    <input
                        type="text"
                        name="age"
                        value={biodata.age}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Height */}
                <div>
                    <label className="block font-medium">Height</label>
                    <input
                        type="text"
                        name="height"
                        value={biodata.height}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Weight */}
                <div>
                    <label className="block font-medium">Weight</label>
                    <input
                        type="text"
                        name="weight"
                        value={biodata.weight}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Occupation */}
                <div>
                    <label className="block font-medium">Occupation</label>
                    <input
                        type="text"
                        name="occupation"
                        value={biodata.occupation}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Race */}
                <div>
                    <label className="block font-medium">Race</label>
                    <input
                        type="text"
                        name="race"
                        value={biodata.race}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Father's Name */}
                <div>
                    <label className="block font-medium">Father's Name</label>
                    <input
                        type="text"
                        name="fatherName"
                        value={biodata.fatherName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Mother's Name */}
                <div>
                    <label className="block font-medium">Mother's Name</label>
                    <input
                        type="text"
                        name="motherName"
                        value={biodata.motherName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Permanent Division */}
                <div>
                    <label className="block font-medium">Permanent Division</label>
                    <select
                        name="permanentDivision"
                        value={biodata.permanentDivision}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    >
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagra">Chattagra</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>

                {/* Present Division */}
                <div>
                    <label className="block font-medium">Present Division</label>
                    <select
                        name="presentDivision"
                        value={biodata.presentDivision}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    >
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagra">Chattagra</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>

                {/* Relationship Status */}
                <div>
                    <label className="block font-medium">Relationship Status</label>
                    <input
                        type="text"
                        name="relationshipStatus"
                        value={biodata.relationshipStatus}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Contact Email */}
                <div>
                    <label className="block font-medium">Contact Email</label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={biodata.contactEmail}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Mobile Number */}
                <div>
                    <label className="block font-medium">Mobile Number</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        value={biodata.mobileNumber}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Save and Publish Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateData;
