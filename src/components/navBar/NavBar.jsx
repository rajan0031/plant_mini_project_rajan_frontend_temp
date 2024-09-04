import React, { useState } from "react";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-green-800">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <img src="/placeholder.svg" alt="Logo" className="h-12" />
                    <button
                        onClick={toggleMenu}
                        className="text-white md:hidden focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`flex-col md:flex-row md:flex md:space-x-8 ${isMenuOpen ? "flex" : "hidden"
                        } md:flex`}
                >
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
                        <NavItem href="#" label="SERVICES" />
                        <NavItem href="#" label="PORTFOLIO" />
                        <NavItem href="#" label="OUR PROCESS" />
                        <NavItem href="#" label="ABOUT" />
                        <NavItem href="#" label="CONTACT US" />
                        <NavItem href="#" label="BLOG" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                    <PhoneIcon className="text-white h-6 w-6" />
                    <span className="text-white">303.800.7575</span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        SCHEDULE AN ESTIMATE
                    </button>
                </div>
            </div>
        </div>
    );
}

function NavItem({ href, label }) {
    return (
        <a href={href} className="text-white hover:text-gray-300 transition-colors duration-300">
            {label}
        </a>
    );
}

function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}
