"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import photo from "../../../public/portfolio-photo.webp";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<motion.div
			className="flex flex-col lg:flex-row items-center justify-start lg:justify-center 
			relative w-full h-full bg-grid-small-white/[0.2] gap-2 lg:gap-0 pt-10 lg:pt-0 lg:-mt-48"
		>
			<div
				className="absolute pointer-events-none inset-0 flex items-center 
				justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]
				lg:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
			>
			</div>
			<motion.span
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01]
				}}
			>
				<Image
					src={photo}
					alt=""
					id="photo"
					aria-hidden
					className="w-full lg:w-[400px] h-auto"
				/>
			</motion.span>
			<motion.div
				className="flex flex-col gap-2 text-center lg:text-left"
				initial={{
					opacity: 0,
					x: isMobile ? 0 : -70,
					y: isMobile ? -70 : 0
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					y: isMobile ? 0 : 0,
					transition: {
						duration: 1,
						delay: 0.8
					}
				}}
				viewport={{ once: true }}
			>
				<h1
					className="font-sans text-6xl font-semibold animate-text bg-gradient-to-r from-black via-white to-black 
        bg-clip-text text-transparent"
				>
					Edson Lucas
				</h1>
				<p
					className="text-xl lg:text-2xl font-light
        animate-text bg-gradient-to-r from-white/5 via-white to-black 
        bg-opacity-70 bg-clip-text text-transparent"
				>
					FrondEnd Developer
				</p>
			</motion.div>
		</motion.div>
	);
};
