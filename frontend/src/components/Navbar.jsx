import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Navbar = ({ navLinks }) => {
  return (
    <>
      <div className="lg:hidden py-4 w-full h-screen absolute px-8 bg-white">
        <div className="flex items-center justify-center py-6">
          <Link to="/signin">
            <div className="text-darkblue w-fit bg-royalblue bg-opacity-30 rounded-2xl flex items-center gap-2 font-medium text-lg px-4 py-2 cursor-pointer">
              <FaUserCircle className="w-6 h-6 text-darkblue" />
              Sign In
            </div>
          </Link>
        </div>
        <ul>
          {navLinks.map(({ link, path }) => (
            <Link
              key={link}
              to={path}
              className={`block text-darkblue font-medium text-lg p-2 cursor-pointer ${
                location.pathname === path
                  ? "bg-skyblue bg-opacity-15 rounded-lg px4 py-1  "
                  : ""
              }`}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <div className="fixed bottom-0 w-full py-8 px-8 bg-white">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="flex items-center gap-4">
            <FaUserCircle className="w-6 h-6 text-darkblue" />
            <span>User Name</span>
          </div>
          <div>
            <FiLogOut className="w-6 h-6 text-darkblue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
