import React, { useEffect } from 'react';
import { Link } from 'react-router';
import './Careers.css'
import img1 from '../home/1.jpg'
// import Testimonials from '../../components/careers/testimonials/Testimonials';
const jobListings = [
  {
    id: 1,
    title: 'GIS Analyst',
    location: 'Dhaka, Bangladesh',
    department: 'Geospatial Services',
    description: 'Responsible for analyzing spatial data and creating maps to support decision-making in agribusiness.',
  },
  {
    id: 2,
    title: 'Remote Sensing Specialist',
    location: 'Chittagong, Bangladesh',
    department: 'Geospatial Services',
    description: 'Utilize remote sensing techniques to monitor land use, crop health, and environmental changes.',
  },
  {
    id: 3,
    title: 'GIS Developer',
    location: 'Dhaka, Bangladesh',
    department: 'Geospatial Technology',
    description: 'Design and develop GIS applications and tools to support data visualization and analysis.',
  },
  {
    id: 4,
    title: 'Cartographer',
    location: 'Sylhet, Bangladesh',
    department: 'Geospatial Services',
    description: 'Create high-quality maps for land use planning, agriculture, and environmental management.',
  },
  {
    id: 5,
    title: 'Geospatial Data Scientist',
    location: 'Dhaka, Bangladesh',
    department: 'Data Science & GIS',
    description: 'Apply machine learning and statistical models to analyze geospatial data for predictive analytics.',
  },
];



const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="p-6 text-black" style={{backgroundImage:`url(${img1})`,color:"white"}}>
      <div className="text-center py-12 ">
        <h1 className="text-4xl font-bold">Join Our Team</h1>

      </div>
      
      <section className="mt-12" >
        <h2 className="text-3xl font-bold mb-6 text-center">Current Job Openings</h2>
        <div className=" grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4" id='careers'>
          {jobListings.map(job => (
            <div className="border p-6 rounded-lg shadow-md h-[300px]" key={job.id}>
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="mt-2"><strong>Location:</strong> {job.location}</p>
              <p className="mt-2"><strong>Department:</strong> {job.department}</p>
              <p className="mt-2">{job.description}</p>
              <Link to={`/jobDetails/${job.id}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Apply Now</Link>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Work With Us?</h2>
        <p className="text-lg text-center">We offer career growth opportunities, a supportive work culture, and comprehensive employee benefits.</p>
      </section> */}
      {/* <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Employee Testimonials</h2>
        <div className='flex justify-center items-center' style={{ border: "2px solid green"}}>
          <blockquote className="border-4 border-blue-500 pl-4 italic">"Great place to work!" - Employee Name</blockquote>
          <blockquote className="border-4 border-blue-500 pl-4 italic">"Supportive environment!" - Employee Name</blockquote>
        </div>
        <Testimonials></Testimonials>

      </section> */}
    </div>
  );
};

export default Careers;
