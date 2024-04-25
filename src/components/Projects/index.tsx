import React from 'react'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <div className='flex flex-col gap-10 items-center w-full h-full'>
      <h2 className="text-4xl text-center font-sans font-semibold bg-gradient-to-b from-white via-white to-white 
            bg-opacity-70 bg-clip-text text-transparent"
      >
        Projetos
      </h2>
      <ProjectCard />
    </div>
  )
}
