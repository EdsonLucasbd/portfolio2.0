import { cn } from "@/lib/utils"

export const Subtitle = ({ children, className }:
  {
    children: React.ReactNode,
    className?: string
  }) => {
  return (
    <h2
      className={cn(`text-4xl text-center font-sans font-semibold bg-gradient-to-b from-white via-white to-white 
            bg-opacity-70 bg-clip-text text-transparent`, className)}
    >
      {children}
    </h2>
  )
}
