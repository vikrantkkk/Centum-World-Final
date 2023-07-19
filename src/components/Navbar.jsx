import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logo } from "../assets";
import {AiOutlineArrowRight} from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center sm:py-2 pb-[80%] fixed top-0 z-20 ${
        scrolled ? "sm:bg-primary bg-transparent" : "bg-transparent"
      }`}
    >
      <div className={`absolute sm:hidden block top-0 transition-all duration-200 w-full h-[25%] z-[-10] left-0 bg-primary ${scrolled ? "bg-primary": "bg-transparent"}`}></div>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex flex-col items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            width={60}
            height={60}
            className="object-contain filter invert"
          />
          <p className="text-white font-bold cursor-pointer flex items-center text-2xl uppercase">
            JetTrade
            <span className="text-secondary uppercase"> &nbsp; FX</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#fff]" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.id !== "Trade Now" ? (
                <a href={`#${nav.id}`}>{nav.title}</a>
              ) : (
                <a href="http://trader.jettradefx.in/" target="_blank" className="flex items-center gap-x-2 border p-2 rounded-lg hover:bg-[#398BF3] hover:text-white transition-all duration-200 group">
                  {nav.title}
                  <AiOutlineArrowRight className="group-hover:translate-x-1 transition-all duration-200"/>
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.id !== "Trade Now" ? (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  ) : (
                    <a href="http://trader.jettradefx.in/" target="_blank">
                      {nav.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
