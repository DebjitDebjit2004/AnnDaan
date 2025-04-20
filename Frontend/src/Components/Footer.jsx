import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f3f4f6] text-gray-700 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Logo + Name */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-2">AnnDaan</h2>
          <p className="text-sm text-gray-600">
            Empowering communities through seamless NGO collaboration and support.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-500 transition-all">Home</a></li>
            <li><a href="/ngo" className="hover:text-orange-500 transition-all">NGO</a></li>
            <li><a href="/event" className="hover:text-orange-500 transition-all">Events</a></li>
            <li><a href="/donor" className="hover:text-orange-500 transition-all">Donors</a></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4 mb-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaInstagram size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaLinkedin size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaTwitter size={20} /></a>
            <a href="mailto:contact@ngoconnect.org" className="hover:text-orange-500"><FaEnvelope size={20} /></a>
          </div>
          <p className="text-sm text-gray-600">contact@ngoconnect.org</p>
          <p className="text-sm text-gray-600">Uttarakhand, India</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-300">
        © {new Date().getFullYear()} NGOConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
