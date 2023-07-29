import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 shadow-2xl z-10 overflow-hidden`}
      >
        <div className="z-40">
          <h1 className={`${styles.heroHeadText} text-[#915EFF]`}>
            Welcome to{" "}
            <span className="text-white uppercase"> Jet Trade FX</span>
          </h1>
          <p className={`${styles.heroSubText} mt-36 text-white-100 z-40`}>
            Advance Forex trading platform{" "}
            <br className="sm:block hidden" />
            AI based smart trading apps
          </p>
        </div>
        <div className="absolute h-[40%] w-[100%] sm:h-[60%] sm:w-[60%] mt- top-[25%] sm:top-[20%] sm:right-[10%]">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
