import { PiCoffeeBeanFill } from "react-icons/pi";
import img from "../assets/images/Home/coffee-time.jpg";
import coffee from "../assets/images/Home/coffee-time-1.png";

const OurLocation = () => {
  return (
    <div className="mt-10 container mx-auto  flex justify-center items-center max-md:flex-col h-[700px]  max-md:h-[950px] ">
      <div className="h-full w-[100%] max-md:h-[400px] md:w-[50%] lg:w-[40%]">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Our Location"
        />
      </div>
      <div className="bg-[#FAF1E3] flex flex-col w-[100%] md:w-[50%] lg:w-[40%] max-md: justify-center items-center p-10 h-full relative overflow-hidden">
        <h4
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="flex items-center justify-center text-[#c3a27c] text-[20px] leading-8 max-md:text-[15px]"
        >
          <PiCoffeeBeanFill className="inline-block mr-2 uppercase text-[#c3a27c]" />
          Location
          <PiCoffeeBeanFill className="inline-block ml-2 text-[#c3a27c]" />
        </h4>
        <h2 className="text-5xl max-md:text-3xl leading-14 uppercase font-extrabold ">
          How to find us?
        </h2>
        <div className="flex flex-col justify-center items-center my-4">
          <p className="text-[17px] font-medium leading-6 uppercase tracking-wider mb-2">
            call us book a table & delivery:
          </p>
          <p className="text-[#c3a27c] text-4xl font-bold leading-12">
            (734) 665-1852
          </p>
        </div>
        <p className="text-[17px] leading-6 font-medium tracking-wider uppercase">
          information coffee house:
        </p>
        <div
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="flex flex-col justify-center items-center my-4 gap-1 mb-3"
        >
          <p className="text-[#171412] text-[15px] leading-6">
            4517 Washington Ave. Manchester, Kentucky 39495, USA
          </p>
          <p className="text-[#171412] text-[15px] leading-6 text-center">
            Basilicofood123@gmail.com
          </p>
          <p className="text-[#171412] text-[15px] leading-6 text-center">
            Mon - Fri : 9.00am - 22.00pm, Holidays : Close
          </p>
        </div>
        <button
          className="bg-[#c3a27c] mt-5 tracking-wider text-white px-11 py-4 rounded-[7px] hover:bg-white hover:text-black 
        transition-all duration-500 uppercase cursor-pointer cursor-hover "
        >
          Get Directions
        </button>

        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 ">
          <img src={coffee} alt="Coffee" />
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
