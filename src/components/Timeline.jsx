import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

/* ------------------ DATA ------------------ */
const moments = [
  "💬 Our First Chat",
  "🌸 First Meeting",
  "😅 First Fight",
  "✈️ First Trip",
  "❤️ Still Choosing Each Other",
];

/* ------------------ HEART BURST ------------------ */
const HeartBurst = ({ isActive }) => {
  if (!isActive) return null;

  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 14 : 24;

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
      {[...Array(count)].map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const distance = isMobile ? 120 : 200;

        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.3, 1, 0],
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance - 40,
            }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute text-2xl md:text-4xl"
          >
            💖
          </motion.span>
        );
      })}
    </div>
  );
};

/* ------------------ TIMELINE ------------------ */
const Timeline = () => {
  const sectionRef = useRef(null);
  const [currentMoment, setCurrentMoment] = useState(-1);
  const [showFinal, setShowFinal] = useState(false);
  const [burstTriggered, setBurstTriggered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Loving background transition */
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "hsl(var(--background))",
      "hsl(var(--timeline-mid))",
      "hsl(var(--timeline-end))",
    ]
  );

  /* Detect which moment to show */
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = latest * (moments.length + 1);
    const index = Math.floor(progress);

    if (index < moments.length) {
      setCurrentMoment(index);
      setShowFinal(false);
    } else {
      setCurrentMoment(-1);
      setShowFinal(true);
      if (!burstTriggered) setBurstTriggered(true);
    }

    if (latest < 0.8) setBurstTriggered(false);
  });

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="relative min-h-[420vh] md:min-h-[500vh]"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[320px] h-[320px] md:w-[500px] md:h-[500px]
          bg-pink-300/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] md:w-[600px] md:h-[600px]
          bg-rose-400/20 rounded-full blur-[120px]" />
      </div>

      {/* Sticky frame */}
      <div className="
        sticky top-0 h-screen flex flex-col justify-center items-center
        gap-8 md:gap-10 px-4 text-center overflow-hidden
      ">
        {/* Heading */}
       <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: showFinal ? 0 : 1,
            y: showFinal ? -20 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-5xl font-display font-bold text-primary"
        >
          Our Journey Together
        </motion.h2>

        {/* ONE BY ONE MOMENTS */}
        <div className="relative w-full max-w-2xl h-[200px] md:h-[260px] flex items-center justify-center">
          {moments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{
                opacity: currentMoment === index && !showFinal ? 1 : 0,
                scale: currentMoment === index && !showFinal ? 1 : 0.85,
                y: currentMoment === index && !showFinal ? 0 : 20,
              }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="
                bg-card px-6 py-8 md:px-12 md:py-14 rounded-3xl
                shadow-[0_20px_60px_rgba(255,105,135,0.35)]
                w-[95%]
              ">
                <span className="
                  text-xl md:text-4xl lg:text-5xl
                  font-display font-bold
                ">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL REVEAL */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{
            opacity: showFinal ? 1 : 0,
            scale: showFinal ? 1 : 0.9,
            y: showFinal ? 0 : 50,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
        >
          <HeartBurst isActive={burstTriggered && showFinal} />

          <h3 className="text-2xl md:text-5xl font-display font-bold  md:mb-8">
            Our Story 💕
          </h3>


          <div className="
          absolute inset-0 flex flex-col items-center justify-center
          px-4 pt-12 md:pt-0">
            {moments.map((item, index) => (
              <div
                key={index}
                className="bg-card px-5 py-4 md:px-6 md:py-5 rounded-2xl"
              >
                <span className="text-base md:text-xl font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default Timeline;
