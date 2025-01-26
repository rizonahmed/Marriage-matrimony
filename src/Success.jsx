
const successStories = [
  {
    id: 1,
    coupleImage: "https://via.placeholder.com/150",
    marriageDate: "2023-01-15",
    reviewStar: 5,
    storyText:
      "We found each other through this platform and couldn't be happier. Thank you!",
  },
  {
    id: 2,
    coupleImage: "https://via.placeholder.com/150",
    marriageDate: "2022-06-20",
    reviewStar: 4,
    storyText:
      "It was a wonderful journey finding my partner here. Highly recommend it!",
  },
  {
    id: 3,
    coupleImage: "https://via.placeholder.com/150",
    marriageDate: "2021-12-10",
    reviewStar: 5,
    storyText:
      "Best decision we made was joining this platform. Forever grateful!",
  },
  {
    id: 4,
    coupleImage: "https://via.placeholder.com/150",
    marriageDate: "2023-03-05",
    reviewStar: 4,
    storyText: "We are happily married now thanks to this amazing site.",
  },
];

const Success = () => {
  // Sort stories in ascending to descending order by marriage date
  const sortedStories = [...successStories].sort(
    (a, b) => new Date(b.marriageDate) - new Date(a.marriageDate)
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
                src={story.coupleImage}
                alt="Couple"
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Married on {new Date(story.marriageDate).toLocaleDateString()}
              </h3>
              <div className="flex items-center my-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-500 ${
                      index < story.reviewStar ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-center">{story.storyText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
