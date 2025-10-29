import React from "react";
import c1 from "../assets/couples/1.jpg";
import c2 from "../assets/couples/2.jpg";
import c3 from "../assets/couples/3.jpg";
import c4 from "../assets/couples/4.jpg";
import c5 from "../assets/couples/5.avif";
import c6 from "../assets/couples/6.jpg";

const couples = [c1, c2, c3, c4, c5, c6];

export default function Hero() {
  const phone = "+91 78385 00048";
  const phoneDigits = "917838500048";
  const email = "sycoriaanteam@gmail.com";

  return (
    <section className="bg-[linear-gradient(180deg,#fffefc_0%,#f7fffd_100%)] py-8 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: headline & CTAs */}
        <div className="space-y-6 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="block text-lg sm:text-xl font-medium text-slate-700">
              Personalised Matchmaking for
            </span>

            <span className="block text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] tracking-tight">
              <span className="text-teal-500">Meaningful Relationships</span>
              <br />
              <span className="text-rose-500">Crafted For You</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl">
            Sycorian brings experienced consultants and verified profiles together to deliver personalised matrimonial matchmaking across India and abroad - discreet, trustworthy, and client-first.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href={`tel:${phone.replace(/ /g, "")}`}
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl shadow-lg text-white font-semibold text-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:-translate-y-0.5 transform transition focus:outline-none focus:ring-4 focus:ring-teal-200"
              aria-label={`Call now ${phone}`}
            >
              Call Now : {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl shadow-md text-slate-800 font-semibold text-lg bg-white border-2 border-[#e6f7f6] hover:brightness-95 transition focus:outline-none focus:ring-4 focus:ring-cyan-100"
              aria-label={`Email ${email}`}
            >
              Email Us
            </a>
          </div>

          {/* trust badges */}
          <div className="flex flex-wrap gap-3 mt-3 items-center">
            {/* Trusted Advisors (handshake icon) */}
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#f1fffe] p-3 border border-[#bfecea] flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#06b6d4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v-4a4 4 0 014-4h3.172a4 4 0 012.829 1.172l3.828 3.828a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656 0L4 16z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#0f172a]">Trusted Advisors</div>
              </div>
            </div>

            {/* Verified Profiles (shield-check icon) */}
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#fff6f6] p-3 border border-[#ffd6d6] flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#ff6b6b]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5.25-3.75 9.75-7 10-3.25-.25-7-4.75-7-10V6l7-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#0f172a]">Verified Profiles</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: photo grid (centered) */}
        <div className="order-first lg:order-last flex justify-center lg:justify-end">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {couples.map((img, idx) => (
              <article
                key={idx}
                className="relative rounded-xl overflow-hidden bg-white shadow-lg transform hover:-translate-y-2 hover:scale-[1.01] transition-all"
                aria-hidden="false"
                role="img"
                aria-label={`Couple photo ${idx + 1}`}
              >
                {/* accent top border */}
                <div className="absolute left-0 top-0 right-0 h-2 bg-gradient-to-r from-[#bff0ec] via-[#7dd3fc] to-[#ffdede]" />
                <img
                  src={img}
                  alt={`Couple ${idx + 1} — happy couple`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-52 sm:h-56 object-cover"
                />
                {/* accent bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#bff0ec] via-[#ffb3b3] to-[#bff0ec]" />
                <div className="absolute -top-4 left-4 right-4 h-4 rounded-b-xl bg-white/40 blur-sm pointer-events-none" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
