import { useState } from "react";
import { motion } from "framer-motion";

const FinalSurprise = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="py-20 bg-rose-200 text-center px-4">
      <button
        onClick={() => setShow(true)}
        className="bg-rose-600 text-white px-6 py-3 rounded-full text-lg shadow-lg"
      >
        Click if you love me 💖
      </button>

      {show && (
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mt-6 text-2xl font-bold text-rose-800"
        >
          Happy 3 Years, My Love 💍
        </motion.p>
      )}
    </div>
  );
};

export default FinalSurprise;
