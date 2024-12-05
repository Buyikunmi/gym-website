import { useState } from "react";
import { motion } from "framer-motion";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Muscles"];
  const filteredTabs =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);
  return (
    <>
      {/* tabs card button */}
      <div className="container my-12 md:my-16">
        <div className="flex space-x-6 mb-4 p-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs  card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTabs.map((card) => (
          <motion.div
            id={card.id}
            key={card.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-4 border rounded shadow-sm space-y-2"
          >
            <img
              src={card.image}
              alt=""
              className="h-[240px] w-full object-cover"
            />
            <p className="text-xlfont-semibod">{card.title}</p>
            <p className="text-gray-500">{card.category}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default TabSection;

import Image3 from "/src/assets/tabs/3.png";
import Image4 from "/src/assets/tabs/4.png";
import Image5 from "/src/assets/tabs/treadmill.jpg";
import Image6 from "/src/assets/tabs/weights1.jpg";
import Image8 from "/src/assets/tabs/Gym_ball.jpg";
import Image9 from "/src/assets/tabs/spinBike.jpg";

const ProductsData = [
  {
    id: 1,
    category: "Yoga",
    title: "Yoga Ball",
    image: Image8,
    info: "info",
    price: "price",
  },
  {
    id: 2,
    category: "Fitness",
    image: Image5,
    title: "Threadmill",
    info: "info",
    price: "$100",
  },
  {
    id: 3,
    category: "Yoga",
    image: Image3,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
  {
    id: 4,
    category: "Muscles",
    image: Image6,
    title: "Weights",
    info: "info",
    price: "$100",
  },
  {
    id: 5,
    category: "Fitness",
    image: Image9,
    title: "Spin Bike",
    info: "info",
    price: "$100",
  },
  {
    id: 6,
    category: "Muscles",
    image: Image4,
    title: "dumb bells",
    info: "info",
    price: "$100",
  },
];
