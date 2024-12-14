import React from 'react';
import { FaTrophy, FaHandshake, FaGlobeAmericas, FaLeaf } from 'react-icons/fa';
import logo from '../../assets/im3.jpeg';

const About = () => {
  return (
    <div
      className="min-h-screen bg-green-100/50 p-6 flex flex-col items-center"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
          About <span className="text-yellow-300">PR-Limited</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto drop-shadow-md">
          Leading the software revolution with innovation, excellence, and dedication to transform businesses worldwide.
        </p>
      </section>

      {/* Goals Section */}
      <section className="py-12 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Goals</h2>
          <p className="text-lg text-white">
            At PR-Limited, we aim to empower businesses with cutting-edge software solutions that drive efficiency,
            enhance productivity, and promote sustainable growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 w-full bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-800">
            To be a trusted partner for businesses globally by providing innovative technology solutions that foster
            progress and success. Our mission is to turn challenges into opportunities.
          </p>
        </div>
      </section>

      {/* Rewards and Recognition Section */}
      <section className="py-12 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Rewards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-left text-white">
            {/* Award Item */}
            <div className="flex items-center gap-4">
              <FaTrophy className="text-blue-500 text-3xl" />
              <p className="text-lg">🏆 Best Software Innovation Award 2023</p>
            </div>
            {/* Global Recognition */}
            <div className="flex items-center gap-4">
              <FaGlobeAmericas className="text-green-500 text-3xl" />
              <p className="text-lg">🌟 Recognized as a Top 50 Tech Companies Globally</p>
            </div>
            {/* Partner Recognition */}
            <div className="flex items-center gap-4">
              <FaHandshake className="text-purple-500 text-3xl" />
              <p className="text-lg">💼 Partner of Choice for Fortune 500 Companies</p>
            </div>
            {/* Sustainability */}
            <div className="flex items-center gap-4">
              <FaLeaf className="text-yellow-500 text-3xl" />
              <p className="text-lg">🌍 Commitment to Sustainability and Green Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-3xl font-bold mb-4 md:mb-0 text-center md:text-left drop-shadow-md">
            Ready to innovate with us? Get in touch today!
          </h3>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
