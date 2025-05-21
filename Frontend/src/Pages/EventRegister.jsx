import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const EventRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type_of_org: '',
    event_type: '',
    address_line1: '',
    address_line2: '',
    pincode: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.type_of_org) newErrors.type_of_org = 'Organization type is required';
    if (!formData.event_type) newErrors.event_type = 'Event type is required';
    if (!formData.address_line1) newErrors.address_line1 = 'Address is required';
    if (!formData.pincode) newErrors.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // TODO: Add API call to register event
      console.log('Form submitted:', formData);
      navigate('/events');
    } catch (error) {
      console.error('Error registering event:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
              Register Your Event
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organization Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Organization Type *
                </label>
                <select
                  name="type_of_org"
                  value={formData.type_of_org}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.type_of_org ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                >
                  <option value="">Select Organization Type</option>
                  <option value="NGO">NGO</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Individual">Individual</option>
                  <option value="Others">Others</option>
                </select>
                {errors.type_of_org && (
                  <p className="text-red-500 text-sm mt-1">{errors.type_of_org}</p>
                )}
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Event Type *
                </label>
                <select
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.event_type ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                >
                  <option value="">Select Event Type</option>
                  <option value="Food Donation">Food Donation</option>
                  <option value="Clothing Drive">Clothing Drive</option>
                  <option value="Blood Donation">Blood Donation</option>
                  <option value="Awareness Campaign">Awareness Campaign</option>
                  <option value="Others">Others</option>
                </select>
                {errors.event_type && (
                  <p className="text-red-500 text-sm mt-1">{errors.event_type}</p>
                )}
              </div>

              {/* Address Line 1 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Address Line 1 *
                </label>
                <input
                  type="text"
                  name="address_line1"
                  value={formData.address_line1}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.address_line1 ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                />
                {errors.address_line1 && (
                  <p className="text-red-500 text-sm mt-1">{errors.address_line1}</p>
                )}
              </div>

              {/* Address Line 2 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="address_line2"
                  value={formData.address_line2}
                  onChange={handleChange}
                  placeholder="Enter additional address details (optional)"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter 6-digit pincode"
                  maxLength="6"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.pincode ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                />
                {errors.pincode && (
                  <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                >
                  Register Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventRegister;
