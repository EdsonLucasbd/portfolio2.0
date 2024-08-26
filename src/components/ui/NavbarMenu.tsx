"use client";
import { cn } from '@/lib/utils';
import { AnimatePresence, useScroll, motion, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GitHubLogoIcon, HamburgerMenuIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu';

export const NavbarMenu = ({ className }: { className?: string }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <div
      className={cn(
        `flex w-full fixed top-0 inset-x-0 mx-auto ${position > 100 ? 'border-b' : ''} text-white 
          border-white/[0.2] bg-transparent backdrop-blur-md 
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
          z-[5000] px-10 md:px-24 py-3 lg:py-5 items-center justify-end lg:justify-around space-x-2 md:space-x-4
          [&_a:hover]:text-brand-pink [&_a]:ease-in-out [&_a]:duration-300 [&_a]:hidden lg:[&_a]:flex`,
        className
      )}
    >
      <Link href="#about">Sobre</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#projects">Projetos</Link>
      <Link href="#services">Serviços</Link>
      <Link href="#contact">Contato</Link>

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
        <DropdownMenuContent className='z-[5005] border-white/[0.2] bg-transparent backdrop-blur-md 
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
          text-white space-y-3 mr-8'
        >
          <DropdownMenuItem className='flex items-center justify-center focus:bg-brand-lavender-gray'>
            <Link href="#about">Sobre</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center justify-center focus:bg-brand-lavender-gray'>
            <Link href="#skills">Skills</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center justify-center focus:bg-brand-lavender-gray'>
            <Link href="#projects">Projetos</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center justify-center focus:bg-brand-lavender-gray'>
            <Link href="#services">Serviços</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center justify-center focus:bg-brand-lavender-gray'>
            <Link href="#contact">Contato</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator className='bg-brand-martinique' />

          <DropdownMenuItem className='flex items-center justify-center focus:bg-brand-lavender-gray'>
            <Link
              href="https://www.linkedin.com/in/edson-lucas-bd/"
              aria-label='Acessar meu perfil no LinkedIn'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInLogoIcon className="size-7" aria-hidden />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center justify-center focus:bg-brand-lavender-gray'>
            <Link
              href="https://github.com/EdsonLucasbd"
              aria-label='Acessar meu perfil no GitHub'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubLogoIcon className="size-7" aria-hidden />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
