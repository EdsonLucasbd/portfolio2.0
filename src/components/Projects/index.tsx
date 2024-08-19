"use client";
import React, { useRef } from "react";

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
      title: "LNS Site",
      src: "/projects/lns_site.webp",
      ctaText: "Acessar projeto",
      ctaLink: "https://www.lnsassessoria.com.br/",
      content: () => {
        return (
          <p>
            Página institucional para a LNS assessoria e treinamentos.
          </p>
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
          <p>
            Mapa mundial com alguns dos estádios mais icônicos do futebol.
            Ainda cadastrando alguns estádios...
          </p>
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
          <p>
            Um gerador de QrCode para compartilhar links, links de rede sociais e muito mais
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
