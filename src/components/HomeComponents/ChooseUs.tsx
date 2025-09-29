import img from "../../assets/images/Home/bg-about.png";
import coffe from "../../assets/images/Home/item.png";
import about from "../../assets/images/Home/about-1.jpg";
import { FaCheckCircle, FaCoffee } from "react-icons/fa";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { AiFillPlayCircle } from "react-icons/ai";
import { RiChatSmileFill } from "react-icons/ri";

const ChooseUs = () => {
  const features: string[] = [
    "Imported coffee and quality control",
    "Cozy space to enjoy and relax",
    "Make sure the coffee taste doesn't change",
  ];

  return (
    <div
      className="flex flex-wrap justify-between items-center pt-15 mt-20 relative xl:h-[600px] "
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      {/* Coffee image */}
      <div className="absolute bottom-0 left-0 overflow-hidden">
        <img
          src={coffe}
          alt="coffee"
          className="relative -bottom-20 md:-bottom-40 lg:-bottom-80"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Text */}
        <div className="flex flex-col gap-4 text-white p-4 lg:w-[40%] w-full">
          <h4
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="flex items-center text-[#c3a27c] text-[15px] leading-8"
          >
            <PiCoffeeBeanFill className="inline-block mr-2 text-[#c3a27c]" />
            Why choose us
          </h4>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-5xl leading-tight">
            We want you to enjoy <br /> their coffee to the fullest
          </h1>
          <p
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="text-[15px] leading-6 "
          >
            Vertical is a family owned and operated coffee shop which provides a
            small town experience with big city appeal. It’s warm and friendly
            environment provides an excellent atmosphere to enjoy a great cup of
            coffee or sandwich, hang with friends.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            {features.map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-[15px]" />
                <span className="text-[#9E8466]">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex flex-col justify-center w-full md:w-[50%] mt-6 md:mt-0 max-lg:mb-7">
          <div className="relative w-full flex justify-center items-center">
            {/* Stats Card */}
            <div className="absolute left-0 lg:-left-20 xl:block hidden bg-white rounded-2xl shadow-lg p-8 w-[280px] z-10">
              <div className="flex flex-col items-center mb-6 gap-3">
                <FaCoffee className="text-[57px] text-[#c3a27c]" />
                <h2 className="text-5xl md:text-6xl font-bold text-black mt-2">
                  658+
                </h2>
                <p
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  className="uppercase text-[15px] font-medium mt-3"
                >
                  Cup Coffee Every Day
                </p>
              </div>
              <hr className="border-gray-200 my-4" />
              <div className="flex flex-col items-center">
                <RiChatSmileFill className="text-[57px] text-[#c3a27c]" />
                <h2 className="text-5xl md:text-6xl font-bold text-black mt-2">
                  98%
                </h2>
                <p
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  className="uppercase text-[15px] font-medium mt-5"
                >
                  Customer Satisfaction
                </p>
              </div>
            </div>

            {/* Main Image */}
            <img
              src={about}
              alt="about"
              className="lg:w-[80%] w-full xl:-translate-y-[70px] object-cover rounded-[12px] p-4 md:p-0 "
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex justify-center items-center text-6xl text-white">
              <AiFillPlayCircle className="hover:scale-110 transition-all duration-300 cursor-pointer cursor-hover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
