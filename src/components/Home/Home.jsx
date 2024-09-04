import React from 'react';
import NavBar from '../navBar/NavBar';  // Ensure the path is correct
import Slider from '../HeroSection/Slider/Slider';  // Ensure the path is correct

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container mx-auto mt-8">
                <Slider />
            </div>
            {/* Add other sections/components as needed below */}
        </div>
    );
};

export default Home;
