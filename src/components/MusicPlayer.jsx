import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

const MusicPlayer = ({ musicEnabled }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  // expose globally for timeline volume control
  useEffect(() => {
    if (audioRef.current) {
      window.bgMusic = audioRef.current;
    }
  }, []);

  // start listening ONLY after loader finishes
  useEffect(() => {
    if (!musicEnabled) return;

    const startMusic = () => {
      audioRef.current.play();
      setPlaying(true);
      setStarted(true);
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, [musicEnabled]);

  const toggleMusic = () => {
    if (!started) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/love.mp3" loop />

      {started && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 right-4 z-50 bg-rose-600 text-white p-3 rounded-full shadow-lg"
        >
          {playing ? <FaPause /> : <FaMusic />}
        </button>
      )}
    </>
  );
};

export default MusicPlayer;
