import React, { useState } from "react";
import { FaCloudUploadAlt, FaCamera } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const NgoDetails = () => {
  const [certificates, setCertificates] = useState([]);
  const [ngoImage, setNgoImage] = useState(null);

  const handleCertificatesChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCertificates((prev) => [...prev, file]);
    }
    e.target.value = null;
  };

  const handleNgoImageChange = (e) => {
    setNgoImage(e.target.files[0]);
  };

  const handleRemoveCertificate = (idx) => {
    const updated = [...certificates];
    updated.splice(idx, 1);
    setCertificates(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (certificates.length < 3) {
      alert("Upload minimum 3 certificates!");
      return;
    }
    if (!ngoImage) {
      alert("Please upload an NGO image.");
      return;
    }
    console.log("Form submitted!");
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => 1900 + i).reverse();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Added margin-top for spacing from Navbar */}
      <div className="bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center px-4 py-8 mt-20">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 border border-orange-200"
        >
          <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
            NGO Details
          </h2>

          {/* NGO Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              NGO Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              placeholder="Enter NGO Name"
            />
          </div>

          {/* Registration Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Registration Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              placeholder="Enter Registration Number"
            />
          </div>

          {/* Certificates Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Certificates <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-orange-300 rounded-xl bg-orange-50 p-6 text-center cursor-pointer hover:border-orange-500 transition-all">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleCertificatesChange}
                className="hidden"
                id="certificatesUpload"
              />
              <label
                htmlFor="certificatesUpload"
                className="cursor-pointer flex flex-col items-center"
              >
                <FaCloudUploadAlt className="text-orange-500 text-3xl" />
                <div className="text-xl font-medium text-orange-500 mb-1">Upload</div>
                <p className="text-sm text-gray-600">
                  Upload certificates one by one<br />
                  (Min 3 required). Formats: PDF, JPG, PNG.
                </p>
              </label>
            </div>
            {certificates.length > 0 && (
              <ul className="mt-4 text-sm text-green-700 list-disc list-inside space-y-1">
                {certificates.map((file, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between gap-2 bg-green-50 px-3 py-1 rounded-md border"
                  >
                    {file.name}
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700 text-xs"
                      onClick={() => handleRemoveCertificate(idx)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Year of Establishment */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Year of Establishment
            </label>
            <select className="w-full p-2 border rounded-md">
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select className="w-full p-2 border rounded-md">
              <option value="">Select Category</option>
              <option>Education</option>
              <option>Health</option>
              <option>Environment</option>
              <option>Animal Welfare</option>
              <option>Women Empowerment</option>
            </select>
          </div>

          {/* Total Members */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Total Number of Members
            </label>
            <input
              type="number"
              min={1}
              className="w-full p-2 border rounded-md"
              placeholder="e.g. 25"
            />
          </div>

          {/* NGO Image Upload */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-2">
              NGO Image <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-orange-300 rounded-xl bg-orange-50 p-6 text-center cursor-pointer hover:border-orange-500 transition-all">
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={handleNgoImageChange}
                className="hidden"
                id="ngoImageUpload"
              />
              <label
                htmlFor="ngoImageUpload"
                className="cursor-pointer flex flex-col items-center"
              >
                <FaCamera className="text-orange-500 text-3xl" />
                <div className="text-xl font-medium text-orange-500 mb-1">Upload</div>
                <p className="text-sm text-gray-600">
                  Choose or drag & drop image here.<br />
                  JPG, JPEG, PNG, WEBP. Max 20 MB.
                </p>
              </label>
            </div>
            {ngoImage && (
              <div className="mt-3 text-green-700 text-sm">
                ✅ {ngoImage.name}
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(ngoImage)}
                    alt="NGO Preview"
                    className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-green-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all"
          >
            Submit NGO Details
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default NgoDetails;

