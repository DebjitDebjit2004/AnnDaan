import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaUsers, FaClipboardList, FaCheckCircle, FaUserShield, FaRegNewspaper } from "react-icons/fa";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 pt-28 pb-12 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-orange-700 mb-2 tracking-tight">Admin Dashboard</h1>
          <p className="text-gray-600 text-lg mb-10 text-center max-w-2xl">
            Welcome, Admin! Use the dashboard below to manage NGOs, events, users, and platform content efficiently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* NGOs */}
            <div className="bg-orange-50 rounded-xl p-7 shadow flex flex-col items-center border border-orange-100 hover:shadow-lg transition">
              <FaUsers className="text-3xl text-orange-500 mb-3" />
              <span className="text-xl font-bold text-orange-700 mb-2">NGOs</span>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-2">
                Manage NGOs
              </button>
              <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 px-6 py-2 rounded-lg font-semibold shadow transition flex items-center justify-center gap-2">
                <FaCheckCircle /> Approve Registrations
              </button>
            </div>
            {/* Events */}
            <div className="bg-green-50 rounded-xl p-7 shadow flex flex-col items-center border border-green-100 hover:shadow-lg transition">
              <FaClipboardList className="text-3xl text-green-600 mb-3" />
              <span className="text-xl font-bold text-green-700 mb-2">Events</span>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-2">
                Manage Events
              </button>
              <button className="w-full bg-green-100 hover:bg-green-200 text-green-700 px-6 py-2 rounded-lg font-semibold shadow transition flex items-center justify-center gap-2">
                <FaCheckCircle /> Approve Events
              </button>
            </div>
            {/* Users */}
            <div className="bg-white rounded-xl p-7 shadow flex flex-col items-center border border-orange-100 hover:shadow-lg transition">
              <FaUserShield className="text-3xl text-orange-400 mb-3" />
              <span className="text-xl font-bold text-orange-700 mb-2">Users</span>
              <button className="w-full bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold shadow transition">
                Manage Users
              </button>
            </div>
            {/* Feeds */}
            <div className="bg-white rounded-xl p-7 shadow flex flex-col items-center border border-green-100 hover:shadow-lg transition">
              <FaRegNewspaper className="text-3xl text-green-500 mb-3" />
              <span className="text-xl font-bold text-green-700 mb-2">Feeds</span>
              <button className="w-full bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow transition">
                Manage Feeds
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;