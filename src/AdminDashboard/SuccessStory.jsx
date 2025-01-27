import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const SuccessStory = () => {
  const [stories, setStories] = useState([]);

  // Fetch success stories
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/married"); // Replace with your API endpoint
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching success stories:", error);
      }
    };

    fetchStories();
  }, []);

  // Show modal with success story details
  const handleViewStory = (story) => {
    Swal.fire({
      title: "Success Story",
      html: `
        <div class="text-center">
          <img src="${story.coupleImage}" alt="Couple" class="rounded-full w-20 h-20 mx-auto mb-4" />
          <p><strong>Male Biodata ID:</strong> ${story.selfBiodataId}</p>
          <p><strong>Female Biodata ID:</strong> ${story.partnerBiodataId}</p>
          <p class="mt-4"><strong>Story:</strong> ${story.successStory} <span role="img" aria-label="heart">❤️</span></p>
        </div>
      `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: "Close",
      customClass: {
        popup: "rounded-lg shadow-md",
        confirmButton: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
      },
    });
  };

  return (
    <div className="container mx-auto px-6 py-10 bg-white">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        All Success Stories
      </h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-gray-200">
                Male Biodata ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-gray-200">
                Female Biodata ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story) => (
              <tr key={story._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-bold text-gray-800 border border-gray-200">
                  {story.selfBiodataId}
                </td>
                <td className="px-6 py-4 text-sm font-bold text-gray-800 border border-gray-200">
                  {story.partnerBiodataId}
                </td>
                <td className="px-6 py-4 text-sm font-bold text-gray-800 border border-gray-200">
                  <button
                    onClick={() => handleViewStory(story)}
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    View Story 🥰
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuccessStory;
