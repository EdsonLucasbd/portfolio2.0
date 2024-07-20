import Link from 'next/link'
import React from 'react'

interface ProjectCardTemplateProps {
  title: string
  description: string
  link: string
}

export const ProjectCardTemplate = ({ title, description, link }: ProjectCardTemplateProps) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
      <Link
        href={link}
        className="w-full h-8 p-2 rounded-md bg-brand-purple text-white"
      >
        Acessar o projeto
      </Link>
    </div>
  )
}
