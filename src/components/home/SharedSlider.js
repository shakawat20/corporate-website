import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import img1 from "./dumy.jpg";
import img2 from "./dumy2.jpg";
import img3 from "./dumy3.jpg";

const SharedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "GIS Company",
      headLine: " ",
      paragraph:
        "“We’re really proud of this project. It’s been a great success. We feel that we’re probably further ahead than anybody else in the water industry in accurately positioning our transferred drains and sewers.”",
      img: img1,
    },
    {
      title: "GIS Company",
      headLine: "Where You See Problems We Have Solution ",
      paragraph:
        "Highly recommended & a great experience. The process was simple and easy to understand. Trading was straight forward, the entire process was super smooth!",
      img: img2,
    },
    {
      title: "GIS Company",
      headLine: "Where You See Problems We Have Solution",
      paragraph:
        "Highly recommended & a great experience. The process was simple and easy to understand. Trading was straight forward, the entire process was super smooth!",
      img: img3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden flex justify-center items-center bg-gray-900">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: index === currentIndex ? 1 : 0, x: index === currentIndex ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={item.img}
            alt=""
            className="w-24 h-24 object-cover rounded-full shadow-lg mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <h2 className="text-2xl font-semibold text-white mb-2">{item.headLine}</h2>
          <p className="text-lg text-gray-300 max-w-2xl">{item.paragraph}</p>
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-6">
        <button
          onClick={() => goToSlide((currentIndex - 1 + items.length) % items.length)}
          className="p-3 bg-white bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition"
        >
          &#10094;
        </button>
        <button
          onClick={() => goToSlide((currentIndex + 1) % items.length)}
          className="p-3 bg-white bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition"
        >
          &#10095;
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-green-500 scale-110" : "bg-gray-400"}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SharedSlider;
