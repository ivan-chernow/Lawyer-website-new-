import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PaginationSvgProps {
  currentImageIndex: number;
}

const svgVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const PaginationSvg = ({ currentImageIndex }: PaginationSvgProps) => {
  return (
    <div className="relative">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          {currentImageIndex === 0 && (
            <svg
              width="28"
              height="40"
              viewBox="0 0 28 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[28px] h-[40px] absolute bottom-[56px] left-0"
            >
              <rect x="0" width="4" height="40" fill="#4F8FF0" />
              <rect x="12" y="16" width="4" height="24" fill="#E6E6E6" />
              <rect x="24" y="16" width="4" height="24" fill="#E6E6E6" />
            </svg>
          )}
          {currentImageIndex === 1 && (
            <svg
              width="28"
              height="40"
              viewBox="0 0 28 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[28px] h-[40px] absolute bottom-[56px] left-0"
            >
              <rect x="12" width="4" height="40" fill="#4F8FF0" />
              <rect x="0" y="16" width="4" height="24" fill="#E6E6E6" />
              <rect x="24" y="16" width="4" height="24" fill="#E6E6E6" />
            </svg>
          )}
          {currentImageIndex === 2 && (
            <svg
              width="28"
              height="40"
              viewBox="0 0 28 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[28px] h-[40px] absolute bottom-[56px] left-0"
            >
              <rect x="24" width="4" height="40" fill="#4F8FF0" />
              <rect x="12" y="16" width="4" height="24" fill="#E6E6E6" />
              <rect x="0" y="16" width="4" height="24" fill="#E6E6E6" />
            </svg>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PaginationSvg;
