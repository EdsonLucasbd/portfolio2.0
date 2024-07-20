"use client";

import useMousePosition from "@/lib/mouse-position";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";

type ProjectSpotlightProps = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectSpotlight({
	children,
	className = "",
}: ProjectSpotlightProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const mousePosition = useMousePosition();
	const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
	const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
	const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

	useEffect(() => {
		containerRef.current &&
			setBoxes(
				Array.from(containerRef.current.children).map(
					(el) => el as HTMLElement,
				),
			);
	}, []);

	useEffect(() => {
		initContainer();
		window.addEventListener("resize", initContainer);

		return () => {
			window.removeEventListener("resize", initContainer);
		};
	}, [setBoxes]);

	useEffect(() => {
		onMouseMove();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mousePosition]);

	const initContainer = () => {
		if (containerRef.current) {
			containerSize.current.w = containerRef.current.offsetWidth;
			containerSize.current.h = containerRef.current.offsetHeight;
		}
	};

	const onMouseMove = () => {
		if (containerRef.current) {
			const rect = containerRef.current.getBoundingClientRect();
			const { w, h } = containerSize.current;
			const x = mousePosition.x - rect.left;
			const y = mousePosition.y - rect.top;
			const inside = x < w && x > 0 && y < h && y > 0;
			if (inside) {
				mouse.current.x = x;
				mouse.current.y = y;
				boxes.forEach((box) => {
					const boxX =
						-(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
					const boxY =
						-(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
					box.style.setProperty("--mouse-x", `${boxX}px`);
					box.style.setProperty("--mouse-y", `${boxY}px`);
				});
			}
		}
	};

	return (
		<div className={className} ref={containerRef}>
			{children}
		</div>
	);
}

type ProjectSpotlightCardProps = {
	children: React.ReactNode;
	className?: string;
};

export function ProjectSpotlightCard({
	children,
	className = "",
}: ProjectSpotlightCardProps) {
	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<motion.div
			className={cn(
				`relative before:absolute before:w-20 before:h-20 before:-left-10 
      before:-top-10 before:bg-[#ffffff0f]/40 before:rounded-[inherit] before:opacity-0 before:pointer-events-none 
      before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] 
      before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-[15] before:blur-[40px] 
      after:absolute after:w-40 after:h-40 after:-left-20 after:-top-20 after:bg-[#fff6]/40 
      after:rounded-[inherit] after:opacity-0 after:pointer-events-none after:transition-opacity 
      after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] 
      after:hover:opacity-10 after:z-[1] after:blur-[40px] overflow-hidden
      size-40 rounded-lg shadow-lg shadow-black/80 project-spotlight
      `,
				className,
			)}
			variants={item}
		>
			{children}
		</motion.div>
	);
}
