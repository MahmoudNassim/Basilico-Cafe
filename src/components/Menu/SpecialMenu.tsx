import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import bg from "../../assets/images/Menu/bg-menu-item.jpg";
import coffee from "../../assets/images/Menu/item-coffe.png";
import cup from "../../assets/images/Menu/item-cup.png";
import wave from "../../assets/images/Home/wave.png";

import img1 from "../../assets/images/Menu/menu-item-1.jpg";
import img2 from "../../assets/images/Menu/menu-item-2.jpg";
import img3 from "../../assets/images/Menu/menu-item-3.jpg";
import { PiCoffeeBeanFill } from "react-icons/pi";

interface SpecialMenu {
  img: string;
  ingredients: string;
  name: string;
  desc: string;
}

const specialMenu: SpecialMenu[] = [
  {
    img: img1,
    ingredients: "Condensed Milk, Ice cubs, Espresso",
    name: "Marbled Iced Latte",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam labore fugit quas.soluta dolorem explicabo nobis velit aliquid blanditiis numquam",
  },
  {
    img: img2,
    ingredients: "Condensed Milk, Ice cubs, Espresso",
    name: "Marbled Iced Latte",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam labore fugit quas.soluta dolorem explicabo nobis velit aliquid blanditiis numquam",
  },
  {
    img: img3,
    ingredients: "Condensed Milk, Ice cubs, Espresso",
    name: "Marbled Iced Latte",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam labore fugit quas.soluta dolorem explicabo nobis velit aliquid blanditiis numquam",
  },
  {
    img: img1,
    ingredients: "Condensed Milk, Ice cubs, Espresso",
    name: "Marbled Iced Latte",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam labore fugit quas.soluta dolorem explicabo nobis velit aliquid blanditiis numquam",
  },
];

const SpecialMenu = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-no-repeat h-[800px] w-full my-10 relative flex flex-col justify-center items-center "
    >
      <img className="absolute top-0 left-0" src={coffee} alt="" />
      <img className="absolute bottom-0 right-0" src={cup} alt="" />
      <img className="absolute -bottom-4 right-0" src={wave} alt="" />
      <h4
        style={{ fontFamily: "DM Sans, sans-serif" }}
        className="flex items-center text-[#c3a27c] text-[20px] leading-8 max-md:text-[15px] uppercase text-center"
      >
        <PiCoffeeBeanFill className="inline-block mr-2 text-[#c3a27c]" />
        special coffee menu
        <PiCoffeeBeanFill className="inline-block ml-2 text-[#c3a27c]" />
      </h4>
      <h2 className="text-5xl max-md:text-3xl leading-14 font-extrabold text-white uppercase my-2 text-center">
        definite coffee you must try
      </h2>
      <div className="relative w-[90%] mt-8">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="w-[90%] mx-auto"
        >
          {specialMenu.map((post, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col gap-2 text-white">
                <div className="overflow-hidden flex justify-center mb-3">
                  <div
                    className="border-[#C3A27C] hover:border  rounded-full w-[280px] h-[280px] 
                  flex justify-center items-center transition-all  duration-200 "
                  >
                    <img
                      className="rounded-full w-[250px]  "
                      src={post.img}
                      alt={post.name}
                    />
                  </div>
                </div>

                <h2
                  className="text-[22px] font-medium leading-[35px] text-center hover:text-[#c3a27c] transition-all duration-300  uppercase  cursor-pointer
                      cursor-hover "
                >
                  {post.name}
                </h2>
                <p
                  style={{ fontFamily: "DM SANS , Sans Serif" }}
                  className="text-[#c3a27c] text-[15px] leading-[28px] text-center"
                >
                  {post.ingredients}
                </p>
                <div className="flex justify-center">
                  <hr className="text-[#C3A27C] border-t-2  w-[15%]  " />
                </div>

                <p className="text-[#666] text-[15px] leading-[27px] text-center">
                  {post.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 bg-[#c3a27c] text-white p-3 rounded-full shadow-lg z-10 hidden
              lg:block cursor-pointer"
        >
          <FaArrowLeft />
        </button>
        <button
          className="custom-next absolute right-0 top-1/2 -translate-y-1/2 bg-[#c3a27c] text-white p-3 rounded-full shadow-lg z-10 hidden
              lg:block cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
