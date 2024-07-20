"use client";
import React from 'react'
import { motion } from "framer-motion"

export const About = () => {
  return (
    <motion.div
      className="flex flex-col gap-5 w-1/2"
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
    >
      <h2
        className="text-4xl text-start font-sans font-semibold bg-gradient-to-b from-white via-white to-white 
            bg-opacity-70 bg-clip-text text-transparent animate-fade-up animate-ease-in"
      >
        Um pouco sobre mim
      </h2>
      <p className="text-white animate-fade-up animate-ease-linear animate-delay-300">
        Desenvolvedor front-end com +4 anos de experiência, apaixonado por criar experiências digitais
        incríveis, estou sempre em busca de desafios e aprendizado
        constante. Tenho explorado frameworks modernos como React e Next.js,
        além de me aventurar no universo mobile com o React Native. Acredito
        que a combinação de design elegante e uma usabilidade intuitiva é a chave para
        interfaces excepcionais.
      </p>
    </motion.div>
  )
}
