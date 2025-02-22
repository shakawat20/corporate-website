import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import img1 from '../home/1.jpg';

const jobListings = [
  {
    id: 1,
    title: 'GIS Analyst',
    location: 'Dhaka, Bangladesh',
    department: 'Geospatial Services',
    description: 'Responsible for analyzing spatial data and creating maps to support decision-making in agribusiness.',
    responsibilities: 'Process and analyze GIS data. Develop interactive maps and spatial models. Support decision-making with geospatial insights.',
    qualifications: 'Degree in Geography, GIS, or related field. Proficiency in ArcGIS, QGIS, and spatial data analysis. 2+ years of experience in GIS projects.'
  },
  {
    id: 2,
    title: 'Remote Sensing Specialist',
    location: 'Chittagong, Bangladesh',
    department: 'Geospatial Services',
    description: 'Utilize remote sensing techniques to monitor land use, crop health, and environmental changes.',
    responsibilities: 'Analyze satellite and aerial imagery. Develop remote sensing models for agricultural and environmental applications. Provide geospatial insights.',
    qualifications: 'Degree in Remote Sensing, GIS, or Environmental Science. Proficiency in ENVI, Google Earth Engine, and machine learning for remote sensing. 3+ years of experience in remote sensing analysis.'
  },
  {
    id: 3,
    title: 'GIS Developer',
    location: 'Dhaka, Bangladesh',
    department: 'Geospatial Technology',
    description: 'Design and develop GIS applications and tools to support data visualization and analysis.',
    responsibilities: 'Develop web-based and desktop GIS applications. Integrate GIS with databases and APIs. Optimize spatial data processing.',
    qualifications: 'Degree in Computer Science, GIS, or a related field. Proficiency in JavaScript, Python, Leaflet, OpenLayers, and ArcGIS API. 3+ years of experience in GIS application development.'
  }
];

const JobDetails = () => {
  const { id } = useParams();
  const job = jobListings.find(job => job.id === parseInt(id));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return <p>Job not found.</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('coverLetter', formData.coverLetter);
    formDataToSend.append('resume', formData.resume);
    formDataToSend.append('jobTitle', job.title);

    try {
      const response = await fetch('http://localhost:5000/apply-job', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error submitting application:', error);
      setMessage('Error submitting application.');
    }
  };

  return (
    <div className="pl-32 pt-20 min-h-screen" style={{ backgroundImage: `url(${img1})`, color: "white" }}>
      <div>
        <h1 className="text-4xl font-bold">{job.title}</h1>
        <p className="mt-4"><strong>Location:</strong> {job.location}</p>
        <p className="mt-2"><strong>Department:</strong> {job.department}</p>
        <p className="mt-2">{job.description}</p>
        <h2 className="text-2xl font-semibold mt-6">Responsibilities</h2>
        <p className="mt-2">{job.responsibilities}</p>
        <h2 className="text-2xl font-semibold mt-6">Qualifications</h2>
        <p className="mt-2">{job.qualifications}</p>
      </div>

      <section className="mt-12 flex flex-col">
        <h2 className="text-2xl font-semibold w-100">Apply for this position</h2>
        <form className="mt-4 space-y-4 w-1/2 border p-5 rounded bg-white text-black" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium">Name:</label>
            <input type="text" name="name" required className="w-full p-2 border rounded" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-lg font-medium">Email:</label>
            <input type="email" name="email" required className="w-full p-2 border rounded" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-lg font-medium">Phone Number:</label>
            <input type="text" name="phone" required className="w-full p-2 border rounded" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-lg font-medium">Upload Resume:</label>
            <input type="file" name="resume" required className="w-full p-2 border rounded" onChange={handleFileChange} />
          </div>
          <div>
            <label className="block text-lg font-medium">Cover Letter (optional):</label>
            <textarea name="coverLetter" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
        </form>
        {message && <p className="mt-4 text-lg">{message}</p>}
      </section>
    </div>
  );
};

export default JobDetails;
