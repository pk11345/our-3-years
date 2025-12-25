import { motion } from "framer-motion";

const images = [1, 2, 3, 4, 5, 6];

const Gallery = () => {
  return (
    <section className="py-16 md:py-20 bg-rose-50 text-center px-4 md:px-10">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-bold text-rose-600 mb-8 md:mb-10"
      >
        Our Memories 📸
      </motion.h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((i, index) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={`/photos/${i}.jpg`}
              alt={`memory-${i}`}
              className="w-full h-full object-cover 
              transition-transform duration-700 ease-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
