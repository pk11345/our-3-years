import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center 
    bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 text-center px-4">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-6xl font-bold text-rose-700"
      >
        Three Years of Us ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-base md:text-lg text-rose-600"
      >
        Every love story is beautiful, but ours is my favorite.
      </motion.p>
    </div>
  );
};

export default Hero;
