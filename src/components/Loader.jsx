import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "Meri cutiee Ishi Baby… 💕",
  "Dheere dheere humko 3 Saal hogye.",
  "Yeh Website humare is pyaar ke liye.",
  "Ekk Safar.",
  "Bahut Saari memories Ke kuch Pal.",
  "Tumhara Meri Har ",
  "Situation me Rehna.",
  "Aise hi Hum humesa Saath Rhe❤️",
];

const Loader = ({ onFinish }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1200); // speed between sentences

      return () => clearTimeout(timer);
    } else {
      // End loader
      setTimeout(onFinish, 800);
    }
  }, [index, onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center
        bg-gradient-to-br from-rose-900 via-rose-800 to-pink-900 text-center px-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-display font-semibold text-rose-100"
        >
          {lines[index]}<span className="animate-pulse">|</span>
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
