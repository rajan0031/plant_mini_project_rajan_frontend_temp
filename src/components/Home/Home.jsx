import React from 'react';
import NavBar from '../navBar/NavBar';  // Ensure the path is correct
import Slider from '../HeroSection/Slider/Slider';  // Ensure the path is correct
import AllPlantsAndHerbs from '../HeroSection/AllPlantsAndHerbs/AllPlantsAndHerbs'; // Ensure the path is correct
import SearchBox from '../SearchBox/SearchBox';

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container mx-auto mt-8">
                <Slider />
            </div>

            {/* Featured Categories Section */}
            <section className="mt-16 px-4">
                <h2 className="text-2xl font-semibold text-center mb-8">Featured Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-green-200 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Flower Plants</h3>
                        <p>Explore a variety of beautiful flower plants for your garden.</p>
                    </div>
                    <div className="bg-green-200 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Indoor Plants</h3>
                        <p>Bring nature inside your home with our range of indoor plants.</p>
                    </div>
                    <div className="bg-green-200 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Fruit Trees</h3>
                        <p>Grow your own fruits with our selection of fruit trees.</p>
                    </div>
                    {/* Add more categories as needed */}
                </div>
            </section>

            {/* All Plants and Herbs Section */}
            <section className="mt-16 px-4">
                <h2 className="text-2xl font-semibold text-center mb-8">All Plants and Herbs</h2>
                <AllPlantsAndHerbs />
            </section>

            {/* Testimonials Section */}
            <section className="mt-16 px-4 bg-gray-100 py-8">
                <h2 className="text-2xl font-semibold text-center mb-8">What Our Customers Say</h2>
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <blockquote className="md:w-1/3 text-center mb-8 md:mb-0">
                        <p className="italic">"The best plants I've ever purchased! My home feels so much more alive now."</p>
                        <footer className="mt-4">- Rajan</footer>
                    </blockquote>
                    <blockquote className="md:w-1/3 text-center">
                        <p className="italic">"Amazing service and the plants are of top-notch quality. Highly recommend!"</p>
                        <footer className="mt-4">- Divya</footer>
                    </blockquote>
                </div>
            </section>

            {/* About Us Section */}
            <section className="mt-16 px-4">
                <h2 className="text-2xl font-semibold text-center mb-8">About Us</h2>
                <p className="text-center max-w-2xl mx-auto">
                    We are passionate about bringing nature closer to you. Our goal is to provide the best quality plants that not only enhance your living spaces but also contribute to a greener planet. Whether you're looking to start a garden, beautify your home, or grow your own food, we have the perfect plants for you.
                </p>
            </section>

            {/* Footer Section */}
            <footer className="mt-16 px-4 py-8 bg-green-600 text-white text-center">
                <p>&copy; 2024 Virtual Herbal Garden. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
