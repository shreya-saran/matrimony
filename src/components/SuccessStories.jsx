import React from "react";
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
  { img: t1, title: "Sahil & Mehak", location: "USA, Delhi" },
  { img: t2, title: "Shivam & Sasmita", location: "Delhi, Bhubaneswar" },
  { img: t3, title: "Puranjay & Megha", location: "Bengaluru, Karnataka" },
  { img: t4, title: "Sachit & Raavi", location: "Noida, Karnataka" },
  { img: t5, title: "Vansh & Radhika", location: "Gurgaon" },
  { img: t6, title: "Ankit & Priya", location: "Mumbai" },
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 via-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-teal-800 text-center mb-2">
          Elite Success Stories
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Thousands of Elite members found their match through Elite Matrimony
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500, // Time between slides
            disableOnInteraction: false, // Keep autoplay even after manual swipe
            pauseOnMouseEnter: false, // Keeps moving even when hovered
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
          {TESTIMONIALS.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg bg-white">
                {/* Image */}
                <div className="w-full h-64 md:h-72 lg:h-80 flex items-center justify-center bg-white">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="h-full w-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
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
      </div>
    </section>
  );
};

export default SuccessStories;
