import React, { useState, useEffect } from "react";
import axios from "axios";

const Success = () => {
  const [successStories, setSuccessStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("https://find-partner-server.vercel.app/married");
        setSuccessStories(response.data);
      } catch (error) {
      }
    };

    fetchStories();
  }, []);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStories = successStories.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(successStories.length / itemsPerPage);

  return (
    <div className="bg-gray-50 pb-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Success Stories</h2>
        <p className="text-xl text-gray-600 mb-12">
          Celebrate the beautiful journeys of couples who found their happiness here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentStories.map((story) => (
            <div
              key={story.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <img
                src={story.coupleImage}
                alt="Couple"
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Married on {new Date(story.marriageDate).toLocaleDateString()}
              </h3>
              <p className="text-gray-600 text-center">{story.successStory}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 mx-1 text-gray-500 bg-white rounded-md disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 mx-1 text-gray-500 bg-white rounded-md disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
