import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "I love you meri Ishi baby ❤️",
  "Tum hi meri jaan ho 💕",
  "Tum hi meri humesha ke liye bubu ho 🧸",
  "Yeh jeevan hum humesha haste, ladte bitaye…",
  "Magar saath me bitaye 🤍",
  "Happy 3 Years, My Love 💍",
  "I love you ❤️",
];

const FinalSurprise = () => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!show) return;

    if (index < messages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1500); // speed between lines

      return () => clearTimeout(timer);
    }
  }, [show, index]);

  return (
    <div className="py-24 bg-rose-200 text-center px-4 relative overflow-hidden">
      {!show && (
        <button
          onClick={() => {
            setShow(true);
            setIndex(0);
          }}
          className="bg-rose-600 text-white px-6 py-3 rounded-full text-lg shadow-lg"
        >
          Click if you love me 💖
        </button>
      )}

      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex items-center justify-center"
          >
            <p className="text-xl md:text-3xl font-semibold text-rose-800 max-w-3xl">
              {messages[index]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinalSurprise;
