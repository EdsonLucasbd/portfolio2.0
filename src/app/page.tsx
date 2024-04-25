import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <section className="flex items-center justify-center h-full">
        <Hero />
      </section>
      <section className="h-full w-full mb-20">
        <div className="flex flex-col gap-5 w-1/2">
          <h2 className="text-4xl text-start font-sans font-semibold bg-gradient-to-b from-white via-white to-white 
            bg-opacity-70 bg-clip-text text-transparent animate-fade-up animate-ease-in">
            Um pouco sobre mim
          </h2>
          <p className="text-white animate-fade-up animate-ease-linear animate-delay-300">
            Desenvolvedor front-end apaixonado por criar experiências digitais incríveis,
            estou sempre em busca de desafios e aprendizado constante.

            Tenho explorado frameworks modernos como React e Next.js, além de me
            aventurar no universo mobile com o React Native. Acredito que a
            combinação de design elegante e funcionalidades é a chave para interfaces excepcionais.
          </p>
        </div>
      </section>
      <section className="flex flex-col w-full h-full mt-10 mb-32">
        <Skills />
      </section>

      <div className="-z-1 left-0 h-full w-full bg-[radial-gradient(#eaeaea_0.1px,transparent_0.7px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_40%_50%_at_50%_50%,#000_40%,transparent_100%)]">
        <section className="flex flex-col items-center justify-center h-full mb-32">
          <Projects />
        </section>
      </div>

    </main>
  );
}
