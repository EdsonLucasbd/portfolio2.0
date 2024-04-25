import React from 'react'
import ProjectSpotlight, { ProjectSpotlightCard } from './ProjectSpotlight'
import { Card, CardContent } from '../ui/card'

export const ProjectCard = () => {
  return (
    <ProjectSpotlight className="group">
      <ProjectSpotlightCard className='w-full h-full'>
        <Card className='w-[400px] h-[304px] border-0 project-bg z-[2] inset-px'>
          <CardContent></CardContent>
        </Card>
      </ProjectSpotlightCard>
    </ProjectSpotlight>
  )
}
