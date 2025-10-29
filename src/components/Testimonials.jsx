import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your videos
import v1 from "../assets/videos/v1.mp4";
import v2 from "../assets/videos/v2.mp4";
import v3 from "../assets/videos/v3.mp4";
import v4 from "../assets/videos/v4.mp4";
import v5 from "../assets/videos/v5.mp4";
import v6 from "../assets/videos/v6.mp4";

const videos = [v1, v2, v3, v4, v5, v6];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-pink-50 text-center">
      <h2 className="text-4xl font-bold text-teal-700 mb-12">
        Client Testimonials
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true} // ✅ keeps looping infinitely
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden border-4 border-pink-300 relative hover:scale-105 transition-transform duration-300">
                {/* Top Frame Bar */}
                <div className="bg-gradient-to-r from-teal-500 to-pink-400 py-2 text-white font-semibold">
                  ❤️ Happy Clients
                </div>

                {/* Video */}
                <video
                  className="w-full h-80 object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Bottom Gradient Bar (Removed Testimonial number) */}
                {/* <div className="bg-gradient-to-r from-pink-400 to-teal-400 py-3 text-white font-medium text-lg">
                  Thank You For Your Love 💕
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
