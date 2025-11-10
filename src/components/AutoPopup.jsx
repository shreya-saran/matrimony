import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Replace these with your EmailJS credentials
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    relationship: "",
    mobile: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const popupRef = useRef(null);

  
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("leadPopupSeen");
    if (!hasSeenPopup) {
      
      setTimeout(() => setOpen(true), 1500);
    }
  }, []);

  
  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: formData.user_name,
          relationship: formData.relationship,
          mobile: formData.mobile,
        },
        PUBLIC_KEY
      );
      setSuccess(true);
      localStorage.setItem("leadPopupSeen", "true"); // Don’t show again next time
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Submission failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      style={{ animation: "fadeIn 0.3s ease" }}
    >
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md relative"
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {!success ? (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Start Your Journey
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Your Name
                </label>
                <input
                  name="user_name"
                  type="text"
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#CFA85C] outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Creating Profile For
                </label>
                <select
                  name="relationship"
                  required
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#CFA85C] outline-none"
                >
                  <option value="">Select Relationship</option>
                  <option value="Self">Self</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Relative">Relative</option>
                  <option value="Friend">Friend</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Mobile Number
                </label>
                <input
                  name="mobile"
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#CFA85C] outline-none"
                  placeholder="Enter mobile number"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2 rounded-md bg-gradient-to-r from-[#924130] to-[#b85947] text-white font-semibold shadow hover:brightness-95 transition disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Begin Your Journey"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <svg
              className="mx-auto mb-4 w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800">
              Thank you for connecting!
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Our team will contact you shortly.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 px-4 py-2 bg-[#924130] text-white rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
