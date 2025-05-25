import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Dummy NGO data for demonstration
const DUMMY_NGOS = [
  {
    id: 1,
    name: "Helping Hands Foundation",
    regNo: "NGO12345",
    year: 2010,
    category: "Education",
    members: 25,
    certificates: ["80G.pdf", "12A.pdf", "FCRA.pdf"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Green Earth Society",
    regNo: "NGO67890",
    year: 2015,
    category: "Environment",
    members: 18,
    certificates: ["80G.pdf", "12A.pdf", "CSR.pdf"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Women Empowerment Trust",
    regNo: "NGO54321",
    year: 2008,
    category: "Women Empowerment",
    members: 40,
    certificates: ["80G.pdf", "12A.pdf", "ISO.pdf"],
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=400&q=80",
  },
];

const NgoListing = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    // Replace with API call if needed
    setNgos(DUMMY_NGOS);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-br from-orange-100 to-green-100 flex-1 px-4 py-12 mt-16">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">NGO Listings</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ngos.map((ngo) => (
            <div
              key={ngo.id}
              className="bg-white rounded-2xl shadow-lg border border-orange-100 flex flex-col hover:shadow-2xl transition-all"
            >
              <img
                src={ngo.image}
                alt={ngo.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-orange-700 mb-1">{ngo.name}</h3>
                <div className="text-gray-700 text-sm mb-1">
                  <span className="font-semibold">Reg. No:</span> {ngo.regNo}
                </div>
                <div className="text-gray-700 text-sm mb-1">
                  <span className="font-semibold">Year:</span> {ngo.year}
                </div>
                <div className="text-gray-700 text-sm mb-1">
                  <span className="font-semibold">Category:</span> {ngo.category}
                </div>
                <div className="text-gray-700 text-sm mb-1">
                  <span className="font-semibold">Members:</span> {ngo.members}
                </div>
                <div className="text-gray-700 text-sm mb-2">
                  <span className="font-semibold">Certificates:</span>{" "}
                  {ngo.certificates.join(", ")}
                </div>
                <button
                  className="mt-auto bg-gradient-to-r from-orange-400 to-green-500 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition-all"
                  // onClick={() => navigate(`/ngo-details/${ngo.id}`)}
                  disabled
                  title="View Details (Demo)"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NgoListing;