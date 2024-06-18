import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { PiEyeClosedLight } from "react-icons/pi";
import { FaApple, FaRegEye } from "react-icons/fa";
import Header from "../components/Header";
import Google from "../assets/icons/google.png";
import Facebook from "../assets/icons/facebook.png";
import Alerts from "../components/Alerts";
import { CgSpinner } from "react-icons/cg";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigate = useNavigate();
  // signup redirect state
  const location = useLocation();
  const [heading, setHeading] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (location.state) {
      if (location.state.heading) setHeading(location.state.heading);
      if (location.state.message) setMessage(location.state.message);
    }
  }, [location.state]);

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });  
  // Update form state
  const [isFormValid, setIsFormValid] = useState(false);
// Handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  // Update form data
  setFormData({
    ...formData,
    [name]: value,
  });

};
  
   // Check if the form is valid
   useEffect(() => {
    const formIsValid =
      Object.values(formData).every((value) => value !== "");
    setIsFormValid(formIsValid);
  }, [formData]);

   // Handle form submission
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       setLoading(true);
       const res = await fetch("/api/auth/signin", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });
       const data = await res.json();
       console.log(data);
       if (data.success === false) {
         setLoading(false);
         setError(data.message);
         return;
       }
       setLoading(false);
       setError(null);
       navigate('/');
     } catch (error) {
       setLoading(false);
       setError(error.message);
     }
   };
 
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
          <div>
          {error && <p className="text-red-500 bg-red-100 p-2 text-center my-4 rounded">{error}</p>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                  onChange={handleChange}
                className="w-full px-3 py-2 border focus:outline-none rounded"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
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
              disabled={!isFormValid || loading}
              className="w-full flex items-center justify-center bg-blue text-base text-white font-medium py-2 rounded-2xl disabled:bg-softgray disabled:bg-opacity-50 disabled:text-blue disabled:cursor-not-allowed disabled:text-opacity-50"
            >
               {loading ? (
                  <>
                    <CgSpinner className="animate-spin h-6 w-6 mr-2 text-blue" />
                  </>
                ) : (
                  "Sign In"
                )}
            </button>
          </form>
          <p className="mt-4 lg:hidden text-center">
            Don&apos;t have an account?{" "}
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
