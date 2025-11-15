import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaPhoneAlt, FaHeart } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_2ylk5jc";
const TEMPLATE_ID = "template_oh6thpd";
const PUBLIC_KEY = "1yKAvhNz99bCFge-t";

const HeroForm = () => {
  const [form, setForm] = useState({
    user_name: "",
    relationship: "",
    mobile: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const formRef = useRef(null);

  // init EmailJS once
  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
    else console.warn("EmailJS PUBLIC_KEY not set. Please set VITE_EMAILJS_PUBLIC_KEY in .env");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // mobile: restrict to digits only
    if (name === "mobile") {
      const cleaned = value.replace(/\D/g, "");
      setForm((s) => ({ ...s, [name]: cleaned.slice(0, 10) }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const validate = () => {
    if (!form.user_name.trim()) {
      setStatus("error");
      alert("Please enter your name.");
      return false;
    }
    if (!form.relationship) {
      setStatus("error");
      alert("Please select relationship.");
      return false;
    }
    if (!form.mobile || form.mobile.replace(/\D/g, "").length < 10) {
      setStatus("error");
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("EmailJS is not configured. Check .env values.");
      return;
    }
    if (!validate()) return;

    setSubmitting(true);
    setStatus(null);

    const templateParams = {
      user_name: form.user_name,
      relationship: form.relationship,
      mobile: "+91" + form.mobile, // optional: prefix country code
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setStatus("success");
      // optionally clear the form
      setForm({ user_name: "", relationship: "", mobile: "" });
      // optionally persist that user registered (local/session)
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      alert("Submission failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-[#fef1f1]">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#924130" }}>
          Join the Most Trusted Matrimony Network
        </h1>

        <p className="mb-8 text-lg" style={{ color: "#b85947" }}>
          Register now and let us help you find your soulmate.
        </p>

        <div className="bg-gradient-to-b from-[#fff5e6] to-[#ffe3c2] shadow-lg rounded-2xl p-8 md:p-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"
          >
            {/* Name Field */}
            <div className="text-left">
              <label className="block font-semibold mb-1" style={{ color: "#924130" }}>
                Your Name
              </label>
              <div className="flex items-center bg-white border border-[#eec4b8] rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-[#b85947]/60">
                <FaUser className="text-[#b85947] mx-3" />
                <input
                  name="user_name"
                  value={form.user_name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-3 outline-none rounded-r-lg text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Relationship Field */}
            <div className="text-left">
              <label className="block font-semibold mb-1" style={{ color: "#924130" }}>
                Matrimony Profile For
              </label>
              <select
                name="relationship"
                value={form.relationship}
                onChange={handleChange}
                className="w-full p-3 border border-[#eec4b8] rounded-lg shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-[#b85947]/60 outline-none"
                required
              >
                <option value="" disabled>
                  Select Relationship
                </option>
                <option value="Myself">Myself</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Relative">Relative</option>
                <option value="Friend">Friend</option>
              </select>
            </div>

            {/* Mobile Field */}
            <div className="text-left">
              <label className="block font-semibold mb-1" style={{ color: "#924130" }}>
                Mobile Number
              </label>
              <div className="flex items-center bg-white border border-[#eec4b8] rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-[#b85947]/60">
                <div className="flex items-center px-3 text-gray-700">
                  <FaPhoneAlt className="text-[#b85947] mr-2" /> +91
                </div>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter 10-digit number"
                  maxLength={10}
                  className="w-full p-3 outline-none rounded-r-lg text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-3 flex flex-col items-center mt-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#924130] to-[#b85947] hover:brightness-110 text-white font-semibold text-lg px-10 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60"
              >
                <FaHeart />
                {submitting ? "Registering..." : "Register Free"}
              </button>

              {/* status message */}
              {status === "success" && (
                <p className="mt-3 text-sm text-green-700">Thanks! We received your details.</p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-600">Something went wrong. Try again later.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroForm;
