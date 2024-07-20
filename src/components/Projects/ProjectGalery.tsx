import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { ProjectCard } from "./ProjectCard";

interface Project {
	index: number;
	link: string;
}

export const ProjectGallery = () => {
	const projectsContainer = useRef(null);
	const [index, setIndex] = useState<number | null>(null);

	const projects: Project[] = [
		{ index: 0, link: "/projects/el-store.png" },
		{ index: 1, link: "/projects/av-boss.png" },
		{ index: 2, link: "/projects/amazing-stadiums.png" },
		{ index: 3, link: "/projects/av-expert.png" },
		{ index: 4, link: "/projects/old-portfolio.png" },
		{ index: 5, link: "/projects/prospeccao-assertiva.png" },
		{ index: 6, link: "/projects/lns-site.png" },
		{ index: 7, link: "/projects/pg-links-kauane.png" },
		{ index: 8, link: "/projects/qr-code-gen.png" },
		{ index: 9, link: "/projects/pg-links.png" },
	];

	const container = {
		hidden: { opacity: 1, scale: 0 },
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
		<div className="flex flex-wrap size-full gap-6 items-center justify-between">
			<Dialog>
				{projects.map((project) => (
					<DialogTrigger
						key={project.index}
						onClick={() => setIndex(project.index)}
					>
						<ProjectCard
							link={project.link}
							className="w-[400px] h-[204px] cursor-pointer"
						/>
					</DialogTrigger>
				))}
				<DialogContent className="w-[500px] h-[500px]">
					<DialogHeader>
						{/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
						<Image
							src={projects[index ?? 0].link}
							alt=""
							fill
							aria-hidden
							className="w-full h-full object-contain rounded-md"
						/>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};
