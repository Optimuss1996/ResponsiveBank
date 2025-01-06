import { stats } from "../constanst";
import styles from "../style";
function Stats() {
  return (
    <div className={` flex ${styles.flexCenter}  flex-wrap sm:mb-20 mb-6   `}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className=" flex-1 flex  justify-center items-center "
        >
          <h4 className=" font-poppins font-semibold text-white text-[30px] xs:text-[40px] leading-[43] xs:leading-[53px]">
            {stat.value}
          </h4>
          <p className="font-poppins  text-gradient text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] ">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
