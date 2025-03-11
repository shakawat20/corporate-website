import React from "react";
import { motion } from "framer-motion";
import img1 from "../home/yspAboutUs.jpg";
import img2 from "../home/1.jpg";

const AboutUs = () => {
  return (
    <div className="relative text-white py-16 bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Section */}
      <div className="relative max-w-6xl mx-auto px-6 md:flex md:items-center">
        {/* Left Image */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={img1} alt="About Us" className="rounded-lg shadow-lg w-full h-auto" />
        </motion.div>

        {/* Right Text Content */}
        <motion.div 
          className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold border-b-4 border-blue-500 inline-block pb-2">ABOUT US</h1>
          <p className="mt-4 text-lg leading-relaxed">
            YSP Technology started its journey in 2010 to serve Bangladesh users with advanced and smart products. 
            It is a professional services company specialized in supplying world’s leading products and providing integrated solutions for clients across various industries.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            YSP offers industry-based solutions, GIS consulting, satellite image sales, application development, hardware support, 
            training programs, and professional services both locally and internationally.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            YSP collaborates with top software vendors and data providers to deliver the most modern and comprehensive geospatial solutions in Bangladesh and beyond.
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-6">
            <motion.a 
              href="/contact" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
