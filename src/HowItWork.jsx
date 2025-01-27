import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <div className="bg-gray-50 py-16 px-4 md:px-8">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
                <p className="text-xl text-gray-600 mb-12">Discover how to make the most of our services and find your perfect match.</p>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Further reduced gap */}
                    {/* Step 1: Sign Up */}
                    <div
                        className="group animated-border [perspective:1000px] w-full sm:w-[90%] md:w-[85%] lg:w-[80%] h-[400px] bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg")' }}
                    >
                        <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white rounded-xl shadow-lg p-8">
                                <div className="bg-white text-blue-500 p-4 rounded-full mb-6">
                                    <span className="text-3xl font-semibold">1</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-4">Sign Up</h3>
                                <p className="text-gray-200 text-lg">
                                    Start by creating an account with basic details like name, email, and preferences.
                                </p>
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full bg-white rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col justify-between">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign Up</h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    Create an account by providing basic information and preferences to get started on your journey.
                                </p>
                                <Link to="/signup" className="inline-block text-blue-600 hover:underline font-semibold">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Profile Creation */}
                    <div
                        className="group animated-border [perspective:1000px] w-full sm:w-[90%] md:w-[85%] lg:w-[80%] h-[400px] bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2023/10/create-your-profile-form.jpg")' }}
                    >
                        <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] bg-gradient-to-r from-teal-500 via-gray-600 to-teal-700 text-white rounded-xl shadow-lg p-8">
                                <div className="bg-white text-blue-500 p-4 rounded-full mb-6">
                                    <span className="text-3xl font-semibold">2</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-4">Create Your Profile</h3>
                                <p className="text-gray-200 text-lg">
                                    Fill in detailed information about yourself, including personal preferences and interests.
                                </p>
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full bg-white rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col justify-between">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create Your Profile</h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    Personalize your profile with your preferences, hobbies, and interests to find compatible matches.
                                </p>
                                <Link to="/profile" className="inline-block text-blue-600 hover:underline font-semibold">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Find Matches */}
                    <div
                        className="group animated-border [perspective:1000px] w-full sm:w-[90%] md:w-[85%] lg:w-[80%] h-[400px] bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://www.designmantic.com/logo-images/168554.png?company=Company%20Name&keyword=match&slogan=&verify=1")' }}
                    >
                        <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white rounded-xl shadow-lg p-8">
                                <div className="bg-white text-blue-500 p-4 rounded-full mb-6">
                                    <span className="text-3xl font-semibold">3</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-4">Find Matches</h3>
                                <p className="text-gray-200 text-lg">
                                    Browse through potential matches and use search filters to find someone compatible.
                                </p>
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full bg-white rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col justify-between">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find Matches</h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    Search and filter through profiles to find people who match your preferences and values.
                                </p>
                                <Link to="/matches" className="inline-block text-blue-600 hover:underline font-semibold">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Send Message */}
                    <div
                        className="group animated-border [perspective:1000px] w-full sm:w-[90%] md:w-[85%] lg:w-[80%] h-[400px] bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://cdn4.vectorstock.com/i/1000x1000/41/63/sending-message-process-concept-vector-20884163.jpg")' }}
                    >
                        <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white rounded-xl shadow-lg p-8">
                                <div className="bg-white text-blue-500 p-4 rounded-full mb-6">
                                    <span className="text-3xl font-semibold">4</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-4">Send Message</h3>
                                <p className="text-gray-200 text-lg">
                                    Initiate a conversation with your matches and start getting to know each other better.
                                </p>
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full bg-white rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col justify-between">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Message</h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    Once you find a match, send them a message to start a conversation and get to know them.
                                </p>
                                <Link to="/messages" className="inline-block text-blue-600 hover:underline font-semibold">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Step 5: Premium Benefits */}
                    <div
                        className="group animated-border [perspective:1000px] w-full sm:w-[90%] md:w-[85%] lg:w-[80%] h-[400px] bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://image.freepik.com/free-vector/premium-gold-label_1017-7701.jpg")' }}
                    >
                        <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] bg-gradient-to-r from-teal-500 via-gray-600 to-teal-700 text-white rounded-xl shadow-lg p-8">
                                <div className="bg-white text-blue-500 p-4 rounded-full mb-6">
                                    <span className="text-3xl font-semibold">5</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-4">Premium Benefits</h3>
                                <p className="text-gray-200 text-lg">
                                    Unlock exclusive features like unlimited messaging, priority profiles, and more.
                                </p>
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full bg-white rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col justify-between">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Premium Benefits</h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    Upgrade to Premium for unlimited messaging, priority matching, and other exclusive benefits.
                                </p>
                                <Link to="/premium" className="inline-block text-blue-600 hover:underline font-semibold">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Step 6: Contact Us */}
                    <div
                        className="group animated-border [perspective:1000px] w-full sm:w-[90%] md:w-[85%] lg:w-[80%] h-[400px] bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/014/549/640/non_2x/contact-us-via-email-phone-or-office-location-communicate-with-customer-or-client-business-information-or-channel-for-business-contact-concept-businessman-with-telephone-email-and-location-pin-vector.jpg")' }}
                    >
                        <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white rounded-xl shadow-lg p-8">
                                <div className="bg-white text-blue-500 p-4 rounded-full mb-6">
                                    <span className="text-3xl font-semibold">7</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-4">Contact Us</h3>
                                <p className="text-gray-200 text-lg">
                                    Have questions or need help? We're here to assist you.
                                </p>
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full bg-white rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col justify-between">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    Reach out to our support team for assistance, inquiries, or feedback. We value your input!
                                </p>
                                <Link to="/contact" className="inline-block text-blue-600 hover:underline font-semibold">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Call to Action */}
                <div className="mt-16">
                    <Link to="/biodata">
                        <button className="bg-blue-500 animated-border flex items-center mx-auto text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                            Find Partner  <MdKeyboardArrowRight className="text-xl" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
