import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { introText } from "../constants";


export default function Intro() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const chars = introText.split("");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#000000c4] to-[#000000c4] px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-white text-4xl md:text-6xl font-bold mb-12 tracking-tight text-center"
      >
        About Me
      </motion.h2>

      
      <p
        ref={containerRef}
        className="max-w-5xl text-white text-2xl md:text-4xl font-semibold leading-snug flex flex-wrap justify-center"
      >
        {chars.map((char, i) => {
          const start = i / chars.length;
          const end = start + (1 / chars.length);
          
          return (
            <Character 
              key={i} 
              range={[start, end]} 
              progress={scrollYProgress}
            >
              {char}
            </Character>
          );
        })}
      </p>
    </section>
  );
}

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]); 
  
  return (
    <motion.span style={{ opacity }} className="inline-block relative">
      {children === " " ? "\u00A0" : children}
    </motion.span>
  );
};