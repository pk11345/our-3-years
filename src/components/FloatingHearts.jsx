import { motion } from "framer-motion";

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            y: "100vh",
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: "-10vh",
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          className="absolute text-pink-400 text-xl"
        >
          💖
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingHearts;
