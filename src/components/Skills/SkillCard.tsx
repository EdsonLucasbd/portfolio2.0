import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";


export const SkillCard = ({
  title,
  icon,
  colorfulIcon,
  children,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  colorfulIcon: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }

  return (
    <motion.div
      variants={item}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(`border border-black/[0.2] group/canvas-card flex items-center 
      justify-center mx-auto p-4 relative size-full rounded-lg overflow-hidden`, className)}
    >

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="relative aspect-[104/42] w-[calc(104/16*1rem)] max-w-full 
          translate-y-4 transition-transform duration-300 group-hover/canvas-card:translate-y-0 
          group-focus/canvas-card:translate-y-0 no-hover:translate-y-0"
        >
          <div
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity 
            duration-500 group-hover/canvas-card:opacity-100 group-focus/canvas-card:opacity-100 
            flex items-center justify-center"
            style={{ color: "transparent" }}
          >
            {colorfulIcon}
          </div>
          <div
            className="absolute inset-0 h-full w-full transition-opacity 
            duration-500 group-hover/canvas-card:opacity-0 group-focus/canvas-card:opacity-0 
            flex items-center justify-center"
            style={{ color: "transparent" }}
          >
            {icon}
          </div>
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 
        relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
        group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
        >
          {title}
        </h2>
      </div>
    </motion.div>
  );
};