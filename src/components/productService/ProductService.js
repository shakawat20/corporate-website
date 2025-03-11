import { FaChalkboardTeacher, FaMapMarkedAlt, FaGlobe, FaWater, FaOilCan, FaMap, FaNetworkWired, FaServer, FaCheckCircle, FaLayerGroup } from "react-icons/fa";
import img3 from '../home/3.jpg'
const ProductService = () => {
  const services = [
    { title: "ENVI Remote Sensing Solutions", icon: <FaLayerGroup className="text-green-600" />, description: "Advanced image analysis and remote sensing for GIS applications." },
    { title: "ArcGIS Solutions", icon: <FaGlobe className="text-blue-600" />, description: "Comprehensive ArcGIS-based mapping, analysis, and geospatial solutions." },
    { title: "PIX4D Photogrammetry", icon: <FaMapMarkedAlt className="text-yellow-600" />, description: "High-accuracy photogrammetry and 3D mapping using PIX4D technology." },
    { title: "GIS Training & Programs", icon: <FaChalkboardTeacher className="text-blue-600" />, description: "Comprehensive GIS training covering software, tools, and field applications." },
    { title: "Land Survey & Digital Mapping", icon: <FaMapMarkedAlt className="text-green-600" />, description: "RTK, Total Station, and advanced digital mapping solutions." },
    { title: "ESRI USA Authorized Services", icon: <FaGlobe className="text-purple-600" />, description: "Official ESRI software integration and geospatial solutions." },
    { title: "Environmental Consulting", icon: <FaGlobe className="text-blue-600" />, description: "Sustainability planning, impact assessments, and compliance consulting." },
    { title: "Water Engineering & Hydrologic Services", icon: <FaWater className="text-cyan-600" />, description: "Hydrologic studies, embankment design, and water resource management." },
    { title: "Oil & Gas Industry Services", icon: <FaOilCan className="text-orange-600" />, description: "Geospatial solutions for pipeline mapping, site analysis, and risk management." },
    { title: "LiDAR & Aerial Surveying", icon: <FaMap className="text-yellow-600" />, description: "High-resolution LiDAR mapping and UAV-based aerial surveys." },
    { title: "Cadastral Surveying", icon: <FaMap className="text-red-600" />, description: "Legal boundary mapping and land ownership verification." },
    { title: "IT & Network Solutions", icon: <FaNetworkWired className="text-teal-600" />, description: "Enterprise IT solutions, network infrastructure, and cybersecurity." },
    { title: "ERP Solutions", icon: <FaServer className="text-indigo-600" />, description: "Custom ERP systems for business process automation and efficiency." }
  ];

  const whyChooseUsPoints = [
    'Cutting-edge GIS technology',
    'Expertise in geospatial analysis',
    'Tailored solutions for agriculture & environment',
    'Comprehensive training programs',
    'Authorized ESRI USA consultant',
    'End-to-end solutions for oil and gas industries'
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section style={{backgroundImage:`url(${img3})`, backgroundSize: 'cover',backgroundPosition: 'center',width: '100%', height: '100%',}} className="text-center py-16 bg-blue-600 text-white" >
        <h1 className="text-4xl font-bold">Powerful GIS Solutions for Smarter Decisions</h1>
        <p className="mt-4 text-lg">Optimize land use, environmental monitoring, and precision agriculture with our GIS expertise.</p>
        <button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-4 py-2 rounded">Get Started</button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our GIS Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 shadow-lg flex items-center space-x-4 bg-white rounded-lg">
              <div className="text-3xl">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-700 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {whyChooseUsPoints.map((point, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-lg">
              <FaCheckCircle className="text-green-600" aria-label="Check Circle Icon" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gray-900 text-white">
        <h2 className="text-3xl font-semibold">Get Started with GIS Today!</h2>
        <p className="mt-4 text-lg">Contact us for a consultation or a demo of our GIS solutions.</p>
        <button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-4 py-2 rounded">Contact Us</button>
      </section>
    </div>
  );
}

export default ProductService;