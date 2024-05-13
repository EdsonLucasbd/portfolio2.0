"use client"
import React, { useRef, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'

interface Project {
  // project: React.JSX.Element,
  index: number,
  link: string
}

interface AppState {
  index: number | false;
}

const ProjectGallery = ({ projects }: { projects: Project[] }) => {
  const [state, setState] = useState<AppState>({ index: false });

  const { index } = state;

  const handleSetIndex = (i: number) => {
    console.log('clicou, id:', i)
    setState({ index: i });
  };

  return (
    <ul className='flex flex-col md:flex-row flex-wrap size-full gap-6 items-center justify-between list-none'>
      <Dialog>
        {projects.map((project) => (
          <DialogTrigger key={project.index}>
            <ProjectCard link={project.link} className='w-[400px] h-[204px] cursor-pointer' />
          </DialogTrigger>
        ))}
        <DialogContent className='animate-fade-up'>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </ul>
  )
}

export const Projects = () => {

  const projectsContainer = useRef(null)


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

  const projects: Project[] = [
    { index: 0, link: '/projects/el-store.png' },
    { index: 1, link: '/projects/av-boss.png' },
    { index: 2, link: '/projects/amazing-stadiums.png' },
    { index: 3, link: '/projects/av-expert.png' },
    { index: 4, link: '/projects/old-portfolio.png' },
    { index: 5, link: '/projects/prospeccao-assertiva.png' },
    { index: 6, link: '/projects/lns-site.png' },
    { index: 7, link: '/projects/pg-links-kauane.png' },
    { index: 8, link: '/projects/qr-code-gen.png' },
    { index: 9, link: '/projects/pg-links.png' }
  ]

  return (
    <motion.div
      className='flex flex-col gap-10 items-center w-full h-full'
      initial="hidden"
      whileInView="visible"
      variants={container}
      ref={projectsContainer}
    >
      <h2 className="text-4xl text-center font-sans font-semibold bg-gradient-to-b from-white via-white to-white 
            bg-opacity-70 bg-clip-text text-transparent"
      >
        Projetos
      </h2>
      <div className="relative">
        <ProjectGallery projects={projects} />
      </div>
    </motion.div>
  )
}
