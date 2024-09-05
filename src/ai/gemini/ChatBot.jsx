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
        <div className="flex flex-col max-w-md mx-auto mt-10 h-[80vh] bg-gradient-to-b from-green-200 to-green-400 border rounded-lg overflow-hidden shadow-lg">
            <div className="flex-1 p-4 overflow-y-auto">
                {/* Chat Messages */}
                <div className="flex flex-col space-y-4">
                    {submittedQuery && (
                        <div className="flex items-start space-x-2">
                            <div className="bg-green-600 text-white p-3 rounded-lg max-w-xs">
                                <p className="whitespace-pre-wrap text-lg">{submittedQuery}</p>
                            </div>
                        </div>
                    )}
                    {generetedOutput == false ? <img src={loading} alt="" /> : (
                        <div className="flex items-start space-x-2">
                            <div className="bg-green-200 text-black p-3 rounded-lg max-w-xs">
                                <p className="whitespace-pre-wrap text-lg">{generetedOutput}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center border-t border-gray-300 p-4 bg-green-100">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type your query here..."
                    className="flex-1 p-2 border-none outline-none rounded-lg text-lg bg-white text-gray-700 placeholder-gray-500"
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 p-2 bg-green-500 text-white hover:bg-green-600 rounded-lg"
                >
                    <FaSearch size={20} />
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
