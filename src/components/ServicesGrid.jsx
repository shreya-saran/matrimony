import React from "react";
import ARIHANT from "../assets/services/ARIHANT.jpg";
import PUNJABI from "../assets/services/PUNJABI.jpg";
import Bibah from "../assets/services/Bibah.jpg";
import Riddhi from "../assets/services/Riddhi.jpg";
import Laawan from "../assets/services/Laawan.jpg";
import Nikah from "../assets/services/Nikah.jpg";
import Progressive from "../assets/services/Progressive.jpg";
import Elite from "../assets/services/Elite.png";

const SERVICES = [
  {
    id: 1,
    title: "Arihant Matrimony",
    subtitle: "For Digamber & Shwetamber Jains",
    img: ARIHANT,
  },
  {
    id: 2,
    title: "Punjabi Matrimony",
    subtitle: "For Punjabi, Brahmin, Rajput & Kayastha",
    img: PUNJABI,
  },
  {
    id: 3,
    title: "Bibah Bandhini",
    subtitle: "For Bengali, Oriya & Assamese",
    img: Bibah,
  },
  {
    id: 4,
    title: "Riddhi Siddhi",
    subtitle: "For Agarwal, Gupta, Marwari & Gujarati",
    img: Riddhi,
  },
  {
    id: 5,
    title: "Laawan Phere",
    subtitle: "For Sikh-Khatri, Arora, Ramgarhia, Jatsikh",
    img: Laawan,
  },
  {
    id: 6,
    title: "Nikah Matrimony",
    subtitle: "For Sunni & Shia Muslims",
    img: Nikah,
  },
  {
    id: 7,
    title: "Progressive Matrimony",
    subtitle: "For Cosmopolitan & Professionals",
    img: Progressive,
  },
  {
    id: 8,
    title: "Elite Matrimony",
    subtitle: "For Elite & High Profile Families",
    img: Elite,
  },
];

export default function ServicesGrid({ services = SERVICES }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-[#0f1720]">
            Our Matrimony Divisions
          </h3>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            We bring together diverse communities under one trusted platform —
            explore specialized matrimony services that celebrate every culture,
            belief, and tradition.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl overflow-hidden bg-teal-50 border border-teal-100 shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-[#0f1720] tracking-wide">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm text-teal-700 font-medium">
                  {s.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
