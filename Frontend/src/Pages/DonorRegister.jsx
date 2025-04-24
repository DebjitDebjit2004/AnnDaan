import React from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DonorRegister = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-orange-100 to-green-100 px-4 py-10 mt-20">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
          <h2 className="text-2xl font-bold text-amber-600 text-center mb-1">
            Donor / Organizer Registration
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Join the mission to reduce food waste and serve those in need.
          </p>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Full Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-amber-300">
                <FiUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Last Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-amber-300">
                <FiUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email Address</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-amber-300">
                <FiMail className="text-gray-500 mr-2" />
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-1">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-amber-300">
                <FiLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/donor-login" className="text-amber-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonorRegister;
