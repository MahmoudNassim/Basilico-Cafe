import coffe1 from "../assets/images/Menu/coffee-1.png";
import coffe2 from "../assets/images/Menu/coffee-2.png";
import coffe3 from "../assets/images/Menu/coffee-3.png";
import coffe4 from "../assets/images/Menu/coffee-4.png";
import coffe5 from "../assets/images/Menu/coffee-5.png";
import coffe6 from "../assets/images/Menu/coffee-6.png";
import coffe7 from "../assets/images/Menu/coffee-7.png";
import coffe8 from "../assets/images/Menu/coffee-8.png";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  status: string;
}

const MenuComponent = () => {
  const menu: MenuItem[] = [
    {
      id: 1,
      name: "CAFE AMERICANO",
      description: "Espresso shots topped with hot water",
      price: 2.95,
      image: coffe1,
      status: "normal",
    },
    {
      id: 2,
      name: "ESPRESSO MACCHIATO",
      description: "Rich Espresso With Milk and Foam",
      price: 3.95,
      image: coffe2,
      status: "normal",
    },
    {
      id: 3,
      name: "WHITE CHOCOLATE MOCHA",
      description: "Fresh brewed coffee and steamed milk",
      price: 4.95,
      image: coffe3,
      status: "new",
    },
    {
      id: 4,
      name: "ICED CAFFE MOCHA",
      description: "Fresh brewed coffee and steamed milk",
      price: 4.95,
      image: coffe4,
      status: "normal",
    },
    {
      id: 5,
      name: "CAPPUCCINO",
      description: "Rich Espresso With Milk and Foam",
      price: 2.95,
      image: coffe5,
      status: "normal",
    },
    {
      id: 6,
      name: "ICED GINGERBREAD LATTE",
      description: "Fresh brewed coffee and steamed milk",
      price: 3.95,
      image: coffe6,
      status: "trending",
    },
    {
      id: 7,
      name: "VANILLA LATTE",
      description: "Rich Espresso With Milk and Foam",
      price: 4.95,
      image: coffe7,
      status: "normal",
    },
    {
      id: 8,
      name: "CARAMEL MACCHIATO",
      description: "Fresh brewed coffee and steamed milk",
      price: 5.95,
      image: coffe8,
      status: "normal",
    },
  ];

  return (
    <div className="py-10 flex justify-center px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {menu.map((el) => (
          <div
            key={el.id}
            className={`flex flex-col relative w-full ${
              el.status !== "normal" ? "pt-10" : ""
            } `}
          >
            {el.status !== "normal" && (
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#2D2723] text-white flex items-center px-4 rounded-t-xl">
                <span className="font-bold text-sm">
                  {el.status.toUpperCase()}/ SEASON
                </span>
              </div>
            )}
            <div
              className={`w-full p-4 md:p-5 flex flex-row items-center gap-4 md:gap-3 ${
                el.status !== "normal"
                  ? "border border-[#2D2723] rounded-b-xl rounded-t-none"
                  : ""
              }`}
            >
              <div className="flex-shrink-0">
                <img
                  src={el.image}
                  alt={el.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow min-w-0">
                <div className="flex items-center gap-2 md:gap-3">
                  <h3 className="leading-tight text-lg md:text-[22px] font-medium hover:text-[#c3a27c] cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis">
                    {el.name}
                  </h3>
                  <span className="flex-grow border-b border-dashed border-gray-400 opacity-50 min-w-[20px]"></span>
                  <p className="leading-tight text-lg md:text-[22px] font-medium text-[#c3a27c] whitespace-nowrap">
                    ${el.price.toFixed(2)}
                  </p>
                </div>
                <p
                  style={{ fontFamily: "DM Sans" }}
                  className="text-[#666] leading-6 text-sm md:text-[15px] mt-1"
                >
                  {el.description}{" "}
                </p>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
