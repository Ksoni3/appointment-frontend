import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpinnerLoading from "../components/SpinnerLoading";

const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        formData
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.msg);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.error(`error is : ${error}`);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-8">
      {isLoggingIn ? (
        <SpinnerLoading />
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center">
            Not registered yet?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default LogIn;
