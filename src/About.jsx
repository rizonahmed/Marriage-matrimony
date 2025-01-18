import React from 'react';
import { FaUsers, FaRegLightbulb, FaHandshake, FaAward, FaHeart, FaGlobe, FaShieldAlt, FaMobileAlt, FaStar, FaThumbsUp, FaCog, FaCogs, FaSmileBeam, FaLightbulb, FaLaptopCode } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-gray-100 pt-32 pb-8">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="text-lg text-gray-600 mt-3">Connecting Hearts with Trust and Innovation</p>
            </div>

            {/* About Sections */}
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Section 1 */}
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <FaUsers className="text-5xl text-blue-500 mr-6" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Our Community</h2>
                        <p className="text-gray-600 mt-2">
                            We have built a strong community of users looking for meaningful connections. Join thousands who have trusted us to find their perfect partner.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <FaRegLightbulb className="text-5xl text-yellow-500 mr-6" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
                        <p className="text-gray-600 mt-2">
                            To revolutionize the matchmaking experience through innovation and empathy, making every connection seamless and heartfelt.
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <FaHandshake className="text-5xl text-green-500 mr-6" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">What We Value</h2>
                        <p className="text-gray-600 mt-2">
                            Trust, transparency, and inclusivity are at the heart of what we do. We aim to make your journey safe and authentic.
                        </p>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <FaAward className="text-5xl text-red-500 mr-6" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Our Achievements</h2>
                        <p className="text-gray-600 mt-2">
                            Proudly uniting thousands of couples across the globe, with countless success stories of love and companionship.
                        </p>
                    </div>
                </div>

                {/* Section 5 */}
                <div className="md:col-span-2 flex items-center bg-white shadow-lg rounded-lg p-6">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="About us illustration"
                        className="rounded-lg w-1/3 mr-6"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
                        <p className="text-gray-600 mt-2">
                            Since our inception, we have been dedicated to bridging the gap between tradition and technology, offering a platform that truly understands the needs of modern relationships.
                        </p>
                    </div>
                </div>

                {/* Section 6 */}
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <FaHeart className="text-5xl text-pink-500 mr-6" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="text-gray-600 mt-2">
                            To create meaningful relationships by connecting individuals with shared values and aspirations through a secure platform.
                        </p>
                    </div>
                </div>

                {/* Section 7 */}
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <FaGlobe className="text-5xl text-blue-600 mr-6" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Global Reach</h2>
                        <p className="text-gray-600 mt-2">
                            Our platform connects users across the globe, helping individuals from different backgrounds find their perfect match.
                        </p>
                    </div>
                </div>

                {/* Section 8 */}
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <FaShieldAlt className="text-5xl text-green-600 mr-6" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Security First</h2>
                        <p className="text-gray-600 mt-2">
                            Your privacy and security are our priorities. We provide a safe and secure environment for all users to connect with confidence.
                        </p>
                    </div>
                </div>

                {/* Section 9 */}
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <FaMobileAlt className="text-5xl text-purple-500 mr-6" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Mobile Friendly</h2>
                        <p className="text-gray-600 mt-2">
                            Our platform is designed to be fully responsive, offering a seamless experience on all devices.
                        </p>
                    </div>
                </div>
            </div>

            

            {/* Full-Width Call to Action */}
            <div className="bg-gray-200 py-12 text-center  mt-10">
                <h2 className="text-4xl font-bold mb-4">Take the First Step</h2>
                <p className="text-lg mb-6">
                    Start your journey to finding meaningful connections today. Sign up and let us help you find your perfect match.
                </p>
                <button className="bg-white text--500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                    Join Now
                </button>
            </div>

            {/* New Section: Why Choose Us */}

            <div > <h1 className='text-3xl border-b-2 md:w-3/12 mx-auto border-gray-400 font-bold shadow-sm text-center bg-gray-200'> Why choose us</h1></div>
            <div className="container mx-auto px-6 lg:px-20 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <FaStar className="text-5xl text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">High Success Rate</h3>
                    <p className="text-gray-600 mt-2">
                        Over 95% of our users have found meaningful connections and lifelong partnerships through our platform.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <FaThumbsUp className="text-5xl text-green-500 mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">User Satisfaction</h3>
                    <p className="text-gray-600 mt-2">
                        Consistently rated as the most trusted matchmaking platform with excellent reviews from our users.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <FaHeart className="text-5xl text-pink-500 mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">Personalized Matches</h3>
                    <p className="text-gray-600 mt-2">
                        Our advanced algorithms ensure you meet people who truly align with your values and preferences.
                    </p>
                </div>
            </div>


            {/* New Section: Why Choose Us */}
            <div className="container mx-auto px-6 lg:px-20 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Existing Why Choose Us sections */}
                {/* Section 1 to Section 3 */}
            </div>

            {/* New Section: Our Technology */}
            <div className="bg-blue-50 py-16 mt-12">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Technology</h2>
                    <p className="text-lg text-blue-600 max-w-3xl mx-auto mb-10">
                        Experience the power of cutting-edge matchmaking algorithms and a seamless user interface designed to make your journey effortless and enjoyable.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <FaCogs className="text-5xl text-blue-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold text-gray-800">Advanced Algorithms</h3>
                            <p className="text-gray-600 mt-2">
                                Our AI-driven technology ensures highly compatible matches based on your unique preferences and values.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <FaSmileBeam className="text-5xl text-yellow-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold text-gray-800">User-Friendly Interface</h3>
                            <p className="text-gray-600 mt-2">
                                Enjoy a smooth and intuitive experience across all devices, making your matchmaking journey effortless.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <FaShieldAlt className="text-5xl text-green-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold text-gray-800">Data Security</h3>
                            <p className="text-gray-600 mt-2">
                                Our platform is equipped with the latest security features to keep your data safe and confidential.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
                     More About Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-lg p-8 group hover:bg-blue-500 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-white transition-colors duration-300">
                            <FaLaptopCode className="text-3xl text-blue-500 group-hover:text-blue-800 transition-colors duration-300" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                            Innovative Solutions
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-200 mt-2 transition-colors duration-300">
                            We bring the latest technology to the forefront of matchmaking, ensuring a seamless and efficient experience for every user.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-md rounded-lg p-8 group hover:bg-purple-500 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-white transition-colors duration-300">
                            <FaHandshake className="text-3xl text-purple-500 group-hover:text-purple-800 transition-colors duration-300" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                            Trusted Connections
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-200 mt-2 transition-colors duration-300">
                            Thousands of users trust us to connect them with like-minded individuals for meaningful relationships.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-md rounded-lg p-8 group hover:bg-green-500 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-white transition-colors duration-300">
                            <FaLightbulb className="text-3xl text-green-500 group-hover:text-green-800 transition-colors duration-300" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                            Visionary Approach
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-200 mt-2 transition-colors duration-300">
                            Our vision is to revolutionize matchmaking by combining technology, trust, and innovation to foster genuine connections.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;
