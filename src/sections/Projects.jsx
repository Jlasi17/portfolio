import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

const StackedCards = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;
      const currentScroll = Math.abs(rect.top);
      const progress = currentScroll / totalScrollableDistance;

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const lastCardThreshold = projects.length / (projects.length + 1);
  const isTitleGone = scrollProgress > lastCardThreshold;

  return (
    <div className="bg-[#000000c4] min-h-screen">
      <div style={{ height: "30vh" }}></div>

      <div ref={containerRef} className="stack-cards-container relative h-[850vh]">
        <div className="sticky top-1/2 -translate-y-1/2 w-full flex flex-col items-center px-4">
          
          
          <div className="w-full max-w-[850px] mb-10 overflow-hidden text-center">
             <motion.h2 
                animate={{ 
                  opacity: isTitleGone ? 0 : 1,
                  y: isTitleGone ? -50 : 0
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-white text-5xl font-bold tracking-tight inline-block border-b-4 border-[#4cede1] pb-2 mx-auto text-center"
              >
                Projects
              </motion.h2>
          </div>

          
          <div className="relative w-full max-w-[850px] h-[550px]">
            {projects.map((proj, i) => {
              const threshold = (i + 1) / (projects.length + 1);
              const isActive = scrollProgress > threshold;

              return (
                <motion.div
                  key={i}
                  className="stack-card absolute w-full h-full border border-white/10 rounded-[2.5rem] shadow-2xl"
                  style={{
                    zIndex: projects.length - i,
                    backgroundColor: proj.color,
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    top: "50%",
                  }}
                  animate={{
                    y: isActive ? "-320%" : "-50%",
                    opacity: isActive ? 0 : 1,
                    rotate: isActive ? -5 : 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.9, -0.2, 0.1, 1.2],
                  }}
                >
                  <div className="relative z-10 w-full h-full p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white text-4xl font-bold tracking-tight mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-[#4cede1] text-xl font-medium mb-6">
                        {proj.duration}
                      </p>
                      
                      <ul className="text-white/90 text-xl list-disc ml-6 space-y-4">
                        {proj.description.map((line, idx) => (
                          <li key={idx} className="leading-snug">{line}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-end">
                      <div className="w-16 h-16 flex justify-center items-center text-[#4cede1] text-xl font-bold border-2 border-[#4cede1]/40 rounded-full">
                        {proj.counter}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -inset-1 bg-black/20 blur-xl -z-20 rounded-[2.5rem]"></div>
                  <div className="shadow absolute top-5 left-5 w-full h-full bg-black/30 rounded-[2.5rem] -z-10"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ height: "40vh" }}></div>
    </div>
  );
};

export default StackedCards;