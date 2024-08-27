"use client";
import React, { forwardRef } from "react";
import { Subtitle } from "../ui/Subtitle";
import { SkillCard } from "./SkillCard";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { AnimatedContainer } from "../ui/AnimatedContainer";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

interface SkillsProps {
	isVisible?: boolean
}

export const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
	const { isVisible } = props


	const skills = [
		{
			name: "React",
			icon: <RiReactjsFill aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <RiReactjsFill aria-hidden className="size-[55px] text-[#38bdf8]" />,
			color: [[56, 189, 248]],
		},
		{
			name: "Next.Js",
			icon: <TbBrandNextjs aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <TbBrandNextjs aria-hidden className="size-[55px] text-white" />,
			color: [[255, 255, 255]],
		},
		{
			name: "Tailwind",
			icon: <RiTailwindCssFill aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <RiTailwindCssFill aria-hidden className="size-[55px] text-[#38bdf8]" />,
			color: [[56, 189, 248]],
		},
		{
			name: "JavaScript",
			icon: <RiJavascriptFill aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <RiJavascriptFill aria-hidden className="size-[55px] text-[#f0db4f]" />,
			color: [[240, 219, 79]],
		},
		{
			name: "TypeScript",
			icon: <BiLogoTypescript aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <BiLogoTypescript aria-hidden className="size-[55px] text-[#3178c6]" />,
			color: [[49, 120, 198]],
		},
		{
			name: "GraphQl",
			icon: <GrGraphQl aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <GrGraphQl aria-hidden className="size-[55px] text-[#ff0098]" />,
			color: [[255, 0, 152]],
		},
		{
			name: "Apollo",
			icon: <SiApollographql aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <SiApollographql aria-hidden className="size-[55px] text-white" />,
			color: [[17, 43, 73], [255, 255, 255]],
		},
		{
			name: "React Query",
			icon: <SiReactquery aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <SiReactquery aria-hidden className="size-[55px] text-[#ff4154]" />,
			color: [[0, 67, 91], [255, 65, 84], [255, 217, 76]],
		},
		{
			name: "Git",
			icon: <FaGitAlt aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <FaGitAlt aria-hidden className="size-[55px] text-[#f05032]" />,
			color: [[240, 80, 50]],
		},
		{
			name: "Figma",
			icon: <FaFigma aria-hidden className="size-[55px] text-white/20" />,
			colorfulIcon: <FaFigma aria-hidden className="size-[55px] text-[#F76E5F]" />,
			color: [[242, 78, 30], [162, 89, 255], [10, 207, 131]],
		},
	];

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
