import img1 from "../../assets/images/Reservstion/snacks-1.png";
import img2 from "../../assets/images/Reservstion/cup.png";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const BookTable = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [arrivalTime, setArrivalTime] = useState("Arrival Time");
  const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState("People");

  const times: string[] = ["6 AM", "6 PM"];

  const people: number[] = [5, 10];
  return (
    <div className="my-20 w-full relative ">
      <img
        className="absolute left-0 top-1/2 -translate-y-1/2 max-xl:hidden"
        src={img1}
        alt=""
      />
      <img
        className="absolute right-0 top-1/2 -translate-y-1/2 max-xl:hidden"
        src={img2}
        alt=""
      />
      <div className="container mx-auto flex flex-col items-center justify-center gap-10">
        <div className=" rounded-full relative z-0 bg-[#2D2723] w-[100px] h-[100px] ">
          <BiSolidCoffeeTogo className="absolute text-5xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white " />
        </div>
        <p
          style={{ fontFamily: "DM SANS ,sans-serif" }}
          className="leading-[30px] text-[16px] text-[#171412] text-center tracking-wider"
        >
          After booking we will call the customer to confirm, <br />
          so please enter your name and phone number is required, thank you!
        </p>
        <div className="flex justify-center w-full max-w-[600px] flex-col items-center gap-6 max-md:p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
            <input
              type="text"
              placeholder="Name"
              className=" pl-3  placeholder:p-3 py-3 rounded-[5px] bg-[#F1F1F1] focus-visible:outline-[#C3A27C] 
              placeholder:text-[20px] placeholder:text-start placeholder:text-black  "
            />
            <input
              type="text"
              placeholder="Phone"
              className=" pl-3 placeholder:p-3 py-3 rounded-[5px] bg-[#F1F1F1] focus-visible:outline-[#C3A27C] 
              placeholder:text-[20px] placeholder:text-start placeholder:text-black "
            />
          </div>

          {/* Second Inputs row */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 ">
            <div
              className="pl-3 py-3 bg-[#F1F1F1] flex  items-center justify-between rounded-[5px] relative "
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <p>{arrivalTime}</p>
              <IoIosArrowDown className="text-[15px] mr-3 cursor-pointer" />
              {showDropdown && (
                <div className="bg-white pl-3 py-3 w-full absolute left-0 top-full mt-1 shadow-lg flex flex-col z-20 rounded-md">
                  {times.map((t) => (
                    <p
                      key={t}
                      onClick={() => {
                        setArrivalTime(t);
                        setShowDropdown(false);
                      }}
                      className="p-2 hover:bg-[#F1F1F1] cursor-pointer"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div
              className="pl-3 py-3 bg-[#F1F1F1] flex items-center justify-between rounded-[5px] relative cursor-pointer"
              onClick={() => setShowPeopleDropdown((prev) => !prev)}
            >
              <p>{selectedPeople}</p>
              <IoIosArrowDown className="text-[15px] mr-3" />
              {showPeopleDropdown && (
                <div className="bg-white pl-3 py-3 w-full absolute left-0 top-full mt-1 shadow-lg flex flex-col z-20 rounded-md">
                  {people.map((num) => (
                    <p
                      key={num}
                      onClick={() => {
                        setSelectedPeople(`${num} People`);
                        setShowPeopleDropdown(false);
                      }}
                      className="p-2 hover:bg-[#F1F1F1] cursor-pointer"
                    >
                      {num} People
                    </p>
                  ))}
                </div>
              )}
            </div>

            <input
              type="Date"
              className=" pl-3 placeholder:p-3 py-3 pr-2 rounded-[5px] bg-[#F1F1F1] focus-visible:outline-[#C3A27C] 
              placeholder:text-[20px] placeholder:text-start placeholder:text-black "
            />
          </div>

          <button
            className="mt-6 bg-[#C3A27C] text-white px-10 py-3 rounded-[5px] text-[18px] cursor-pointer cursor-hover
            font-medium hover:bg-[#2D2723] transition-all duration-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
