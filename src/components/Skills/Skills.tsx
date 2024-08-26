"use client";
import { motion, useInView } from "framer-motion";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Subtitle } from "../ui/Subtitle";
import { SkillCard } from "./SkillCard";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import Image from "next/image";
import { AnimatedContainer } from "../ui/AnimatedContainer";

interface SkillsProps {
	isVisible?: boolean
}

export const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
	const { isVisible } = props


	const skills = [
		{
			name: "React",
			icon: <Image src="/skills/react.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/react-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[56, 189, 248]],
		},
		{
			name: "Next.Js",
			icon: <Image src="/skills/nextjs.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/nextjs-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[255, 255, 255]],
		},
		{
			name: "Tailwind",
			icon: <Image src="/skills/tailwind.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/tailwind-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[56, 189, 248]],
		},
		{
			name: "JavaScript",
			icon: <Image src="/skills/javascript.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/javascript-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[240, 219, 79]],
		},
		{
			name: "TypeScript",
			icon: <Image src="/skills/typescript.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/typescript-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[49, 120, 198]],
		},
		{
			name: "GraphQl",
			icon: <Image src="/skills/graphql.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/graphql-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[255, 0, 152]],
		},
		{
			name: "Apollo",
			icon: <Image src="/skills/apollo.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/apollo-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[17, 43, 73], [255, 255, 255]],
		},
		{
			name: "React Query",
			icon: <Image src="/skills/react-query.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/react-query-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[0, 67, 91], [255, 65, 84], [255, 217, 76]],
		},
		{
			name: "Git",
			icon: <Image src="/skills/git.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/git-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[240, 80, 50]],
		},
		{
			name: "Figma",
			icon: <Image src="/skills/figma.svg" alt="" width={55} height={55} aria-hidden />,
			colorfulIcon: <Image src="/skills/figma-outline.svg" alt="" width={55} height={55} aria-hidden />,
			color: [[242, 78, 30], [162, 89, 255], [10, 207, 131]],
		},
	];

	const container = {
		hidden: { opacity: 0, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	return (
		<AnimatedContainer
			className=" mt-10 mb-20 lg:mb-32"
			ref={ref}
			isInView={isVisible}
		>
			<Subtitle animate>
				Skils
			</Subtitle>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10"
			>
				{skills.map((skill, index) => (
					<SkillCard
						title={skill.name}
						key={index}
						icon={skill.icon}
						colorfulIcon={skill.colorfulIcon}
						className="shadow outline outline-1 outline-brand-lavender-gray/15 hover:outline-none 
						transition-[outline] duration-300 ease-in-out"
					>
						<CanvasRevealEffect
							animationSpeed={1.5}
							containerClassName={`bg-transparent`}
							colors={skill.color}
							dotSize={1.5}
						/>
					</SkillCard>
				))}
			</div>
		</AnimatedContainer>
	);
});

Skills.displayName = "Skills"
