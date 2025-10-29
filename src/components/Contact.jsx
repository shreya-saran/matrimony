import React from "react";
import { MapPin, Phone, Mail, Heart, User, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-pink-50 to-teal-50 py-16 px-6 md:px-16 rounded-3xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Contact Info */}
        <div className="bg-pink-100/80 rounded-3xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">
            Find Your Perfect Match
          </h2>
          <p className="text-gray-600 mb-8">
            Begin your journey to forever. Register now and let us help you find your soulmate.
          </p>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <MapPin className="text-teal-600" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Office Address</h4>
                <p>
                  Kamal Cinema Complex, AB-1, Block A 1, Nauroji Nagar,
                  Safdarjung Enclave, New Delhi, Delhi 110029
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Phone className="text-teal-600" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                <p>+91 - 7838500048</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Mail className="text-teal-600" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email Support</h4>
                <p>sycoriaanteam@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-teal-700 mb-6">
            Start Your Journey
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <User className="text-gray-400 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Creating Profile For</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <Heart className="text-gray-400 mr-2" size={18} />
                <select className="w-full p-2 bg-transparent outline-none">
                  <option>Select Relationship</option>
                  <option>Myself</option>
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Brother</option>
                  <option>Sister</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <Phone className="text-gray-400 mr-2" size={18} />
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="w-full p-2 outline-none bg-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-teal-700 transition-all duration-300"
            >
              <Send size={18} /> Begin Your Journey
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
