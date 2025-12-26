import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const images = [1, 2, 3, 4, 5, 6];

// Random slight rotations for polaroid effect
const rotations = [-3, 2, -2, 3, -1, 2];

const FloatingHeart = ({ delay, left }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left }}
    initial={{ bottom: -20, opacity: 0 }}
    animate={{
      bottom: ["0%", "100%"],
      opacity: [0, 0.8, 0.8, 0],
      rotate: [0, 15, -15, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Heart className="w-4 h-4 md:w-6 md:h-6 text-rose-medium fill-rose-light" />
  </motion.div>
);

const Gallery = () => {
  return (
    <section className="relative py-20 md:py-28 gallery-bg text-center px-4 md:px-10 overflow-hidden min-h-screen">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <FloatingHeart
            key={i}
            delay={i * 1.2}
            left={`${10 + i * 12}%`}
          />
        ))}
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-medium to-transparent opacity-30" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="w-5 h-5 md:w-6 md:h-6 text-rose-deep fill-rose-light" />
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-deep fill-rose-medium" />
          <Heart className="w-5 h-5 md:w-6 md:h-6 text-rose-deep fill-rose-light" />
        </motion.div>

        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3 tracking-wide">
          Our Memories
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground italic">
          Moments we'll cherish forever
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {images.map((i, index) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotate: rotations[index] }}
            whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: 10,
              transition: { duration: 0.3 },
            }}
            className="polaroid-card group cursor-pointer relative"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-sm aspect-square">
              <img
                src={`/photos/${i}.jpg`}
                alt={`Cherished memory ${i}`}
                className="w-full object-contain h-full transition-all duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-rose-deep/0 group-hover:bg-rose-deep/10 transition-colors duration-500 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <Heart className="w-8 h-8 text-card opacity-0 group-hover:opacity-80 transition-opacity duration-300 fill-current" />
              </motion.div>
            </div>

            {/* Caption */}
            <div className="pt-3 pb-1">
              <p className="font-body text-sm md:text-base text-muted-foreground italic">
                Memory #{i}
              </p>
            </div>

            {/* Tape effect */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-secondary/80 rotate-[-2deg] opacity-60" />
          </motion.div>
        ))}
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 md:mt-20 flex items-center justify-center gap-4"
      >
        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-rose-medium/50" />
        <Heart className="w-4 h-4 text-rose-medium fill-rose-light" />
        <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-rose-medium/50" />
      </motion.div>
    </section>
  );
};

export default Gallery;
