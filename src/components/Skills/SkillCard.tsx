"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Spotlight, { SpotlightCard } from "../ui/Spotlight";

interface IconProps {
	name: string;
	className?: string;
	[key: string]: any;
}

interface SkillCardProps {
	name: string;
	className?: string;
}

const Icon = ({ name, className, ...props }: IconProps) => {
	const iconName = name.toLowerCase();
	return (
		<Image
			src={`/skills/${iconName}.svg`}
			alt=""
			aria-hidden
			width={55}
			height={55}
			className="text-white"
			{...props}
		/>
	);
};

export const SkillCard = ({ name, className }: SkillCardProps) => {
	const captureRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const capture = captureRef.current;

		if (!capture) return;

		const overlay = capture.querySelector(
			".glow-overlay",
		) as HTMLElement | null;

		const handleMouseMove = (event: MouseEvent) => {
			const x = event.pageX - capture.offsetLeft;
			const y = event.pageY - capture.offsetTop;

			overlay?.style.setProperty("--glow-x", `${x}px`);
			overlay?.style.setProperty("--glow-y", `${y}px`);
			overlay?.style.setProperty("--glow-opacity", "1");
		};

		const handleMouseLeave = () => {
			if (overlay) {
				overlay.style.setProperty("--glow-opacity", "0");
			}
		};

		capture.addEventListener("mousemove", handleMouseMove);
		capture.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			capture.removeEventListener("mousemove", handleMouseMove);
			capture.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<Spotlight className="group">
			<SpotlightCard>
				<div
					className="relative flex flex-col items-center justify-between 
          bg-zinc-700/50 size-full 
          p-5 rounded-[inherit] z-20 overflow-hidden"
				>
					<Icon name={name} />
					<span
						className="text-base bg-gradient-to-b from-white via-white to-white 
                bg-opacity-70 bg-clip-text text-transparent glow:text-glow/[.15]"
					>
						{name}
					</span>
				</div>
			</SpotlightCard>
		</Spotlight>
	);
};
