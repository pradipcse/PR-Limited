import React, { useContext, useState } from 'react';
import logo from '../../assets/login.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { login, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(''); // To store login errors
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility

  const handleSignin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    login(email, password)
      .then((result) => {
        console.log(result.user);
        console.log("Success login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("Login error: ", error.message);
        setError(error.message); // Show error message in state
      });
  };

  const glog = () => {
    googleSignIn()
      .then((result) => {
        console.log("Google Sign In Success:", result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("Google Sign In error: ", error.message);
        setError(error.message); // Show error message in state
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-gradient-to-r from-black via-red-500 to-yellow-500 bg-cover bg-blend-overlay"
         style={{ backgroundImage: `url(${logo})` }}>
      <form
        onSubmit={handleSignin}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white/70 backdrop-blur-md flex flex-col gap-6 p-6 md:p-10 rounded-xl shadow-md"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-pink-600 text-center">Log In</h3>
        {error && <p className="text-red-500 text-center text-sm md:text-lg">{error}</p>}
        <label htmlFor="Email" className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-lg p-2 border border-gray-300 focus:ring-2 focus:ring-pink-400"
            required
          />
        </label>
        <label htmlFor="Password" className="flex flex-col gap-1 relative">
          <span className="text-sm text-gray-700">Password</span>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full rounded-lg p-2 border border-gray-300 focus:ring-2 focus:ring-pink-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </label>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white font-bold py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Submit
        </button>
        <p className="text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link to="/SignUp" className="font-bold text-blue-700">
            Sign Up/Register
          </Link>
        </p>
      </form>
      <button
        onClick={glog}
        className="w-3/4 sm:w-1/2 md:w-1/3 bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition mt-3"
      >
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
