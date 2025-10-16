import { useState } from "react";
import img1 from "../../assets/images/Menu/cake-bakery-1.jpg";
import img2 from "../../assets/images/Menu/cake-bakery-2.jpg";
import img3 from "../../assets/images/Menu/cake-bakery-3.jpg";
import img4 from "../../assets/images/Menu/breakfast1.jpg";
import img5 from "../../assets/images/Menu/breakfast2.jpg";
import img6 from "../../assets/images/Menu/bakery1.jpg";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { motion } from "framer-motion";

interface Card {
  id?: number;
  img?: string;
  title?: string;
  desc?: string;
  type?: "cake" | "breakfast";
  price?: number;
}
const CakeAndBakery = () => {
  const card: Card[] = [
    {
      id: 1,
      img: img1,
      title: "Multigrain Hot Cereal",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem ipsum.",
      type: "cake",
      price: 2,
    },
    {
      id: 2,
      img: img2,
      title: "semolina rosemary",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem ipsum.",
      type: "cake",
      price: 6.5,
    },
    {
      id: 3,
      img: img3,
      title: "semolina rosemary",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem ipsum.",
      type: "cake",
      price: 8,
    },
    {
      id: 4,
      img: img4,
      title: "semolina rosemary",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem ipsum.",
      type: "breakfast",
      price: 8,
    },
    {
      id: 5,
      img: img5,
      title: "semolina rosemary",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem ipsum.",
      type: "breakfast",
      price: 8,
    },
    {
      id: 6,
      img: img6,
      title: "semolina rosemary",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem ipsum.",
      type: "breakfast",
      price: 8,
    },
  ];

  const categories: string[] = ["all", "cake", "breakfast"];
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredCategory = card.filter(
    (el) => el.type === activeCategory || activeCategory === "all"
  );
  return (
    <div className="container mx-auto flex flex-col justify-center items-center my-20 gap-5">
      <h4 className=" text-5xl max-md:text-3xl leading-[58px] font-bold text-[#171412] uppercase my-2 text-center tracking-wider">
        <PiCoffeeBeanFill className="text-[25px] inline-block mr-2 text-[#c3a27c]" />
        cake & bakery
        <PiCoffeeBeanFill className="text-[25px] inline-block ml-2 text-[#c3a27c]" />
      </h4>
      <h2
        style={{ fontFamily: "DM Sans, sans-serif" }}
        className="flex items-center text-[#666] text-[15px] leading-7 text-center"
      >
        pastries with coffee are a great combination, we also provide large
        cakes so
        <br />
        you can replace breakfast
      </h2>
      <div className="flex flex-col items-center gap-1">
        <div className="flex flex-row gap-5">
          {categories.map((category) => (
            <p
              onClick={() => setActiveCategory(category)}
              key={category}
              className="uppercase tracking-widest text-[#696969] text-[17px] font-medium leading-[25px] cursor-pointer cursor-hover "
            >
              {category}
              <span
                className={` ${
                  category === activeCategory ? "block" : "hidden"
                }`}
              >
                <hr className="mt-5 border-t-2 border-[#c3a27c] " />
              </span>
            </p>
          ))}
        </div>
        <hr className="text-[#dedede] w-full md:w-[400px] text-center " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 w-full p-2 xl:w-[80%] ">
        {filteredCategory.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-center items-center gap-5"
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              variants={{}}
              className="overflow-hidden rounded-2xl relative "
            >
              <div className="w-[250px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <motion.div
                variants={{
                  rest: { opacity: 0, y: 30 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#C3A27C]
      text-white font-bold py-2 px-8 rounded-[4px]"
              >
                <p>$ {card.price}</p>
              </motion.div>
            </motion.div>

            <div className="flex flex-col justify-center items-center gap-5">
              <p
                className="text-center text-[22px] leading-[32px] font-medium hover:text-[#d3bba0] cursor-pointer cursor-hover
              transition-all duration-200"
              >
                {card.title}
              </p>
              <p
                style={{ fontFamily: "DM Sans , sans-serif" }}
                className="text-center text-[#666] text-[15px] leading-[25px]"
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeAndBakery;
