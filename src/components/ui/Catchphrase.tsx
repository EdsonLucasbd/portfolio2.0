"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FlipWords } from './FlipWords'

export const Catchphrase = () => {
  const words = ["lindas", "inovadoras", "impactantes", "modernas"];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 0 % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1
        }
      }}
      viewport={{ once: true }}
      className="text-4xl mx-auto font-normal bg-gradient-to-b from-white via-white to-white 
      bg-opacity-70 bg-clip-text text-transparent"
    >
      Construindo aplicações
      <FlipWords words={words} className="text-brand-purple font-bold" /> <br />
      com tecnologia de ponta.
    </motion.div>
  )
}
