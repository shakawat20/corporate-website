import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Blog = () => {
    const blogs = [
        {
          title: "The Future of GIS: Trends to Watch",
          image: "/images/gis-future.jpg",
          date: "Feb 15, 2025",
          excerpt: "Discover the latest advancements in GIS technology and how they shape industries worldwide.",
          link: "#"
        },
        {
          title: "How LiDAR is Revolutionizing Mapping",
          image: "/images/lidar-mapping.jpg",
          date: "Jan 28, 2025",
          excerpt: "Explore how LiDAR technology is transforming surveying and urban planning with high-precision data.",
          link: "#"
        },
        {
          title: "ArcGIS vs. QGIS: Which One Should You Choose?",
          image: "/images/arcgis-qgis.jpg",
          date: "Dec 10, 2024",
          excerpt: "A detailed comparison of the most popular GIS platforms to help you make the best decision.",
          link: "#"
        },
        {
          title: "The Role of GIS in Environmental Sustainability",
          image: "/images/environment-gis.jpg",
          date: "Nov 20, 2024",
          excerpt: "Learn how GIS technology is being used to tackle environmental challenges and climate change.",
          link: "#"
        }
      ];
    return (
        <div className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gray-900 text-white">
          <h1 className="text-4xl font-bold">Latest Insights & GIS Innovations</h1>
          <p className="mt-4 text-lg">Explore our latest blog posts on GIS, mapping, and geospatial technologies.</p>
        </section>
  
        {/* Blog Posts Grid */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <FaCalendarAlt className="mr-2" /> {blog.date}
                  </div>
                  <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                  <Link to='/blog/:id'></Link>
                  <a href={blog.link} className="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="text-center py-16 bg-gray-900 text-white">
          <h2 className="text-3xl font-semibold">Stay Updated with the Latest GIS Trends</h2>
          <p className="mt-4 text-lg">Subscribe to our blog for regular insights and updates.</p>
          <button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-4 py-2 rounded">Subscribe</button>
        </section>
      </div>
    );
};

export default Blog;