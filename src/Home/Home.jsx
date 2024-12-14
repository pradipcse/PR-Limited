import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUsers, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa';
import b1 from '../assets/banner1.jpg';
import b2 from '../assets/banner2.jpg';
import b3 from '../assets/banner3.jpg';
import b4 from '../assets/banner4.jpg';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpeg';
import f4 from '../assets/f4.png';

const Home = () => {
  const servicesData = useLoaderData();
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { icon: <FaUsers size={40} className="text-blue-600" />, label: 'Tech Partners', value: 50 },
    { icon: <FaProjectDiagram size={40} className="text-green-600" />, label: 'Projects', value: 120 },
    { icon: <FaLaptopCode size={40} className="text-purple-600" />, label: 'Professionals', value: 300 },
  ];

  const familyImages = [f1, f2, f3, f4];

  const banners = [b1, b2, b3, b4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`carousel-item absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={banner} className="w-full h-full object-cover" alt={`Banner ${index + 1}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/70 flex items-center justify-center">
              <h2 className="text-white text-xl sm:text-3xl lg:text-5xl font-bold text-center">
                Welcome to Our Platform <br />
                <span className="text-yellow-400">Innovating the Future</span>
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-r from-blue-100 via-white to-blue-50">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition"
            >
              <div className="mb-2 sm:mb-4">{stat.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Want to Join Us Section */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Want to Join Us?</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-lg">
          Become a part of our growing community of tech enthusiasts and professionals.
        </p>
        <Link to="/contact">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 rounded-full text-black font-bold hover:bg-yellow-600 transition">
            Join Now
          </button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-r from-green-100 via-white to-green-50">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">Our Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {servicesData.map((service, index) => (
              <Link to={`/services/${service.id}`} key={index}>
                <li
                  className="p-4 sm:p-6 bg-white shadow-lg rounded-lg text-center font-medium text-base sm:text-lg hover:bg-blue-100 transition"
                >
                  {service.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Family Section */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-r from-gray-50 via-white to-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Our Family</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
            {familyImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Family ${index + 1}`}
                className="w-full h-28 sm:h-40 lg:h-52 object-cover rounded-lg shadow-md hover:shadow-lg transition"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
