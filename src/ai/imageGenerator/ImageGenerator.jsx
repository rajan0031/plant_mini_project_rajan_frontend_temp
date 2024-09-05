import React, { useState } from 'react';

function ImageGenerator() {
    const [imageUrl, setImageUrl] = useState('');

    const handleGenerateImage = () => {
        // This is where you'd call your API to generate the image
        setImageUrl('https://your-image-url.com'); // Example image URL
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">AI Image Generator</h1>
            <button
                onClick={handleGenerateImage}
                className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
                Generate Image
            </button>

            {imageUrl && (
                <div className="w-64 h-64 rounded-lg shadow-lg overflow-hidden">
                    <img src={imageUrl} alt="Generated" className="w-full h-full object-cover" />
                </div>
            )}
        </div>
    );
}

export default ImageGenerator;
