"use client"
import { HoverEffect } from '../ui/card-hover-effect'
import { motion } from "framer-motion"
import { Subtitle } from '../ui/Subtitle'
import { useRef } from 'react'

export const Services = () => {
  const servicesRef = useRef(null)
  const services = [
    {
      title: "Sites",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "Aplicativos",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "Landing Pages",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "Sistemas",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "SAAS",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "Blogs",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
  ]

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
      className="flex flex-col gap-10 items-center w-full h-full"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      ref={servicesRef}
    >
      <Subtitle animate>
        O que posso fazer por você:
      </Subtitle>
      <motion.div
        className="h-full w-full px-8 mx-auto"
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
      >
        <HoverEffect items={services} />
      </motion.div>
    </motion.div>
  )
}
