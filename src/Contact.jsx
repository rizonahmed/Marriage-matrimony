import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const faqData = [
        {
            question: "How do I create a biodata?",
            answer: "Go to the dashboard and click 'Edit Biodata' to fill out the form. You can add personal details, preferences, and upload photos. Make sure your details are accurate for a better match."
        },
        {
            question: "Can I update my biodata after publishing?",
            answer: "Yes, you can edit your biodata anytime from your dashboard. Keep it updated with any changes to your details or preferences to stay relevant."
        },
        {
            question: "How do I contact a premium member?",
            answer: "Request contact information and complete the checkout process. Once payment is made, you will gain access to premium member contact details."
        },
        {
            question: "What is a premium member?",
            answer: "Premium members have access to contact details of other members, exclusive features like advanced matching, and priority in profile visibility."
        },
        {
            question: "How do I make my biodata premium?",
            answer: "Submit a request from the 'View Biodata' section in your dashboard. You'll be able to upgrade to premium and unlock special features for better visibility."
        }
    ];

    const testimonials = [
        {
            name: "Rahim & Salma",
            feedback: "This platform connected us beautifully. The process was smooth, and we were able to find each other quickly. Thank you for creating such a great service!",
            image: "https://plus.unsplash.com/premium_photo-1682090795093-9b9434a455ec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            name: "Arif & Nusrat",
            feedback: "We are now happily married. This platform was a blessing! The matching system worked so well for us, and we met the love of our life.",
            image: "https://i.pinimg.com/564x/0a/53/17/0a5317e60c5b378846fe384e23671f6c.jpg"
        },
        {
            name: "Fahim & Rima",
            feedback: "I couldn't have found a better match anywhere else. The personalized experience made it easy to connect with the right person.",
            image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://api.easy-peasy.ai/storage/v1/object/public/images/514f3e7e-8d8f-4c88-ab3f-be8adbaa0286/2024-10-07T18:21:57.640Z.jpg"
        }
    ];


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Display a SweetAlert success message
        Swal.fire({
            title: "🎉 Thank you!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonText: "OK",
        }).then(() => {
            e.target.reset(); // Reset the form fields after showing the alert
        });
    };

    return (
        <div className='mt-32  px-4 lg:px-16'>
            <h1 className='text-3xl border-b-2 md:w-3/12 mx-auto border-gray-400 font-bold shadow-sm text-center bg-gray-200 mb-6'> Contact Us</h1>
            {/* FAQ and Profile Creation Guidelines Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* FAQs Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqData.map((faq, index) => (
                            <details key={index} className="border p-4 rounded-md bg-gray-50">
                                <summary className="font-medium text-gray-800 cursor-pointer">{faq.question}</summary>
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Profile Creation Guidelines Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Profile Creation Guidelines</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-4">
                        <li>Use a professional and recent profile photo that highlights your best features.</li>
                        <li>Fill in all the required fields with accurate information about yourself, including hobbies, preferences, and background.</li>
                        <li>Write a clear and honest description of yourself that reflects your personality and values.</li>
                        <li>Mention your expectations for a life partner and what qualities you're looking for.</li>
                        <li>Keep your biodata updated regularly to ensure it stays current and relevant to potential matches.</li>
                    </ul>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow-md bg-white text-center">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-600"
                            />
                            <h3 className="font-medium text-gray-800">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600 mt-2">{testimonial.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[30px] boxShadow p-[40px] rounded-xl">

                {/* form area */}
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="text-gray-800">
                        <h1 className="text-[2rem] font-[600] leading-[35px]">
                            Get in <span className="text-green-400">touch</span>
                        </h1>
                        <p className="text-[0.9rem] mt-2 mb-8">
                            Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
                        </p>
                    </div>

                    <div className="flex sm:flex-row flex-col items-center gap-[20px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                        <textarea
                            placeholder="Write message"
                            className="peer min-h-[200px] border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`py-2.5 px-6 bg-gray-800 text-white rounded-md text-[1rem] mt-[10px] w-full`}
                    >
                        Submit
                    </button>
                </form>

                {/* image */}
                <div className="h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583821205!2d89.88714221134349!3d24.247560347354335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37554d3d270329f%3A0x534fefefabcd123!2sTangail!5e0!3m2!1sen!2sbd!4v1723916219404!5m2!1sen!2sbd"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className="w-full h-full rounded-md">
                    </iframe>
                </div>
            </section>

        </div>
    );
};

export default Contact;
