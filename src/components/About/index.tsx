"use client";
import React from 'react'
import { motion } from "framer-motion"
import { Subtitle } from '../ui/Subtitle';
import { Download } from 'lucide-react';

export const About = () => {
  return (
    <motion.div
      className="flex flex-col gap-5 w-full lg:w-1/2"
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
      <Subtitle className='text-start'>
        Um pouco sobre mim
      </Subtitle>
      <div className='flex flex-col gap-5'>
        <p className="text-white animate-fade-up animate-ease-linear animate-delay-300 text-balance">
          Desenvolvedor front-end com +4 anos de experiência, apaixonado por criar experiências digitais
          incríveis, estou sempre em busca de desafios e aprendizado
          constante. Tenho explorado frameworks modernos como React e Next.js,
          além de me aventurar no universo mobile com o React Native. Acredito
          que a combinação de design elegante e uma usabilidade intuitiva é a chave para
          interfaces excepcionais.
        </p>
        <motion.button
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex w-full lg:w-4/12 h-12 animate-shimmer items-center justify-center 
            border border-brand-purple bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 
            focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 px-4 text-sm 
            rounded-full font-bold text-white hover:bg-[linear-gradient(110deg,#1a1c22,45%,#3b4654,55%,#1a1c22)]"
        >
          <a
            href="/Edson-Lucas.pdf"
            className='w-full inline-flex items-center justify-center p-3 gap-3'
            title='Baixar o meu curriculo'
            download
          >
            <Download aria-hidden /> Baixar CV
          </a>
        </motion.button>
      </div>
    </motion.div>
  )
}
