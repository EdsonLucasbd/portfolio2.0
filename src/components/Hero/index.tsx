"use client"
import React, { useEffect } from 'react'
import photo from "../../../public/portfolio-photo.webp"
import { motion } from "framer-motion"
import Image from 'next/image'

export const Hero = () => {

  return (
    <>

      <motion.span
        initial={{ opacity: 0, scale: 0, }}
        animate={{ opacity: 1, scale: 1, }}
        transition={{ duration: 1.5 }}
      >
        <Image src={photo} alt="" id='photo' aria-hidden className="w-[400px] h-auto" />
      </motion.span>
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, x: "-10%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 2, delay: 1.6 }}
      >
        <h1 className="font-sans text-6xl font-semibold animate-text bg-gradient-to-r from-black via-white to-black 
        bg-clip-text text-transparent"
        >
          Edson Lucas
        </h1>
        <p className="text-2xl font-light
        animate-text bg-gradient-to-r from-white/5 via-white to-black 
        bg-opacity-70 bg-clip-text text-transparent"
        >
          FrondEnd Developer
        </p>
      </motion.div></>
  )
}
