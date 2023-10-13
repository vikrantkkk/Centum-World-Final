import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import axios from "axios";
import { useEffect } from "react";
import baseUrl from "../../baseUrl";

const FeedbackCard = ({ name, designation, company, image }) => (
  <>
    <div className="bg-black-200 p-10 rounded-3xl w-[250px] shadow-md shadow-[#151030]">
      <div className="">
        <div className="mt-7 flex flex-col-reverse items-center gap-2">
          <div className="flex-1 flex flex-col items-center">
            <p className="text-white font-medium text-[14px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`image-of-${name}`}
            className="rounded-full object-cover h-28 w-28"
          />
        </div>
      </div>
    </div>
  </>
);

const Feedbacks = () => {
  useEffect(() => {
    fetchAllFranchise();
  }, []);

  const fetchAllFranchise = async () => {
    try {
      const response = await axios.get(`${baseUrl.apiUrl}/portfolio/get-all-franchises`);
      console.log("Data Fetched");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className={`bg-black-100 rounded-[20px] overflow-x-auto`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}
        >
          <div>
            <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
              Management Ecosystem
            </p>
          </div>
        </div>
        <div
          className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center items-center gap-5`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
