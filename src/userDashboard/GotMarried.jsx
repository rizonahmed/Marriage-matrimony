import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const GotMarried = () => {
  const [formData, setFormData] = useState({
    selfBiodataId: "",
    partnerBiodataId: "",
    coupleImage: "",
    successStory: "",
    marriageDate: "", // Added marriage date
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate word count in the success story field
  const validateWordCount = (text) => {
    const wordLimit = 35;
    const wordCount = text.trim().split(/\s+/).length;
    return wordCount <= wordLimit;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateWordCount(formData.successStory)) {
      Swal.fire({
        icon: "error",
        title: "❌ Oops!",
        text: "Success story cannot exceed 35 words.",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/married",
        formData
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "🎉 Success!",
          text: "Your success story has been submitted successfully!",
        });
        setFormData({
          selfBiodataId: "",
          partnerBiodataId: "",
          coupleImage: "",
          successStory: "",
          marriageDate: "", // Reset marriage date
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "❌ Oops!",
        text: "Failed to submit your success story. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Share Your Marriage Story
      </h1>
      <div className="max-w-lg mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Self Biodata ID */}
          <div>
            <label
              htmlFor="selfBiodataId"
              className="block font-medium text-gray-700"
            >
              Self Biodata ID
            </label>
            <input
              type="text"
              id="selfBiodataId"
              name="selfBiodataId"
              value={formData.selfBiodataId}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Partner Biodata ID */}
          <div>
            <label
              htmlFor="partnerBiodataId"
              className="block font-medium text-gray-700"
            >
              Partner Biodata ID
            </label>
            <input
              type="text"
              id="partnerBiodataId"
              name="partnerBiodataId"
              value={formData.partnerBiodataId}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Couple Image */}
          <div>
            <label
              htmlFor="coupleImage"
              className="block font-medium text-gray-700"
            >
              Couple Image Link
            </label>
            <input
              type="url"
              id="coupleImage"
              name="coupleImage"
              value={formData.coupleImage}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Success Story */}
          <div>
            <label
              htmlFor="successStory"
              className="block font-medium text-gray-700"
            >
              Success Story (Max 35 words)
            </label>
            <textarea
              id="successStory"
              name="successStory"
              value={formData.successStory}
              onChange={handleChange}
              rows="4"
              placeholder="Share your story..."
              required
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Married Date */}
          <div>
            <label
              htmlFor="marriageDate"
              className="block font-medium text-gray-700"
            >
              Marriage Date
            </label>
            <input
              type="date"
              id="marriageDate"
              name="marriageDate"
              value={formData.marriageDate}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 text-white font-semibold rounded-md focus:outline-none ${loading
                  ? "bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                }`}
            >
              {loading ? "Submitting..." : "Submit Story"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GotMarried;
