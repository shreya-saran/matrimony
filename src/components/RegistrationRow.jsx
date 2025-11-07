import React from "react";
import { FaUser, FaPhoneAlt, FaHeart } from "react-icons/fa";

const HeroForm = () => {
  return (
    <section className="py-12 bg-[#fef1f1]">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: "#924130" }}
        >
          Join the Most Trusted Matrimony Network
        </h1>

        {/* Subheading */}
        <p
          className="mb-8 text-lg"
          style={{ color: "#b85947" }}
        >
          Register now and let us help you find your soulmate.
        </p>

        {/* Form Card */}
        <div className="bg-gradient-to-b from-[#fff5e6] to-[#ffe3c2] shadow-lg rounded-2xl p-8 md:p-10">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Name Field */}
            <div className="text-left">
              <label
                className="block font-semibold mb-1"
                style={{ color: "#924130" }}
              >
                Your Name
              </label>
              <div className="flex items-center bg-white border border-[#eec4b8] rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-[#b85947]/60">
                <FaUser className="text-[#b85947] mx-3" />
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-3 outline-none rounded-r-lg text-gray-700"
                />
              </div>
            </div>

            {/* Relationship Field */}
            <div className="text-left">
              <label
                className="block font-semibold mb-1"
                style={{ color: "#924130" }}
              >
                Matrimony Profile For
              </label>
              <select
                className="w-full p-3 border border-[#eec4b8] rounded-lg shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-[#b85947]/60 outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Relationship
                </option>
                <option value="myself">Myself</option>
                <option value="son">Son</option>
                <option value="daughter">Daughter</option>
                <option value="relative">Relative</option>
              </select>
            </div>

            {/* Mobile Number Field */}
            <div className="text-left">
              <label
                className="block font-semibold mb-1"
                style={{ color: "#924130" }}
              >
                Mobile Number
              </label>
              <div className="flex items-center bg-white border border-[#eec4b8] rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-[#b85947]/60">
                <div className="flex items-center px-3 text-gray-700">
                  <FaPhoneAlt className="text-[#b85947] mr-2" /> +91
                </div>
                <input
                  type="tel"
                  placeholder="Enter 10-digit number"
                  maxLength={10}
                  className="w-full p-3 outline-none rounded-r-lg text-gray-700"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-3 flex justify-center mt-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#924130] to-[#b85947] hover:brightness-110 text-white font-semibold text-lg px-10 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaHeart /> Register Free
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroForm;
