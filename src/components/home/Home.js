import React from 'react';
import image1 from './1.jpg'
import Carousel from './Carousel';
import Feature from './Feature';
import Industries from './Industries';
import SharedSlider from './SharedSlider';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Feature></Feature>
            <Industries></Industries> 
              <Products></Products>
           <SharedSlider></SharedSlider>
        

        </div>
    );
};

export default Home;