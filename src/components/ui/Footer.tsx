"use client"
import React from 'react'
import { motion } from 'framer-motion'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='h-12 w-full flex items-center justify-center border-t border-white/[0.2] bg-black
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
          text-white space-y-3'>
      <p className='flex text-center text-xs lg:text-sm gap-1'>
        Feito com
        <motion.span
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
        >
          💜
        </motion.span>
        por <a
          href='https://github.com/EdsonLucasbd'
          aria-label='acessar meu perfil no GitHub'
          className='hover:text-brand-wisteria ease-linear duration-200'
        >
          Edson Lucas
        </a>
        - © {year} Todos os direitos reservados
      </p>
    </div>
  )
}
