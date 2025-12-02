import coffee from "../../assets/images/Shop/product-1.png";
import gold from "../../assets/images/Shop/avt-product-3.png";
import roasted from "../../assets/images/Shop/avt-product-4.png";
import { FaTimes } from "react-icons/fa";

const RecentProduct = () => {
  const cart: {
    id: number;
    price: number;
    salePrice?: number;
    name: string;
    img: string;
  }[] = [
    { id: 1, price: 20.0, name: "instant coffee", img: coffee },
    { id: 2, price: 35.0, name: "coffee gold milk", img: gold },
    {
      id: 3,
      price: 31.0,
      salePrice: 41.0,
      name: "roasted corn coffee",
      img: roasted,
    },
  ];
  return (
    <div className="bg-[#FAF1E3] max:w-[400px] rounded-[8px] max-md:m-2 ">
      <div className="w-full bg-[#2D2723] rounded-t-[8px] p-4">
        <p className="text-[22px] leading-[33px] font-semibold tracking-wide text-white uppercase">
          recent product
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
                {item.salePrice ? (
                  <span>
                    <span className="line-through mr-2 text-[#7C7468]">
                      ${item.salePrice.toFixed(2)}
                    </span>
                  </span>
                ) : null}
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
    </div>
  );
};

export default RecentProduct;
