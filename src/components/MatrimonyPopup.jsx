import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg"; 

export default function MatrimonyPopup() {
  const PHONE = "+917838500048";
  const PLAIN_PHONE = "7838500048";
  const EMAIL = "sycoriaanteam@gmail.com";
  const COMPANY = "Elite Matrimony Services";
  const ADDRESS = "Safdarjung Enclave";

  const [show, setShow] = useState(false);

  useEffect(() => {
    // Deliberately delay this popup a bit longer so it does NOT open at the same time
    // as the LeadPopup that appears on site open. Adjust if you want it earlier/later.
    const timer = setTimeout(() => setShow(true), 3500); // <-- changed from 1000 -> 3500

    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 50;
      if (scrolledToBottom) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => setShow(false);

  if (!show) return null;

  
  const primary = "#924130"; 
  const cream = "#FFF8E7";

  return (
    <>
      
      <div
        className="hidden md:block fixed inset-0 z-40 bg-black/40"
        onClick={handleClose}
      ></div>

      
      <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center px-6">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex gap-4 p-6">
            <img
              src={logo}
              alt="logo"
              className="w-24 h-24 rounded-xl object-contain bg-white p-2 border"
            />

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="text-xl font-semibold capitalize"
                    style={{ color: primary }}
                  >
                    {COMPANY}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-4 h-4 ${
                            i <= 4 ? "text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.538 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.783.57-1.838-.197-1.538-1.118l1.2-3.674a1 1 0 00-.364-1.118L2.449 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">4.0 (2k+)</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-3">{PHONE}</p>
              <p className="text-sm text-gray-600 mt-3">{ADDRESS}</p>

              <div className="mt-5 flex flex-col gap-3 items-start">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full shadow-sm text-sm font-medium text-white hover:opacity-90 transition-all"
                  style={{ backgroundColor: primary }}
                >
                  Call Now
                </a>
                <button
                  onClick={handleClose}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full shadow-sm text-sm font-medium bg-white border border-gray-200 hover:bg-gray-50 transition-all"
                  style={{ color: primary }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Popup */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg rounded-t-2xl p-4 animate-slide-up">
        <div className="flex gap-3 items-start">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 rounded-xl object-contain bg-white p-1 border"
          />

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h4
                  className="text-md font-semibold capitalize"
                  style={{ color: primary }}
                >
                  {COMPANY}
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">{PLAIN_PHONE}</p>
              </div>
              <button onClick={handleClose} className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="text-xs text-gray-600 mt-2">{ADDRESS}</p>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`tel:${PHONE}`}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-white hover:opacity-90 transition-all"
                style={{ backgroundColor: primary }}
              >
                Call
              </a>
              <button
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 hover:bg-gray-50 transition-all"
                style={{ color: primary }}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
