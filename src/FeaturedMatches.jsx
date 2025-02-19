import React, { useEffect, useState } from "react";

const FeaturedMatches = () => {
  const events = [
    {
      name: "Tariq & Layla's Anniversary Celebration",
      date: "2025-04-05T20:00:00Z",
      location: "Barishal, Bangladesh",
      description: "Celebrating the love and commitment of Tariq and Layla on their wedding anniversary.",
      image: "https://images.pexels.com/photos/3872614/pexels-photo-3872614.jpeg?cs=srgb&dl=pexels-ankur-kumar-2067233-3872614.jpg&fm=jpg",
    },
    {
      name: "Ayesha & Imran's Wedding",
      date: "2025-04-10T15:00:00Z",
      location: "Dhaka, Bangladesh",
      description: "Join us for the wedding celebration of Ayesha and Imran. A grand celebration awaits you!",
      image: "https://media.istockphoto.com/id/1368004438/photo/shot-of-a-couple-enjoying-a-day-at-the-beach.jpg?s=612x612&w=0&k=20&c=hMi6N-u6baFHC-P8C-8X_5iFshdPPicx7BCrBGM8ARc=",
    },
    {
      name: "Nazia & Fahad's Engagement",
      date: "2025-04-15T17:00:00Z",
      location: "Chittagong, Bangladesh",
      description: "A special event to mark the engagement of Nazia and Fahad. An evening full of joy and laughter.",
      image: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/388/341/new_medium/ZAK_5945.JPG?1680001263",
    },
    {
      name: "Sara & Ali's Pre-wedding Party",
      date: "2025-04-20T19:00:00Z",
      location: "Sylhet, Bangladesh",
      description: "Get ready for a night of fun, food, and celebration as Sara and Ali prepare for their wedding!",
      image: "https://media.istockphoto.com/id/868924246/photo/bride-and-groom-enjoying-in-their-love.jpg?s=612x612&w=0&k=20&c=pPMrq_ttTKsOmOqJcL0-IzOgYLOtdwH7Z5Gc1AH4340=",
    },
    {
      name: "Mehdi & Amina's Reception",
      date: "2025-04-25T18:00:00Z",
      location: "Khulna, Bangladesh",
      description: "A wonderful reception to celebrate the union of Mehdi and Amina. Join us for a joyous evening!",
      image: "https://www.shutterstock.com/image-photo/young-attractive-asian-couple-man-600nw-2031753845.jpg",
    },
    {
      name: "Rashed & Samira's Nikah Ceremony",
      date: "2025-04-30T14:00:00Z",
      location: "Rajshahi, Bangladesh",
      description: "A sacred and beautiful Nikah ceremony of Rashed and Samira. You are invited!",
      image: "https://cdn.pixabay.com/photo/2021/01/06/21/50/couple-5895728_1280.jpg",
    },
  ];

  const getTimeRemaining = (eventDate) => {
    const eventTime = new Date(eventDate);
    const currentTime = new Date();
    const timeDiff = eventTime - currentTime;

    if (timeDiff < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
    };
  };

  const [sortedEvents, setSortedEvents] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedEvents = events
        .map((event) => ({
          ...event,
          timeRemaining: getTimeRemaining(event.date),
        }))
        .sort((a, b) => new Date(a.date) - new Date(b.date));

      setSortedEvents(updatedEvents);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto my-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Upcoming Marriage Events
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedEvents.map((event, index) => {
          const { days, hours, minutes, seconds } = event.timeRemaining;

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {event.name}
                </h3>
                <p className="text-sm text-gray-500">{event.location}</p>
                <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                <div className="text-lg font-semibold text-gray-800 mt-4">
                  Time Remaining:
                </div>
                <div className="flex justify-center gap-3 mt-3">
                  <div className="bg-gray-200 p-3 rounded-lg text-center w-16">
                    <p className="text-xl font-bold text-gray-800">{days}</p>
                    <p className="text-xs text-gray-600">Days</p>
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg text-center w-16">
                    <p className="text-xl font-bold text-gray-800">{hours}</p>
                    <p className="text-xs text-gray-600">Hours</p>
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg text-center w-16">
                    <p className="text-xl font-bold text-gray-800">{minutes}</p>
                    <p className="text-xs text-gray-600">Minutes</p>
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg text-center w-16">
                    <p className="text-xl font-bold text-gray-800">{seconds}</p>
                    <p className="text-xs text-gray-600">Seconds</p>
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
