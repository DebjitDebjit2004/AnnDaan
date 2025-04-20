import React from "react";
import { FiMail } from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role"); // 'donor' or 'ngo'

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold text-orange-600 text-center mb-2">
          Forgot Password
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter your registered email address. We’ll send you an OTP to reset your password.
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400">
              <FiMail className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 mt-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Send OTP
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            to={role === "ngo" ? "/ngo-login" : "/donor-login"}
            className="text-orange-500 hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

