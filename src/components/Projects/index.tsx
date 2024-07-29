"use client";
import React, { useRef } from "react";

import { motion } from "framer-motion";
import { ExpandableCard } from "../ui/expandable-card";
import { Subtitle } from "../ui/Subtitle";
import { AnimatedContainer } from "../ui/AnimatedContainer";

export const Projects = () => {
  const projectsContainer = useRef(null);

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
    <AnimatedContainer ref={projectsContainer}>
      <Subtitle animate>
        Projetos
      </Subtitle>
      <div className="h-full w-full"
      >
        <ExpandableCard cards={projects} />
      </div>
    </AnimatedContainer>
  );
};
