"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { SkillCard } from "./SkillCard";
import { Subtitle } from "../Subtitle";

export const Skills = () => {
	const skillContainer = useRef(null);

	const skills = [
		"React",
		"NextJs",
		"Tailwind",
		"JavaScript",
		"TypeScript",
		"GraphQl",
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
		<motion.div
			className="flex flex-col flex-wrap gap-10 items-center justify-center"
			variants={container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			ref={skillContainer}
		>
			<Subtitle>
				Skils
			</Subtitle>
			<div className="flex gap-10">
				{skills.map((skill, index) => (
					<SkillCard name={skill} key={index} />
				))}
			</div>
		</motion.div>
	);
};
