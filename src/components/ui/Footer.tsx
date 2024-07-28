export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='h-20 w-full flex flex-col items-center justify-center border-t border-white/[0.2] bg-black bg-dot-white/[0.2]
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
          text-white space-y-1 px-10 lg:px-24 relative'>
      <div
        className="absolute pointer-events-none inset-0 flex items-center 
				justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
      ></div>
      <p className='flex text-center text-xs lg:text-sm gap-1'>
        Feito com
        <span
          className='animate-heart'
        >
          💜
        </span>
        por <a
          href='https://github.com/EdsonLucasbd'
          aria-label='acessar meu perfil no GitHub'
          className='hover:text-brand-wisteria ease-linear duration-200'
        >
          Edson Lucas
        </a>
      </p>

      <p className='flex text-center text-xs lg:text-sm'>
        © {year} - Todos os direitos reservados
      </p>
    </div>
  )
}
