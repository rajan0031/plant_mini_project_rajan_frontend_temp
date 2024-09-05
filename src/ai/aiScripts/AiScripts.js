import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the GoogleGenerativeAI instance with your API key
const genAI = new GoogleGenerativeAI("AIzaSyDY1HOBzIU-TBsh_uHv9IwoxzvDmTRxuho");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateContent() {
    try {
        const prompt = "who is india pm ?";
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

// Call the async function
generateContent();
