import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaUtensils, FaBuilding, FaPhone } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const FAKE_EVENT = {
  event_type: "Fundraiser",
  type_of_org: "Charitable",
  description: "Join us for a fundraising event to support local children’s education and well-being. Enjoy performances, food, and community spirit.",
  date: "2025-06-01",
  time: "17:00",
};
const FAKE_LOCATION = {
  venue_name: "Community Hall",
  line_1: "123 Main Street",
  line_2: "Near City Park",
  city: "Haridwar",
  district: "Haridwar",
  region: "North",
  state: "Uttarakhand",
  pin_code: "249401",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
};
const FAKE_FOOD = {
  food_type: "veg",
  food_count: 200,
  food_availability_time: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
};

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [location, setLocation] = useState(null);
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const eventRes = await fetch(`/api/events/${id}`);
        if (!eventRes.ok) throw new Error();
        const eventData = await eventRes.json();
        setEvent(eventData);

        const locRes = await fetch(`/api/locations/by-event/${id}`);
        if (!locRes.ok) throw new Error();
        const locData = await locRes.json();
        setLocation(locData);

        const foodRes = await fetch(`/api/foods/by-event/${id}`);
        if (!foodRes.ok) throw new Error();
        const foodData = await foodRes.json();
        setFood(foodData);
        setNotFound(false);
      } catch (err) {
        setEvent(FAKE_EVENT);
        setLocation(FAKE_LOCATION);
        setFood(FAKE_FOOD);
        setNotFound(true);
      }
      setLoading(false);
    };
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="text-orange-600 text-xl font-semibold">Loading event details...</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 pt-24 pb-12 flex flex-col items-center">
        {notFound && (
          <div className="mb-4 text-center text-red-500 font-semibold">
            Event not found. Showing sample event details.
          </div>
        )}

        {/* Venue Section */}
        <div
          className="w-full max-w-5xl flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden mb-8"
          style={{ minHeight: "320px", maxHeight: "420px" }}
        >
          {/* Venue Image */}
          <div className="md:w-1/2 w-full h-64 md:h-auto">
            <img
              src={location.image}
              alt={location.venue_name}
              className="object-cover w-full h-full"
              style={{ height: "100%", maxHeight: "420px" }}
            />
          </div>
          {/* Venue Description */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-700 mb-2 flex items-center gap-2">
              <FaBuilding className="text-orange-500" /> {event.event_type} Event
            </h1>
            <div className="mb-2 text-gray-700">
              <span className="font-semibold">Organized by:</span> {event.type_of_org}
            </div>
            <div className="mb-2 text-gray-700">
              <span className="font-semibold">Venue:</span> {location.venue_name}
            </div>
            <div className="mb-2 text-gray-700">
              <span className="font-semibold">Address:</span> {location.line_1}, {location.line_2}
            </div>
            <div className="mb-2 text-gray-700">
              <span className="font-semibold">City:</span> {location.city}
            </div>
            <div className="mb-2 text-gray-700">
              <span className="font-semibold">District:</span> {location.district}
            </div>
            <div className="mb-2 text-gray-700 flex gap-4">
              <div>
                <span className="font-semibold">Region:</span> {location.region}
              </div>
              <div>
                <span className="font-semibold">State:</span> {location.state}
              </div>
            </div>
            <div className="mb-2 text-gray-700">
              <span className="font-semibold">Pin Code:</span> {location.pin_code}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="bg-orange-50 rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2 text-orange-600">
              <FaBuilding /> Event Details
            </h2>
            <div className="text-gray-800">
              <div><span className="font-medium">Type:</span> {event.event_type}</div>
              <div><span className="font-medium">Organizer:</span> {event.type_of_org}</div>
              <div><span className="font-medium">Date:</span> {event.date || "1 June 2025"}</div>
              <div><span className="font-medium">Time:</span> {event.time || "5:00 PM"}</div>
              <div className="mt-2"><span className="font-medium">Description:</span> <br />{event.description}</div>
            </div>
          </div>
          {/* Food Details */}
          <div className="bg-green-50 rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2 text-green-700">
              <FaUtensils /> Food Details
            </h2>
            <div className="text-gray-800">
              <div><span className="font-medium">Type:</span> {food.food_type === "veg" ? "Vegetarian" : "Non-Vegetarian"}</div>
              <div><span className="font-medium">Count:</span> {food.food_count} meals</div>
              <div>
                <span className="font-medium">Available Till:</span>{" "}
                {new Date(food.food_availability_time).toLocaleString()}
              </div>
            </div>
          </div>
          {/* Contact Section */}
          <div className="bg-white rounded-xl p-6 shadow flex flex-col justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2 text-orange-700">
              <FaPhone /> Contact
            </h2>
            <div className="text-gray-800 mb-4">
              For more information or to get involved, contact the organizer.
            </div>
            <button
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
              onClick={() => navigate("/contactus")}
            >
              <FaPhone /> Contact Organizer
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;