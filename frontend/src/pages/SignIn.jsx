import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiEyeClosedLight } from "react-icons/pi";
import { FaApple, FaRegEye } from "react-icons/fa";
import Header from "../components/Header";
import Google from "../assets/icons/google.png";
import Facebook from "../assets/icons/facebook.png";
import Alerts from "../components/Alerts";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const location = useLocation();
  const [heading, setHeading] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (location.state) {
      if (location.state.heading) setHeading(location.state.heading);
      if (location.state.message) setMessage(location.state.message);
    }
  }, [location.state]);
  return (
    <>
      <div>
        <Header />
      </div>
      <section className="flex items-center justify-center mt-20 lg:mt-2 px-4">
        <div className="bg-white px-8 py-6 rounded-lg shadow-lg">
          {message && (
            <Alerts
              msgHeading={heading}
              text={message}
              type="success"
              onClose={() => setMessage(null)}
            />
          )}

          <h1 className="text-2xl font-bold mb-4 text-center text-darkblue">
            Welcome back
          </h1>
          <form>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border focus:outline-none rounded"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-3 py-2 border focus:outline-none rounded"
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
            <button
              type="submit"
              className="w-full bg-blue text-base text-white py-2 rounded-2xl"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 lg:hidden text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue">
              Sign up
            </Link>
          </p>
          <div className="mt-10 grid grid-cols-3 items-center text-softgray">
            <hr className="border-softgray" />
            <p className="text-center">OR</p>
            <hr className="border-softgray" />
          </div>
          <div>
            <button
              type="submit"
              className="w-full disabled:hidden flex items-center justify-around border text-base mt-5 py-2 px-4 gap-4 rounded"
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
              className="w-full disabled:hidden flex items-center justify-around  border text-base mt-5 py-2 px-4 gap-4 rounded"
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
              className="w-full disabled:hidden flex items-center justify-around  border text-base mt-5 py-2 px-4  gap-4 rounded"
            >
              <FaApple className="w-6 h-6" />
              Continue with Apple
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
