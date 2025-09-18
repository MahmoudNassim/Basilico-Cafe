import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const DropdownCard = ({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) => {
  return (
    <div className="relative hidden xl:block">
      {open && (
        <div className="absolute top-4 right-10 mt-2 w-80 bg-white rounded-xl shadow-lg p-6 z-50">

          <button
            className="absolute top-3 left-3 cursor-pointer text-gray-600 hover:text-black"
            onClick={() => setOpen(false)}
          >
            <IoClose size={20} />
          </button>

          <div className="text-black text-center">
            <h2 className="text-lg font-bold  mt-3">WELCOME TO</h2>
            <h1 className="text-2xl font-extrabold">BASILICO COFFEE & TEA.</h1>
            <p className="text-gray-500 mt-3 text-sm">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>

            <h3 className="text-[#C3A27C] text-xl font-bold mt-5">(734) 665-1852</h3>
            <p className="text-gray-700">62 Big Tree St, Livonia, New York 14487, USA</p>
            <p className="text-gray-700">customer_support@example.com</p>

            <div className="mt-6 text-sm">
              <p>
                Monday – Friday: <span className="font-bold">8.00am – 21.00pm</span>
              </p>
              <p>
                Saturday – Sunday: <span className="font-bold">9.00am – 22.00pm</span>
              </p>
              <p>Holiday: Closed</p>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="text-[#2D2723] hover:text-[#C3A27C]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-[#2D2723] hover:text-[#C3A27C]">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#2D2723] hover:text-[#C3A27C]">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#2D2723] hover:text-[#C3A27C]">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownCard;
