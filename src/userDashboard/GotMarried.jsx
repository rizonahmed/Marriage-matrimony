import React, { useState } from 'react';
import axios from 'axios';

const GotMarried = () => {
    const [selfBiodataId, setSelfBiodataId] = useState('');
    const [partnerBiodataId, setPartnerBiodataId] = useState('');
    const [coupleImage, setCoupleImage] = useState('');
    const [successStory, setSuccessStory] = useState('');
    const [loading, setLoading] = useState(false);

    // Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('selfBiodataId', selfBiodataId);
            formData.append('partnerBiodataId', partnerBiodataId);
            formData.append('coupleImage', coupleImage);
            formData.append('successStory', successStory);

            // Submit to the server (adjust the URL according to your backend)
            const response = await axios.post('http://localhost:5000/success-stories', formData);

            if (response.status === 200) {
                alert('Success story submitted successfully!');
                // Reset form
                setSelfBiodataId('');
                setPartnerBiodataId('');
                setCoupleImage('');
                setSuccessStory('');
            }
        } catch (error) {
            console.error('Error submitting success story:', error);
            alert('Failed to submit the success story. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Share Your Got Married Story</h1>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        {/* Self Biodata ID */}
                        <div>
                            <label htmlFor="selfBiodataId" className="block text-gray-700 text-lg font-semibold">Self Biodata ID</label>
                            <input
                                type="text"
                                id="selfBiodataId"
                                value={selfBiodataId}
                                onChange={(e) => setSelfBiodataId(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Partner Biodata ID */}
                        <div>
                            <label htmlFor="partnerBiodataId" className="block text-gray-700 text-lg font-semibold">Partner Biodata ID</label>
                            <input
                                type="text"
                                id="partnerBiodataId"
                                value={partnerBiodataId}
                                onChange={(e) => setPartnerBiodataId(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Couple Image Link */}
                        <div>
                            <label htmlFor="coupleImage" className="block text-gray-700 text-lg font-semibold">Couple Image Link (or Image Upload)</label>
                            <input
                                type="url"
                                id="coupleImage"
                                value={coupleImage}
                                onChange={(e) => setCoupleImage(e.target.value)}
                                placeholder="Enter image URL or upload an image"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Success Story */}
                        <div>
                            <label htmlFor="successStory" className="block text-gray-700 text-lg font-semibold">Success Story Review</label>
                            <textarea
                                id="successStory"
                                value={successStory}
                                onChange={(e) => setSuccessStory(e.target.value)}
                                rows="5"
                                placeholder="Share your feelings about using the website"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                            >
                                {loading ? 'Submitting...' : 'Submit Your Success Story'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GotMarried;
