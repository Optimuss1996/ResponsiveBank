import { useEffect } from "react";
import { stats } from "../constanst";
import styles from "../style";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedNumber = ({ target }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, target, { duration: 4 });

    return animation.stop;
  }, [target, count]);

  return (
    <motion.div className=" font-poppins font-semibold text-white text-[30px] xs:text-[40px] leading-[43] xs:leading-[53px]">
      {rounded}
    </motion.div>
  );
};

function Stats() {
  return (
    <div
      className={` flex flex-col md:flex-row ${styles.flexCenter}  sm:mb-20 mb-3   `}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className=" flex-1 flex   justify-center items-center "
        >
          <motion.h4
            className="flex  items-center min-w-32 font-poppins font-semibold text-white text-[30px] xs:text-[40px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: index * 0.2 }}
          >
            <AnimatedNumber target={stat.value} />+
          </motion.h4>

          <p className="font-poppins  text-gradient text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] ">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
