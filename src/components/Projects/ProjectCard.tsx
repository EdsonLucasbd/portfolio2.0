import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import ProjectSpotlight, { ProjectSpotlightCard } from "./ProjectSpotlight";

interface ProjectCardProps {
	link: string;
	content: string;
	className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	link,
	className,
	content,
}) => {
	return (
		<div className={cn(`group w-full h-full`, className)}>
			<Card className="relative size-full border-0 z-[2]">
				<CardContent>
					<Image
						src={thumbnail}
						alt=""
						fill
						aria-hidden
						className="w-full h-full object-cover rounded-md grayscale group-hover:grayscale-0 group-hover:animate-fade-in animate-fade-out transition-all ease-in-out duration-200"
					/>
				</CardContent>
				<CardDescription>{content}</CardDescription>
				<CardFooter>
					<Link href={link}>Ver projeto</Link>
				</CardFooter>
			</Card>
		</div>
	);
};
