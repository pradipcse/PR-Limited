import { useContext } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About" className="hover:text-blue-500">About</NavLink>
      </li>
      <li className="relative group">
        <div className="inline-block">
          <NavLink to="/Services" className="hover:text-blue-500">Services</NavLink>
        </div>
      </li>
      <li>
        <NavLink to="/Update" className="hover:text-blue-500">Update</NavLink>
      </li>
      <li>
        <NavLink to="/Contact" className="hover:text-blue-500">Contact Us</NavLink>
      </li>
    </>
  );

  const {user, logOut} =useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = () => {
         logOut()
         .then()
         .catch()
  };

  return (
    <div className="navbar bg-gray-100 shadow-md py-4 px-6 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">PR-Limited</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
         {
             user ? 
              <button onClick={handleLogin}>Sing Out</button>
             : <Link to ="/LogIn">
                 <button className="btn">Sign In</button>
               </Link>
         }
      </div>
    </div>
  );
};

export default Navbar;
