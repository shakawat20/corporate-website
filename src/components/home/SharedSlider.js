import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import img1 from './dumy.jpg'
import img2 from './dumy2.jpg'
import img3 from './dumy3.jpg'

const SharedSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            title: "GIS Company",
            headLine: " ",
            paragraph: "“We’re really proud of this project. It’s been a great success. We feel that we’re probably further ahead than anybody else in the water industry in accurately positioning our transferred drains and sewers.”",

            img: img1
        },
        {
            title: "GIS Company",
            headLine: "Where You See Problems We Have Solution ",
            paragraph: "Highly recommended & a great experience. The process was simple and easy to understand. Trading was straight forward, the entire process was super smooth!",
            img: img2
        },
        {
            title: "GIS Company",
            headLine: " Where You See Problems We Have Solution",
            paragraph: "Highly recommended & a great experience. The process was simple and easy to understand. Trading was straight forward, the entire process was super smooth!",
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
        <div className="w-full relative overflow-hidden" style={{ height: "60vh" }}>
            <div>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{border:'2px solid blue',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}

                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        
                        <img src={item.img} style={{height:"100px",width:"100px",}} alt="" />
                       <div style={{width:"45%",fontSize:"22px"}}>{item.paragraph}</div>
                    </div>
                ))}
            </div>
         
            <div className=" inset-0 flex justify-between items-center">
                <button
                    onClick={() => goToSlide((currentIndex - 1 + items.length) % items.length)}
                    className="bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer"
                    aria-label="Previous Slide"
                >
                    {/* &#10094; */}
                </button>
                <button
                    onClick={() => goToSlide((currentIndex + 1) % items.length)}
                    className="bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer"
                    aria-label="Next Slide"
                >
                    {/* &#10095; */}
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

export default SharedSlider;
