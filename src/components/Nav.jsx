import React from "react";
import { NavbarMenu } from "../mockData/data";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ResponsiveHamburger from "./ResponsiveHamburger";
const Nav = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* logo section */}
          <div
            className="text-3xl flex gap-2
        items-center font-bold py-8"
          >
            <FaDumbbell />
            <p>Get</p>
            <p className="text-secondary">Fit</p>
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 font-bold text-gray-60">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold hover:text-secondary hover:border-b-2 border-secondary"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* icon section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartFill />
            </button>
            <button className="hidden md:block hover:bg-secondary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200">
              Login
            </button>
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden" onClick={() => setActive(!active)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponsiveHamburger active={active} />
    </>
  );
};

export default Nav;
