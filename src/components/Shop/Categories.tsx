import { PiCoffeeBeanFill } from "react-icons/pi";

const Categories = () => {
  const categories: { id: number; name: string }[] = [
    { id: 1, name: "Accessories" },
    { id: 2, name: "Bean Varieties" },
    { id: 3, name: "Coffee Cups" },
    { id: 4, name: "Espresso Machine" },
    { id: 5, name: "Fresh Coffee" },
    { id: 6, name: "Italian Coffee" },
  ];
  return (
    <div className="bg-[#FAF1E3] max:w-[400px] rounded-[8px] max-md:m-2 pb-4">
      <div className="w-full bg-[#2D2723] rounded-t-[8px] p-4">
        <p className="text-[22px] leading-[33px] font-semibold tracking-wide text-white uppercase">
          Categories
        </p>
      </div>
      <div className="p-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative flex flex-col my-2  p-2 rounded-lg "
          >
            <p
              style={{ fontFamily: "Dm Sans" }}
              className=" flex  items-center  text-[17px]  leading-[25px] uppercase
                  hover:text-[#c9ab89] transition-all duration-300 cursor-pointer tracking-widest group cursor-hover"
            >
              <span className="text-[#c3a27c] opacity-0 hidden group-hover:block group-hover:opacity-100 -translate-x-2 group-hover:-translate-x-0  transition-all duration-300 ">
                <PiCoffeeBeanFill />
              </span>
              <span className="group-hover:translate-x-2 transition-all duration-300">
                {category.name}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
