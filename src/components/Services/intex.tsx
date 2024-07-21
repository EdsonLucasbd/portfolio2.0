import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect'
import { Subtitle } from '../Subtitle'

export const Services = () => {
  const services = [
    {
      title: "Sites",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "Aplicativos",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "Landing Pages",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "Sistemas",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "SAAS",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
    {
      title: "Blogs",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis",
      link: "#",
    },
  ]

  return (
    <div
      className="flex flex-col gap-10 items-center w-full h-full"
    >
      <Subtitle>
        O que posso fazer por você:
      </Subtitle>
      <div className="h-full w-full px-8 mx-auto">
        <HoverEffect items={services} />
      </div>
    </div>
  )
}
