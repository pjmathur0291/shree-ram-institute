import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StudentImage from "../assets/Studentplaying.webp";
import Background from "../assets/Group2.webp";

const OurStudent = () => {
  const testimonials = [
    {
      id: 1,
      image: StudentImage,
    },
    {
      id: 2,
      image: StudentImage,
    },
    {
      id: 3,
      image: StudentImage,
    },
    {
      id: 4,
      image: StudentImage,
    },
  ];

  return (
    <section
      className="text-white py-16 md:py-24 px-6 px-3 bg-cover bg-center overflow-hidden"
      style={{
        background: `url(${Background}) top center / cover no-repeat`,
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-center justify-center text-color-white-solid text-4xl font-bold cormorant-garamond-font leading-[48px]">
            Hear It From Our Students
          </h2>
          <p className="text-center justify-center text-color-white-solid text-base font-normal text-white outfit-font">
            Real experiences from students who stepped into the hotel industry
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative student-slider-container overflow-hidden">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={800}
            spaceBetween={20}
            slidesPerView={1}
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
            className="mySwiper !overflow-hidden !pb-20"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="student-slide">
                <div className="student-card shadow-2xl border border-white/5">
                  <img
                    src={item.image}
                    alt="Student testimonial"
                    className="w-full h-full object-cover aspect-video"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Controls (Matching the Image) */}
          <div className="flex flex-col items-center gap-6 mt-4">
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
        </div>
      </div>
    </section>
  );
};

export default OurStudent;
