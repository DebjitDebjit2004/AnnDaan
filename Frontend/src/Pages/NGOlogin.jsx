import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const NGOLogin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1 w-full mt-20">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-green-500 to-teal-400 text-white flex flex-col items-center justify-center p-12">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src="https://i.pinimg.com/736x/95/af/9d/95af9d9f64b975e214332cb47f4b9d1b.jpg"
            alt="NGO Helping People"
            className="w-3/4 max-w-md rounded-xl shadow-xl mb-6 object-cover transition-transform duration-500 hover:scale-110"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-center max-w-md"
          >
            Partner with us to bring surplus food to those in need. Your efforts
            can nourish lives and bring smiles to many faces. Let’s create a
            hunger-free community together.
          </motion.p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md p-8 shadow-xl rounded-2xl bg-white border border-green-200"
          >
            <h2 className="text-3xl font-bold text-green-600 text-center">
              NGO Login
            </h2>
            <form className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <div className="text-right mt-2">
                  <Link
                    to="/forgot-password?role=ngo"
                    className="text-sm text-green-500 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <button className="w-full p-3 mt-4 bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold rounded-lg hover:opacity-90 transition-all">
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Don’t have an account?{" "}
              <Link to="/ngo-register" className="text-green-500 hover:underline">
                Register Here
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NGOLogin;
