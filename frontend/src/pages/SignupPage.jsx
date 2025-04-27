import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5"; // ⬅️ Import Close icon
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/signup", formData, {
        withCredentials: true
      });

      setUser(data.user);
      toast.success("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Signup failed";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative">
      {/* Close Button */}
      <button 
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
      >
        <IoClose size={24} className="text-gray-800" />
      </button>

      {/* Left Section with Image */}
      <div className="hidden md:block relative">
        <img 
          src="/signupImg.jpg" 
          alt="Signup Visual"
          className="w-full h-full object-cover"
        />
        <h2 className="absolute top-10 left-10 text-white text-3xl font-bold z-10"></h2>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center px-8 py-12 bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <p className="mt-6 text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
