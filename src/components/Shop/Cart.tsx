import { GrMoney } from "react-icons/gr";
import coffee from "../../assets/images/Shop/product-1.png";
import cup from "../../assets/images/Shop/product-6.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
  const cart = [
    { id: 1, price: 20.0, name: "instant coffee", img: coffee },
    { id: 2, price: 12.0, name: "coffee mug", img: cup },
  ];

  return (
    <div className="bg-[#FAF1E3] max:w-[400px] rounded-[8px] max-md:m-2 pb-4">
      <div className="w-full bg-[#2D2723] rounded-t-[8px] p-4">
        <p className="text-[22px] leading-[33px] font-semibold tracking-wide text-white uppercase">
          cart
        </p>
      </div>
      <div className="p-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="relative flex items-center my-5  p-2 rounded-lg "
          >
            <button className="absolute top-2 right-2 text-black cursor-pointer ">
              <FaTimes />
            </button>
            <div className="w-[100px] h-[100px] bg-[#F5F5F5] rounded-[8px] flex justify-center items-center">
              <img
                className="w-[50px] h-[50px]"
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className="ml-4">
              <p
                style={{ fontFamily: "DM Sans , sans-serif" }}
                className="text-[#171412] leading-[24px] "
              >
                ${item.price.toFixed(2)}
              </p>
              <p
                className=" text-[17px] font-medium leading-[24px] uppercase
              hover:text-[#c9ab89] transition-all duration-150 cursor-pointer tracking-widest"
              >
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-[#2D2723] w-[90%] p-4 flex justify-between rounded-xl">
          <p className="font-semibold text-[17px] leading-[26px] text-white flex items-center gap-2 uppercase tracking-widest">
            <span>
              <GrMoney className="text-[#C3A27C]" />
            </span>
            subtotal:
          </p>
          <p className="font-semibold text-[17px] leading-[26px] text-white">
            $32.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
