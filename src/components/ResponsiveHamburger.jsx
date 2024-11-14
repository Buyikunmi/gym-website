import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const ResponsiveHamburger = ({ active }) => {
  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-24 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold bg-secondary text-white py-10 m-6 rounded-3xl md:hidden">
            <ul className="flex flex-col justify-center gap-3 items-center">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveHamburger;
