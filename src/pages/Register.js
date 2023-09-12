import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formData
      );
      if (res.data.success) {
        toast("registered successfully");
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="current-email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white  px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      <p className="mt-4 ">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Register;
