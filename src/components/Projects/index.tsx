"use client";
import React, { useRef } from "react";

import { motion } from "framer-motion";
import { type Card, LayoutGrid } from "@/components/ui/LayoutGrid";
import { ProjectCardTemplate } from "./ProjectCardTemplate";

interface Project extends Card {
  link?: string;
}

export const Projects = () => {

  const ElStore = () => {
    return (
      <ProjectCardTemplate
        title="EL Store"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const AvBoss = () => {
    return (
      <ProjectCardTemplate
        title="Página de vendas AV Boss"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const AmazingStadiums = () => {
    return (
      <ProjectCardTemplate
        title="Amazing Stadiums"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const AvExpert = () => {
    return (
      <ProjectCardTemplate
        title="Página de vendas AV Expert"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const OldPortfolio = () => {
    return (
      <ProjectCardTemplate
        title="Portfolio antigo"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const ProspeccaoAssertiva = () => {
    return (
      <ProjectCardTemplate
        title="Página de vendas Prospecção Assertiva"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const LnsSite = () => {
    return (
      <ProjectCardTemplate
        title="LNS Site"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const PgLinksKauane = () => {
    return (
      <ProjectCardTemplate
        title="Página de Links"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const QrCode = () => {
    return (
      <ProjectCardTemplate
        title="Gerador de QR Code"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const PagLinks = () => {
    return (
      <ProjectCardTemplate
        title="Página de Links"
        description={`A house by the river is a place of peace and 
            tranquility. It&apos;s the perfect place to relax, unwind, 
            and enjoy life.`
        }
        link="#"
      />
    );
  };

  const projects: Project[] = [
    {
      id: 0,
      thumbnail: "/projects/el-store.png",
      className: "col-span-1 h-80",
      content: <ElStore />,
    },
    {
      id: 1,
      thumbnail: "/projects/av-boss.png",
      className: "col-span-1  h-80",
      content: <AvBoss />,
    },
    {
      id: 2,
      thumbnail: "/projects/amazing-stadiums.png",
      className: "col-span-1 h-80",
      content: <AmazingStadiums />,
    },
    {
      id: 3,
      thumbnail: "/projects/av-expert.png",
      className: "md:col-span-2 h-80",
      content: <AvExpert />,
    },
    {
      id: 4,
      thumbnail: "/projects/lns-site.png",
      className: "col-span-1 h-80",
      content: <LnsSite />,
    },
    {
      id: 5,
      thumbnail: "/projects/prospeccao-assertiva.png",
      className: "col-span-1 h-80",
      content: <ProspeccaoAssertiva />,
    },
    {
      id: 6,
      thumbnail: "/projects/old-portfolio.png",
      className: "md:col-span-2 h-80",
      content: <OldPortfolio />,
    },
    {
      id: 7,
      thumbnail: "/projects/pg-links-kauane.png",
      className: "col-span-1 h-80",
      content: <PgLinksKauane />,
    },
    {
      id: 8,
      content: <QrCode />,
      className: "col-span-1 h-80",
      thumbnail: "/projects/qr-code-gen.png",
    },
    {
      id: 9,
      thumbnail: "/projects/pg-links.png",
      className: "col-span-1 h-80",
      content: <PagLinks />,
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
        <LayoutGrid cards={projects} />
      </div>
    </motion.div>
  );
};
