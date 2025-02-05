import { useRef } from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion, useAnimationFrame } from "framer-motion";

function Hero() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 10;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <section
      id="home"
      className={` flex flex-col md:flex-row  ${styles.paddingY}`}
    >
      <main
        className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div className=" flex flex-row items-start py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt={discount} className=" w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 flex gap-1`}>
            <span className=" text-white">20%</span>
            <span className="">Discount For</span>
            <span className=" text-white">1 Month</span>
            <span>Account</span>
          </p>
        </div>

        <div className=" flex flex-row justify-between items-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} // Start state
            animate={{ opacity: 1, y: 0 }} // End state
            transition={{
              duration: 1.5, // Animation duration
              delay: 0.4, // Delay before animation starts
            }}
            className=" flex-1 font-poppins font-semibold text-[52px] ss:text-[72px]  text-white leading-[75px] ss:leading-[100px]"
          >
            The Next <br className=" hidden sm:block" /> {"  "}
            <span className=" text-gradient">Generation </span>
          </motion.h1>
          <div className=" hidden ss:flex mr-0 md:mr-4 ">
            <GetStarted />
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} // Start state
          animate={{ opacity: 1, y: 0 }} // End state
          transition={{
            duration: 1.5, // Animation duration
            delay: 0.4, // Delay before animation starts
          }}
          className=" w-full font-poppins font-semibold text-[52px] ss:text-[68px]  text-white leading-[75px] ss:leading-[100px]"
        >
          Payment Method.
        </motion.h1>
        <p
          className={`max-w-[470px] ${styles.paragraph} text-white font-poppins mt-4`}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </main>
      <div className="block md:hidden h-20 w-full"></div>
      <main
        ref={ref}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}
      >
        <img
          src={robot}
          alt="billing"
          className="relative w-full h-full z-10"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40    " />
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient" />
      </main>
      <div className={`  ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
