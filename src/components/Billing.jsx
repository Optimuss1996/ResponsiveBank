import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";
import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

function Billing() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 10;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <section id="product" className={` ${layout.sectionReverse}`}>
      <div ref={ref} className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="bill" className="w-full h-full z-10 relative " />

        <div className=" absolute z-[5] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className=" absolute z-0 -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className="block md:hidden h-20 w-full"></div>

      <div className={` ${layout.sectionInfo}`}>
        <h2 className={` ${styles.heading2}`}>
          Easily control your <br className=" sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className=" flex flex-wrap sm:mt-10 mt-6 gap-2 sm:gap-5">
          <img
            src={apple}
            alt="apple"
            className=" w-32 h-11 object-contain cursor-pointer"
          />
          <img
            src={google}
            alt="google"
            className=" w-32 h-11 object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
