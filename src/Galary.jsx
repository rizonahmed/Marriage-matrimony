import React from "react";
import { IoIosInformationCircle } from "react-icons/io";

const Galary = () => {
  const images = [
    {
      src: "https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2017%2F06%2F24%2F740eaab5da2b92eed0d30bdbdaf54a3f-Untitled-1.jpg?auto=format%2Ccompress&w=1200",
      title: "Shakib KHan",
      author: "Engineer",
    },
    {
      src: "https://www.observerbd.com/2025/01/25/ob_1737812614.jpg",
      title: "Pori Moni",
      author: "Doctor",
    },
    {
      src: "https://ecdn.kalerkantho.com/public/news_images/2023/04/12/1681296258-d7653913ea2d3ef4cb94862251c0fcde.jpg",
      title: "Bubli",
      author: "Pilot",
    },
    {
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/90042112-40d0-4504-afaa-3d89cd5cd533-sixteen_nine.jpg?VersionId=jzYNPwVJYUujxN.___LJklFNToe4fz8f&size=690:388",
      title: "Hero Alom",
      author: "Superstar",
    },
    {
      src: "https://cdn.daily-sun.com/public/news_images/2023/11/13/1699859550-7f220ada434cde8d19e2472972e31b57.jpg",
      title: "Jayeng khan",
      author: "Superman",
    },
    {
      src: "https://i.pinimg.com/736x/56/fc/0b/56fc0b27cb6a7e93b26a6f5eaad82dd7.jpg",
      title: "Russian Merin",
      author: "Employ",
    },
    {
      src: "https://idyllic.app/wp-content/uploads/2024/03/350575.jpeg",
      title: "Idyllic Scene",
      author: "@idyllic",
    },
  ];

  return (
    <div className="bg-gray-50 py-8">


      <h2 className="text-3xl font-bold text-center mb-6">Choose Your Life Partner </h2>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="overflow-hidden"
      >
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-72 h-48 rounded-lg overflow-hidden shadow-md">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full px-4 py-2 backdrop-blur-[2px] bg-opacity-60 bg-black text-white flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold">{image.title}</h3>
                  <p className="text-xs">{image.author}</p>
                </div>
                <IoIosInformationCircle className="text-lg cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </marquee>
      <p className="text-center text-base mt-6 text-gray-600">
        They are all our user you can choose anyone for marriage.
      </p>




    </div>
  );
};

export default Galary;
