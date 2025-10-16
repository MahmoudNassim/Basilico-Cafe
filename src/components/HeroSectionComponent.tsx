import bg from "../assets/images/Menu/bg-menu.jpg";
import cup from "../assets/images/Menu/cup.png";
import cup2 from "../assets/images/Menu/cup-1.png";
import wave from "../assets/images/Home/wave.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  path?: string;
}
const HeroSectionComponent = (props: HeroSectionProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage || bg})`,
        backgroundSize: "cover",
      }}
      className="w-full h-screen mb-10 flex justify-center items-center bg-no-repeat pt-5 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className=" z-10 w-full lg:w-[85%] flex flex-col ">
        <div className="flex flex-col items-center justify-center pt-20 ">
          <p
            className="text-[#f6e7d0] leading-16 text-[40px] max-md:text-[35px]"
            style={{ fontFamily: "Sue Ellen Francisco, cursive" }}
          >
            {props.subtitle}
          </p>
          <h1 className="text-6xl font-bold leading-20 uppercase tracking-wide">
            {props.title || "Our menu"}
          </h1>
        </div>

        <div
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="flex justify-center gap-2 text-lg my-10 absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <Link
            className="uppercase tracking-wider text-[16px] custom-hover"
            to="/"
          >
            Home /
          </Link>
          <Link
            className="uppercase tracking-wider text-[16px] text-[#c3a27c] custom-hover"
            to="#"
          >
            {props.path}
          </Link>
        </div>
      </div>
      <img
        className="absolute bottom-0 left-0 max-md:hidden"
        src={cup}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 max-md:hidden"
        src={cup2}
        alt=""
      />
      <img
        className="absolute -bottom-10 left-0 max-lg:hidden"
        src={wave}
        alt="wave"
      />
    </div>
  );
};

export default HeroSectionComponent;
