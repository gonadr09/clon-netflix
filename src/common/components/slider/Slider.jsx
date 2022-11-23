import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ title, data }) => {
  return (
    <>
      <h3 style={{paddingTop: "10px"}}>{title}</h3>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 2 },
          450: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1200: { slidesPerView: 7 },
          1350: { slidesPerView: 8 },
        }}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ padding: "10px 0" }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              style={{
                background: `url('${item.poster}')`,
                height: "300px",
                width: "200px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="card"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
