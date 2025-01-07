import { motion, useSpring, useScroll } from "motion/react";
import styles from "./style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components/index";
//
//
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.003,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#00f6ff",
          zIndex: 100,
        }}
      />

      <div className=" bg-primary w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={` bg-primary ${styles.flexStart}`}>
          <div className={` ${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={` ${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
