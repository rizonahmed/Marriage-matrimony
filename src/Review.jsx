import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const Review = () => {
  const [reviews, setReviews] = useState([
    { name: "John & Emily", rating: 5, comment: "A wonderful experience! The service was fantastic, and we couldn't be happier!" },
    { name: "Mark & Sarah", rating: 4, comment: "Great platform! Helped us find our perfect match easily." },
    { name: "David & Anna", rating: 5, comment: "Highly recommended! The process was smooth and enjoyable." },
    { name: "Emma & Liam", rating: 5, comment: "Exceptional service, made everything so easy!" },
    { name: "Sophia & Noah", rating: 4, comment: "Very helpful, found my perfect match!" },
    { name: "Olivia & James", rating: 5, comment: "Couldn’t have asked for a better experience!" },
    { name: "Ava & Lucas", rating: 5, comment: "Great experience, highly recommended!" },
    { name: "Isabella & Mason", rating: 4, comment: "Really good platform, found my partner!" },
    { name: "Mia & Benjamin", rating: 5, comment: "This was amazing, thank you!" },
    { name: "Charlotte & Ethan", rating: 5, comment: "Highly professional and smooth experience!" },
    { name: "Amelia & Alexander", rating: 4, comment: "Helpful platform, worked well for us!" },
    { name: "Harper & William", rating: 5, comment: "Life-changing experience, so happy!" }
  ]);

  const handleSubmit = async () => {
    let selectedRating = 5;
    const { value: formValues } = await Swal.fire({
      title: "Submit Your Review",
      html:
        '<input id="swal-name" class="swal2-input" placeholder="Your Name">' +
        '<div id="swal-stars" class="flex justify-center my-2">' +
        [...Array(5)].map((_, i) => `<span class='fa fa-star text-gray-300 cursor-pointer' id='star-${i + 1}' onclick='document.getElementById("swal-rating").value=${i + 1}; updateStars(${i + 1});'></span>`).join('') +
        '</div>' +
        '<textarea id="swal-comment" class="swal2-textarea" placeholder="Your Review"></textarea>' +
        '<input type="hidden" id="swal-rating" value="5">' +
        '<script>function updateStars(rating){selectedRating = rating;document.querySelectorAll("#swal-stars span").forEach((star, index) => {star.classList.toggle("text-yellow-400", index < rating); star.classList.toggle("text-gray-300", index >= rating);});}</script>',
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById("swal-name").value,
          rating: selectedRating,
          comment: document.getElementById("swal-comment").value,
        };
      }
    });

    if (formValues && formValues.name && formValues.comment) {
      const updatedReviews = [formValues, ...reviews].slice(0, 12);
      setReviews(updatedReviews);
      Swal.fire("Success!", "Your review has been added.", "success");
    }
  };

  return (
   <div className="bg-gray-100">
     <div className="py-10  w-10/12 mx-auto">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Happy Users Reviews</h2>
        <p className="text-gray-600 mt-2">See what our happy users have to say!</p>
      </div>
      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
            <div className="flex items-center my-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Submit Review</button>
      </div>
    </div>
   </div>
  );
};

export default Review;
