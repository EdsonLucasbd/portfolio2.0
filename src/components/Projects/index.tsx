"use client";
import React from "react";

import { motion } from "framer-motion";
import { type Card, LayoutGrid } from "@/components/ui/LayoutGrid";
import { ProjectCardTemplate } from "./ProjectCardTemplate";
import { ExpandableCard } from "../ui/expandable-card";

interface Project extends Card {
  link?: string;
}

export const Projects = () => {

  const projects = [
    {
      description: "E-commerce",
      title: "EL Store",
      src: "/projects/el_store.webp",
      ctaText: "Acessar projeto",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reprehenderit, architecto in natus maxime eaque
            voluptatem amet quibusdam vel ullam eum corrupti repudiandae
            itaque porro voluptates sit ea incidunt doloribus!
          </p>
        );
      },
    },
    {
      description: "Landing Page",
      title: "AV Expert",
      src: "/projects/av_expert.webp",
      ctaText: "Acessar projeto",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reprehenderit, architecto in natus maxime eaque
            voluptatem amet quibusdam vel ullam eum corrupti repudiandae
            itaque porro voluptates sit ea incidunt doloribus!
          </p>
        );
      },
    },
    {
      description: "Site",
      title: "Portfolio antigo",
      src: "/projects/old_portfolio.webp",
      ctaText: "Acessar projeto",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reprehenderit, architecto in natus maxime eaque
            voluptatem amet quibusdam vel ullam eum corrupti repudiandae
            itaque porro voluptates sit ea incidunt doloribus!
          </p>
        );
      },
    },
    {
      description: "Site",
      title: "LNS Site",
      src: "/projects/lns_site.webp",
      ctaText: "Acessar projeto",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reprehenderit, architecto in natus maxime eaque
            voluptatem amet quibusdam vel ullam eum corrupti repudiandae
            itaque porro voluptates sit ea incidunt doloribus!
          </p>
        );
      },
    },
    {
      description: "Site",
      title: "Amazing Stadiums",
      src: "/projects/amazing_stadiums.webp",
      ctaText: "Acessar projeto",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reprehenderit, architecto in natus maxime eaque
            voluptatem amet quibusdam vel ullam eum corrupti repudiandae
            itaque porro voluptates sit ea incidunt doloribus!
          </p>
        );
      },
    },
    {
      description: "Landing Page",
      title: "QR Code Generator",
      src: "/projects/qrcode_generator.webp",
      ctaText: "Acessar projeto",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reprehenderit, architecto in natus maxime eaque
            voluptatem amet quibusdam vel ullam eum corrupti repudiandae
            itaque porro voluptates sit ea incidunt doloribus!
          </p>
        );
      },
    },
  ];

  return (
    <motion.div
      className="flex flex-col gap-10 items-center w-full h-full"
    >
      <motion.h2
        initial={{
          opacity: 0,
          x: 1 % 2 === 0 ? 50 : -50
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1
          }
        }}
        viewport={{ once: true }}
        className="text-4xl text-center font-sans font-semibold bg-gradient-to-b from-white via-white to-white 
            bg-opacity-70 bg-clip-text text-transparent"
      >
        Projetos
      </motion.h2>
      <div className="h-full w-full">
        <ExpandableCard cards={projects} />
      </div>
    </motion.div>
  );
};
