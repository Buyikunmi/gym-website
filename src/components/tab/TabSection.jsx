import React, { useState } from "react";
import { ProductsData } from "../../mockData/data";
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
