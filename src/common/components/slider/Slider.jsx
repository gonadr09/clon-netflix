import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { TrailerContext } from "../../../features/trailer/context/TrailerContext";

const Slider = ({ title, data}) => {
  const {handleTrailer} = useContext(TrailerContext)

  return (
    <>
      <h3>{title}</h3>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 2 },
          450: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1200: { slidesPerView: 7 },
          1350: { slidesPerView: 8 },
          1700: { slidesPerView: 9 },
        }}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ padding: "10px 0 20px 0" }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              onClick={() => handleTrailer(item)}
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
