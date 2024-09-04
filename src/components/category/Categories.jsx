import React, { useState } from 'react';

const categories = [
    { name: 'Flower Plants', items: ['Rose', 'Lily', 'Tulip', 'Orchid'] },
    { name: 'Indoor Plants', items: ['Snake Plant', 'Peace Lily', 'ZZ Plant', 'Pothos'] },
    { name: 'Crotons', items: ['Gold Dust', 'Petra', 'Mammy', 'Compacta'] },
    { name: 'Pot Plants Online', items: ['Ceramic Pots', 'Plastic Pots', 'Hanging Pots', 'Self-Watering Pots'] },
    { name: 'Hanging and Creeper Plants', items: ['English Ivy', 'String of Pearls', 'Boston Fern', 'Philodendron'] },
    { name: 'Combo', items: ['Plant & Pot Combo', 'Seed & Soil Combo', 'Indoor Plant Combo', 'Outdoor Plant Combo'] },
    { name: 'Fertilizer And Seeds', items: ['Organic Fertilizers', 'Chemical Fertilizers', 'Flower Seeds', 'Vegetable Seeds'] },
    { name: 'Planters', items: ['Wooden Planters', 'Metal Planters', 'Concrete Planters', 'Hanging Planters'] },
    { name: 'Fruit And Tree', items: ['Apple Tree', 'Mango Tree', 'Orange Tree', 'Banana Plant'] },
];

export default function Categories() {
    return (
        <div className="bg-green-900 text-white py-4">
            <div className="container mx-auto flex flex-wrap justify-between">
                {categories.map((category, index) => (
                    <CategoryDropdown key={index} name={category.name} items={category.items} />
                ))}
            </div>
        </div>
    );
}

function CategoryDropdown({ name, items }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            className="relative flex-1 flex items-center justify-center px-2 md:px-4 mb-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="text-white hover:text-gray-300 focus:outline-none flex items-center"
            >
                {name}
                <svg
                    className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>
            <div
                className={`absolute top-full left-0 mt-2 bg-green-700 text-white rounded shadow-lg transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
                style={{ minWidth: '160px' }}
            >
                {items.map((item, index) => (
                    <a key={index} href="#" className="block px-4 py-2 hover:bg-green-600">
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
}
