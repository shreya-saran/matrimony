import React from "react";
import c1 from "../assets/couples/1.jpg";
import c2 from "../assets/couples/2.jpg";
import c3 from "../assets/couples/3.jpg";
import c4 from "../assets/couples/4.jpg";
import c5 from "../assets/couples/5.avif";
import c6 from "../assets/couples/6.jpg";
import logo from "../assets/logo.jpeg";

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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges.map((text, idx) => (
          <div
            key={idx}
            className="rounded-xl border-2 border-[#b85947] bg-[#0b0b0b]/80 p-4 min-h-[70px] flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="text-center">
              <div className="text-sm sm:text-base leading-tight tracking-wide text-[#fef1f1] font-medium">
                {text.split(" ").length > 3 ? (
                  <>
                    <span className="block">
                      {text.split(" ").slice(0, 2).join(" ")}
                    </span>
                    <span className="block">
                      {text.split(" ").slice(2).join(" ")}
                    </span>
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
function MobilePhotoHero({
  image = couples[0],
  title = "Elite Matrimony Bureau",
  subtitle = "Personalised matchmaking guided by experience",
}) {
  return (
    // ✅ Use -mx-6 to cancel parent padding and w-screen to force full width
    <div className="block lg:hidden w-screen -mx-6 sm:-mx-10">
      <div className="relative w-full overflow-hidden shadow-lg">
        {/* background image - full width */}
        <img
          src={image}
          alt={`${title} — couple`}
          className="w-full h-80 sm:h-96 object-cover object-center"
          loading="lazy"
        />

        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* centered logo and text */}
        <div className="absolute inset-0 flex flex-col items-center justify-between">
          <div className="pt-4">
            {/* <img
              src={logo}
              alt="Elite Matrimony Bureau logo"
              className="w-20 sm:w-24 opacity-95 drop-shadow-lg"
            /> */}
          </div>

          <div className="pb-6 text-center px-3">
            <h2
              className="text-lg sm:text-xl font-semibold tracking-widest"
              style={{ color: "#f0d9c9" }}
            >
              {title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-white/90 font-medium max-w-xs mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Hero() {
  const phone = "+91 78385 00048";
  const phoneDigits = "917838500048";
  const email = "sycoriaanteam@gmail.com";

  return (
    <section className="bg-[#f9fafb] pt-0 pb-8 lg:pt-14 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: headline & CTAs (unchanged) */}
        <div className="space-y-6 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="block text-lg sm:text-xl font-medium" style={{ color: "#b85947" }}>
              Personalised Matchmaking for
            </span>

            <span className="block text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] tracking-tight">
              <span className="text-[#924130]">Meaningful Relationships</span>
              <br />
              <span className="text-[#b85947]">Crafted For You</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg max-w-xl" style={{ color: "#6b6b6b" }}>
            Elite Matrimony brings experienced consultants and verified profiles together to deliver personalised matrimonial matchmaking across India and abroad - discreet, trustworthy, and client-first.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href={`tel:+${phoneDigits}`}
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

          {/* trust badges (same place) */}
          <div className="mt-4">
            <TrustBadges />
          </div>
        </div>

        {/* RIGHT: photo area
            - mobile: show full-bleed hero card (MobilePhotoHero)
            - desktop (lg+): show original grid of photos (unchanged)
        */}
        <div className="order-first lg:order-last flex flex-col gap-6">
          {/* MOBILE HERO (only visible below lg) */}
          <MobilePhotoHero
            image={couples[0]}
            title="Elite Matrimony Bureau"
            subtitle="Personalised matchmaking guided by experience"
          />

          {/* DESKTOP GRID (visible on lg and up) - unchanged visuals */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:pt-6">
              {couples.map((img, idx) => (
                <article
                  key={idx}
                  className="relative rounded-2xl overflow-hidden bg-white shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                  aria-hidden="false"
                  role="img"
                  aria-label={`Couple photo ${idx + 1}`}
                >
                  {/* top gradient border */}
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
                    className="w-full h-60 sm:h-72 md:h-80 lg:h-88 object-cover"
                  />
                  {/* bottom gradient border */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
