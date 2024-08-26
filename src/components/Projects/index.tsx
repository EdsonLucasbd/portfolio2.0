"use client"

import { useRef } from "react"
import { Projects } from "./Projects"
import { useInView } from "framer-motion"

export const ProjectsContainer = () => {
  const containerRef = useRef(null)
  const childrenRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section
      className="flex flex-col items-center justify-center h-full w-full mt-10 mb-20 lg:mb-32"
      id="projects"
      ref={containerRef}
    >
      <Projects ref={childrenRef} isVisible={isInView} />
    </section>
  )
}