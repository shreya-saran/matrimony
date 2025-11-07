import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import t1 from "../assets/testimonials/t1.jpg";
import t2 from "../assets/testimonials/t2.jpg";
import t3 from "../assets/testimonials/t3.jpg";
import t4 from "../assets/testimonials/t4.jpg";
import t5 from "../assets/testimonials/t5.jpg";
import t6 from "../assets/testimonials/t6.jpg";

const TESTIMONIALS = [
  { img: t1, title: "Pratik & Sneha", location: "New Delhi" },
  { img: t2, title: "Kanishik & Niharika", location: "New Delhi, UP" },
  { img: t3, title: "Chetan & Indrapreet", location: "Noida" },
  { img: t4, title: "Ankur & Runjhun", location: "New Delhi" },
  { img: t5, title: "Prateek & Akriti", location: "Vishakhpatnam, Raipur" },
  { img: t6, title: "Chirag & Ayushi", location: "Delhi" },
];

export default function SuccessStories() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openLightbox = (i) => {
    setIdx(i);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const prev = useCallback(() => {
    setIdx((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);
  const next = useCallback(() => {
    setIdx((p) => (p + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <section className="py-16 lg:pt-24 bg-[#fff5e6]"> {/* distinct from registration form bg */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#924130] text-center mb-2">
          Elite Success Stories
        </h2>
        <p className="text-center text-[#b85947] mb-10">
          Thousands of Elite members found their match through Elite Matrimony
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={800}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer"
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
              >
                <div className="w-full h-64 md:h-72 lg:h-80 flex items-center justify-center bg-white">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="h-full w-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 flex items-end justify-start p-5">
                  <div className="w-full opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-xl font-semibold text-white leading-tight">
                        {t.title}
                      </h3>
                      <p className="text-pink-200 mt-1">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Lightbox modal (inlined, no external deps) */}
        {open && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={closeLightbox}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />
            <div
              className="relative z-10 max-w-5xl w-full mx-auto rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image container */}
              <div className="flex items-center justify-center bg-black">
                <img
                  src={TESTIMONIALS[idx].img}
                  alt={TESTIMONIALS[idx].title}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Caption + controls */}
              <div className="bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-[#924130]">
                    {TESTIMONIALS[idx].title}
                  </h3>
                  <p className="text-sm text-[#b85947]">{TESTIMONIALS[idx].location}</p>
                </div>

                <div className="ml-auto flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="px-3 py-2 rounded-md bg-[#fef1f1] border border-[#e5c2bb] text-[#924130] hover:bg-[#f5e0da]"
                    aria-label="Previous"
                  >
                    ◀
                  </button>
                  <button
                    onClick={next}
                    className="px-3 py-2 rounded-md bg-[#fef1f1] border border-[#e5c2bb] text-[#924130] hover:bg-[#f5e0da]"
                    aria-label="Next"
                  >
                    ▶
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="px-3 py-2 rounded-md bg-[#924130] text-white"
                    aria-label="Close"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
