import styles from "../style";
import { feedback } from "../constanst";
import FeedBackCard from "./FeedBackCard";
//
//
function Testimonials() {
  return (
    <section
      id="clients"
      className={` ${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className=" w-full flex md:flex-row flex-col justify-center items-center mb-6 md:mb-16 relative z-[1]">
        <h2 className={`${styles.heading2}`}>
          What people are <br className="  hidden sm:block" /> saying about us
        </h2>
        <div className=" w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph}text-left max-w-[470px] `}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedBackCard key={card.id} {...card} />
        ))}
      </div>
      <div className=" absolute  bottom-40 -right-1/2 w-3/5 h-3/5 z-0 blue__gradient" />
    </section>
  );
}

export default Testimonials;
