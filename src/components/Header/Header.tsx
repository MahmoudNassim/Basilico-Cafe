import { TbMenu4 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Home/logo.png";
import { FaSearch } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiCoffeeTogo } from "react-icons/bi";
import { useEffect, useState } from "react";
import DropdownCard from "./DropdownCard";
import Offcanvas from "./Offcanvas";

const Header = () => {
  const routes = useSelector((state: any) => state.routes.routes);
  const beforeImage = routes.slice(0, 3);
  const afterImage = routes.slice(3);

  const [open, setOpen] = useState(false);
  const [openOffCanvas, setOpenOffcanvas] = useState(false);

  useEffect(() => {
    if (openOffCanvas) {
      document.body.classList.add("offcanvas-open");
    } else {
      document.body.classList.remove("offcanvas-open");
    }
  }, [openOffCanvas]);

  const handleClickMenu = () => {
    if (window.innerWidth < 1280) {
      setOpenOffcanvas((prev) => !prev);
      setOpen(false);
    } else {
      setOpen((prev) => !prev);
      setOpenOffcanvas(false);
    }
  };

  return (
    <div className=" w-full max-md:py-2   text-white container mx-auto">
      <div className="md:flex hidden justify-between px-10 py-5 ">
        <div className="flex gap-3 items-center ">
          <div className="bg-[#C3A27C] rounded-full w-12 h-12 flex justify-center items-center">
            <FaLocationDot className="text-2xl text-white " />
          </div>
          <div className="flex flex-col text-white">
            <h2>LOCATION</h2>
            <p style={{ fontFamily: "DM Sans, sans-serif" }}>
              448 West Foxrun St. Bronx
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center ">
          <div className="flex flex-col text-white">
            <h2 className="text-end">CALL DELIVERY</h2>
            <p style={{ fontFamily: "DM Sans, sans-serif" }}>
              (734) 665-1852 or (770) 942-7739
            </p>
          </div>
          <div className="bg-[#C3A27C] rounded-full w-12 h-12 flex justify-center items-center">
            <BiCoffeeTogo className="text-2xl text-white " />
          </div>
        </div>
      </div>
      <div className=" bg-[#2D2723] rounded-full pl-[54px] pr-[54px] max-md:p-4 py-4 flex items-center min-lg:justify-around justify-between gap-5 relative h-[10vh] ">
        <div className="w-[10%] max-lg:p-0 max-md:w-[33%] ">
          <button
            className="flex items-center cursor-pointer"
            onClick={handleClickMenu}
          >
            <TbMenu4 className="text-start text-4xl " />
          </button>

          {open && <DropdownCard open={open} setOpen={setOpen} />}
          {openOffCanvas && (
            <Offcanvas open={openOffCanvas} setOpen={setOpenOffcanvas} />
          )}
        </div>

        <div className="flex gap-7 text-xl leading-20 justify-center items-center w-[25%] max-lg:hidden">
          {beforeImage.map((route: any, index: number) => (
            <Link
              className=" text-[14px] xl:text-[15px] font-semibold leading-[82px] tracking-widest xl:px-2 "
              key={index}
              to={route.path}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div
          className="md:w-[120px] md:h-[120px] lg:h-[130px] lg:w-[130px] xl:h-[150px] xl:w-[150px] w-[70px] h-[70px] bg-[#FAF1E3]  
        flex justify-center items-center cursor-pointer  rounded-full"
        >
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="md:w-[100px] md:h-[100px]  w-[50px] h-[50px]   rounded-full "
            />
          </Link>
        </div>
        <div className="flex gap-7 text-xl leading-20 w-[25%] max-lg:hidden ">
          {afterImage.map((route: any, index: number) => (
            <Link
              className=" text-[14px] xl:text-[15px] font-semibold leading-[82px] tracking-widest xl:px-2 "
              key={index}
              to={route.path}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div className="flex max-md:w-[33%] gap-3 items-center px-3.5 justify-end">
          <FaSearch className=" text-2xl text-end cursor-pointer" />
          <div className="border-l-1 border-white h-6 text-end max-lg:hidden " />
          <div className="relative">
            <MdShoppingBag className=" text-2xl text-end cursor-pointer " />
            <span className="absolute -top-2 -right-2 bg-[#C3A27C] text-black text-xs font-bold rounded-full px-1.5">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
