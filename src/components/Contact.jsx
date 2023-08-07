import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
import { VscSend } from "react-icons/vsc";
import ContactGif from "../assets/contact2.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState("Kolkata");
  const chageLocation = (value) => {
    setLocation(value);
  };
  useEffect(() => {
    setLocation(location);
  }, [location]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        {
          from_name: form.name,
          to_name: "Jet Trade FX",
          from_email: form.email,
          to_email: "enterYourMail@gmail.com",
          message: form.message,
        }
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10`}
      >
        <div
          // variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] text-white-100 text-opacity-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center gap-2"
            >
              {loading ? "Sending..." : "Send"}
              <VscSend />
            </button>
          </form>
        </div>
        <div
          // variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] overflow-hidden md:block hidden "
        >
          <img
            src={ContactGif}
            alt="contact-image"
            className="sm:w-full h-full sm:h-auto w-auto p-10 animate-pulse mt-14"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
