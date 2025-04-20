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
      </Routes>
    </div>
  );
};

export default App;
