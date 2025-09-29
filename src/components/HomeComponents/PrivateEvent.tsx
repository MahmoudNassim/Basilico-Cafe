import { motion } from "framer-motion";
import { useState } from "react";
import event1 from "../../assets/images/Home/private-event-1.jpg";
import event2 from "../../assets/images/Home/private-event-2.jpg";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface EventItem {
  id: number;
  title: string;
  description: string;
}

const PrivateEvent = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  const text: EventItem[] = [
    {
      id: 1,
      title: "Private coffee room",
      description:
        "Donec aliquet, erat non tempor hendrerit, est augue viverra augue, non dignissim metus urna eget ante. Fusce fermentum mauris nec.",
    },
    {
      id: 2,
      title: "birthday party",
      description:
        "Donec aliquet, erat non tempor hendrerit, est augue viverra augue, non dignissim metus urna eget ante. Fusce fermentum mauris nec.",
    },
    {
      id: 3,
      title: "working & meeting",
      description:
        "Donec aliquet, erat non tempor hendrerit, est augue viverra augue, non dignissim metus urna eget ante. Fusce fermentum mauris nec.",
    },
  ];

  return (
    <div className="container mx-auto my-20 ">
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-wrap gap-4 relative lg:w-[48%]">
          <img className="rounded-xl" src={event1} alt="" />

          <img
            className="lg:absolute lg:-bottom-20 lg:left-0 rounded-xl max-md:w-full max-md:p-4"
            src={event2}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 lg:w-[48%] max-lg:p-4">
          <h4
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="flex items-center text-[#c3a27c] text-[15px] max-lg:mt-5 leading-8 "
          >
            <PiCoffeeBeanFill className="inline-block  mr-2 text-[#c3a27c]" />
            private event
          </h4>
          <h1 className="font-bold text-5xl md:text-5xl lg:text-5xl leading-14">
            The perfect venue
            <br /> for your special event
          </h1>
          <p
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="text-[15px]  text-[#696969]"
          >
            Our cafe is the perfect venue for your special event, you can
            organize a light birthday party, we will decorate it to your liking,
            or meet friends and relatives, a partner, and the perfect place to
            work.
          </p>
          {text.map((el) => (
            <div key={el.id} className="flex items-center gap-2">
              <button onClick={() => toggleDescription(el.id)}>
                {openId === el.id ? (
                  <FaMinus className="text-[#C3A27C] text-[20px]" />
                ) : (
                  <FaPlus className="text-[#C3A27C] text-[20px]" />
                )}
              </button>

              <div className="flex-col">
                <h3 className="text-[20px] font-medium leading-7">
                  {el.title}
                </h3>
                <motion.p
                  animate={
                    openId === el.id
                      ? { height: "auto", opacity: 1, marginTop: 8 }
                      : { height: 0, opacity: 0, marginTop: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-[#666] text-[15px] leading-6"
                >
                  {el.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivateEvent;
