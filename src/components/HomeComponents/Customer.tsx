import bg from "../../assets/images/Home/testimonial.jpg";
import coffe from "../../assets/images/Home/item-3.png";
import wave from "../../assets/images/Home/wave.png";
import { VscQuote } from "react-icons/vsc";
import { PiCoffeeBeanFill } from "react-icons/pi";

const Customer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="relative mt-32 p-10 bg-cover bg-no-repeat w-full flex justify-center items-center  bg-center h-[700px] max-md:h-[120vh]"
    >
      <div className="absolute top-0 left-0 z-0 inset-0 bg-black opacity-40" />
      <img
        className="absolute left-1/2 -translate-x-1/2 -top-30 z-10"
        src={coffe}
        alt=""
      />
      <VscQuote className="text-white text-6xl absolute left-1/2 -translate-x-1/2 -top-5 rotate-180" />
      <div className="container mx-auto flex flex-col items-center max-md:justify-center gap-2 relative z-10">
        <h4
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="flex items-center text-[#c3a27c] text-[20px] leading-8 max-md:text-[15px]"
        >
          <PiCoffeeBeanFill className="inline-block mr-2 text-[#c3a27c]" />
          customer testimonial
          <PiCoffeeBeanFill className="inline-block ml-2 text-[#c3a27c]" />
        </h4>
        <h2 className="text-5xl max-md:text-3xl leading-14 font-extrabold text-white">
          What customers say?
        </h2>
        <p
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="text-white text-center text-[20px]
        font-medium leading-8"
        >
          “ Great atmosphere, excellent drinks (i tried two of them and plan to
          work through the menu) and friendly staff - a <br />
          combination for success! Add the commitment to serve and this is a
          venture I can endorse without reservation. May God honor and bless
          your step of faith. ”
        </p>
        <p className="text-2xl leading-6 font-medium text-white hover:text-[#c3a27c] duration-300 cursor-pointer cursor-hover">
          - Shane Jennifer -
        </p>
      </div>
      <img
        className="absolute -top-[20px] left-1/2 -translate-x-1/2 rotate-180 max-md:hidden"
        src={wave}
        alt=""
      />
    </div>
  );
};

export default Customer;
