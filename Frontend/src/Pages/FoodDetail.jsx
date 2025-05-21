import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const FoodDetail = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    food_type: '',
    food_count: '',
    food_availability_time: ''
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
    if (!formData.food_type) newErrors.food_type = 'Food type is required';
    if (!formData.food_count) newErrors.food_count = 'Food count is required';
    else if (formData.food_count < 10 || formData.food_count > 1000) {
      newErrors.food_count = 'Food count must be between 10 and 1000';
    }
    if (!formData.food_availability_time) {
      newErrors.food_availability_time = 'Availability time is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // TODO: Add API call to register food details
      console.log('Form submitted:', formData);
      navigate('/events');
    } catch (error) {
      console.error('Error registering food details:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
              Food Donation Details
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Food Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Food Type *
                </label>
                <select
                  name="food_type"
                  value={formData.food_type}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.food_type ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                >
                  <option value="">Select Food Type</option>
                  <option value="veg">Vegetarian</option>
                  <option value="non-veg">Non-Vegetarian</option>
                </select>
                {errors.food_type && (
                  <p className="text-red-500 text-sm mt-1">{errors.food_type}</p>
                )}
              </div>

              {/* Food Count */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Number of Meals *
                </label>
                <input
                  type="number"
                  name="food_count"
                  value={formData.food_count}
                  onChange={handleChange}
                  min="10"
                  max="1000"
                  placeholder="Enter number of meals (10-1000)"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.food_count ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                />
                {errors.food_count && (
                  <p className="text-red-500 text-sm mt-1">{errors.food_count}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">
                  Minimum 10 meals, maximum 1000 meals
                </p>
              </div>

              {/* Food Availability Time */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Food Availability Time *
                </label>
                <input
                  type="datetime-local"
                  name="food_availability_time"
                  value={formData.food_availability_time}
                  onChange={handleChange}
                  min={new Date().toISOString().slice(0, 16)}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.food_availability_time ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                />
                {errors.food_availability_time && (
                  <p className="text-red-500 text-sm mt-1">{errors.food_availability_time}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">
                  Food must be available for at least 12 hours from now
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                >
                  Submit Food Details
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

export default FoodDetail;
