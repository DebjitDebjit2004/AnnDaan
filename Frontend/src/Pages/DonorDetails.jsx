import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DonorDetails = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    surplusAmount: "",
    foodDetails: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Donor Details:", formData);
    // API call logic can go here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gradient-to-br from-orange-50 to-green-50 py-10 px-4 mt-20">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-orange-200">
          <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
            Donor Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Event Name</label>
              <input
                type="text"
                name="eventName"
                placeholder="Enter event name"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Surplus Food (No. of People It Can Feed)</label>
              <input
                type="number"
                name="surplusAmount"
                min="1"
                placeholder="e.g. 25"
                value={formData.surplusAmount}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Food Details</label>
              <textarea
                name="foodDetails"
                placeholder="Brief description of the surplus food"
                value={formData.foodDetails}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-green-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all"
            >
              Submit Details
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonorDetails;