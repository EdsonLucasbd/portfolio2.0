"use client";
import React, { forwardRef } from "react";

import { ExpandableCard } from "../ui/expandable-card";
import { Subtitle } from "../ui/Subtitle";
import { AnimatedContainer } from "../ui/AnimatedContainer";

interface ProjectProps {
  isVisible?: boolean
}

export const Projects = forwardRef<HTMLDivElement, ProjectProps>((props, ref) => {

  const { isVisible } = props

  const projects = [
    {
      description: "E-commerce",
      title: "EL Store",
      src: "/projects/el_store.webp",
      ctaText: "Acessar projeto",
      ctaLink: "https://el-store-gray.vercel.app/",
      content: () => {
        return (
          <p>
            E-commerce fictício para venda de canecas e camisetas.
          </p>
        );
      },
    },
    {
      description: "Landing Page",
      title: "AV Expert",
      src: "/projects/av_expert.webp",
      ctaText: "Acessar projeto",
      ctaLink: "https://av-expert.lnsassessoria.com.br/",
      content: () => {
        return (
          <p>
            Landing page para o info produto da LNS assessoria e treinamentos.
          </p>
        );
      },
    },
    {
      description: "Site",
      title: "Portfolio antigo",
      src: "/projects/old_portfolio.webp",
      ctaText: "Acessar projeto",
      ctaLink: "https://oedsonlucas.com.br/",
      content: () => {
        return (
          <p>
            Um dos meus inumeros portfolios...
          </p>
        );
      },
    },
    {
      description: "Site",
      title: "Bichos App",
      src: "/projects/bichos-app.webp",
      ctaText: "Acessar projeto",
      ctaLink: "https://www.bichos.app/",
      content: () => {
        return (
          <p>
            Projeto freelancer que consiste num site que traz os melhores preços de produtos para pets em várias lojas.
          </p>
        );
      },
    },
    {
      description: "Site",
      title: "LNS Site",
      src: "/projects/lns_site.webp",
      ctaText: "Acessar projeto",
      ctaLink: "https://www.lnsassessoria.com.br/",
      content: () => {
        return (
          <div className="flex flex-col gap-2 w-full">
            <p>
              Página institucional para a LNS assessoria e treinamentos.
            </p>
            <p>Principais tecnologias:</p>
            <ul className="flex w-full gap-2 items-center even:[&_li]:before:content-['•'] 
              even:[&_li]:before:mr-2"
            >
              <li>Next.js</li>
              <li>GraphQL</li>
            </ul>
          </div>
        );
      },
    },
    {
      description: "Site",
      title: "Amazing Stadiums",
      src: "/projects/amazing_stadiums.webp",
      ctaText: "Acessar projeto",
      ctaLink: "https://amazing-stadiums.vercel.app/",
      content: () => {
        return (
          <div className="flex flex-col gap-2 w-full">
            <p>
              Mapa mundial com alguns dos estádios mais icônicos do futebol.
              Ainda cadastrando alguns estádios...
            </p>
            <p>Principais tecnologias:</p>
            <ul className="flex w-full gap-2 items-center even:[&_li]:before:content-['•'] 
                even:[&_li]:after:content-['•'] even:[&_li]:after:ml-2 even:[&_li]:before:mr-2 last:[&_li]:after:hidden"
            >
              <li>Next.js</li>
              <li>GraphQL</li>
              <li>Leaflet</li>
              <li>Hygraph</li>
            </ul>
          </div>
        );
      },
    },
    {
      description: "Landing Page",
      title: "QR Code Generator",
      src: "/projects/qrcode_generator.webp",
      ctaText: "Acessar projeto",
      ctaLink: "/qr-code",
      content: () => {
        return (
          <div className="flex flex-col gap-2 w-full">
            <p>
              Um gerador de QrCode para compartilhar links, links de rede sociais e muito mais
            </p>
            <div>
              <p>Principais tecnologias:</p>
              <ul className="flex w-full gap-2 items-center even:[&_li]:before:content-['•'] 
                even:[&_li]:after:content-['•'] even:[&_li]:after:ml-2 even:[&_li]:before:mr-2"
              >
                <li>Next.js</li>

                <li>React QrCode</li>

                <li>Framer motion</li>
              </ul>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <AnimatedContainer ref={ref} isInView={isVisible}>
      <Subtitle animate>
        Projetos
      </Subtitle>
      <div className="h-full w-full"
      >
        <ExpandableCard cards={projects} />
      </div>
    </AnimatedContainer>
  );
});

Projects.displayName = "Projects";
