import React from "react";
import c1 from "../assets/couples/1.jpg";
import c2 from "../assets/couples/2.jpg";
import c3 from "../assets/couples/3.jpg";
import c4 from "../assets/couples/4.jpg";
import c5 from "../assets/couples/5.avif";
import c6 from "../assets/couples/6.jpg";

const couples = [c1, c2, c3, c4, c5, c6];

function TrustBadges({ className = "" }) {
  const badges = [
    "15+ Years of Experience",
    "5000+ Successful Alliances Worldwide",
    "Global Reach for all Indian Families",
    "100% Confidentiality",
    "Expert and Tenured Team",
    "Verified Profiles",
  ];

  return (
    <div className={`w-full ${className}`}>
      {/* Container with same look as provided image in mobile: dark cards with subtle border */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges.map((text, idx) => (
          <div
            key={idx}
            className="rounded-xl border-2 border-[#b85947] bg-[#0b0b0b]/80 p-4 min-h-[64px] flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="text-center">
              <div className="text-xs leading-tight tracking-wide text-[#fef1f1] font-medium">
                {text.split(" ").length > 3 ? (
                  // break into two lines for long badges
                  <>
                    <span className="block">{text.split(" ").slice(0, 2).join(" ")}</span>
                    <span className="block">{text.split(" ").slice(2).join(" ")}</span>
                  </>
                ) : (
                  <span className="block">{text}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const phone = "+91 78385 00048";
  const phoneDigits = "917838500048";
  const email = "sycoriaanteam@gmail.com";

  return (
    <section className="bg-[#f9fafb] py-8 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: headline & CTAs */}
        <div className="space-y-6 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span
              className="block text-lg sm:text-xl font-medium"
              style={{ color: "#b85947" }} /* subheading color */
            >
              Personalised Matchmaking for
            </span>

            <span className="block text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] tracking-tight">
              <span className="text-[#924130]">Meaningful Relationships</span>
              <br />
              <span className="text-[#b85947]">Crafted For You</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg max-w-xl" style={{ color: "#6b6b6b" }}>
            Elite Matrimony brings experienced consultants and verified profiles together to deliver
            personalised matrimonial matchmaking across India and abroad - discreet, trustworthy,
            and client-first.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href={`tel:${phone.replace(/ /g, "")}`}
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl shadow-lg text-white font-semibold text-lg bg-gradient-to-r from-[#924130] to-[#b85947] hover:-translate-y-0.5 transform transition focus:outline-none focus:ring-4"
              aria-label={`Call now ${phone}`}
            >
              Call Now : {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl shadow-md text-[#924130] font-semibold text-lg bg-white border-2 border-[#f1d6d3] hover:brightness-95 transition focus:outline-none focus:ring-4"
              aria-label={`Email ${email}`}
            >
              Email Us
            </a>
          </div>

          {/* trust badges (compact on mobile) */}
          <div className="mt-4">
            <TrustBadges />
          </div>
        </div>

        {/* RIGHT: photo grid (centered) */}
        <div className="order-first lg:order-last flex flex-col lg:flex-row lg:justify-end gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:pt-12">
            {couples.map((img, idx) => (
              <article
                key={idx}
                className="relative rounded-xl overflow-hidden bg-white shadow-lg transform hover:-translate-y-2 hover:scale-[1.01] transition-all"
                aria-hidden="false"
                role="img"
                aria-label={`Couple photo ${idx + 1}`}
              >
                {/* accent top border using brand tones */}
                <div
                  className="absolute left-0 top-0 right-0 h-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #fef1f1 0%, #b85947 40%, #924130 100%)",
                  }}
                />
                <img
                  src={img}
                  alt={`Couple ${idx + 1} — happy couple`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-52 sm:h-56 object-cover"
                />
                {/* accent bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #fef1f1 0%, #b85947 40%, #924130 100%)",
                  }}
                />
                <div className="absolute -top-4 left-4 right-4 h-4 rounded-b-xl bg-white/40 blur-sm pointer-events-none" />
              </article>
            ))}
          </div>

          {/* On larger screens show the trust badges to the right as in the sample image
          <div className="hidden lg:block lg:ml-6 w-[320px]">
            <TrustBadges />
          </div> */}
        </div>
      </div>
    </section>
  );
}
