import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons
import { GoogleGenerativeAI } from "@google/generative-ai";
import loading from "../../assets/loading/loding.gif";
import axios from 'axios';

// Initialize the GoogleGenerativeAI instance with your API key
const genAI = new GoogleGenerativeAI("AIzaSyDY1HOBzIU-TBsh_uHv9IwoxzvDmTRxuho");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const apiConfig = {
    method: 'POST',
    url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
    headers: {
        'x-rapidapi-key': "d099061082mshaa9484e68b47a41p10abe4jsn5eb181d0e1c9",
        'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
        'Content-Type': 'application/json'
    },
};

const ChatBot = () => {
    const [query, setQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('say the plant name');
    const [generatedOutput, setGeneratedOutput] = useState('enter the plant name');
    const [imageUrl, setImageUrl] = useState(null); // For storing generated image URL

    const handleSearch = () => {
        setSubmittedQuery(query);
    };

    useEffect(() => {
        console.log("Submitted query:", submittedQuery);
    }, [submittedQuery]);

    useEffect(() => {
        async function generateContent() {
            if (!submittedQuery) return;

            try {
                console.log("Generating content for:", submittedQuery);
                const prompt = `${submittedQuery}

              if(${submittedQuery} is a plant or herbs name ) then only give the ans as mentioned below 
              else -> just write the plant / herbs does not exist 

                give ans like 

                Generate text with headings and content where each heading is bold and in uppercase, with a larger font size than the content. Highlight the headings by using asterisks around them (e.g., HEADING). The content should be in a normal font size, smaller than the headings, and presented in a clear, readable format,use more and more emojies and symbols for the better user intractions
                
🌟 Local Name(s):
List all the common names for the plant or herb used in different regions or cultures.
🗺️ Include names from various countries or regions.
🌏 Use vibrant symbols and appealing fonts.
🌍 Global Name(s):

Provide the internationally recognized names of the plant or herb.
🌐 Mention any globally accepted names.
🌟 Use stylish fonts and relevant emojis.
🔬 Scientific Name:

Include the Latin binomial nomenclature of the plant or herb.
🧪 For example: Ocimum sanctum
🅾️ Use clear symbols and distinctive fonts.
🌎 Found In:

Specify the geographic regions or countries where this plant or herb is commonly found or native.
🌲 List specific regions, countries, or ecosystems.
🌍 Incorporate appealing icons and fonts.
🏺 Used In:

Describe the traditional or cultural practices where this plant or herb is used.
🏵️ Include uses in medicine, culinary arts, or rituals.
🧿 Use eye-catching symbols and fonts.
💡 Applications:

Outline the various applications of the plant or herb.
🍲 Mention uses in medicine, cooking, cosmetics, etc.
💅 Use creative fonts and emojis for emphasis.
🌿 Description:

Provide a brief description of the plant or herb, focusing on its appearance and notable characteristics.
🌱 Include details like color, size, and distinctive features.
✨ Utilize stylish symbols and fonts for clarity.
💊 Health Benefits:

List any known health benefits or therapeutic uses of the plant or herb.
🌟 Highlight benefits like immunity boosting, anti-inflammatory properties, stress relief, etc.
💪 Use bold symbols and appealing fonts.
⚠️ Precautions:

Note any precautions or side effects associated with the use of this plant or herb.
🚫 Mention who should avoid it (e.g., pregnant women, children) and potential interactions with medications.
⚠️ Incorporate clear symbols and readable fonts.
📜 Historical Significance:

Include any historical or cultural significance related to the plant or herb.
🕰️ Describe its role in history, religious connections, or famous stories associated with it.
📚 Use engaging symbols and fonts for a captivating presentation.

🌾 Soil Requirements:
Provide the ideal soil conditions for growing the plant or herb. 🧱 Mention the type of soil (e.g., loamy, sandy, clay). 💧 Include water retention, pH levels, and nutrient content. 🌍 Use environmental symbols and descriptive fonts.

🌞 Sunlight Needs:
Specify how much sunlight the plant or herb needs for optimal growth. 🌞 Mention whether it prefers full sun, partial shade, or full shade. 🌦️ Include any seasonal sunlight needs. 🌻 Use vibrant fonts and sun-related emojis.

💧 Watering Needs:
Detail the plant or herb's watering schedule. 💦 Include frequency (e.g., daily, weekly) and amount of water needed. 💧 Mention any specific irrigation techniques (e.g., drip, mist). 🌊 Use water-related icons and fonts for emphasis.

🌡️ Ideal Temperature Range:
Specify the temperature range that the plant or herb thrives in. 🌡️ Include optimal temperatures for growth and flowering. ❄️ Mention if it’s frost-tolerant or requires protection in winter. 🔥 Use temperature symbols and engaging fonts.

🌬️ Air Quality and Humidity:
Describe the air quality and humidity levels that the plant or herb prefers. 💨 Include preferences for air circulation or stagnant air. 💧 Mention whether it needs high, medium, or low humidity. 🌬️ Use relevant fonts and air or water vapor emojis.

🍃 Leaf Characteristics:
Detail the visual and structural characteristics of the plant's leaves. 🍂 Include shape, size, texture, and color. 🌿 Describe any notable features, such as variegation or fragrance. 🌱 Use leaf-related emojis and stylish fonts.

🌸 Flowering Season and Color:
Provide details about the plant or herb's flowering season. 🌸 Mention when it blooms and for how long. 🎨 Include the color(s) and type of flowers it produces. 🌼 Use flower-related icons and colorful fonts.

🌾 Growth Habits and Size:
Describe the growth habits of the plant or herb (e.g., sprawling, upright). 📏 Mention its average height and width. 🌿 Include details like growth speed and spreading patterns. 🌱 Use growth-related symbols and readable fonts.

🦋 Attracts Wildlife:
Mention any wildlife or beneficial insects that the plant or herb attracts. 🦋 Include details like pollinators (e.g., bees, butterflies) or birds. 🐝 Mention whether it supports biodiversity or is part of a specific ecosystem. 🌸 Use wildlife emojis and nature-themed fonts.

🍂 Seasonal Care and Maintenance:
Detail the seasonal care requirements for the plant or herb. 🍁 Mention tasks like pruning, mulching, or fertilizing. ❄️ Include tips for winterizing or preparing for dormancy. 🌾 Use nature and season-related icons, along with well-structured fonts.


`;
                const result = await model.generateContent(prompt);
                const responseText = result?.response?.text() || 'No response text available';
                setGeneratedOutput(responseText);
                console.log("Generated output:", responseText);
            } catch (error) {
                console.error("Error generating content:", error);
                setGeneratedOutput('Error generating content');
            }
        }

        async function generateImageFromText(text) {
            try {
                const response = await axios.request({
                    ...apiConfig,
                    data: { inputs: text }
                });
                const imageUrl = response.data.url;
                setImageUrl(imageUrl);
                console.log("Generated image URL:", imageUrl);
            } catch (error) {
                console.error("Error generating image:", error);
            }
        }

        // Call the async functions if there is a submitted query
        if (submittedQuery) {
            generateContent();
            generateImageFromText(`$please generate a image of the {submittedQuery} and it must be a realistic image`); // Generate image based on the submitted query
        }
    }, [submittedQuery]);

    return (
        <div className="max-w-4xl mx-auto mt-10">
            {/* Search Box */}
            <div className="w-full p-4 bg-green-100 rounded-lg shadow-md">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a plant or herb"
                    className="w-full p-3 border border-gray-300 rounded-lg text-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-green-500"
                />
                <button
                    onClick={handleSearch}
                    className="mt-4 w-full p-3 bg-green-500 text-white hover:bg-green-600 rounded-lg transition"
                >
                    <FaSearch size={20} className="inline-block mr-2" /> Search
                </button>
            </div>

            {/* Generated Content */}
            <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
                {generatedOutput === false ? (
                    <div className="text-center">
                        <img src={loading} alt="Loading..." className="mx-auto" />
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="text-gray-900 text-lg bg-gray-50 p-6 rounded-lg leading-relaxed border border-gray-200 shadow-sm">
                            <h2 className="text-2xl font-semibold text-green-700 mb-4"></h2>
                            <div className="text-lg text-gray-700 whitespace-pre-wrap">
                                {generatedOutput}
                            </div>
                        </div>

                        {/* Display the generated image if available */}
                        {!imageUrl ? "" : (
                            <div className="mt-6 text-center">
                                <img
                                    src={imageUrl}
                                    alt="Generated from query"
                                    className="rounded-lg shadow-lg max-w-full"
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBot;
