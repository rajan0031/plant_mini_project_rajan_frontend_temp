import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons
import { GoogleGenerativeAI } from "@google/generative-ai";
import loading from "../../assets/loading/loding.gif"

// Initialize the GoogleGenerativeAI instance with your API key
const genAI = new GoogleGenerativeAI("AIzaSyDY1HOBzIU-TBsh_uHv9IwoxzvDmTRxuho");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const ChatBot = () => {
    const [query, setQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('say the plant name');
    const [generetedOutput, setGeneratedOutput] = useState('enter the plant name');

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
                give ans like 
                Generate text with headings and content where each heading is bold and in uppercase, with a larger font size than the content. Highlight the headings by using asterisks around them (e.g., HEADING). The content should be in a normal font size, smaller than the headings, and presented in a clear, readable format
                
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

        // Call the async function if there is a submitted query
        if (submittedQuery) {
            generateContent();
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
                    placeholder="Search for a plat or herbs"
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
                {generetedOutput === false ? (
                    <div className="text-center">
                        <img src={loading} alt="Loading..." className="mx-auto" />
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="text-gray-900 text-lg bg-gray-50 p-6 rounded-lg leading-relaxed border border-gray-200 shadow-sm">
                            <h2 className="text-2xl font-semibold text-green-700 mb-4"></h2>
                            <div className="text-lg text-gray-700 whitespace-pre-wrap">
                                {generetedOutput}
                            </div>
                        </div>

                        {/* Example of using cards for content sections */}
                        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="bg-green-100 p-5 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-800 mb-2">Subheading 1</h3>
                                <p className="text-gray-700">Additional information or details related to the generated content can be styled in these sections to make it visually appealing and structured.</p>
                            </div>
                            <div className="bg-green-100 p-5 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-800 mb-2">Subheading 2</h3>
                                <p className="text-gray-700">You can even break down different aspects of the output into separate, neatly decorated cards or sections.</p>
                            </div>
                        </div> */}
                    </div>
                )}
            </div>

        </div>

    );
};

export default ChatBot;
