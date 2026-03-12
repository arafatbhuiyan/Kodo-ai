import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper/modules";

const AutoSlider = () => {
  const swiperRef = useRef(null);

  const images = [
    "https://i.ibb.co/rRDBV3fs/images.jpg",
    "https://i.ibb.co/Ldw739m5/free-ai-image-generator.jpg",
    "https://i.ibb.co/Ldw739m5/free-ai-image-generator.jpg",
    "https://i.ibb.co/Ldw739m5/free-ai-image-generator.jpg",
    "https://i.ibb.co/Ldw739m5/free-ai-image-generator.jpg",
    "https://i.ibb.co/Ldw739m5/free-ai-image-generator.jpg",
    "https://i.ibb.co/Ldw739m5/free-ai-image-generator.jpg",
    "https://i.ibb.co/Ldw739m5/free-ai-image-generator.jpg",
  ];

  return (
    <div className="mt-10"
         onMouseEnter={() => swiperRef.current?.autoplay.stop()}
         onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        speed={3000}  // দ্রুত movement
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.concat(images).map((img, index) => (
          <SwiperSlide key={index} className="p-2">
            <img src={img} alt={`slide-${index}`} className="w-full h-auto rounded" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;