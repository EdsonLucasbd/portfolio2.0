"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

export type Card = {
	id: number;
	content: JSX.Element | React.ReactNode | string;
	className?: string;
	thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
	const [selected, setSelected] = useState<Card | null>(null);
	const [lastSelected, setLastSelected] = useState<Card | null>(null);

	const handleClick = (card: Card) => {
		setLastSelected(selected);
		setSelected(card);
	};

	const handleOutsideClick = () => {
		setLastSelected(selected);
		setSelected(null);
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
				x: 0 % 2 === 0 ? 50 : -50
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				transition: {
					delayChildren: 0.3,
					staggerChildren: 0.2,
					duration: 1
				}
			}}
			viewport={{ once: true }}
			className="w-full h-full p-10 pt-0 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative"
		>
			{cards.map((card, i) => (
				<div key={i} className={cn(card.className, "flex")}>
					<motion.div
						initial={{
							opacity: 0,
							y: 20
						}}
						whileInView={{
							opacity: 1,
							y: 0
						}}
						viewport={{ once: true }}
						onClick={() => handleClick(card)}
						className={cn(
							card.className,
							"relative overflow-hidden cursor-pointer",
							selected?.id === card.id
								? "rounded-lg cursor-pointer absolute inset-0 h-1/2 md:h-1/3 w-full md:w-3/4 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
								: lastSelected?.id === card.id
									? "z-40 bg-white rounded-xl h-full w-full"
									: "bg-white rounded-xl h-full w-full",
						)}
						layout
					>
						{selected?.id === card.id && <SelectedCard selected={selected} />}
						<BlurImage card={card} />
					</motion.div>
				</div>
			))}
			<motion.div
				onClick={handleOutsideClick}
				className={cn(
					"absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
					selected?.id ? "pointer-events-auto" : "pointer-events-none",
				)}
				animate={{ opacity: selected?.id ? 0.3 : 0 }}
			/>
		</motion.div>
	);
};

const BlurImage = ({ card }: { card: Card }) => {
	const [loaded, setLoaded] = useState(false);
	return (
		<Image
			src={card.thumbnail}
			height="500"
			width="500"
			onLoad={() => setLoaded(true)}
			className={cn(
				"object-cover object-center absolute inset-0 h-full w-full transition duration-200",
				loaded ? "blur-none" : "blur-md",
			)}
			alt="thumbnail"
		/>
	);
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
	return (
		<div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 0.6,
				}}
				className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
			/>
			<motion.div
				initial={{
					opacity: 0,
					y: 100,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.3,
					ease: "easeInOut",
				}}
				className="relative px-8 pb-4 z-[70]"
			>
				{selected?.content}
			</motion.div>
		</div>
	);
};
