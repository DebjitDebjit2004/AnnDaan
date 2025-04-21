import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gradient-to-br from-orange-100 to-green-100 px-4 py-12 flex justify-center items-center mt-20">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 border border-orange-200">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-green-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
                <p className="text-gray-700">123, NGO Lane, Roorkee, Uttarakhand, India</p>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
                <p className="text-gray-700">+91 9876543210</p>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-500 text-xl mt-1" />
                <p className="text-gray-700">yourngo@gmail.com</p>
              </div>
              <div className="flex items-start gap-4">
                <FaTwitter className="text-orange-500 text-xl mt-1" />
                <p className="text-gray-700">@yourNGOhandle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
