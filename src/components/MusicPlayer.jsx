import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const startMusic = () => {
      audioRef.current.play();
      setPlaying(true);
      window.removeEventListener("click", startMusic);
    };
    window.addEventListener("click", startMusic);
  }, []);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/love.mp3" loop  />
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 bg-rose-600 text-white p-3 rounded-full shadow-lg"
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>
    </>
  );
};

export default MusicPlayer;
