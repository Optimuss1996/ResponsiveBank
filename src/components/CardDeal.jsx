import { useRef } from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";
import { useAnimationFrame } from "framer-motion";

function CardDeal() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 10;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className=" hidden sm:block" /> in few
          easy steps.
        </h2>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className="block md:hidden h-20 w-full"></div>

      <div ref={ref} className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
}

export default CardDeal;
