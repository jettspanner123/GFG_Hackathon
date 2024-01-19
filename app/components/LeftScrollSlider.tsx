import React from "react";
import { FaReact } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useScroll, useTransform, motion } from "framer-motion";
import { PiHandCoinsLight } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";

const LeftScrollSlider = () => {
  const optionRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 0.5], ["-100rem", "0rem"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.6], ["0", "1"])
  const options = ["SOMETHHING", "somethingg2", "somethinee3", "somethingg2"];
  return (
    <motion.div
      style={{ x }}
      className={`w-[150vw] px-[3rem] flex gap-[2rem] mt-[5rem]`}
    >
      <div
        className={
          "bg-[#afecd1] relative hover:scale-110 transition-all overflow-hidden duration-500 delay-100 h-[20rem] w-[35rem] rounded-xl"
        }
      >
        <motion.div>
          <GiMoneyStack
            size={300}
            className={"absolute -left-[6rem] text-white bottom-[1rem]"}
          />
          <div className="h-full w-full absolute left-0 top-0 blur_it12 flex justify-center items-center">
            <motion.h1 style={{opacity}} className="text-[2rem] font-bold text-center  ">Coupon And Rewards</motion.h1>
          </div>
        </motion.div>
      </div>
      <div
        className={
          "bg-[#afecd1] relative hover:scale-110 transition-all overflow-hidden duration-500 delay-100 h-[20rem] w-[35rem] rounded-xl"
        }
      >
        <motion.div>
          <PiHandCoinsLight
            size={300}
            className={"absolute -left-[6rem] text-white bottom-[1rem]"}
          />
          <div className="h-full w-full absolute left-0 top-0 blur_it12 flex justify-center items-center">
            <motion.h1 style={{opacity}} className="text-[2rem] font-bold text-center  ">Farming Schemes</motion.h1>
          </div>
        </motion.div>
      </div>

      <div
        className={
          "bg-[#afecd1] relative hover:scale-110 transition-all overflow-hidden duration-500 delay-100 h-[20rem] w-[35rem] rounded-xl"
        }
      >
        <motion.div>
          <FaRegTrashCan
            size={200}
            className={"absolute bottom-[1rem] text-white left-[1rem]"}
          />
          <div className="h-full w-full absolute left-0 top-0 blur_it12 flex justify-center items-center">
            <motion.h1 style={{opacity}} className="text-[2rem] font-bold text-center  ">Waste Management</motion.h1>
          </div>
        </motion.div>
      </div>
      
      <div
        className={
          "bg-[#afecd1] relative hover:scale-110 transition-all overflow-hidden duration-500 delay-100 h-[20rem] w-[35rem] rounded-xl"
        }
      >
        <motion.div>
          <FaReact
            size={300}
            className={"absolute -left-[6rem] text-white -top-[6rem]"}
          />
          <div className="h-full w-full absolute left-0 top-0 blur_it12 flex justify-center items-center">
            <motion.h1 style={{opacity}} className="text-[2rem] font-bold text-center  ">Transport Bidding</motion.h1>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default LeftScrollSlider;
