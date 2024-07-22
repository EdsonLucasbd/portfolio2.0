"use client";
import { cn } from '@/lib/utils';
import { AnimatePresence, useScroll, motion, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'

export const NavbarMenu = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          `flex w-full fixed top-0 inset-x-0 mx-auto border text-white 
          border-white/[0.2] bg-transparent backdrop-blur-md 
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
          z-[5000] px-24 py-5  items-center justify-around space-x-4
          [&_a:hover]:text-brand-pink`,
          className
        )}
      >
        <Link href="#about">Sobre</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projetos</Link>
        <Link href="#services">Serviços</Link>
      </motion.div>
    </AnimatePresence>
  )
}
