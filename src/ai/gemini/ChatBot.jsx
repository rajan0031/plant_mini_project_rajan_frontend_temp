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

                   1. **Local Name(s)**: List all common names used in different regions or cultures.
                2. **Global Name(s)**: Provide the internationally recognized name(s) of the plant or herb.
                3. **Scientific Name**: Include the Latin binomial nomenclature of the plant or herb.
                4. **Found In**: Specify the geographic regions or countries where this plant or herb is commonly found or native.
                5. **Used In**: Mention the traditional or cultural practices where this plant or herb is used, including medicinal, culinary, or ritual uses.
                6. **Applications**: Describe the various applications of the plant or herb, including its uses in medicine, cooking, cosmetics, etc.
                7. **Description**: Provide a brief description of the plant or herb, including its appearance and any notable characteristics.
                8. **Health Benefits**: List any known health benefits or therapeutic uses.
                9. **Precautions**: Note any precautions or side effects associated with the use of this plant or herb.
                10. **Historical Significance**: Include any historical or cultural significance related to the plant or herb.
                
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
                    placeholder="Search for information..."
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
                            <h2 className="text-2xl font-semibold text-green-700 mb-4">Generated Content</h2>
                            <div className="text-lg text-gray-700 whitespace-pre-wrap">
                                {generetedOutput}
                            </div>
                        </div>

                        {/* Example of using cards for content sections */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="bg-green-100 p-5 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-800 mb-2">Subheading 1</h3>
                                <p className="text-gray-700">Additional information or details related to the generated content can be styled in these sections to make it visually appealing and structured.</p>
                            </div>
                            <div className="bg-green-100 p-5 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-800 mb-2">Subheading 2</h3>
                                <p className="text-gray-700">You can even break down different aspects of the output into separate, neatly decorated cards or sections.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>

    );
};

export default ChatBot;
