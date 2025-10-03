import { PiCoffeeBeanFill } from "react-icons/pi";
import bg1 from "../assets/images/Home/footer-1.png";
import bg2 from "../assets/images/Home/footer-2.png";
import logo from "../assets/images/Home/logo-dark.png";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";

type Hour = {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
};

const Footer = () => {
  const hours: Hour[] = [
    { day: "Monday - Friday", open: "9:00", close: "22:00" },
    { day: "Saturday", open: "10:00", close: "23:00" },
    { day: "Sunday", open: "5:00", close: "23:00" },
    { day: "Holidays", closed: true },
    { day: "Happy Hours", open: "18:00", close: "20:00" },
  ];
  return (
    <div className="bg-[#2D2723] w-full min-h-[300px] ">
      <div className="container mx-auto  relative flex flex-col justify-center items-center h-full">
        <div className="absolute bottom-0 left-0">
          <img src={bg1} />
        </div>
        <div className="absolute top-0 right-0">
          <img src={bg2} />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-10 p-8 w-full xl:w-[85%] ">
          {/* Logo and Description */}
          <div className="flex flex-col gap-3 items-center justify-center p-4">
            <div className="text-center">
              <img src={logo} alt="" />
            </div>
            <p
              style={{ fontFamily: "DM Sans , sans-serif" }}
              className="text-[15px] text-white leading-6"
            >
              Welcome to our Basilico Coffee House. <br /> Lorem simply text
              amet cing <br />
              elit aenean feugiat. t hendrerit mi <br /> pulvinar vel.
            </p>
          </div>
          {/* Contact Us */}
          <div className="flex flex-col gap-6 items-start justify-center p-4">
            <h4 className="text-[24px] text-white text-start font-semibold leading-8 tracking-wider uppercase">
              Contact Us
              <span className="block w-[50%] h-[2px] bg-[#C3A27C] mt-2" />
            </h4>
            <div
              className="flex flex-col jusctify-center gap-2 items-start"
              style={{ fontFamily: "DM Sans , sans-serif" }}
            >
              <p className="text-[15px] text-[#dedede] leading-6">
                <span className="block text-[15px] text-[#c3a27c] leading-7 uppercase tracking-wider">
                  Location:
                </span>
                123 Coffee St, Coffee City, CA 12345
              </p>
              <p className="text-[15px] text-[#dedede] leading-6">
                <span className="block text-[15px] text-[#c3a27c] leading-7 uppercase tracking-wider">
                  BOOK A TABLE:
                </span>
                info@basilicocoffee.com
              </p>
              <p className="text-[15px] text-[#dedede] leading-6">
                (734) 665-1852
              </p>
            </div>
          </div>
          {/* Opening Hours */}
          <div className="flex flex-col gap-6 items-start justify-center p-4">
            <h4 className="text-[24px] text-white text-start font-semibold leading-8 tracking-wider uppercase">
              Hour Open
              <span className="block w-[50%] h-[2px] bg-[#C3A27C] mt-2" />
            </h4>
            <div className="flex flex-col justify-center gap-2 items-start">
              {hours.map((hour, index) => (
                <div
                  key={index}
                  className="text-[15px] text-[#dedede] leading-6"
                  style={{ fontFamily: "DM Sans , sans-serif" }}
                >
                  <span className=" text-[15px] text-[#c3a27c] leading-7 uppercase tracking-wider">
                    {hour.day}:
                  </span>
                  {hour.closed ? "Closed" : ` ${hour.open} - ${hour.close}`}
                </div>
              ))}
            </div>
          </div>
          {/* New Letters and Event  */}
          <div className="flex flex-col gap-6 items-start justify-center p-4">
            <h4 className="text-[24px] text-white text-start font-semibold leading-8 tracking-wider uppercase">
              Newletters & Event
              <span className="block w-[50%] h-[2px] bg-[#C3A27C] mt-2" />
            </h4>
            <p
              style={{ fontFamily: "DM Sans , sans-serif" }}
              className="text-[#dedede] text-[15px] leading-6"
            >
              Register your email to not miss any news and offers from us!
            </p>
            <div className=" relative">
              <input
                className="xl:px-15 px-8  text-start m-0 py-3 outline-0 rounded-[8px] text-white bg-[#48433F] placeholder:text-gray-400 placeholder:text-start "
                type="email"
                placeholder="Email address..."
              />
              <FaTelegramPlane className="text-[#C3A27C] absolute top-1/2 -translate-y-1/2 right-4 text-2xl" />
            </div>
            <div className="flex gap-2 justify-start items-center">
              <input
                className="appearance-none w-5 h-5 rounded-sm border border-white cursor-pointer
                  bg-transparent 
                  checked:bg-white checked:border-white
                  relative
                  checked:before:content-['✔']
                  checked:before:absolute
                  checked:before:text-black
                  checked:before:text-sm
                  checked:before:font-bold
                  checked:before:left-1/2
                  checked:before:top-1/2
                  checked:before:-translate-x-1/2
                  checked:before:-translate-y-1/2
                "
                type="checkbox"
                name="privacy"
                id="privacy"
              />
              <p
                style={{ fontFamily: "DM Sans, sans-serif" }}
                className="text-[#dedede] text-[15px] xl:text-[17px]"
              >
                I agree to the Privacy Policy
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full  px-8 lg:w-[85%]">
          <hr className="w-full border-t border-[#c3a27c] my-6 opacity-50" />
          <PiCoffeeBeanFill className="text-[#c3a27c] text-5xl mx-4" />
          <hr className="w-full border-t border-[#c3a27c] my-6 opacity-50" />
        </div>
        <div className="flex justify-center max-md:gap-5 md:justify-between flex-col md:flex-row w-full lg:w-[85%] px-8 mb-10 ">
          <p
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="text-[15px] leading-6 text-[#dedede] max-md:text-center"
          >
            Copyright © 2023 themesflat. All Rights Reserved.
          </p>
          <div className="flex gap-2 items-center max-md:justify-center">
            <p className="text-white text-xl">Follow Us:</p>
            <div className="flex gap-2 items-center">
              <a href="#" className="text-white text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white text-xl">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube className="text-white text-xl custom-hover" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
