"use client";
import React, { forwardRef } from "react";

import { ExpandableCard } from "../ui/expandable-card";
import { Subtitle } from "../ui/Subtitle";
import { AnimatedContainer } from "../ui/AnimatedContainer";
import { TbBrandNextjs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql, SiDatocms, SiFramer, SiHeadlessui, SiLeaflet, SiReactquery, SiShadcnui, SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

interface ProjectProps {
  isVisible?: boolean
}

export const Projects = forwardRef<HTMLDivElement, ProjectProps>((props, ref) => {

  const { isVisible } = props

  const projects = [
    {
      description: "Site",
      title: "Bichos App",
      src: "/projects/bichos-app.webp",
      ctaText: "Acessar projeto",
      ctaLink: "https://www.bichos.app/",
      content: () => {
        return (
          <div className="flex flex-col gap-2 w-full">
            <p>
              Projeto freelancer que consiste num site que traz os melhores preços de produtos para pets em várias lojas.
            </p>
            <p>Principais tecnologias:</p>
            <ul className="flex w-full items-center divide-x [&_li]:px-2 divide-white/40">
              <li>
                <BiLogoTypescript title="Typescript" className="size-[30px] text-[#3178c6]" />
              </li>
              <li>
                <TbBrandNextjs title="Next js" className="size-[30px] text-white" />
              </li>
              <li>
                <SiShadcnui title="Shadcn UI" className="size-[25px] text-white" />
              </li>
              <li>
                <SiReactquery title="React Query" className="size-[30px] text-[#ff4154]" />
              </li>
              <li>
                <RiTailwindCssFill title="Tailwind Css" className="size-[30px] text-[#38bdf8]" />
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      description: "E-commerce",
      title: "EL Store",
      src: "/projects/el_store.webp",
      ctaText: "Acessar projeto",
      ctaLink: "https://el-store-gray.vercel.app/",
      content: () => {
        return (
          <div className="flex flex-col gap-2 w-full">
            <p>
              E-commerce fictício para venda de canecas e camisetas.
            </p>
            <p>
              Possui como funcionalidades:
              <br />
              <span className="text-sm">
                Catálogo de produtos com paginação, Filtragem por categoria,
                Busca por produtos, Carrinho de compras e Simulação de pagamento
              </span>
            </p>
            <p>Principais tecnologias:</p>
            <ul className="flex w-full items-center divide-x [&_li]:px-2 divide-white/40">
              <li>
                <BiLogoTypescript title="Typescript" className="size-[30px] text-[#3178c6]" />
              </li>
              <li>
                <TbBrandNextjs title="Next js" className="size-[30px] text-white" />
              </li>
              <li>
                <SiHeadlessui title="Headless UI" className="size-[30px] text-[#7DD3FC]" />
              </li>
              <li>
                <RiTailwindCssFill title="Tailwind Css" className="size-[30px] text-[#38bdf8]" />
              </li>
              <li>
                <GrGraphQl title="GraphQl" className="size-[30px] text-[#ff0098]" />
              </li>
            </ul>
          </div>

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
          <div className="flex flex-col gap-2 w-full">
            <p>
              Landing page para o info produto da LNS assessoria e treinamentos.
            </p>
            <p>Principais tecnologias:</p>
            <ul className="flex w-full items-center divide-x [&_li]:px-2 divide-white/40">
              <li>
                <BiLogoTypescript title="Typescript" className="size-[30px] text-[#3178c6]" />
              </li>
              <li>
                <TbBrandNextjs title="Next js" className="size-[30px] text-white" />
              </li>
              <li>
                <RiTailwindCssFill title="Tailwind Css" className="size-[30px] text-[#38bdf8]" />
              </li>
            </ul>
          </div>

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
          <div className="flex flex-col gap-2 w-full">
            <p>
              Um dos meus inumeros portfolios...
            </p>
            <p className="text-sm">
              A versão desktop possui um mini game desenvolvido com vanilla javascript.
            </p>
            <p>Principais tecnologias:</p>
            <ul className="flex w-full items-center divide-x [&_li]:px-2 divide-white/40">
              <li>
                <BiLogoTypescript title="Typescript" className="size-[30px] text-[#3178c6]" />
              </li>
              <li>
                <TbBrandNextjs title="Next js" className="size-[30px] text-white" />
              </li>
              <li>
                <RiTailwindCssFill title="Tailwind Css" className="size-[30px] text-[#38bdf8]" />
              </li>
              <li>
                <SiApollographql title="Apollo" className="size-[30px] text-white" />
              </li>
              <li>
                <GrGraphQl title="GraphQl" className="size-[30px] text-[#ff0098]" />
              </li>
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
            <p>Principais tecnologias:</p>
            <ul className="flex w-full items-center divide-x [&_li]:px-2 divide-white/40">
              <li>
                <BiLogoTypescript title="Typescript" className="size-[30px] text-[#3178c6]" />
              </li>
              <li>
                <TbBrandNextjs title="Next js" className="size-[30px] text-white" />
              </li>

              <li>
                <SiFramer title="Framer Motion" className="size-[30px] text-white" />
              </li>

              <li>
                <RiTailwindCssFill title="Tailwind Css" className="size-[30px] text-[#38bdf8]" />
              </li>

              <li>React QrCode</li>

            </ul>
          </div>
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
            <ul className="flex w-full items-center divide-x [&_li]:px-2 divide-white/40">
              <li>
                <BiLogoTypescript title="Typescript" className="size-[30px] text-[#3178c6]" />
              </li>
              <li>
                <TbBrandNextjs title="Next js" className="size-[30px] text-white" />
              </li>
              <li>
                <GrGraphQl title="GraphQl" className="size-[30px] text-[#ff0098]" />
              </li>
              <li>
                <SiDatocms title="Dato Cms" className="size-[30px] text-[#FF6847]" />
              </li>
              <li>
                <RiTailwindCssFill title="Tailwind Css" className="size-[30px] text-[#38bdf8]" />
              </li>
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
            <ul className="flex w-full items-center divide-x [&_li]:px-2 divide-white/40">
              <li>
                <BiLogoTypescript title="Typescript" className="size-[30px] text-[#3178c6]" />
              </li>
              <li>
                <TbBrandNextjs title="Next js" className="size-[30px] text-white" />
              </li>
              <li>
                <GrGraphQl title="GraphQl" className="size-[30px] text-[#ff0098]" />
              </li>
              <li>
                <SiLeaflet title="Leaflet" className="size-[30px] text-[#B0DA5F]" />
              </li>
              <li>
                <SiStyledcomponents title="Styled Components" className="size-[30px] text-[#FFC83D]" />
              </li>
              <li>Hygraph</li>
            </ul>
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
