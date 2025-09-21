import bg from "../../assets/images/Home/bg-service.png";
import bakery from "../../assets/images/Home/bakery.jpg";
import breakfast from "../../assets/images/Home/breakfast.jpg";
import cup from "../../assets/images/Home/cup-caffee.jpg";
import { CiCoffeeCup } from "react-icons/ci";
import { MdBakeryDining } from "react-icons/md";
import { MdFastfood } from "react-icons/md";

interface CardType extends CardProps {}
const Bakery = () => {
  const cards: CardType[] = [
    {
      image: cup,
      title: "Coffee",
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula. Eos ei nisl graecis, vix apeririequat.",
      icon: (
        <CiCoffeeCup className="text-white text-6xl lg:text-8xl font-bold " />
      ),
    },
    {
      image: bakery,
      title: "Bakery",
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula. Eos ei nisl graecis, vix apeririequat.",
      icon: (
        <MdBakeryDining className="text-white text-6xl lg:text-8xl font-bold " />
      ),
    },
    {
      image: breakfast,
      title: "Breakfast",
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula. Eos ei nisl graecis, vix apeririequat.",
      icon: (
        <MdFastfood className="text-white text-6xl lg:text-8xl font-bold " />
      ),
    },
  ];

  return (
    <div className="mt-20 lg:mt-40 mb-10 xl:mb-0 lg:h-[60vh] xl:h-[80vh] min-lg:pt-10">
      <div
        className="h-[400px] bg-cover bg-center hidden bg-no-repeat lg:block "
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className=" p-5 flex flex-wrap justify-center gap-7 min-lg:-translate-y-[60vh]">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  image: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div
      className="lg:h-[537px] h-[327px] xl:w-[370px] md:w-[200px] lg:w-[250px] w-full relative group bg-cover bg-no-repeat rounded-2xl 
      flex justify-center items-end pb-20 "
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {/* Border */}
      <div className="absolute inset-4 border border-white border-opacity-30 rounded-lg z-10 hidden lg:group-hover:block" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black   opacity-50 group-hover:opacity-75  rounded-2xl transition-opacity duration-300 " />

      <div className="relative z-10 flex flex-col items-center justify-center   lg:group-hover:-translate-y-20 duration-300 ">
        {props.icon}
        <h2 className="text-white text-2xl lg:text-4xl font-bold hover:text-[#C3A27C] cursor-pointer cursor-hover ">
          {" "}
          - {props.title} -
        </h2>
        <p className="text-white text-center px-4 lg:px-0 w-full lg:w-[70%] mt-4 leading-7 text-[15px] hidden group-hover:block duration-1000 transition-all ">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Bakery;
