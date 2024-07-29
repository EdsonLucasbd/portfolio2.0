import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils';

export const AnimatedContainer = ({ children, ref, className }: {
  ref: React.RefObject<HTMLDivElement>,
  children: React.ReactNode,
  className?: string
}) => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={cn("flex flex-col flex-wrap gap-10 items-center", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      ref={ref}
      viewport={{ amount: 0.1, once: true }}
    >
      {children}
    </motion.div>
  )
}
