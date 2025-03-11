import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaBuilding, FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import img1 from '../home/1.jpg'; // Background Image

const jobListings = [
  { id: 1, title: 'GIS Analyst', location: 'Dhaka', department: 'Geospatial Services' },
  { id: 2, title: 'Remote Sensing Specialist', location: 'Chittagong', department: 'Geospatial Services' },
  { id: 3, title: 'GIS Developer', location: 'Dhaka', department: 'Geospatial Technology' },
  { id: 4, title: 'Cartographer', location: 'Sylhet', department: 'Geospatial Services' },
  { id: 5, title: 'Geospatial Data Scientist', location: 'Dhaka', department: 'Data Science & GIS' },
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white">
      {/* Hero Section */}
      <div
        className="h-[60vh] flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg max-w-lg text-center">Be part of an innovative geospatial company making a real-world impact.</p>
        <Link
          to="/about-us"
          className="mt-6 bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
        >
          Learn More
        </Link>
      </div>

      {/* Job Listings with Search */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Current Job Openings</h2>
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full max-w-lg mx-auto block px-4 py-2 border rounded-lg text-black mb-6"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold mb-3">{job.title}</h3>
              <p className="flex items-center text-gray-600"><FaLocationArrow className="mr-2" /> {job.location}</p>
              <p className="flex items-center text-gray-600"><FaBuilding className="mr-2" /> {job.department}</p>
              <Link
                to={`/jobDetails/${job.id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
            <p>Work on cutting-edge geospatial and GIS technologies.</p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Growth-Oriented Culture</h3>
            <p>We support learning, development, and career progression.</p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
            <p>Attractive salaries, health benefits, and flexible work options.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto text-center py-12">
        <h2 className="text-3xl font-bold mb-6">What Our Employees Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserCircle className="text-4xl text-blue-600 mb-4 mx-auto" />
            <blockquote className="italic text-gray-700">"Amazing place to grow professionally!"</blockquote>
            <p className="text-sm mt-4">- Jane Doe, GIS Analyst</p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserCircle className="text-4xl text-blue-600 mb-4 mx-auto" />
            <blockquote className="italic text-gray-700">"Great culture and supportive team."</blockquote>
            <p className="text-sm mt-4">- John Smith, Remote Sensing Specialist</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
