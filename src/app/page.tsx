import React from "react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { FlipWords } from "@/components/ui/FlipWords";
import { Catchphrase } from "@/components/ui/Catchphrase";
import { ParallaxText } from "@/components/ui/ParalaxText";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Services } from "@/components/Services/intex";
import { NavbarMenu } from "@/components/ui/NavbarMenu";
import { ContactForm } from "@/components/ui/contact-form";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-10 lg:p-24 bg-black overflow-hidden"
    >
      <NavbarMenu />
      <TracingBeam >
        <section className="flex items-center justify-center w-full h-screen">
          <Hero />
        </section>
        <section className="flex h-full w-full mb-20" id="about">
          <About />
        </section>
        <section className="flex flex-col w-full h-full" id="skills">
          <Skills />
        </section>
        <section className="flex flex-col w-full h-full mb-20 lg:mb-32">
          <Catchphrase />
        </section>

        <section className="flex flex-col items-center justify-center h-full w-full mt-10 mb-20 lg:mb-32" id="projects">
          <Projects />
        </section>

        <section className="flex relative my-10 flex-col items-center justify-center h-full w-full">
          <ParallaxText baseVelocity={-2}> • Transformar • Inspirar • Impactar </ParallaxText>
          <ParallaxText baseVelocity={2}> • Moderno • Responsivo • Bonito </ParallaxText>
        </section>

        <section className="flex w-full h-full mb-32" id="services">
          <Services />
        </section>

        <section className="flex flex-col items-center justify-center h-full w-full">
          <ContactForm />
        </section>
      </TracingBeam>
    </main>
  );
}
