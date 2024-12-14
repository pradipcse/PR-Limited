import React from 'react';

const Update = () => {
  return (
    <div
      className="h-full bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your background image URL
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="bg-black/60 min-h-screen flex flex-col justify-center items-center px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Updates from <span className="text-yellow-400">PR-Limited</span>
          </h1>
          <p className="text-lg md:text-xl">
            Discover our latest job circulars and product releases. Stay up to date and grow with us!
          </p>
        </div>

        {/* Updates Section */}
        <div className="bg-gray-100 text-gray-800 rounded-lg shadow-lg p-8 w-full max-w-6xl">
          {/* Job Circulars */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Job Circulars</h2>
            <ul className="space-y-6">
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold">Software Developer</h3>
                <p className="text-gray-600 mt-2">
                  We are looking for experienced developers to join our team. 
                  <strong> Deadline: December 31, 2024</strong>.
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Apply Now
                </button>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold">UI/UX Designer</h3>
                <p className="text-gray-600 mt-2">
                  Join our design team to create stunning user experiences. 
                  <strong> Deadline: January 15, 2025</strong>.
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Apply Now
                </button>
              </li>
            </ul>
          </section>

          {/* Product Releases */}
          <section>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">New Product Releases</h2>
            <ul className="space-y-6">
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold">PR-Analytics Pro</h3>
                <p className="text-gray-600 mt-2">
                  A cutting-edge analytics tool to optimize your business strategies. Available from 
                  <strong> January 2025</strong>.
                </p>
                <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                  Learn More
                </button>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold">PR-Collab Suite</h3>
                <p className="text-gray-600 mt-2">
                  The ultimate collaboration suite for seamless teamwork. Available from 
                  <strong> February 2025</strong>.
                </p>
                <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                  Learn More
                </button>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Update;
