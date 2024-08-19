import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils';

interface AnimatedContainerProps {
  children: React.ReactNode,
  className?: string
}

export const AnimatedContainer = forwardRef<HTMLDivElement, AnimatedContainerProps>((props, ref) => {
  const { children, className } = props;

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
})

AnimatedContainer.displayName = "AnimatedContainer";
