import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaCloud, FaLaptopCode, FaShieldAlt, FaChartBar, FaRobot, FaMobileAlt } from 'react-icons/fa';

const ServiceDetail = () => {
  const { id } = useParams(); // Get the service ID from URL params
  const servicesData = useLoaderData(); // Access the loaded data here

  const service = servicesData.find((service) => service.id.toString() === id); // Find the specific service

  if (!service) {
    return <p className="text-center text-red-500 text-xl">Service not found</p>;
  }

  // Icon mapping for dynamic rendering based on service type
  const iconMapping = {
    FaCloud: <FaCloud size={40} className="text-blue-500" />,
    FaLaptopCode: <FaLaptopCode size={40} className="text-green-500" />,
    FaShieldAlt: <FaShieldAlt size={40} className="text-red-500" />,
    FaChartBar: <FaChartBar size={40} className="text-purple-500" />,
    FaRobot: <FaRobot size={40} className="text-yellow-500" />,
    FaMobileAlt: <FaMobileAlt size={40} className="text-teal-500" />,
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      {/* Service Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">{service.title}</h1>
        <p className="text-xl text-gray-600 mt-4">{service.description}</p>
      </div>

      {/* Service Detail Container */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl border-t-4 border-blue-500">
        {/* Icon Display */}
        <div className="text-center mb-8">
          {iconMapping[service.icon]}
        </div>

        {/* Features Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Features</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
            {service.extraDetails.features.map((feature, index) => (
              <li key={index} className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">{feature}</li>
            ))}
          </ul>
        </div>

        {/* Client Examples Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Client Examples</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
            {service.extraDetails.clientExamples.map((client, index) => (
              <li key={index} className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">{client}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Back to Services Button */}
      <div className="text-center mt-12">
        <a
          href="/services"
          className="inline-block px-8 py-3 mt-6 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Back to Services
        </a>
      </div>
    </div>
  );
};

export default ServiceDetail;
