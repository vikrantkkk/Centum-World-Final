import React, { useEffect, useState } from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { Modal, Select, Button } from "antd";
const { Option } = Select;

export const Footer = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [address, setAddress] = useState("Kolkata");
  const changeLocation = (value) => {
    setAddress(value);
  };
  const showModal = () => {
    setVisibleModal(true);
  };
  const handleCancel = () => {
    setVisibleModal(false);
  };
  const today = new Date();

  // Get the individual components of the date (year, month, day)
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-indexed, so we add 1
  const day = String(today.getDate()).padStart(2, "0");

  // Format the date as "YYYY-MM-DD"
  const formattedDate = `${year}-${month}-${day}`;

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
                <p onClick={showModal} className="cursor-pointer">
                  Privacy & Policy
                </p>
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
                  {address === "Kolkata"
                    ? "Astra Towers, Action Area IIC, Newtown, New Town, West Bengal 700135"
                    : ""}
                  {address === "Bangalore"
                    ? "108,27th Main,HSR Layout,Sector-2,Bangalore,KA 560102, India"
                    : ""}
                  {address === "Jharkhand"
                    ? "Jet Trade FX SOY MARKET, TAMBO CHOWK, CHAIBASA (JHARKHAND 833201)"
                    : ""}
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
        <p>
          Disclaimer: Trading are subject to market risk. Read all scheme
          related document carefully
        </p>
      </div>
      <Modal
        title="Privacy and Policy"
        visible={visibleModal}
        onCancel={handleCancel}
        closable={true}
        width={"50vw"}
        height={"100vh"}
      >
        <div className="flex flex-col gap-y-5 text-justify z-40">
          <p>Effective Date: {formattedDate}</p>
          <p>
            Welcome to JetTradeFX Forex Trading Platform we. We are committed to
            protecting your privacy and ensuring the security of your personal
            and financial information. This Privacy Policy outlines how we
            collect, use, share, and protect your data when you use our forex
            trading platform. By accessing or using our services, you consent to
            the practices described in this Privacy Policy.
          </p>
          <div>
            <p className="font-bold">Data Collection and Use:</p>
            <p>
              We collect various types of information when you use our platform,
              including personal information (such as your name, email address,
              and contact details) and financial information (such as bank
              account or credit card details). We use this information to
              process your transactions, verify your identity, provide customer
              support, and comply with our legal obligations.
            </p>
          </div>
          <div>
            <p className="font-bold">Data Security:</p>
            <p>
              We take the security of your data seriously and implement
              appropriate technical and organizational measures to protect it
              from unauthorized access, disclosure, alteration, or destruction.
              Our security measures include encryption protocols, secure server
              facilities, and regular security assessments.
            </p>
          </div>
          <div>
            <p className="font-bold">Third-Party Sharing:</p>
            <p>
              We may share your data with third-party service providers who
              assist us in delivering our services, such as payment processors
              and customer support partners. These third parties are
              contractually bound to use your information solely for the
              purposes of providing the requested services and are required to
              maintain the confidentiality and security of your data.
            </p>
          </div>
          <div>
            <p className="font-bold">Marketing and Communication:</p>
            <p>
              We may use your contact information to communicate with you about
              our services, updates, promotions, and relevant market insights.
              You have the option to opt-out of marketing communications by
              adjusting your preferences in your account settings or by
              contacting our support team.
            </p>
          </div>
          <div>
            <p className="font-bold">User Rights:</p>
            <p>
              You have the right to access, correct, or delete the personal
              information we hold about you. If you wish to exercise any of
              these rights or have any concerns regarding your data, please
              contact us using the contact information provided in this policy.
              We will respond to your request within a reasonable timeframe.
            </p>
          </div>
          <div>
            <p className="font-bold">Legal Compliance:</p>
            <p>
              We comply with applicable data protection laws and regulations,
              including the GDPR (General Data Protection Regulation) in Europe.
              If you are accessing our services from outside the European Union,
              you agree that your data may be transferred and processed in the
              EU or other jurisdictions in accordance with this policy.
            </p>
          </div>
          <div>
            <p className="font-bold">Cookies and Tracking:</p>
            <p>
              We use cookies and similar tracking technologies to enhance your
              user experience and understand how you use our platform. Cookies
              are also used for marketing and analytics purposes. By using our
              platform, you consent to the use of cookies as described in our
              Cookie Policy.
            </p>
          </div>
          <div>
            <p className="font-bold">Changes to the Policy:</p>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Any updates will
              be posted on this page, and the "Effective Date" at the top will
              be revised accordingly. We encourage you to review this Privacy
              Policy regularly.
            </p>
          </div>
          <div>
            <p className="font-bold">Age Restrictions:</p>
            <p>
              Our platform is not intended for use by individuals under the age
              of 18. If you are under 18, please do not use our services or
              provide any personal information to us.
            </p>
          </div>
          <div>
            <p className="font-bold">Contact Information:</p>
            <p>
              If you have any questions, concerns, or requests related to this
              Privacy Policy or our data practices please contact us.
            </p>
          </div>
          <p>
            Thank you for trusting JetTradeFX Forex Trading Platform. We are
            dedicated to safeguarding your privacy and providing you with a
            secure and seamless trading experience.
          </p>
        </div>
      </Modal>
    </>
  );
};
