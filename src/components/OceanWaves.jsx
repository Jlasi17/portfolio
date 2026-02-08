import { motion } from "framer-motion";

const WaveLayer = ({ color, duration, offset, opacity = 1 }) => (
  <motion.svg
    viewBox="0 0 2880 320"
    className="absolute bottom-0 w-[200%]"
    style={{ left: offset, opacity }}
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration, ease: "linear" }}
  >
    <path
      fill={color}
      d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,320L0,320Z"
    />

    <path
      fill={color}
      transform="translate(1440,0)"
      d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,320L0,320Z"
    />
  </motion.svg>
);

const OceanWaves = () => {
  return (
    <div className="absolute bottom-0 w-full h-[45%] overflow-hidden">
      <WaveLayer color="#1d4ed8" duration={30} offset="0%" opacity={0.35} />
      <WaveLayer color="#2563eb" duration={24} offset="-50%" opacity={0.4} />

      <WaveLayer color="#0ea5e9" duration={18} offset="0%" opacity={0.6} />
      <WaveLayer color="#0284c7" duration={14} offset="-50%" opacity={0.7} />

      <WaveLayer color="#22d3ee" duration={10} offset="0%" opacity={0.9} />
    </div>
  );
};

export default OceanWaves;