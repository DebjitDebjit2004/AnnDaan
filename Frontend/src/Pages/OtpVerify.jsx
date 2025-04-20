import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";

const OtpVerify = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md border">
        <h2 className="text-2xl font-semibold text-center text-orange-600 mb-2">OTP Verification</h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Please enter the OTP sent to your email
        </p>

        <form className="flex flex-col items-center">
          <div className="flex justify-center gap-2 mb-5">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-10 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Verify OTP
          </button>

          <div className="flex items-center justify-center mt-4 text-sm text-gray-600 gap-2">
            Didn’t get OTP?
            <button
              type="button"
              className="flex items-center text-orange-500 hover:underline"
            >
              <FiRefreshCw className="mr-1" />
              Resend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
