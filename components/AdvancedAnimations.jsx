import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AdvancedAnimations = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: 360, duration: 2, repeat: -1, ease: "linear" });
  }, []);

  return (
    <div className="container mx-auto py-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="text-lg font-bold text-white mb-8"
      >
        Rotating Text
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="p-4 bg-blue-500 text-white rounded mb-8"
      >
        Hover to Zoom
      </motion.div>

      <div ref={boxRef} className="w-20 h-20 bg-red-500 mb-8">
        GSAP Animation
      </div>

      <div className="blinking-text text-lg font-bold text-white">
        CSS Animation
      </div>

      <style jsx>{`
        .blinking-text {
          animation: blinker 1s linear infinite;
        }
        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AdvancedAnimations;
