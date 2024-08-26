import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils';

interface AnimatedContainerProps {
  children: React.ReactNode,
  className?: string
  isInView?: boolean
}

export const AnimatedContainer = forwardRef<HTMLDivElement, AnimatedContainerProps>((props, ref) => {
  const { children, className, isInView } = props;

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
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      id='teste-id'
    >
      {children}
    </motion.div>
  )
})

AnimatedContainer.displayName = "AnimatedContainer";
