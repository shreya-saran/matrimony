import React from "react";
import { FaUser, FaPhoneAlt, FaHeart } from "react-icons/fa";

const HeroForm = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-[#e6fffa]">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-[#b91c1c] mb-2">
        Join the Most Trusted Matrimony Network
        </h1>
        <p className="text-gray-600 mb-8">
          Register now and let us help you find your soulmate.
        </p>

        {/* Form Card */}
        <div className="bg-[#e0f2f1]/90 shadow-lg rounded-2xl p-8 md:p-10">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            
            {/* Name Field */}
            <div className="text-left">
              <label className="block font-semibold text-gray-700 mb-1">
                Your Name
              </label>
              <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-teal-500">
                <FaUser className="text-[#b91c1c] mx-3" />
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-3 outline-none rounded-r-lg text-gray-700"
                />
              </div>
            </div>

            {/* Relationship Field */}
            <div className="text-left">
              <label className="block font-semibold text-gray-700 mb-1">
                Matrimony Profile For
              </label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-teal-500 outline-none"
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
              <label className="block font-semibold text-gray-700 mb-1">
                Mobile Number
              </label>
              <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-teal-500">
                <div className="flex items-center px-3 text-gray-700">
                  <FaPhoneAlt className="text-[#b91c1c] mr-2" /> +91
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
                className="flex items-center justify-center gap-2 bg-[#b91c1c] hover:bg-[#9f1818] text-white font-semibold text-lg px-10 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
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
