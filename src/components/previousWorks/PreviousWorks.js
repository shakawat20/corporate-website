import { useState } from "react";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";



const PreviousWorks=()=> {

    const projects = [
        {
          title: "GIS Training Program",
        //   image: "/images/gis-training.jpg",
          description: "Conducted an extensive GIS training program covering ArcGIS, QGIS, and remote sensing.",
          link: "#"
        },
        {
          title: "Land Survey & RTK Mapping",
        //   image: "/images/land-survey.jpg",
          description: "Completed a high-precision RTK land survey for a large infrastructure project.",
          link: "#"
        },
        {
          title: "Environmental Impact Assessment",
        //   image: "/images/environmental-study.jpg",
          description: "Conducted EIA studies for hydropower projects using advanced GIS techniques.",
          link: "#"
        },
        {
          title: "Oil & Gas Pipeline Mapping",
        //   image: "/images/oil-gas.jpg",
          description: "Developed GIS-based mapping solutions for oil and gas pipeline monitoring.",
          link: "#"
        },
        {
          title: "LiDAR & Aerial Survey",
        //   image: "/images/lidar.jpg",
          description: "Executed high-resolution LiDAR mapping for city planning and topographic analysis.",
          link: "#"
        }
      ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Our Previous Works</h1>
        <p className="mt-4 text-lg">Explore some of the projects we've successfully completed.</p>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Highlighted Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <a href={project.link} className="mt-4 inline-flex items-center text-blue-600 hover:underline">
                  View Details <FaExternalLinkSquareAlt className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-semibold">Want to Work with Us?</h2>
        <p className="mt-4 text-lg">Get in touch to discuss your project requirements.</p>
        <button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-4 py-2 rounded">Contact Us</button>
      </section>
    </div>
  );
}
export default PreviousWorks;
