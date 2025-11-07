import React, { useState } from "react";
import { Phone, Mail, User, Heart, Send } from "lucide-react";

const FAQS = [
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
  {
    q: "3. Are you a registered firm?",
    a: "Yes, Elite Marriage Bureau is a registered firm."
  },
  {
    q: "4. What is your Success rate?",
    a: "We have a very high success rate."
  },
  {
    q: "5. What sets Elite Marriage Bureau apart from other Marriage Bureau services?",
    a:
      "Elite Marriage Bureau stands out for its personalized approach, global network of elite profiles, and commitment to confidentiality, ensuring tailored matchmaking services for discerning clients seeking their perfect life partners."
  }
];

const ContactSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: FAQ Accordion */}
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
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
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
                  className={`px-4 pb-4 transition-all duration-300 ${openIndex === i ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                  style={{ overflow: "hidden" }}
                  aria-hidden={openIndex !== i}
                >
                  <p className="text-sm leading-relaxed mt-2" style={{ color: "#333" }}>
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "#924130" }}>
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
              className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              style={{ background: "linear-gradient(90deg,#924130 0%, #b85947 100%)", color: "#fff" }}
            >
              <Send size={18} /> Begin Your Journey
            </button>
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
};

export default ContactSection;
