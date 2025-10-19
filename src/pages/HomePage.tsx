import HeroSection from "../components/HomeComponents/HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import hero from "../assets/images/Home/Herosection-1.jpg";
import hero2 from "../assets/images/Home/Herosection-2.jpg";
import { PiCoffeeBeanFill } from "react-icons/pi";
import OpeningHours from "../components/HomeComponents/OpeningHours";
import Bakery from "../components/HomeComponents/Bakery";
import MenuComponent from "../components/MenuComponent";
import ChooseUs from "../components/HomeComponents/ChooseUs";
import PrivateEvent from "../components/HomeComponents/PrivateEvent";
import Customer from "../components/HomeComponents/Customer";
import BrandsSwiper from "../components/BrandsSwiper";
import Latestnews from "../components/HomeComponents/Latestnews";
import OurLocation from "../components/OurLocation";

// استايلات Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HomePage = () => {
  type slides = {
    backgroundImage: string;
    firstTitle: string;
    secondTitle: string;
  };

  const slides: slides[] = [
    {
      backgroundImage: hero,
      firstTitle: "- Welcome to Basilico Coffee Shop -",
      secondTitle: "Our passion is in our coffee",
    },
    {
      backgroundImage: hero2,
      firstTitle: "- Fresh Coffee For Afresh Morning -",
      secondTitle: "relax, drink some coffee.",
    },
  ];

  return (
    <div className="w-full min-h-screen pb-20">
      <div className="relative ">
        <Swiper
          modules={[Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <HeroSection
                backgroundImage={item.backgroundImage}
                firstTitle={item.firstTitle}
                secondTitle={item.secondTitle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <OpeningHours />
      <Bakery />
      <p className="flex items-center gap-3 text-center justify-center text-2xl text-[#C3A27C]">
        {" "}
        <span className=" rotate-x-180 text-[#C3A27C]">
          <PiCoffeeBeanFill className="text-[15px]" />
        </span>{" "}
        special coffee menu{" "}
        <span className="  text-[#C3A27C]">
          <PiCoffeeBeanFill className="text-[15px] " />
        </span>
      </p>
      <h2 className="text-5xl leading-[58px] font-bold text-center my-5">
        DEFINITE COFFEE YOU MUST TRY
      </h2>
      <MenuComponent />
      <ChooseUs />
      <PrivateEvent />
      <Customer />
      <BrandsSwiper />
      <Latestnews />
      <OurLocation />
    </div>
  );
};

export default HomePage;
