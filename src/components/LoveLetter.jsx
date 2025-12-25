import { motion } from "framer-motion";

const LoveLetter = () => {
  return (
    <div className="py-20 bg-white text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
      >
        I don’t promise perfection,  
        but I promise effort, loyalty, and love.  
        Today. Tomorrow. Always. ❤️
      </motion.p>
    </div>
  );
};

export default LoveLetter;
