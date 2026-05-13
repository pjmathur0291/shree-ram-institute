import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StudentImage from "../assets/Studentplaying.webp";
import Background from "../assets/Group2.webp";
import { motion } from "framer-motion";

const OurStudent = () => {
  const testimonials = [
    {
      id: 1,
      videoId: "https://www.youtube.com/embed/_RuTrdVfeRE?si=WVz3_UwJ4c2xwiuo",
    },
    {
      id: 2,
      videoId: "https://www.youtube.com/embed/4d_wvTTuzlo?si=g6k1ZTkiuOmXCifM",
    },
    {
      id: 3,
      videoId: "https://www.youtube.com/embed/3y11-xMm2BU?si=Hl3zXdBB1-5kQt4Z",
    },
    {
      id: 4,
      videoId: "https://www.youtube.com/embed/kPKFlPa5lNU?si=hhhhRP0bNsXTj8nV",
    },
    {
      id: 5,
      videoId: "https://www.youtube.com/embed/DfadaXhIKG8?si=4mHq9vayfpclgyDl",
    },
    {
      id: 6,
      videoId: "https://www.youtube.com/embed/LqSPWXBQmdw?si=s9KV-aS0rPa-aEff",
    },
  ];

  return (
    <section
      className="text-white py-14 md:py-20 px-6 overflow-x-hidden"
      style={{
        background: `url(${Background}) top center / cover no-repeat`,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white text-center justify-center text-color-white-solid text-4xl font-bold cormorant-garamond-font leading-[48px]">
            Hear It From Our Students
          </h2>
          <p className="text-center justify-center text-color-white-solid text-base font-normal text-white outfit-font">
            Real experiences from students who stepped into the hotel industry
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, staggerChildren: 0.2 }}
          className="relative student-slider-container overflow-x-hidden"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={800}
            slidesPerView={1}
            spaceBetween={5}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1.5,
              slideShadows: false,
              scale: 0.9,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper !overflow-x-hidden !pb-10"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.id} className="student-slide">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="student-card shadow-2xl border border-white/5"
                >
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                    <iframe
                      className="w-full h-full object-fit-cover"
                      src={`${item.videoId}&autoplay=0&modestbranding=1&rel=0&controls=1&showinfo=0&iv_load_policy=3&fs=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Controls (Matching the Image) */}
          <div className="flex flex-col items-center gap-6 ">
            <div className="flex items-center gap-8">
              {/* Left Arrow */}
              <button className="swiper-button-prev-custom border border-gray-700 p-2 rounded-full hover:border-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Pagination Dots */}
              <div className="custom-pagination flex gap-2"></div>

              {/* Right Arrow */}
              <button className="swiper-button-next-custom border border-gray-700 p-2 rounded-full hover:border-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7 7 7-7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStudent;
