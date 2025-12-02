import { FaCartPlus, FaHeart } from "react-icons/fa6";
import img1 from "../../assets/images/Shop/product-1.png";
import img2 from "../../assets/images/Shop/product-2.png";
import img3 from "../../assets/images/Shop/product-3.png";
import { MdStarRate } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoMenuSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface Product {
  id: number;
  name?: string;
  price?: number;
  salePrice?: number;
  img?: string;
  status?: "new" | "";
}
const ProductComponent = () => {
  const products: Product[] = [
    { id: 1, name: "instant coffee", price: 20.0, salePrice: 0.0, img: img1 },
    { id: 2, name: "milk ice coffee", price: 20.0, salePrice: 14.0, img: img2 },
    {
      id: 3,
      name: "sugar black coffee",
      price: 20.0,
      salePrice: 0.0,
      img: img3,
      status: "new",
    },
    { id: 4, name: "instant coffee", price: 20.0, salePrice: 0.0, img: img1 },
    { id: 5, name: "milk ice coffee", price: 20.0, salePrice: 14.0, img: img2 },
    {
      id: 6,
      name: "sugar black coffee",
      price: 20.0,
      salePrice: 0.0,
      img: img3,
      status: "new",
    },
    { id: 7, name: "instant coffee", price: 20.0, salePrice: 0.0, img: img1 },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("All Products");
  const filteredProducts: string[] = ["All Products", "Coffe", "Cup", "Bag"];
  const [row, setRow] = useState(false);
  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="flex flex-col gap-4">
        <div className="flex max-md:flex-col max-md:justify-center gap-4 p-2 justify-between items-center mr-3">
          <p>Showing 1–12 of 16 results</p>
          <div className="flex items-center gap-4">
            <div
              onClick={() => setShowDropdown((prev) => !prev)}
              className="border rounded-[8px] border-[#C3A27C] p-4 flex items-center justify-between relative w-[180px]"
            >
              {/* DropDown menu */}
              {showDropdown && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="absolute bg-white left-0 top-full z-10 w-full  py-3 flex flex-col  items-start gap-4 mt-0.5 shadow-md "
                >
                  {filteredProducts.map((el, index) => (
                    <p
                      key={index}
                      onClick={() => {
                        setSelectedProduct(el);
                        setShowDropdown(false);
                      }}
                      className="hover:bg-[#C3A27C] hover:text-white w-full truncate px-3 py-2 transition-all duration-200"
                    >
                      {el}
                    </p>
                  ))}
                </div>
              )}
              <p
                style={{ fontFamily: "DM Sans , sans-serif" }}
                className=" tracking-wider "
              >
                {selectedProduct}
              </p>
              <IoIosArrowDown
                className={`${showDropdown ? "rotate-180" : ""}`}
              />
            </div>
            <HiOutlineViewGrid
              onClick={() => setRow(false)}
              className="text-3xl cursor-pointer cursor-hover"
            />
            <IoMenuSharp
              onClick={() => setRow(true)}
              className="text-3xl cursor-pointer cursor-hover"
            />
          </div>
        </div>
        {/* Products */}
        <div
          className={`grid grid-cols-1 ${
            row ? "md:grid-cols-1" : "md:grid-cols-2"
          }  gap-5 max-md:p-2`}
        >
          {products.map((el) => (
            <div
              key={el.id}
              className={`flex  ${
                row
                  ? "justify-between max-md:flex-col"
                  : " justify-center flex-col"
              }  items-center gap-4`}
            >
              <div
                className={`bg-[#F5F5F5] rounded-2xl relative flex justify-center items-end gap-4 ${
                  row
                    ? "w-[250px] h-[200px]"
                    : " md:w-[200px] md:h-[300px] lg:w-[320px] xl:w-[400px] h-[446px]"
                } max-md:w-[300px] 
          group overflow-hidden`}
              >
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-1/2 object-cover -translate-y-1/2  ${
                    row ? "h-[150px] w-[150px]" : "h-[200px] w-[200px]"
                  }`}
                >
                  <img
                    className="h-full w-full object-cover"
                    src={el.img}
                    alt={el.name}
                  />
                </div>
                <div
                  className={`absolute top-5 rounded-xl right-2 p-2 bg-[#2D2723] ${
                    el.salePrice === 0 && el.status !== "new" ? "hidden" : ""
                  } `}
                >
                  <p className="uppercase tracking-widest text-white text-[14px]">
                    {el.status === "new" ? "new" : "SALE OFF"}
                  </p>
                </div>
                <div
                  className="w-[42px] h-[42px] rounded-full bg-[#2D2723] flex justify-center items-center cursor-pointer cursor-hover 
        opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all mb-11 duration-300"
                >
                  <FaCartPlus className="text-white text-[18px]" />
                </div>
                <div
                  className="w-[42px] h-[42px] rounded-full bg-[#2D2723] flex justify-center items-center cursor-pointer cursor-hover 
        opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all mb-11 duration-300"
                >
                  <FaHeart className="text-white text-[18px]" />
                </div>
              </div>
              <div
                className={`flex  ${
                  row ? "max-md:flex-row" : "flex-col"
                } gap-4 justify-center items-center`}
              >
                <div className="flex items-center gap-3">
                  {el.salePrice !== 0 && (
                    <p
                      className="text-[18px] text-gray-500 line-through"
                      style={{ fontFamily: "DM Sans , sans-serif" }}
                    >
                      ${el.price?.toFixed(2)}
                    </p>
                  )}
                  <p
                    className="text-[20px] text-[#c3a27c] leading-[24px] font-medium"
                    style={{ fontFamily: "DM Sans , sans-serif" }}
                  >
                    $
                    {el.salePrice !== 0
                      ? el.salePrice?.toFixed(2)
                      : el.price?.toFixed(2)}
                  </p>
                </div>
                <p className="text-[18px] text-center md:text-[22px] hover:text-[#d1b89b] font-semibold leading-[34px] uppercase transition-all duration-200 cursor-pointer">
                  {el.name}
                </p>
                <div className="flex text-[#c3a27c] text-[20px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <MdStarRate key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 justify-center items-end my-3">
        <div className="w-12 h-12 border bg-[#C3A27C] border-[#C3A27C] rounded-full relative">
          <span className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            1
          </span>
        </div>
        <div
          className="w-12 h-12 border  border-[#C3A27C] rounded-full relative
          hover:bg-[#C3A27C] hover:text-white cursor-pointer cursor-hover transition-all duration-200"
        >
          <span className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            2
          </span>
        </div>
        <div
          className="w-12 h-12 border  border-[#C3A27C] rounded-full relative
          hover:bg-[#C3A27C] hover:text-white cursor-pointer cursor-hover transition-all duration-200"
        >
          <span className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <MdKeyboardDoubleArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
