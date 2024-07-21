import React from "react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { FlipWords } from "@/components/ui/FlipWords";
import { Catchphrase } from "@/components/Catchphrase";
import { BackgroundCellAnimation } from "@/components/ui/BackgroundRippleEffect";
import { ParallaxText } from "@/components/ui/ParalaxText";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Services } from "@/components/Services/intex";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black overflow-hidden">
      <TracingBeam className="px-4">
        <section className="flex items-center justify-center w-full h-full">
          {/* <BackgroundCellAnimation> */}
          <Hero />
          {/* </BackgroundCellAnimation> */}
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

        <section className="flex w-full h-full mt-10 mb-32">
          <Services />
        </section>
      </TracingBeam>
    </main>
  );
}
