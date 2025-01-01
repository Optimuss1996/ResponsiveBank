import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constanst";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="logo" className=" w-[124px] h-[32px]" />
      <ul className=" list-none hidden sm:flex justify-end">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <a href={`#${nav.title}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* navbar for mobile */}
      <div className=" sm:hidden">
        <img
          src={toggle ? close : menu}
          alt={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          className=" w-[28px] h-[28px] object-contain"
        />

        <div
          className={` ${
            toggle ? " flex " : "hidden"
          } p-6 bg-black-gradient absolute right-0 top-20 mx-4 my-2  min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } `}
              >
                <a href={`#${nav.title}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
