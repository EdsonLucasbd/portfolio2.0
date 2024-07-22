"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import photo from "../../../public/portfolio-photo.webp";

export const Hero = () => {
	return (
		<div className="flex items-center justify-center relative w-full h-full bg-grid-small-white/[0.2]">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<motion.span
				initial={{
					opacity: 0,
					x: 0 % 2 === 0 ? 50 : -50
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					transition: {
						duration: 1
					}
				}}
				viewport={{ once: true }}
			>
				<Image
					src={photo}
					alt=""
					id="photo"
					aria-hidden
					className="w-[400px] h-auto"
				/>
			</motion.span>
			<motion.div
				className="flex flex-col gap-2"
				initial={{
					opacity: 0,
					x: 1 % 2 === 0 ? 50 : -50
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					transition: {
						duration: 1
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
					className="text-2xl font-light
        animate-text bg-gradient-to-r from-white/5 via-white to-black 
        bg-opacity-70 bg-clip-text text-transparent"
				>
					FrondEnd Developer
				</p>
			</motion.div>
		</div>
	);
};
