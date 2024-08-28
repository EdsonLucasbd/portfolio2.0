"use client"

import { motion } from "framer-motion";

export const BoltIcon = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  return (
    <div className="relative w-full">
      <motion.svg
        width="222"
        height="484"
        viewBox="0 0 469 1019"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible stroke-white stroke-2 w-fit absolute right-5 bottom-20 lg:right-20 lg:bottom-20"
        style={{ strokeLinejoin: 'round', strokeLinecap: 'round' }}
      >
        <motion.path
          d="M468.5 1L2 615.5L169 604L37.5 1018.5L462 403L300 417.5L468.5 1Z"
          stroke="white"
          variants={icon}
          initial="hidden"
          whileInView="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] }
          }}
          viewport={{ once: true }}
        />
      </motion.svg>
    </div>
  )
}