import React, { useEffect, useState } from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import {logo } from "../assets";
import { Select } from "antd";
const {Option} = Select

export const Footer = () => {
  const [address, setAddress] = useState("Kolkata");
  const changeLocation = (value) => {
    setAddress(value)
  }
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
            <div className="p-4 flex flex-col gap-5">
              <div className="flex gap-x-10 text-secondary">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
                <a href="#contact">Trade Now</a>
              </div>
              <div className="address flex flex-col">
              <Select
                defaultValue="Kolkata"
                style={{ width: 120, marginBottom: 5 }}
                onChange={changeLocation}
              >
                <Option value="Kolkata">Kolkata</Option>
                <Option value="Bangalore">Banglore</Option>
                <Option value="Jharkhand">Jharkhand</Option>
              </Select>
              <div>
              {address === 'Kolkata'?'Astra Towers, Action Area IIC, Newtown, New Town, West Bengal 700135':''}
              {address === 'Bangalore'? '108,27th Main,HSR Layout,Sector-2,Bangalore,KA 560102, India':''}
              {address === 'Jharkhand'? 'Jet Trade FX SOY MARKET, TAMBO CHOWK, CHAIBASA (JHARKHAND 833201)':''}
              </div>
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
      <div className=" bg-black-100 text-center flex justify-center sm:gap-x-2  gap-x-0 items-center sm:p-0 p-2 flex-col">
        <p>&copy; copyright. All right reserved 2023</p>
        <p>Disclaimer: Trading are subject to market risk. Read all scheme related document carefully</p>
      </div>
    </>
  );
};
