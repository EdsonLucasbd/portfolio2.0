"use client"

import { useRef } from "react"
import { Services } from "./Services"
import { useInView } from "framer-motion"

export const ServicesContainer = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section className="flex w-full h-full mb-32" id="services" ref={containerRef}>
      <Services isVisible={isInView} />
    </section>
  )
}