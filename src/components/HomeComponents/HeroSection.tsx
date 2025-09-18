import hero from "../../assets/images/Herosection-1.jpg"
import Header from "../Header/Header";

const HeroSection = () => {
  return (
    <div className="h-screen  overflow-hidden relative bg-no-repeat bg-cover bg-center   "
      style={{ backgroundImage: `url('${hero}')` }}>
      <div className="absolute bg-black top-0 left-0 w-full h-full z-1 opacity-50" />
      <div className="relative z-10 min-lg:py-5 flex flex-col items-center w-[100%]">
        <div className="xl:w-[70%]  w-full flex flex-col gap-10">
          <Header />
        </div>

      </div>
    </div>
  )
}

export default HeroSection