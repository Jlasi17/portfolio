import { useState } from "react";
import { motion } from "framer-motion";

function Navigation({ sections }) {
  return (
    <ul className="nav-ul flex gap-6">
      {sections.map((section) => (
        <li key={section.id} className="nav-li">
          <a
            className="nav-link text-neutral-400 hover:text-white transition-colors"
            href={`#${section.id}`}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Lasya Jetti
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation sections={sections} />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <Navigation sections={sections} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;