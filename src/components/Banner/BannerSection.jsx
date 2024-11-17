import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../../utitlity/animation";

const BannerSection = ({ Image, title, subtitle, link }) => {
  return (
    <>
      <div className="container">
        <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          {/* Banner Image Section */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Image}
              alt=""
              className="w-[300px] md:max-w-[400px] xl:min-w[660px] h-full object-cover"
            ></motion.img>
          </div>
          {/* Banner Info Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-bold uppercaxe"
            >
              {title}
            </motion.p>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className=""
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Explore More </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
