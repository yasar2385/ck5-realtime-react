import React, { useState } from "react";
import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";


// ==================== CONSTANTS ====================
const SAMPLE_USERS = [
    "Alex_Designer",
    "Maria_Writer",
    "John_Editor",
    "Sarah_Dev",
    "Mike_Manager",
    "Emma_Analyst",
    "David_Creator",
    "Lisa_Reviewer",
];

// ==================== LANDING PAGE COMPONENT ====================
const LandingPage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const generateDemoUser = () => {
        const randomUser =
            SAMPLE_USERS[Math.floor(Math.random() * SAMPLE_USERS.length)];
        const randomNum = Math.floor(Math.random() * 1000);
        return `${randomUser}_${randomNum}`;
    };

    const extractUsernameFromEmail = (emailValue) => {
        if (emailValue && emailValue.includes("@")) {
            const extractedUsername = emailValue.split("@")[0];
            setUsername(extractedUsername.replace(/[^a-zA-Z0-9_]/g, "_"));
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        extractUsernameFromEmail(value);
    };

    const handleAutoGenerate = () => {
        const demoUsername = generateDemoUser();
        const demoEmail = `${demoUsername.toLowerCase()}@demo.com`;
        setEmail(demoEmail);
        setUsername(demoUsername);
    };

    const handleSubmit = () => {
        if (email && username) {
            localStorage.setItem("email", email);
            localStorage.setItem("username", username);

            console.log("Saved:", { username, email });
            navigate("/editorPage"); // adjust route as per your setup
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all hover:scale-105">
                <div className="text-center mb-8">
                    <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        CKEditor 5 Collaboration
                    </h1>
                    <p className="text-gray-600">Real-time collaborative editing demo</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 
                 border border-gray-300 rounded-lg 
                 bg-white text-gray-900 
                 placeholder-gray-400 
                 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Auto-filled from email"
                            className="w-full px-4 py-3 
                 border border-gray-300 rounded-lg 
                 bg-white text-gray-900 
                 placeholder-gray-400 
                 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <button
                        onClick={handleAutoGenerate}
                        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold 
               hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                    >
                        <Users className="w-5 h-5" />
                        <span>Auto-Generate Demo Account</span>
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={!email || !username}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold 
               hover:bg-indigo-700 transition-colors 
               disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Start Editing
                    </button>
                </div>
            </div>
        </div>
    );
};

// ==================== EXPORT DEFAULT LANDING PAGE ====================
export default LandingPage;
