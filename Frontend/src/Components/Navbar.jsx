import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "NGO", to: "/ngo-listing" },
  { name: "Event", to: "/event-listing" },
  { name: "Feeds", to: "/feeds" },
  { name: "Contact Us", to: "/contactus" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const dropdownRef = useRef(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false); // Close mobile menu on click
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-white text-gray-800 shadow-md px-6 py-7 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="text-3xl font-bold text-orange-600">AnnDaan</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-12 font-medium text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.to}
              className={`cursor-pointer hover:text-orange-500 transition ${
                activeLink === link.name ? "text-orange-600 font-semibold" : ""
              }`}
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Profile Image */}
        <div className="relative" ref={dropdownRef}>
          <img
            src="https://i.pinimg.com/736x/27/ed/99/27ed9905516ff87d07a1be9d6cf9e57b.jpg"
            alt="Profile"
            className="w-9 h-9 rounded-full cursor-pointer border-2 border-orange-400"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 border rounded-lg shadow-lg z-50">
              <div className="px-4 py-3 text-sm">
                <p><strong>Email:</strong> user@example.com</p>
                <p><strong>Address:</strong> 123 NGO Lane, India</p>
                <p><strong>Phone:</strong> +91 9876543210</p>
              </div>
              <div className="border-t px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600 text-sm">
                Logout
              </div>
            </div>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white text-gray-800 shadow-md py-4 px-6 flex flex-col space-y-4 md:hidden z-40">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => handleLinkClick(link.name)}
              className={`cursor-pointer hover:text-orange-500 transition ${
                activeLink === link.name ? "text-orange-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

