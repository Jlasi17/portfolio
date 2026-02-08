import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import OceanWaves from "../components/OceanWaves";

const projects = [
  {
    id: 1,
    title: "World Cleanup Day Volunteer",
    date: "Sept 2025",
    description:
      "Participated in a cleanliness drive, collecting and responsibly disposing of plastics."
  },
  {
    id: 2,
    title: "Nurturing Young Minds",
    date: "Nov 2024",
    description:
      "Conducted an awareness session for school students on health and well-being."
  }
];

const Star = ({ top, left, delay }) => (
  <motion.div
    initial={{ opacity: 0.2, scale: 0.8 }}
    animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
    className="absolute w-1 h-1 bg-white rounded-full"
    style={{ top, left }}
  />
);

const OutReachProj = () => {
  const [activeId, setActiveId] = useState(null);
  const activeData = projects.find((p) => p.id === activeId);

  // Stable random positions (generated once)
  const positions = useMemo(() => {
    return projects.map(() => Math.random() * 80 + "%");
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b] flex flex-col justify-end">
      
      {/* Stars */}
      <Star top="10%" left="15%" delay={0} />
      <Star top="20%" left="85%" delay={1.5} />
      <Star top="35%" left="40%" delay={0.5} />

      {/* Moon */}
      <div className="absolute top-10 right-20 w-28 h-28 bg-slate-100 rounded-full shadow-[0_0_60px_10px_rgba(255,255,255,0.4)]" />

      {/* Ocean */}
      <OceanWaves />

      {/* Randomly positioned bottles */}
      <div className="absolute bottom-[15%] translate-y-6 w-full z-20">
        {projects.map((proj, index) => (
          <Bottle
            key={proj.id}
            data={proj}
            onClick={() => setActiveId(proj.id)}
            delay={index * 0.6}
            layoutId={proj.id}
            style={{ left: positions[index] }}
          />
        ))}
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {activeId && activeData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={() => setActiveId(null)}
          >
            <Bottle
              data={activeData}
              isOpen
              onClose={() => setActiveId(null)}
              layoutId={activeId}
              isCentered
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Bottle = ({
  data,
  isOpen,
  onClick,
  onClose,
  delay,
  layoutId,
  isCentered,
  style
}) => (
  <motion.div
    layoutId={layoutId}
    className="absolute flex flex-col items-center"
    style={style}
  >
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 30, scale: 0.5, opacity: 0 }}
          animate={{ y: -200, scale: 1, opacity: 1 }}
          exit={{ y: 30, scale: 0.5, opacity: 0 }}
          className="absolute z-50 w-72 p-8 bg-[#fdf6e3] rounded-sm border shadow-xl"
        >
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 bg-indigo-500 text-white rounded-full p-1"
          >
            <X size={18} />
          </button>
          <h3 className="font-bold text-xl mb-2">{data.title}</h3>
          <span className="text-sm block mb-4">{data.date}</span>
          <p>{data.description}</p>
        </motion.div>
      )}
    </AnimatePresence>

    {!isCentered ? (
      <motion.div
        animate={{ y: [0, -10, 0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <motion.div
          animate={{ rotate: [78, 82, 78, 74, 78] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
          onClick={onClick}
          className="relative z-40 cursor-pointer drop-shadow-[0_8px_6px_rgba(0,0,0,0.25)]"
        >
          <BottleSVG />
        </motion.div>
      </motion.div>
    ) : (
      <BottleSVG />
    )}
  </motion.div>
);

const BottleSVG = () => (
  <svg width="100" height="140" viewBox="0 0 100 200">
    <path
      d="M30,0 L70,0 L70,40 L90,60 L90,190 C90,195 85,200 80,200 L20,200 C15,200 10,195 10,190 L10,60 L30,40 Z"
      fill="rgba(200,220,255,0.15)"
      stroke="white"
      strokeWidth="3"
    />
    <rect x="32" y="-10" width="36" height="18" fill="#5d4037" rx="3" />
    <rect x="25" y="80" width="50" height="80" fill="#fdf6e3" rx="2" />
  </svg>
);

export default OutReachProj;