"use client"
import React, { useEffect, useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { SkillCard } from './SkillCard';

export const Skills = () => {
  const skillContainer = useRef(null)
  const isInView = useInView(skillContainer)

  const skills = [
    'React',
    'NextJs',
    'Tailwind',
    'JavaScript',
    'TypeScript',
    'GraphQl'
  ]

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  useEffect(() => {
    console.log('isInView', isInView)
  }, [isInView])

  return (
    <motion.div
      className="flex flex-col flex-wrap gap-10 items-center justify-center"
      variants={container}
      initial="hidden"
      whileInView="visible"
      ref={skillContainer}
    >
      <h2 className="text-4xl text-center font-sans font-semibold bg-gradient-to-b from-white via-white to-white 
            bg-opacity-70 bg-clip-text text-transparent"
      >
        Skils
      </h2>
      <div className="flex gap-10">
        {skills.map((skill, index) => (
          <SkillCard name={skill} key={index} />
        ))}
      </div>
    </motion.div>
  )
}
