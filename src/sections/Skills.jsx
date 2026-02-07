import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import { skills } from "../constants";


const BATCH_SIZE = 5;

const positionSets = [
  [
    { x: -28, y: -20 },
    { x: 28, y: -18 },
    { x: -32, y: 18 },
    { x: 32, y: 20 },
    { x: 0, y: 30 }
  ],
  [
    { x: -35, y: -10 },
    { x: 35, y: -10 },
    { x: -20, y: 25 },
    { x: 20, y: 25 },
    { x: 0, y: -28 }
  ],
  [
    { x: -25, y: -25 },
    { x: 25, y: -25 },
    { x: -35, y: 10 },
    { x: 35, y: 10 },
    { x: 0, y: 32 }
  ]
];

export default function Skills() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const batches = useMemo(() => {
    const result = [];
    for (let i = 0; i < skills.length; i += BATCH_SIZE) {
      result.push(skills.slice(i, i + BATCH_SIZE));
    }
    return result;
  }, []);

  const layoutForBatch = useMemo(() => {
    return batches.map(() => {
      const randomSet =
        positionSets[Math.floor(Math.random() * positionSets.length)];
      return randomSet;
    });
  }, [batches]);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white"
      style={{ height: `${batches.length * 200}vh` }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden relative"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d"
        }}
      >
        {batches.map((batch, batchIndex) => {
          const start = batchIndex / batches.length;
          const end = (batchIndex + 1) / batches.length;

          return batch.map((skill, i) => {
            const depth = -600 - i * 120;

            const z = useTransform(
              scrollYProgress,
              [start, end],
              [depth, 200],
              { ease: easeOut }
            );

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.05, end - 0.05, end],
              [0, 1, 1, 0]
            );

            const blur = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [6, 0, 6]
            );

            const blurValue = useTransform(blur, v => `blur(${v}px)`);

            const pos = layoutForBatch[batchIndex][i];

            return (
              <motion.div
                key={`${batchIndex}-${i}`}
                style={{
                  x: `${pos.x}vw`,
                  y: `${pos.y}vh`,
                  translateZ: z,
                  opacity,
                  filter: blurValue
                }}
                className="absolute left-1/2 top-1/2 text-xl md:text-3xl font-light"
              >
                {skill}
              </motion.div>
            );
          });
        })}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide">
            SKILLS
          </h1>
        </div>
      </div>
    </div>
  );
}