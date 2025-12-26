import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import LoveLetter from "./components/LoveLetter";
import FinalSurprise from "./components/FinalSurprise";
import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./components/FloatingHearts";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FloatingHearts />
          <MusicPlayer musicEnabled={!loading} />
          <Hero />
          <Timeline />
          <Gallery />
          <LoveLetter />
          <FinalSurprise />
        </motion.div>
      )}
    </>
  );
}

export default App;
