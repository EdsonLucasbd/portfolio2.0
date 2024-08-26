"use client"
import { HoverEffect } from '../ui/card-hover-effect'
import { motion } from "framer-motion"
import { Subtitle } from '../ui/Subtitle'
import { useRef } from 'react'

interface ServicesProps {
  isVisible: boolean
}

export const Services = ({ isVisible }: ServicesProps) => {
  const servicesRef = useRef(null)

  const services = [
    {
      title: "Sites",
      description:
        `Desenvolvo sites responsivos e otimizados para SEO, garantindo uma 
        presença online que reflete a identidade da sua marca e 
        proporciona uma excelente experiência ao usuário.`,
      link: "#",
    },
    {
      title: "Aplicativos",
      description:
        `Crio aplicativos móveis e web modernos, focados em usabilidade e 
        desempenho, para atender às necessidades do seu negócio.`,
      link: "#",
    },
    {
      title: "Landing Pages",
      description:
        `Desenvolvo landing pages eficientes com design atraente, 
        projetadas para converter visitantes em clientes.`,
      link: "#",
    },
    {
      title: "Sistemas",
      description:
        `Ofereço soluções completas em desenvolvimento de sistemas 
        personalizados, desde a concepção até a implementação, 
        para automatizar processos e melhorar a eficiência do seu negócio.`,
      link: "#",
    },
    {
      title: "SAAS",
      description:
        `Construo plataformas SAAS escaláveis e seguras, com foco em oferecer 
        funcionalidades robustas e uma interface intuitiva.`,
      link: "#",
    },
    {
      title: "Blogs",
      description:
        `Desenvolvo blogs dinâmicos e fáceis de gerenciar, com design moderno e 
        integração com ferramentas de SEO para maximizar o alcance do seu conteúdo.`,
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
      className="flex flex-col gap-10 items-center lg:w-full lg:h-full"
      variants={container}
      animate={isVisible ? "visible" : "hidden"}
      ref={servicesRef}
    >
      <Subtitle animate>
        O que posso fazer por você:
      </Subtitle>
      <motion.div
        className="h-full w-full px-8 mx-auto"
        // initial={{
        //   opacity: 0,
        //   scale: 0.5,
        // }}
        // whileInView={{
        //   opacity: 1,
        //   scale: 1,
        // }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      // viewport={{ once: true }}
      >
        <HoverEffect items={services} />
      </motion.div>
    </motion.div>
  )
}
