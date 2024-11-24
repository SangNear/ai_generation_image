import React from "react";
import { assets, stepsData } from "../assets/assets";
import { motion } from "motion/react";
const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <div className="flex flex-col ">
        <h2 className="text-2xl sm:text-4xl text-black font-normal">
          How it works
        </h2>
        <p className="text-neutral-500 text-sm md:text-md lg:text-lg  capitalize">
          transform words into stunning images
        </p>
      </div>
      <div className="flex flex-col mt-5 gap-4 lg:w-[80%] ">
        {stepsData.map((item, index) => (
          <div className="flex gap-3 items-center py-2 px-4 shadow-lg">
            <img
              className="p-2 text-black "
              width={40}
              height={40}
              src={item.icon}
              alt="icon"
            />
            <div className="flex flex-col  text-left">
              <h4 className=" capitalize text-sm font-medium ">{item.title}</h4>
              <p className="text-neutral-500 text-xs ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
