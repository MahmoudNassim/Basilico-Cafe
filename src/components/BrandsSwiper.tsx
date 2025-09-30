import bg from "../assets/images/Home/bg-service.png";
import swipe1 from "../assets/images/Home/img-1.png";
import swipe2 from "../assets/images/Home/img-2.png";
import swipe3 from "../assets/images/Home/img-3.png";
import swipe4 from "../assets/images/Home/img-4.png";
import swipe5 from "../assets/images/Home/img-5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const BrandsSwiper = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" h-[350px] bg-center bg-no-repeat bg-cover -translate-y-[20px] flex justify-center items-center p-4 mx-auto"
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        slidesPerView={4}
        spaceBetween={124}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
        className="flex justify-center items-center w-[80%] mx-auto "
      >
        <SwiperSlide>
          <img
            className="cursor-hover cursor-pointer object-cover "
            src={swipe1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-hover cursor-pointer object-cover"
            src={swipe2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-hover cursor-pointer object-cover"
            src={swipe3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-hover cursor-pointer object-cover"
            src={swipe4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swipe5}
            className="cursor-hover cursor-pointer object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandsSwiper;
