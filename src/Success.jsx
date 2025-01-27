import React, { useState, useEffect } from "react";
import axios from "axios";

const Success = () => {
  const [successStories, setSuccessStories] = useState([]);

  // Fetch success stories from API
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/married");
        setSuccessStories(response.data); // Set the fetched data
      } catch (error) {
        console.error("Error fetching success stories:", error);
      }
    };

    fetchStories();
  }, []);

  // Sort stories in ascending order by marriage date
  const sortedStories = [...successStories].sort(
    (a, b) => new Date(a.marriageDate) - new Date(b.marriageDate)
  );

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Success Stories</h2>
        <p className="text-xl text-gray-600 mb-12">
          Celebrate the beautiful journeys of couples who found their happiness here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedStories.map((story) => (
            <div
              key={story.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={story.coupleImage} // Image loaded from API
                alt="Couple"
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Married on {new Date(story.marriageDate).toLocaleDateString()}
              </h3>
              <div className="flex items-center my-3">
                {/* Static star rating */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-500 ${index < 4 ? "text-yellow-500" : "text-gray-300"}`} // Static 4 stars
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-center">{story.successStory}</p> {/* Success story */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
