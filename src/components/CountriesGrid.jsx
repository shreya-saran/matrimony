import React, { useState } from "react";

import INDIA from "../assets/flags/india.png";
import AUSTRALIA from "../assets/flags/Australia.png";
import USA from "../assets/flags/usa.png";
import UK from "../assets/flags/uk.png";
import SINGAPORE from "../assets/flags/singapore.png";
import CANADA from "../assets/flags/canada.png";
import GERMANY from "../assets/flags/germany.png";
import HONGKONG from "../assets/flags/hong-kong.png";
import SAUDI from "../assets/flags/flag.png";
import UAE from "../assets/flags/uae.png";
import SWITZERLAND from "../assets/flags/switzerland.png";
import MALAYSIA from "../assets/flags/malaysia.png";

// 🗺️ Country list
const COUNTRIES = [
  { id: "IN", name: "India", flag: INDIA },
  { id: "AU", name: "Australia", flag: AUSTRALIA },
  { id: "US", name: "United States", flag: USA },
  { id: "UK", name: "United Kingdom", flag: UK },
  { id: "SG", name: "Singapore", flag: SINGAPORE },
  { id: "CA", name: "Canada", flag: CANADA },
  { id: "DE", name: "Germany", flag: GERMANY },
  { id: "HK", name: "Hong Kong", flag: HONGKONG },
  { id: "SA", name: "Saudi Arabia", flag: SAUDI },
  { id: "AE", name: "UAE", flag: UAE },
  { id: "CH", name: "Switzerland", flag: SWITZERLAND },
  { id: "MY", name: "Malaysia", flag: MALAYSIA },
];

export default function CountriesGrid({
  heading = "Countries We Serve",
  bg = "bg-gradient-to-b from-[#fdfbf8] to-[#fff5ee]",
}) {
  const [selected, setSelected] = useState(null);

  return (
    <section className={`${bg} py-14`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#004d4d]">
          {heading}
        </h2>
        <div
          className="mx-auto mt-3 mb-8"
          style={{
            width: 120,
            height: 5,
            borderRadius: 5,
            background: "#009688",
            opacity: 0.9,
          }}
        />

        {/* Country Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {COUNTRIES.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={`
                flex flex-col items-center justify-center p-5 bg-white/80 backdrop-blur-md rounded-xl cursor-pointer transition-all duration-200
                ${selected === c.id ? "ring-2 ring-teal-600 scale-105 shadow-lg" : "hover:ring-2 hover:ring-teal-500 hover:scale-105"}
              `}
            >
              <div className="w-14 h-10 mb-3 overflow-hidden rounded-md shadow-sm">
                <img
                  src={c.flag}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base font-semibold text-[#004d4d]">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
