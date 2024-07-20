import React from "react";
import { BackgroundCellAnimation } from "@/components/BackgroundRippleEffect";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ParallaxText } from "@/components/ParalaxText";
import { About } from "@/components/About";
import { FlipWords } from "@/components/ui/FlipWords";
import { Catchphrase } from "@/components/Catchphrase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black overflow-hidden">
      <section className="flex items-center justify-center w-full h-full">
        <BackgroundCellAnimation>
          <Hero />
        </BackgroundCellAnimation>
      </section>
      <section className="h-full w-full mb-20">
        <About />
      </section>
      <section className="flex flex-col w-full h-full mt-10 mb-32">
        <Skills />
      </section>

      <section className="flex flex-col w-full h-full mb-32">
        <Catchphrase />
      </section>

      <section className="flex flex-col items-center justify-center h-full w-full">
        <Projects />
      </section>

      <section className="flex relative mt-10 flex-col items-center justify-center h-full w-full">
        <ParallaxText baseVelocity={-2}> • Transformar • Inspirar • Impactar </ParallaxText>
        <ParallaxText baseVelocity={2}> • Moderno • Responsivo • Bonito </ParallaxText>
      </section>
    </main>
  );
}
