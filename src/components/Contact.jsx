import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Phone, Mail, User, Heart, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_2ylk5jc";
const TEMPLATE_ID = "template_i6cvtgb";
const PUBLIC_KEY =  "1yKAvhNz99bCFge-t";

export default function ContactSection() {
  
  const FAQS = useMemo(
    () => [
      {
        q: "1. What is your Marriage Bureau process?",
        a:
          "Our Marriage Bureau process at Elite Marriage Bureau involves personalized consultations to understand client preferences, followed by curated introductions based on compatibility assessments, ensuring a tailored approach to finding ideal life partners."
      },
      {
        q: "2. What is unique in your matrimony?",
        a:
          "Elite Marriage Bureau stands out for its personalized approach, combining extensive experience, a global network of elite profiles, and a commitment to confidentiality, ensuring tailored matchmaking services for discerning clients seeking their perfect life partners."
      },
      { q: "3. Are you a registered firm?", a: "Yes, Elite Marriage Bureau is a registered firm." },
      { q: "4. What is your Success rate?", a: "We have a very high success rate." },
      {
        q: "5. What sets Elite Marriage Bureau apart from other Marriage Bureau services?",
        a:
          "Elite Marriage Bureau stands out for its personalized approach, global network of elite profiles, and commitment to confidentiality, ensuring tailored matchmaking services for discerning clients seeking their perfect life partners."
      }
    ],
    []
  );

  // Form state
  const [form, setForm] = useState({ user_name: "", relationship: "", mobile: "" });
  const [openIndex, setOpenIndex] = useState(null);
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const sentOnceRef = useRef(false); // avoids extra renders when checking localStorage
  const initedRef = useRef(false); // ensures emailjs.init runs once

  // On mount: init emailjs and read sent flag once
  useEffect(() => {
    // Initialize EmailJS once
    if (PUBLIC_KEY && !initedRef.current) {
      try {
        emailjs.init(PUBLIC_KEY);
        initedRef.current = true;
      } catch (err) {
        // Not fatal — we'll show an error if user tries to submit
        // Keep it quiet in dev console for debugging
        console.warn("EmailJS init failed:", err);
      }
    } else if (!PUBLIC_KEY) {
      console.warn("VITE_EMAILJS_PUBLIC_KEY is not set in .env");
    }

    // Read persisted flag once (avoid setting state unnecessarily)
    if (typeof window !== "undefined") {
      const already = localStorage.getItem("contactFormSent");
      if (already) sentOnceRef.current = true;
    }
  }, []);

  // Handlers
  const toggleFAQ = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      // allow only digits, max 10 digits
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setForm((s) => (s.mobile === cleaned ? s : { ...s, mobile: cleaned }));
    } else {
      setForm((s) => (s[name] === value ? s : { ...s, [name]: value }));
    }
  }, []);

  const validate = useCallback(() => {
    if (!form.user_name.trim()) {
      setStatus("error");
      alert("Please enter your name.");
      return false;
    }
    if (!form.relationship) {
      setStatus("error");
      alert("Please select who you are creating the profile for.");
      return false;
    }
    if (!form.mobile || form.mobile.length < 10) {
      setStatus("error");
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }
    return true;
  }, [form]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (status === "sending") return; // prevent double submit
      if (sentOnceRef.current) {
        alert("You have already submitted. Our team will contact you soon.");
        return;
      }

      // Env/config checks
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        alert("EmailJS is not configured. Check your environment variables (.env).");
        return;
      }

      if (!validate()) return;

      setStatus("sending");
      try {
        const templateParams = {
          user_name: form.user_name.trim(),
          relationship: form.relationship,
          mobile: "+91" + form.mobile // prefix optional
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

        setStatus("success");
        sentOnceRef.current = true;
        localStorage.setItem("contactFormSent", "true");
        // clear form (optional)
        setForm({ user_name: "", relationship: "", mobile: "" });
      } catch (err) {
        console.error("EmailJS send error:", err);
        setStatus("error");
        alert("Submission failed. Please try again later.");
      }
    },
    [form, status, validate]
  );

  const isDisabled = status === "sending" || sentOnceRef.current === true;

  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* FAQ */}
        <div className="rounded-3xl shadow-md p-8 bg-white">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#924130" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm mb-6" style={{ color: "#6b6b6b" }}>
            Answers to common questions about our process and approach. If you need more details, contact us using the form.
          </p>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 focus:outline-none"
                  style={{ background: openIndex === i ? "#fff6f6" : "transparent" }}
                >
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "#924130" }}>
                      {f.q}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className={`h-5 w-5 transform transition-transform duration-200 ${openIndex === i ? "rotate-180" : "rotate-0"}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M6 8l4 4 4-4" stroke="#b85947" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-hidden={openIndex !== i}
                  className={`px-4 pb-4 transition-all duration-300 ${openIndex === i ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-sm leading-relaxed mt-2" style={{ color: "#333" }}>
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "#924130" }}>
            Start Your Journey
          </h3>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <User className="text-gray-400 mr-2" size={18} />
                <input
                  name="user_name"
                  value={form.user_name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 outline-none bg-transparent"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Creating Profile For</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <Heart className="text-gray-400 mr-2" size={18} />
                <select
                  name="relationship"
                  value={form.relationship}
                  onChange={handleChange}
                  className="w-full p-2 bg-transparent outline-none"
                  required
                  aria-required="true"
                >
                  <option value="">Select Relationship</option>
                  <option value="Myself">Myself</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <Phone className="text-gray-400 mr-2" size={18} />
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter mobile number"
                  className="w-full p-2 outline-none bg-transparent"
                  inputMode="numeric"
                  aria-label="Mobile number"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                background: "linear-gradient(90deg,#924130 0%, #b85947 100%)",
                color: "#fff",
                opacity: isDisabled ? 0.6 : 1
              }}
              aria-disabled={isDisabled}
            >
              <Send size={18} />
              {status === "sending" ? "Sending..." : sentOnceRef.current ? "Submitted" : "Begin Your Journey"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-700 mt-2">Thanks! We received your details. Our team will contact you soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 mt-2">Something went wrong. Please try again later.</p>
            )}
          </form>

          {/* quick contact row */}
          <div className="mt-6 border-t pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center gap-3">
              <div className="bg-[#fef1f1] p-3 rounded-xl">
                <Phone size={20} className="text-[#924130]" />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#924130" }}>
                  24/7 Support
                </div>
                <a href="tel:+917838500048" className="text-sm" style={{ color: "#b85947" }}>
                  +91 - 7838500048
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#fef1f1] p-3 rounded-xl">
                <Mail size={20} className="text-[#924130]" />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#924130" }}>
                  Email Support
                </div>
                <a href="mailto:sycoriaanteam@gmail.com" className="text-sm" style={{ color: "#b85947" }}>
                  sycoriaanteam@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
