import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const Subtitle = ({ children, className, animate }:
  {
    children: React.ReactNode,
    className?: string,
    animate?: boolean
  }) => {
  return (
    <>
      {animate ? (
        <motion.h2
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{ once: true }}
          className={cn(`text-4xl text-center font-sans font-semibold bg-gradient-to-b from-white via-white to-white 
            bg-opacity-70 bg-clip-text text-transparent`, className)}
        >
          {children}
        </motion.h2>
      ) : (
        <h2
          className={cn(`text-4xl text-center font-sans font-semibold bg-gradient-to-b from-white via-white to-white 
            bg-opacity-70 bg-clip-text text-transparent`, className)}
        >
          {children}
        </h2>
      )}
    </>
  )
}
