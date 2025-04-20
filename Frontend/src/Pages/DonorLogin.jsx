import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DonorLogin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col md:flex-row w-full">
        {/* Left Side - Image and Text */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-orange-400 to-green-500 text-white flex flex-col items-center justify-center p-12">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src="https://i.pinimg.com/736x/62/60/93/62609359d19dfcaa1cf72ace00423743.jpg"
            alt="Donor Helping People"
            className="w-3/4 max-w-md rounded-xl shadow-xl mb-6 object-cover transition-transform duration-500 hover:scale-110"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-center max-w-md"
          >
            Join us in making sure no food goes to waste. Every meal you donate reaches someone in need. Together, we can build a more caring community.
          </motion.p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="w-full max-w-md p-8 shadow-xl rounded-2xl bg-white border border-orange-200"
          >
            <h2 className="text-3xl font-bold text-orange-600 text-center">Donor / Organizer Login</h2>
            <form className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <div className="text-right mt-2">
                  <Link
                    to="/forgot-password?role=donor-login"
                    className="text-sm text-orange-500 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <button className="w-full p-3 mt-4 bg-gradient-to-r from-orange-500 to-green-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all">Login</button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Don’t have an account? <a href="/donor-register" className="text-orange-500 hover:underline">Register Here</a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonorLogin;
