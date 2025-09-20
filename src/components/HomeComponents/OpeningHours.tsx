import barista from "../../assets/images/about-3.jpg";
import bg from "../../assets/images/bg1.png";

type Hour = {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
};

const OpeningHours = () => {
  const hours: Hour[] = [
    { day: "MONDAY", open: "7:00", close: "21:00" },
    { day: "TUESDAY", open: "7:00", close: "21:00" },
    { day: "WEDNESDAY", open: "7:00", close: "21:00" },
    { day: "THURSDAY", open: "7:00", close: "21:00" },
    { day: "FRIDAY", open: "8:00", close: "21:00" },
    { day: "SATURDAY", open: "7:00", close: "21:00" },
    { day: "SUNDAY", closed: true },
  ];

  return (
    <div className="w-full min-h-[100vh] lg:mb-32 xl:mb-0 flex flex-col relative items-center p-2 ">
      <div className="absolute right-7 -bottom-3 max-lg:hidden">
        <img src={bg} alt="" />
      </div>
      <div className="flex flex-wrap items-center max-md:gap-7">
        <div className="lg:w-[40%] w-[100%] md:p-5 max-md:pt-5 flex items-center justify-center lg:justify-end ">
          <img
            className="object-cover  w-full lg:w-[500px] lg:h-[600px]  rounded-2xl  "
            src={barista}
            alt="Barista"
          />
        </div>
        <div
          className="shadow-2xl rounded-2xl bg-white lg:w-[25%] w-[100%] lg:min-h-[70vh] max-h-[120vh]
          lg:translate-y-30 lg:-translate-x-10 p-4 "
        >
          <p
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="text-[#c3a27c] leading-8 text-xl"
          >
            coffee shop since 2003
          </p>
          <h2 className="font-bold text-[45px] leading-14">
            We are not your average coffee shop
          </h2>
          <div>
            <p
              className="text-[#666] leading-6 text-[15px]"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              We offer some of the best locally roasted coffee using “Brazilian
              Santos” beans. Enjoy Dark, Blonde, Jamaican, Italian & Decaf
              roasts. Also available are our specialty Lattes, Frappes, Mochas,
              Cappuccinos, Americanos & more … To see more of our coffee,
              specialty drinks & food menus, please click the link below. There
              are many variations of passages of lorem ipsum available but the
              majority have suffered alteration in some form by injected.
            </p>
            <button
              className="  py-3 px-8 mt-3 text-white text-xl md:text-[12px] md:font-bold rounded-[5px] cursor-pointer hover:text-[#C3A27C] 
              transition-all duration-300 custom-hover bg-[#C3A27C] hover:bg-[#2D2723] "
            >
              Click To Read More
            </button>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex justify-center items-center h-[400px] bg-[#C3A27C] mt-3 rounded-2xl">
          <div className="relative bg-[#2b241f] text-white rounded-2xl shadow-lg p-8 w-80">
            <h2 className="text-xl font-bold tracking-wide text-[#d2a976] mb-6">
              HOUR OPENING
            </h2>
            <ul className="space-y-3">
              {hours.map((item, index) => (
                <li key={index} className={`flex justify-between items-center`}>
                  <span>{item.day} :</span>
                  <span
                    className={
                      item.closed ? "text-[#d2a976] font-semibold" : ""
                    }
                  >
                    {item.closed ? "CLOSED" : `${item.open} - ${item.close}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
