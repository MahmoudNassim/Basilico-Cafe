import { PiCoffeeBeanFill } from "react-icons/pi";
import { FaArrowRightLong, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/images/Home/img-01.jpg";
import img2 from "../../assets/images/Home/img-02.jpg";
import img3 from "../../assets/images/Home/img-06.jpg";

interface BlogPost {
  img: string;
  author: string;
  date: string;
  category: string;
  title: string;
  desc: string;
}

const blogPosts: BlogPost[] = [
  {
    img: img1,
    author: "By Basilico",
    date: "Apr 10, 2023",
    category: "Coffee",
    title: "The art of brewing the perfect espresso",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam labore fugit quas.soluta dolorem explicabo nobis velit aliquid blanditiis numquam",
  },
  {
    img: img2,
    author: "By Basilico",
    date: "Apr 10, 2023",
    category: "Coffee",
    title: "The art of brewing the perfect espresso",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam labore fugit quas.soluta dolorem explicabo nobis velit aliquid blanditiis numquam",
  },
  {
    img: img3,
    author: "By Basilico",
    date: "Apr 10, 2023",
    category: "Coffee",
    title: "The art of brewing the perfect espresso",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam labore fugit quas.soluta dolorem explicabo nobis velit aliquid blanditiis numquam",
  },
  {
    img: img1,
    author: "By Basilico",
    date: "Apr 10, 2023",
    category: "Coffee",
    title: "The art of brewing the perfect espresso",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam labore fugit quas.soluta dolorem explicabo nobis velit aliquid blanditiis numquam",
  },
];

const Latestnews = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center text-center gap-4 ">
      <h4
        style={{ fontFamily: "DM Sans, sans-serif" }}
        className="flex items-center text-[#c3a27c] text-[20px] leading-8 max-md:text-[15px]"
      >
        <PiCoffeeBeanFill className="inline-block mr-2 uppercase text-[#c3a27c]" />
        latest news
        <PiCoffeeBeanFill className="inline-block ml-2 text-[#c3a27c]" />
      </h4>
      <h2 className="text-5xl max-md:text-3xl leading-14 uppercase font-extrabold ">
        What's new in our blog?
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
          {blogPosts.map((post, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden">
                  <img
                    className="rounded-2xl"
                    src={post.img}
                    alt={post.title}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[#666] text-[13px] leading-[35px]">
                    {post.author}
                  </p>
                  <div className="h-[0.5px] w-4 bg-gray-500 flex" />
                  <p className="text-[#666] text-[13px] leading-[35px]">
                    {post.date}
                  </p>
                  <div className="h-[0.5px] w-4 bg-gray-500 flex " />
                  <p className="text-[#666] text-[13px] leading-[35px]">
                    {post.category}
                  </p>
                </div>
                <h2
                  className="text-2xl hover:text-[#c3a27c] transition-all duration-300 font-medium uppercase text-start cursor-pointer
                cursor-hover "
                >
                  {post.title}
                </h2>
                <p className="text-[#666] text-[15px] leading-8 text-start">
                  {post.desc}
                </p>
                <hr className="text-[#e1e2e3] h-[0.5px] w-full" />
                <h3 className="text-[15px] leading-[25px] font-bold flex items-center gap-3 text-[#2d2723]">
                  READ MORE
                  <span>
                    <FaArrowRightLong className="text-[#c3a27c]" />
                  </span>
                </h3>
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

export default Latestnews;
