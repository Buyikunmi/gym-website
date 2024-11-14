import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utitlity/animation";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* brand info */}
          <div className="flex flex-col justify-center py-14 md:py-0">
            <div className=" text-center md:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                Gym Gives you the perfect{"  "}
                <span className="text-primary">Health</span>
                {"  "}
              </motion.h1>
              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:mx-w-[500px]"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                deleniti culpa architecto! Expedita, quae qui.
              </motion.p>
              {/* button section */}
              <motion.div
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center items-center gap-8 md:justify-start !mt-4"
              >
                <button className="primary-btn flex items-center gap-2">
                  Order Now
                </button>
                <button className="flex justify-center gap-2 items-center">
                  <FaPlay />
                  Watch Now
                </button>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <motion.img
              initial={{ oacity: 0, x: 100 }}
              src={HeroImg}
              alt=""
              className="w-[350px] md:w-[550px] xl:[700px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
