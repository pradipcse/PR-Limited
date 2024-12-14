import React, { useContext, useState } from 'react';
import logo from '../../assets/Ig-2.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    const photoURL = form.get('photoURL');

    creatUser(email, password)
      .then((result) => {
        console.log('User Created:', result.user);
        console.log('Photo URL:', photoURL); // Save or use the photo URL as needed
        navigate('/LogIn');
      })
      .catch((error) => {
        console.error('Error creating user:', error.message);
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-red-500 to-yellow-500 bg-cover bg-blend-overlay p-5"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <form
        onSubmit={handleSignUp}
        className="flex flex-col bg-green-100/60 w-full max-w-md md:max-w-lg lg:max-w-xl gap-6 px-5 md:px-10 lg:px-16 py-10 rounded-xl shadow-lg"
      >
        <h3 className="text-3xl font-bold text-pink-600 text-center">Sign Up</h3>

        {/* Name Field */}
        <label htmlFor="Name" className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-pink-400"
            required
          />
        </label>

        {/* Email Field */}
        <label htmlFor="Email" className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-pink-400"
            required
          />
        </label>

        {/* Photo URL Field */}
        <label htmlFor="PhotoURL" className="w-full">
          <input
            type="url"
            name="photoURL"
            placeholder="Photo URL"
            className="w-full rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-pink-400"
          />
        </label>

        {/* Password Field with Toggle */}
        <label htmlFor="Password" className="w-full relative">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="w-full rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-pink-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </label>

        {/* Submit Button */}
        <label htmlFor="" className="w-full">
          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Submit
          </button>
        </label>

        {/* Redirect to Login */}
        <label htmlFor="">
          <p className="text-center text-lg">
            Already have an account?{' '}
            <Link to="/LogIn" className="font-bold text-blue-700 hover:underline">
              Sign In
            </Link>
          </p>
        </label>
      </form>
    </div>
  );
};

export default Register;
