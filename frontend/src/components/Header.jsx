import React from "react";
import Logo from "../assets/images/logo.png";
import Search from "../components/Search";
import Button1 from "./Button1";
import { FaBars, FaXmark } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Navbar from "./Navbar";
import SignupForm from "../components/SignupForm";

const Header = () => {
  const navLinks = [
    { link: "About", path: "/about" },
    { link: "Contact", path: "/contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const location = useLocation();
  // Search Box
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapefruit",
    "Huckleberry",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Ugli fruit",
    "Vanilla bean",
    "Watermelon",
    "Ximenia caffra",
    "Yellow passion fruit",
    "Zucchini",
    "Apricot",
    "Blueberry",
    "Clementine",
    "Damson",
    "Eggplant",
    "Feijoa",
    "Grape",
    "Honeydew",
  ];
  const [showSignupForm, setShowSignupForm] = useState(false);
  const handleSignupClick = () => {
    setShowSignupForm(!showSignupForm);
  };

  const handleCloseForm = () => {
    setShowSignupForm(false);
  };
  return (
    <>
      <div>
        <header>
          <nav className="px-4 max-w-screen-2xl z-50 mx-auto">
            <div className="py-2 container mx-auto flex justify-between font-medium items-center">
              {/* Logo */}
              <div className="hidden lg:flex items-center text-lg lg:text-2xl">
                <Link
                  to="/"
                  className="flex items-center text-nowrap text-blue font-bold text-lg lg:text-2xl cursor-pointer"
                >
                  <img
                    src={Logo}
                    alt="logo"
                    className="object-cover w-full h-14"
                  />

                  <span>Real Estate</span>
                </Link>
              </div>

              {/* Navlinks */}
              <div>
                <ul className="hidden lg:flex space-x-6 text-tertiary">
                  {navLinks.map(({ link, path }) => (
                    <Link
                      key={link}
                      to={path}
                      className={`block text-gray-600 hover:bg-softgray hover:bg-opacity-60 hover:rounded-full px-4 py-2  font-medium text-base cursor-pointer ${
                        location.pathname === path ? "text-skyblue" : ""
                      }`}
                    >
                      {link}
                    </Link>
                  ))}
                </ul>
              </div>
              {/* Search Input */}
              <div className="hidden lg:flex ">
                <Search suggestions={suggestions} />
              </div>
              {/* Auth Buttons */}
              <div className="hidden lg:flex space-x-2 items-center">
                <div>
                  <Link
                    to="/signin"
                    className="hover:bg-softgray hover:bg-opacity-60 hover:rounded-full px-4 py-2 "
                  >
                    Sign in
                  </Link>
                </div>
                <div>
                  <Button1 text="Sign up" onClick={handleSignupClick} />
                  <SignupForm show={showSignupForm} onClose={handleCloseForm} />
                </div>
              </div>
            </div>
          </nav>
          {/* Mobile Header */}
          <nav className="lg:hidden mx-auto bg-white px-6 z-50 fixed top-0 left-0 right-0 border-b-[1px]">
            <div className="py-2 container bg-white mx-auto flex justify-between font-medium items-center">
              {/*Toggle Mobile Menu */}
              <div>
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none focus:text-gray-300"
                >
                  {isMenuOpen ? (
                    <FaXmark className="w-6 h-6  text-darkblue" />
                  ) : (
                    <HiOutlineMenuAlt3 className="w-6 h-6 transform rotate-180 scale-y-[-1] text-darkblue" />
                  )}
                </button>
              </div>
              {/* Logo */}
              <div className="flex items-center text-lg">
                <Link
                  to="/"
                  className="flex items-center text-nowrap text-blue font-bold text-lg cursor-pointer"
                >
                  <img
                    src={Logo}
                    alt="logo"
                    className="object-cover w-full h-14"
                  />

                  <span>Real Estate</span>
                </Link>
              </div>
              {/* Mobile Search */}
              <div>
                <button
                  onClick={handleClick}
                  className="lg:hidden"
                  aria-label="Search"
                >
                  <IoSearch className="text-gray-500 w-6 h-6 " />
                </button>
              </div>
              {/* <div
          className={`space-y-4 z-30 px-4 py-4 bg-softgray bg-opacity-20 mt-16 pb-5 text-center font-medium text-base ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navLinks.map(({ link, path }) => (
            <Link
              key={link}
              to={path}
              className={`block text-darkblue cursor-pointer ${
                location.pathname === path ? "text-skyblue" : ""
              }`}
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </div> */}
            </div>
            {/* Mobile Search box */}
            <div className="-translate-y-4">
              {isOpen && (
                <div className="pb-1">
                  <Search suggestions={suggestions} />
                </div>
              )}
            </div>
          </nav>
        </header>
        <div
          className={`fixed z-40  top-0 left-0 right-0 pt-20 ${
            isMenuOpen
              ? "transition-all duration-300 ease-in left-0"
              : "-translate-x-full"
          }`}
        >
          <Navbar navLinks={navLinks} />
        </div>
      </div>

      {/* Overlay sidenav */}
      {/* <div className="pt-16">
        {isMenuOpen && (
          <div className="`fixed bg-darkblue h-screen z-50 inset-y-0 left-0 w-full p-4 transition-all duration-700 ease-in transform overflow-auto ${isOpen ? '-translate-x-0' : '-translate-x-full'}`;">
            <span>hello</span>
          </div>
        )}
      </div> */}
    </>
  );
};

export default Header;
