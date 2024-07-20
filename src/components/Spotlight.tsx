"use client";

import useMousePosition from "@/lib/mouse-position";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";

type SpotlightProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Spotlight({
	children,
	className = "",
}: SpotlightProps) {
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

type SpotlightCardProps = {
	children: React.ReactNode;
	className?: string;
};

export function SpotlightCard({
	children,
	className = "",
}: SpotlightCardProps) {
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
				`relative p-0.5 before:absolute before:w-10 before:h-10 before:-left-5 
      before:-top-5 before:bg-white before:rounded-full before:opacity-0 before:pointer-events-none 
      before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] 
      before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[30px] 
      after:absolute after:w-20 after:h-20 after:-left-10 after:-top-10 after:bg-white 
      after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity 
      after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] 
      after:hover:opacity-10 after:z-30 after:blur-[30px] overflow-hidden
      size-40 rounded-lg shadow-lg shadow-black/80 
      `,
				className,
			)}
			variants={item}
		>
			{children}
		</motion.div>
	);
}
