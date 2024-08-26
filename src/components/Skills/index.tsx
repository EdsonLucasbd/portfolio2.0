"use client"

import { useRef } from "react"
import { Skills } from "./Skills"
import { useInView } from "framer-motion"

export const SkillsContainer = () => {
  const containerRef = useRef(null)
  const childrenRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section className="flex flex-col w-full h-full" id="skills" ref={containerRef}>
      <Skills ref={childrenRef} isVisible={isInView} />
    </section>
  )
}