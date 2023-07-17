import React, { useEffect, useState } from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import {logo } from "../assets";

export const Footer = () => {
  return (
    <>
      <div className="bg-black-100 h-46 md:flex items-center p-10 hidden">
        <div className="h-full w-full flex items-center p-5 justify-between">
          <div className="flex justify-between items-center">
            <div className="border-r p-4 flex-col items-center">
              <img
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="object-contain filter invert"
              />
              <p className="font-bold">JET TRADE FX</p>
            </div>
            <div className="p-4">
              <div className="flex gap-x-10 text-secondary">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex-col gap-x-5">
            <div className="flex justify-around">
              <Link to={"www.facebook.com"}>
                {" "}
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link to={"www.linkedin.com"}>
                {" "}
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link to={"www.twitter.com"}>
                {" "}
                <FaTwitterSquare className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-5">
              <p>Support: mail@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black-100 text-center flex justify-center gap-x-2">
        <p>&copy;</p>
        <p>copyright. All right reserved 2023</p>
      </div>
    </>
  );
};
