import { useSelector } from "react-redux";
import logo from "../../assets/images/Home/logo-dark.png";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

type openOffCanvas = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Offcanvas = ({ open, setOpen }: openOffCanvas) => {
  const route = useSelector((state: any) => state.routes.routes);
  const location = useLocation();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 left-0 z-[998] h-screen inset-0 w-full bg-black transition-opacity duration-300 ${
          open ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`fixed  w-[350px] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } left-0 top-0 h-full bg-[#2D2723] shadow-2xl z-[999] animate__animated animate__fadeIn`}
      >
        <div className="p-4 flex justify-between border-b-1 border-b-[#3E3530] pb-15">
          <img src={logo} alt="logo" />
          <button onClick={() => setOpen(false)}>
            <IoMdClose className="text-white text-2xl" />
          </button>
        </div>
        {route.map((route: any, index: number) => (
          <div key={index} className="p-4 border-b-1 border-b-[#3E3530]">
            <Link
              to={route.path}
              className={`leading-6 text-xl ${
                location.pathname === route.path
                  ? "text-[#C3A27C]"
                  : "text-white"
              }`}
            >
              {route.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Offcanvas;
