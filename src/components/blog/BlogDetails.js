import React from 'react';
import { useParams } from 'react-router';

const BlogDetails = () => {

    const blogData = {
        1: {
          title: "The Future of GIS: Trends to Watch",
          image: "/images/gis-future.jpg",
          date: "Feb 15, 2025",
          content: "GIS technology is rapidly evolving, shaping various industries including urban planning, environment, and transportation...",
        },
        2: {
          title: "How LiDAR is Revolutionizing Mapping",
          image: "/images/lidar-mapping.jpg",
          date: "Jan 28, 2025",
          content: "LiDAR technology is becoming a game-changer for accurate and high-resolution mapping...",
        },
      };

    const { id } = useParams();
    const blog = blogData[id];
  
    if (!blog) return <p className="text-center text-red-500">Blog not found</p>;

   
    return (
        <div className="max-w-4xl mx-auto p-6">
        <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
        <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
        <p className="mt-4 text-gray-800">{blog.content}</p>
      </div>
    );
};

export default BlogDetails;