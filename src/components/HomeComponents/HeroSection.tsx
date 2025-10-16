import wave from "../../assets/images/Home/wave.png";

type Props = {
  backgroundImage?: string;
  firstTitle?: string;
  secondTitle?: string;
};
const HeroSection = ({ backgroundImage, firstTitle, secondTitle }: Props) => {
  return (
    <div
      className="h-screen  overflow-hidden relative bg-no-repeat bg-cover bg-center flex justify-center items-center   "
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute bg-black top-0 left-0 w-full h-full z-[1] opacity-50" />
      <div className="relative z-3 min-lg:py-5 flex flex-col items-center w-[100%]">
        <div className="xl:w-[85%] lg:w-[90%]  w-full flex flex-col gap-4 text-white">
          <h2
            className="text-[#f6e7d0] 
              text-2xl md:text-4xl 
              leading-8 md:leading-[4rem] 
              text-center pt-10 md:pt-20"
            style={{ fontFamily: '"Sue Ellen Francisco", "cursive"' }}
          >
            {firstTitle}
          </h2>

          <h1
            className="font-bold 
              text-3xl md:text-6xl 
              leading-10 md:leading-[6rem] 
              text-center"
          >
            {secondTitle}
          </h1>

          <p
            className="text-base md:text-xl 
              leading-6 md:leading-7 
              text-center"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Harbourfront Seafood Restaurant is the perfect spot in Sydney to
            celebrate a special occasion
          </p>

          <div className="flex justify-center max-md:flex-col flex-row gap-5 p-5 ">
            <button className="bg-[#c3a27c] hover:bg-white hover:text-black transition-all duration-300 text-[15px] cursor-pointer cursor-hover tracking-[2px] max-md:tracking-normal font-semibold px-[40px] py-[15px] max-md:px-3 max-md:py-2.5 rounded-[5px] flex items-center justify-center ">
              VIEW ALL MENU
            </button>
            <button className="bg-white hover:bg-[#c3a27c] hover:text-white transition-all duration-300 cursor-pointer text-black cursor-hover  text-[15px] tracking-[2px] max-md:tracking-normal font-semibold px-[40px] py-[15px] max-md:px-[10px] max-md:py-2.5 rounded-[5px] flex items-center justify-center ">
              BOOK A TABLE
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-3 left-0 z-[4] w-full">
        <img src={wave} alt="wave" />
      </div>
    </div>
  );
};

export default HeroSection;
