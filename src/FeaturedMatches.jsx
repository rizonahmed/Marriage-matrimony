import React, { useEffect, useState } from 'react';

const FeaturedMatches = () => {
  const events = [
    {
      name: "Ayesha & Imran's Wedding",
      date: "2025-03-10T15:00:00Z",
      location: "Dhaka, Bangladesh",
      description: "Join us for the wedding celebration of Ayesha and Imran. A grand celebration awaits you!",
      image: "https://media.istockphoto.com/id/1368004438/photo/shot-of-a-couple-enjoying-a-day-at-the-beach.jpg?s=612x612&w=0&k=20&c=hMi6N-u6baFHC-P8C-8X_5iFshdPPicx7BCrBGM8ARc=",
    },
    {
      name: "Nazia & Fahad's Engagement",
      date: "2025-03-15T17:00:00Z",
      location: "Chittagong, Bangladesh",
      description: "A special event to mark the engagement of Nazia and Fahad. An evening full of joy and laughter.",
      image: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/388/341/new_medium/ZAK_5945.JPG?1680001263",
    },
    {
      name: "Sara & Ali's Pre-wedding Party",
      date: "2025-03-20T19:00:00Z",
      location: "Sylhet, Bangladesh",
      description: "Get ready for a night of fun, food, and celebration as Sara and Ali prepare for their wedding!",
      image: "https://media.istockphoto.com/id/868924246/photo/bride-and-groom-enjoying-in-their-love.jpg?s=612x612&w=0&k=20&c=pPMrq_ttTKsOmOqJcL0-IzOgYLOtdwH7Z5Gc1AH4340=",
    },
    {
      name: "Mehdi & Amina's Reception",
      date: "2025-03-25T18:00:00Z",
      location: "Khulna, Bangladesh",
      description: "A wonderful reception to celebrate the union of Mehdi and Amina. Join us for a joyous evening!",
      image: "https://www.shutterstock.com/image-photo/young-attractive-asian-couple-man-600nw-2031753845.jpg",
    },
    {
      name: "Rashed & Samira's Nikah Ceremony",
      date: "2025-03-30T14:00:00Z",
      location: "Rajshahi, Bangladesh",
      description: "A sacred and beautiful Nikah ceremony of Rashed and Samira. You are invited!",
      image: "https://cdn.pixabay.com/photo/2021/01/06/21/50/couple-5895728_1280.jpg",
    },
    {
      name: "Tariq & Layla's Anniversary Celebration",
      date: "2025-04-05T20:00:00Z",
      location: "Barishal, Bangladesh",
      description: "Celebrating the love and commitment of Tariq and Layla on their wedding anniversary.",
      image: "https://images.pexels.com/photos/3872614/pexels-photo-3872614.jpeg?cs=srgb&dl=pexels-ankur-kumar-2067233-3872614.jpg&fm=jpg",
    },
  ];

  const getTimeRemaining = (eventDate) => {
    const eventTime = new Date(eventDate);
    const currentTime = new Date();
    const timeDiff = eventTime - currentTime;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(
    events.map(event => getTimeRemaining(event.date))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(events.map(event => getTimeRemaining(event.date)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto my-20 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Upcoming Marriage Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {events.map((event, index) => {
          const { days, hours, minutes, seconds } = timeRemaining[index];

          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 object-cover rounded-t-lg mb-6 shadow-lg"
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{event.location}</p>
                <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                <div className="text-xl font-bold text-gray-800 mb-4">Time Remaining:</div>
                <div className="flex justify-center gap-4">
                  <div className="bg-gray-200 py-4 px-7 rounded-full text-center">
                    <p className="text-2xl font-bold text-gray-800">{days}</p>
                    <p className="text-sm text-gray-600">Days</p>
                  </div>
                  <div className="bg-gray-200 py-4 px-6 rounded-full text-center">
                    <p className="text-2xl font-bold text-gray-800">{hours}</p>
                    <p className="text-sm text-gray-600">Hours</p>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-full text-center">
                    <p className="text-2xl font-bold text-gray-800">{minutes}</p>
                    <p className="text-sm text-gray-600">Minutes</p>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-full text-center">
                    <p className="text-2xl font-bold text-gray-800">{seconds}</p>
                    <p className="text-sm text-gray-600">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedMatches;