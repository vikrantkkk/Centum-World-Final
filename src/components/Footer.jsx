import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-black-100 h-20 md:flex items-center p-4 hidden">
      <div className="h-full w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-10 items-center">
          <Link to="https://twitter.com" target="_blank">
            {" "}
            <FaTwitterSquare className="h-10 w-10" />{" "}
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <FaLinkedin className="w-10 h-10" />
          </Link>
          <Link to="https://facebook.com" target="_blank">
            {" "}
            <FaFacebookF className="h-10 w-10" />{" "}
          </Link>
        </div>
        <div>Made by Centum World</div>
      </div>
    </div>
  );
};
