import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            title: "Innovative Mapping Solutions",
            headLine: "Transforming Data into Strategic Insights",
            paragraph: "Unlock the potential of your data with our cutting-edge mapping solutions tailored for your business needs.",
            img: img1
        },
        {
            title: "Spatial Intelligence Experts",
            headLine: "Empowering Decisions with Precise Analytics",
            paragraph: "Leverage our spatial intelligence to make informed decisions, optimize operations, and enhance business outcomes.",
            img: img2
        },
        {
            title: "Customized GIS Services",
            headLine: "Turning Complex Data into Clear Visualizations",
            paragraph: "Our GIS services help you visualize complex data effortlessly, driving efficiency and accuracy in every project.",
            img: img3
        },
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % items.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex, items.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="w-full relative overflow-hidden" style={{ height: "100vh" }}>
            <div>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',

                        }}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                       <div className="flex flex-col justify-center item-center w-full h-[600px] pl-[100px]">


                            <div className="text-white font-bold " style={{ fontSize: "42px", width: "600.01px", height: "42px",fontFamily:"sans-serif" }}>
                                {items[currentIndex].title}
                            </div>
                            <div className="text-white text-4xl font-bold mt-10" style={{ fontSize: "52px", width: "523.41", height: "65px",fontFamily:"sans-serif"}}>
                                {items[currentIndex].headLine}
                            </div>
                            <div className="text-white  font-bold" style={{ fontSize: "14px", width: "475.59px", height: "26px",fontFamily:"sans-serif"}}>
                                {items[currentIndex].paragraph}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className=" inset-0 flex items-center justify-center text-white text-4xl font-bold">
                {items[currentIndex].title}
            </div>
            <div className=" inset-0 flex items-center justify-center text-white text-4xl font-bold">
                {items[currentIndex].headLine}
            </div>
            <div className=" inset-0 flex items-center justify-center text-white text-4xl font-bold">
                {items[currentIndex].paragraph}
            </div> */}
            <div className=" inset-0 flex justify-between items-center">
                <button
                    onClick={() => goToSlide((currentIndex - 1 + items.length) % items.length)}
                    className="bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer"
                    aria-label="Previous Slide"
                >
                    &#10094;
                </button>
                <button
                    onClick={() => goToSlide((currentIndex + 1) % items.length)}
                    className="bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer"
                    aria-label="Next Slide"
                >
                    &#10095;
                </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`bg-white bg-opacity-50 w-2.5 h-2.5 m-1 rounded-full ${index === currentIndex ? 'bg-green-700' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
