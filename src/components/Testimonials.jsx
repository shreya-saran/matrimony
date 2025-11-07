import React, { useRef, useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// videos
import v1 from "../assets/videos/v1.mp4";
import v2 from "../assets/videos/v2.mp4";
import v3 from "../assets/videos/v3.mp4";
import v4 from "../assets/videos/v4.mp4";
import v5 from "../assets/videos/v5.mp4";
import v6 from "../assets/videos/v6.mp4";

// thumbnails (one per video)
import t1 from "../assets/thumbnails/th1.png";
import t2 from "../assets/thumbnails/th2.png";
import t3 from "../assets/thumbnails/th3.png";
import t4 from "../assets/thumbnails/th4.png";
import t5 from "../assets/thumbnails/th5.png";
import t6 from "../assets/thumbnails/th6.png";

const TESTIMONIALS = [
  { video: v1, poster: t1 },
  { video: v2, poster: t2 },
  { video: v3, poster: t3 },
  { video: v4, poster: t4 },
  { video: v5, poster: t5 },
  { video: v6, poster: t6 },
];

export default function Testimonials() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null); // which slide is currently playing

  // helper: are any videos currently playing?
  const anyVideoPlaying = useCallback(() => {
    return videoRefs.current.some((v) => v && !v.paused && !v.ended);
  }, []);

  // pause all other videos when one starts; stop swiper autoplay
  const handlePlayStart = (index) => {
    // pause other videos
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        try {
          video.pause();
        } catch (e) {}
      }
    });

    // set playing index
    setPlayingIndex(index);

    // stop swiper autoplay while a video is playing
    if (swiperRef.current?.autoplay) {
      try {
        swiperRef.current.autoplay.stop();
      } catch (e) {}
    }
  };

  // when a video pauses/ends: maybe resume autoplay and clear playingIndex if ended
  const handleMaybeResumeAutoplay = (index, eventType = "pause") => {
    // if ended, reset playingIndex to show poster again
    if (eventType === "ended") {
      setPlayingIndex(null);
      // reset video to start (optional)
      try {
        if (videoRefs.current[index]) {
          videoRefs.current[index].currentTime = 0;
        }
      } catch (e) {}
    }

    // resume autoplay only if no other video is playing
    if (swiperRef.current?.autoplay) {
      if (!anyVideoPlaying()) {
        try {
          swiperRef.current.autoplay.start();
        } catch (e) {}
      } else {
        try {
          swiperRef.current.autoplay.stop();
        } catch (e) {}
      }
    }
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      videoRefs.current.forEach((v) => {
        try {
          v?.pause();
        } catch (e) {}
      });
      if (swiperRef.current?.autoplay) {
        try {
          swiperRef.current.autoplay.stop();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <section
      className="py-20 text-center"
      style={{
        background: "linear-gradient(180deg, #fff7f5 0%, #fef1ef 100%)",
      }}
    >
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-6"
        style={{ color: "#924130" }}
      >
        Client Testimonials
      </h2>
      <p
        className="max-w-3xl mx-auto mb-12 text-base md:text-lg font-medium"
        style={{ color: "#b85947" }}
      >
        Hear from our happy clients — real stories, real experiences. Tap a thumbnail to play.
      </p>

      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {TESTIMONIALS.map((item, idx) => (
            <SwiperSlide key={idx}>
              <article className="rounded-3xl overflow-hidden shadow-lg bg-white transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
                <div className="relative flex items-center justify-center bg-[#fef1f1]">
                  {/* Show poster image until user clicks; use object-contain to show whole image */}
                  {playingIndex !== idx ? (
                    <button
                      type="button"
                      onClick={() => handlePlayStart(idx)}
                      className="relative w-full"
                      aria-label={`Play testimonial ${idx + 1}`}
                      style={{ outline: "none" }}
                    >
                      <img
                        src={item.poster}
                        alt={`testimonial-${idx + 1}`}
                        className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] object-contain bg-[#fef1f1]"
                        loading="lazy"
                      />
                      {/* play overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#924130] bg-opacity-90 text-white text-2xl shadow-lg">
                          ▶
                        </div>
                      </div>
                    </button>
                  ) : (
                    // render video element (autoplay)
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] object-contain bg-black"
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      onPause={() => handleMaybeResumeAutoplay(idx, "pause")}
                      onEnded={() => handleMaybeResumeAutoplay(idx, "ended")}
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
