import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FaApple, FaRegEye } from "react-icons/fa6";
import { PiEyeClosedLight } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import Google from "../assets/icons/google.png";
import Facebook from "../assets/icons/facebook.png";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const navigate = useNavigate();

  // State for form data and errors
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate input and update errors
    let newErrors = { ...errors };
    if (name === "firstname") {
      if (value.length < 3) {
        newErrors[name] = "Name must be at least 3 characters long.";
      } else {
        newErrors[name] = "";
      }
    } else if (name === "lastname") {
      if (value.length < 3) {
        newErrors[name] = "Name must be at least 3 characters long.";
      } else {
        newErrors[name] = "";
      }
    } else if (name === "email") {
      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(value)) {
        newErrors[name] = "Email is invalid.";
      } else {
        newErrors[name] = "";
      }
    } else if (name === "password") {
      if (value.length < 8) {
        newErrors[name] = "Password must be at least 8 characters long.";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        newErrors[name] =
          "Password must contain at least one special character.";
      } else {
        newErrors[name] = "";
      }
    } else if (name === "confirmPassword") {
      if (value !== formData.password) {
        newErrors[name] = "Passwords do not match.";
      } else {
        newErrors[name] = "";
      }
    }

    setErrors(newErrors);
  };

  // Check if the form is valid
  useEffect(() => {
    const formIsValid =
      Object.values(formData).every((value) => value !== "") &&
      Object.values(errors).every((error) => error === "");
    setIsFormValid(formIsValid);
  }, [formData, errors]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Handle form submission
      console.log("Form submitted", formData);
    } else {
      console.log("Form has errors");
    }
  };
  return (
    <>
      <Header />
      <section className=" bg-white">
        <div className="flex items-center justify-center bg-white mt-20 lg:hidden px-4">
          <div className="relative bg-white p-8 rounded shadow-md max-h-full overflow-y-auto ">
            <button
              className="absolute top-2 right-2  hover:text-gray-700"
              onClick={() => navigate("/")}
            >
              <IoClose className="h-6 w-6 text-darkblue " />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-darkblue">
              Create a new Account
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  required
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className={`px-3 py-2 border font-normal focus:outline-none rounded w-full ${
                    errors.firstname
                      ? "border-red-500"
                      : "focus:border-green-500"
                  } `}
                  placeholder="First Name"
                />
                {errors.firstname && (
                  <span className="text-red-500 text-xs  mt-2">
                    {errors.firstname}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <input
                  required
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className={`px-3 py-2 border font-normal focus:outline-none rounded w-full ${
                    errors.lastname
                      ? "border-red-500"
                      : "focus:border-green-500"
                  } `}
                  placeholder="Last Name"
                />
                {errors.lastname && (
                  <span className="text-red-500 text-xs mt-2">
                    {errors.lastname}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`px-3 py-2 border font-normal focus:outline-none rounded w-full ${
                    errors.email ? "border-red-500" : "focus:border-green-500"
                  } `}
                  placeholder="Email"
                />

                {errors.email && (
                  <span className="text-red-500 text-xs  mt-2">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="mb-4 relative">
                <input
                  required
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`px-3 py-2 border font-normal focus:outline-none rounded w-full ${
                    errors.password
                      ? "border-red-500"
                      : "focus:border-green-500"
                  } `}
                  placeholder="Password"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs  mt-2">
                    {errors.password}
                  </span>
                )}
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
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`px-3 py-2 border font-normal focus:outline-none rounded w-full ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "focus:border-green-500"
                  } `}
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs mt-2">
                    {errors.confirmPassword}
                  </span>
                )}
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? (
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
                  <Link className="text-skyblue">
                    General Terms and Conditions
                  </Link>{" "}
                  and {""}
                  <Link className="text-skyblue">Privacy Policy.</Link>
                </span>
              </div>
              <button
                disabled={!isFormValid}
                className="bg-blue disabled:bg-softgray disabled:opacity-50 text-white font-medium py-2 px-4 rounded w-full"
              >
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
      </section>
    </>
  );
};

export default SignUp;
