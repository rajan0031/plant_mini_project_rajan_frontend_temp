import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from '../../SearchBox/SearchBox'; // Ensure the path is correct

const AllPlantsAndHerbs = () => {
    const [query, setQuery] = useState('');
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPlants = async (searchQuery) => {
        const options = {
            method: 'GET',
            url: 'https://plants2.p.rapidapi.com/api/plants',
            params: { CN: searchQuery }, // Use the search query here
            headers: {
                'x-rapidapi-key': 'd099061082mshaa9484e68b47a41p10abe4jsn5eb181d0e1c9',
                'x-rapidapi-host': 'plants2.p.rapidapi.com',
                Authorization: 'GKZOHNZj0xP65kk0BAE2Tl9LGagm0pfD3DFNxAEEZcMQBhRZVDco8vbNJdnwwCo0'
            }
        };

        try {
            const response = await axios.request(options);
            setPlants(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlants('apple'); // Default search query
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchPlants(query); // Search with the query
    };

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-center p-4 text-red-500">Error fetching data</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">All Plants and Herbs</h1>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {plants.map((plant) => (
                    <div key={plant._id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                        <h2 className="text-xl font-semibold mb-2">{plant.CommonName}</h2>
                        <p className="text-gray-600 mb-2"><strong>Scientific Name:</strong> {plant.ScientificName}</p>
                        <p className="text-gray-600 mb-2"><strong>Family:</strong> {plant.Family}</p>
                        <p className="text-gray-600 mb-2"><strong>Category:</strong> {plant.Category}</p>
                        <p className="text-gray-600 mb-2"><strong>Growth Habit:</strong> {plant.GrowthHabit}</p>
                        <p className="text-gray-600 mb-2"><strong>Max Height (20 Yrs):</strong> {plant.MaxHeight20Yrs} feet</p>
                        <p className="text-gray-600 mb-2"><strong>Flower Color:</strong> {plant.FlowerColor}</p>
                        <p className="text-gray-600 mb-2"><strong>Foliage Color:</strong> {plant.FoliageColor}</p>
                        <p className="text-gray-600 mb-2"><strong>Fruit Color:</strong> {plant.FruitColor}</p>
                        <p className="text-gray-600 mb-2"><strong>Climate:</strong> {plant.ActiveGrowthPeriod}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPlantsAndHerbs;
