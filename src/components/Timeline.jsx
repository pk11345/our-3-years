import { motion } from "framer-motion";

const moments = [
  "💬 Our First Chat",
  "🌸 First Meeting",
  "😅 First Fight",
  "✈️ First Trip",
  "❤️ Still Choosing Each Other",
];

const Timeline = () => {
  return (
    <div className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl font-bold text-rose-600 mb-10">
        Our Journey Together
      </h2>

      <div className="flex flex-col gap-6 items-center">
        {moments.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-rose-100 px-6 py-4 rounded-xl shadow-md w-full md:w-[40%]"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
