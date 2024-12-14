import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloud, FaLaptopCode, FaShieldAlt, FaChartBar, FaRobot, FaMobileAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
  const services = useLoaderData(); // Get services data

  const iconMapping = {
    FaCloud: <FaCloud size={40} />,
    FaLaptopCode: <FaLaptopCode size={40} />,
    FaShieldAlt: <FaShieldAlt size={40} />,
    FaChartBar: <FaChartBar size={40} />,
    FaRobot: <FaRobot size={40} />,
    FaMobileAlt: <FaMobileAlt size={40} />,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Services</h1>
        <p className="text-lg text-gray-600 mt-4">
          We offer a wide range of innovative solutions to help your business thrive in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className={`text-center mb-4 text-${service.color}`}>
              {iconMapping[service.icon]}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>

            {/* View More Button */}
            <Link to={`/services/${service.id}`} className="text-blue-500 hover:underline">
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
