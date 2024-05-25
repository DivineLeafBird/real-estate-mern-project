import React from "react";
import { FaApple, FaRegEye } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { PiEyeClosedLight } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Google from "../assets/icons/google.png";
import Facebook from "../assets/icons/facebook.png";

const SignupForm = ({ show, onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [comfirmPasswordVisible, setComfirmPasswordVisible] = useState(false);
  const toggleComfirmPasswordVisibility = () => {
    setComfirmPasswordVisible(!comfirmPasswordVisible);
  };
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 ${
        show ? "" : "hidden"
      }`}
    >
      <div className="relative bg-white p-8 rounded shadow-md w-1/3 max-h-full overflow-y-auto ">
        <button
          className="absolute top-2 right-2  hover:text-gray-700"
          onClick={onClose}
        >
          <IoClose className="h-6 w-6 text-darkblue " />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-darkblue">
          Create a new Account
        </h2>
        <form action="">
          <div className="mb-4">
            <input
              required
              name="first-name"
              type="text"
              placeholder="First Name"
              className="px-3 py-2 border font-normal focus:outline-none rounded w-full"
            />
          </div>
          <div className="mb-4">
            <input
              required
              type="text"
              name="last-name"
              placeholder="Last Name"
              className="px-3 py-2 border font-normal focus:outline-none rounded w-full"
            />
          </div>
          <div className="mb-4">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="px-3 py-2 border font-normal focus:outline-none rounded w-full"
            />
          </div>
          <div className="mb-4 relative">
            <input
              required
              type={passwordVisible ? "text" : "password"}
              name="password"
              className="px-3 py-2 border font-normal focus:outline-none rounded w-full"
              placeholder="Password"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <FaRegEye className="w-6 h-6 text-darkblue" />
              ) : (
                <PiEyeClosedLight className="w-6 h-6 text-darkblue" />
              )}
            </span>
          </div>
          <div className="mb-4 relative">
            <input
              required
              type={comfirmPasswordVisible ? "text" : "password"}
              name="comfirm-password"
              className="px-3 py-2 border font-normal focus:outline-none rounded w-full"
              placeholder="Confirm Password"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={toggleComfirmPasswordVisibility}
            >
              {comfirmPasswordVisible ? (
                <FaRegEye className="w-6 h-6 text-darkblue" />
              ) : (
                <PiEyeClosedLight className="w-6 h-6 text-darkblue" />
              )}
            </span>
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              name="terms"
              required
              className="mr-2 cursor-pointer"
            />
            <span htmlFor="terms" className="text-sm font-normal">
              I agree to the{" "}
              <Link className="text-skyblue">Terms of Service</Link>,{" "}
              <Link className="text-skyblue">General Terms and Conditions</Link>{" "}
              and {""}
              <Link className="text-skyblue">Privacy Policy.</Link>
            </span>
          </div>
          <button className="bg-blue hover:bg-softgray text-white font-medium py-2 px-4 rounded w-full">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue">
            Sign in
          </Link>
        </p>
        <div className="mt-10 grid grid-cols-3 items-center  text-softgray">
          <hr className="border-softgray" />
          <p className="text-center">OR</p>
          <hr className="border-softgray" />
        </div>
        <div>
          <button
            type="submit"
            className="w-full disabled:hidden flex items-center justify-around border text-base mt-5 py-2 px-8 gap-4 rounded"
          >
            <div>
              <img
                src={Google}
                className="w-6 h-6 object-cover"
                alt="google-logo"
              />
            </div>
            Continue with Google
          </button>
          <button
            type="submit"
            className="w-full disabled:hidden flex items-center justify-around border text-base mt-5 py-2 px-8 gap-4 rounded"
          >
            <div>
              <img
                src={Facebook}
                className="w-6 h-6 object-cover"
                alt="Facebook-logo"
              />
            </div>
            Continue with Facebook
          </button>
          <button
            type="submit"
            className="w-full disabled:hidden flex items-center justify-around border text-base mt-5 py-2 px-8 gap-4 rounded"
          >
            <FaApple className="w-6 h-6" />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
