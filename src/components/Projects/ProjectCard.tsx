import React from 'react'
import ProjectSpotlight, { ProjectSpotlightCard } from './ProjectSpotlight'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  link: string,
  className?: string
}

export const ProjectCard = ({ link, className }: ProjectCardProps) => {
  return (
    // <ProjectSpotlight className="group">
    //   <ProjectSpotlightCard className='size-full'>

    //   </ProjectSpotlightCard>
    // </ProjectSpotlight>
    <div className={cn(`group w-full h-full`, className)}>
      <Card className='relative size-full border-0 z-[2]'>
        <CardContent>
          <Image
            src={link}
            alt=''
            fill
            aria-hidden
            className='w-full h-full object-cover rounded-md opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:animate-fade-in animate-fade-out transition-all ease-in-out duration-200'
          />
        </CardContent>
      </Card>
    </div>
  )
}
