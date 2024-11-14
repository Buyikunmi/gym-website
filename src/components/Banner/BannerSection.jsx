import React from "react";

const BannerSection = ({ Image, title, subtitle, link }) => {
  return (
    <>
      <div className="container">
        <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          {/* Banner Image Section */}
          <div>
            <img
              src={Image}
              alt=""
              className="w-[300px] md:max-w-[400px] xl:min-w[660px] h-full object-cover"
            ></img>
          </div>
          {/* Banner Info Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <p className="text-2xl lg:text-4xl font-bold uppercaxe">{title}</p>
            <p className="">{subtitle}</p>
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn">Explore More </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
