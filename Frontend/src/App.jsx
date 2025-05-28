import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import DonorLogin from "./Pages/DonorLogin";
import NGOLogin from "./Pages/NGOlogin";
import ForgotPassword from "./Pages/ForgotPassword";
import OtpVerify from "./Pages/OtpVerify";
import DonorRegister from "./Pages/DonorRegister";
import NGORegister from "./Pages/NGORegister";
import DonorDetails from "./Pages/DonorDetails";
import NgoDetails from "./Pages/NgoDetails";
import FeedsSection from "./Pages/FeedsSection";
import ContactUs from "./Pages/ContactUs";
import AddFeed from "./Components/AddFeed";
import Events from "./Pages/Events";
import EventRegister from "./Pages/EventRegister";
import FoodDetail from "./Pages/FoodDetail";
import EventDetails from "./Pages/EventDetails"; 
import NgoListing from "./Pages/NgoListing";
import Admin from "./Pages/Admin";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/ngo-login" element={<NGOLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
        <Route path="/donor-register" element={<DonorRegister />} />
        <Route path="/ngo-register" element={<NGORegister />} />
        <Route path="/donor-details" element={<DonorDetails />} />
        <Route path="/ngo-details" element={<NgoDetails />} />
        <Route path="/feeds" element={<FeedsSection />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/add-feed" element={<AddFeed />} />
        <Route path="/event-listing" element={<Events />} />
        <Route path="/event-register" element={<EventRegister />} />
        <Route path="/food-detail" element={<FoodDetail />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/ngo-listing" element={<NgoListing />} />
        <Route path="/admin-dashboard" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
