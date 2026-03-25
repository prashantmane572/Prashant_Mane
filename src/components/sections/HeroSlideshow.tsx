"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEOS = [
  // Directly extracted MP4 files from Pexels servers to bypass Cloudflare
  "https://videos.pexels.com/video-files/7804935/7804935-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/7947452/7947452-hd_1920_1080_30fps.mp4",
  // Fallbacks for the ones protected by intense anti-bot checks (you will need to download them manually)
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change background video every 8 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-slate-900 w-full h-full overflow-hidden">
      {/* Light glass overlay so the video dominates the screen but text remains readable */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-20 pointer-events-none" />
      
      <AnimatePresence>
        <motion.video
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0 z-10"
          src={VIDEOS[currentIndex]}
        />
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {VIDEOS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              idx === currentIndex ? "w-8 bg-primary" : "w-4 bg-slate-300 hover:bg-slate-400"
            }`}
             aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
