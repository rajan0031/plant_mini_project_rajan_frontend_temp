import React, { useState } from 'react';

function SearchBox() {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Add your search logic here
        console.log('Searching for:', query);
    };

    return (
        <div className="max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
            <form onSubmit={handleSearch} className="flex items-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for plants, herbs, etc."
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                    type="submit"
                    className="p-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBox;

