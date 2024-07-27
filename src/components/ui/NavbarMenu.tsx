"use client";
import { cn } from '@/lib/utils';
import { AnimatePresence, useScroll, motion, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { GitHubLogoIcon, HamburgerMenuIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';

export const NavbarMenu = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
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
          z-[5000] px-10 md:px-24 py-5 items-center justify-around space-x-2 md:space-x-4
          [&_a:hover]:text-brand-pink`,
          className
        )}
      >
        <Link href="#about">Sobre</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projetos</Link>
        <Link href="#services">Serviços</Link>

        <div className="hidden lg:flex items-center justify-center gap-x-4">
          <Link href="https://www.linkedin.com/in/edson-lucas-bd/" aria-label='Acessar meu perfil no LinkedIn' target='_blank' rel='noreferrer'>
            <LinkedInLogoIcon className="w-6 h-6" aria-hidden />
          </Link>
          <Link href="https://github.com/EdsonLucasbd" aria-label='Acessar meu perfil no GitHub' target='_blank' rel='noreferrer' >
            <GitHubLogoIcon className="w-6 h-6" aria-hidden />
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className='lg:hidden'>
            <HamburgerMenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='z-[100]'>
            <DropdownMenuItem>
              <Link href="https://www.linkedin.com/in/edson-lucas-bd/" aria-label='Acessar meu perfil no LinkedIn' target='_blank' rel='noreferrer'>
                <LinkedInLogoIcon className="w-6 h-6" aria-hidden />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="https://github.com/EdsonLucasbd" aria-label='Acessar meu perfil no GitHub' target='_blank' rel='noreferrer' >
                <GitHubLogoIcon className="w-6 h-6" aria-hidden />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </AnimatePresence>
  )
}
