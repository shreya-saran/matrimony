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
  // keep default section bg subtle and brand-consistent
  bg = "bg-[#fef1f1]",
}) {
  const [selected, setSelected] = useState(null);

  return (
    <section className={`${bg} py-16`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "#924130" }} /* primary heading color */
        >
          {heading}
        </h2>

        {/* Divider — gradient from primary to accent */}
        <div
          className="mx-auto mt-3 mb-10 w-32 h-1.5 rounded-full shadow-sm"
          style={{
            background:
              "linear-gradient(90deg, #924130 0%, #b85947 50%, #924130 100%)",
          }}
        />

        {/* Country Grid: default/mobile = 3 cols, larger breakpoints unchanged */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {COUNTRIES.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl cursor-pointer transition-all duration-300 select-none ${
                selected === c.id ? "scale-105 shadow-lg" : "hover:scale-105 hover:shadow-md"
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(c.id);
              }}
            >
              <div
                className="w-14 h-10 mb-3 overflow-hidden rounded-md shadow-sm"
                style={{
                  background: "#fff",
                  border: selected === c.id ? "2px solid #b85947" : "1px solid #eee",
                }}
              >
                <img src={c.flag} alt={c.name} className="w-full h-full object-cover" />
              </div>

              <p
                className="text-base font-semibold"
                style={{
                  color: selected === c.id ? "#b85947" : "#924130",
                }}
              >
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
