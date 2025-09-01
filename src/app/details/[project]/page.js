import projects from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default async function CaseStudyPage({ params }) {
	const { project: param } = await params;

	const project = projects.find(project => project.details === `/details/${param}`);
	if (!project) return notFound();

	return (
		<section className="container mx-auto py-16 px-4">
			<h1 className="mb-8 text-4xl font-bold">{project.title}</h1>

			{/* Description */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-2">Description</h2>
				<p className="text-muted-foreground">{project.description}</p>
			</div>

			{/* Tech Stack */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
				<div className="flex flex-wrap gap-2">
					{project.tech.map((t, idx) => (
						<span
							key={idx}
							className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
						>
							{t}
						</span>
					))}
				</div>
			</div>

			{/* Features */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-2">Key Features</h2>
				<ul className="list-disc list-inside text-muted-foreground space-y-1">
					{project.features.map((f, idx) => (
						<li key={idx}>{f}</li>
					))}
				</ul>
			</div>

			{/* Visuals */}
			{project.visuals?.length > 0 && (
				<div className="mb-12">
					<h2 className="text-xl font-semibold mb-8 md:mb-16">Visuals</h2>
					<div className="flex justify-center">
						<Carousel className="w-full lg:w-10/12" opts={{ loop: true, duration: 30 }}>
							<CarouselContent>
								{project.visuals.map((src, idx) => (
									<CarouselItem key={idx}>
										<Zoom>
											<Image

												src={src}
												width={10000}
												height={10000}
												alt={`Screenshot ${idx + 1}`}
												className="rounded-lg border shadow cursor-zoom-in w-fit"
											/>
										</Zoom>
									</CarouselItem>
								))}
							</CarouselContent >
							<CarouselPrevious size="lg" />
							<CarouselNext size="lg" />
						</Carousel>
					</div>
				</div>
			)}

			{/* Documentation & Design */}
			{project.resources && (
				<div className="mb-12">
					<h2 className="text-xl font-semibold">Design & Documentation</h2>
					<div className="mt-4 space-y-6">
						{project.resources.srs && (
							<a
								href={project.resources.srs}
								target="_blank"
								className="block text-primary underline"
							>
								📄 View SRS Document
							</a>
						)}

						{project.resources.figma && (
							<a
								href={project.resources.figma}
								target="_blank"
								className="block text-primary underline"
							>
								🎨 Open Figma Design
							</a>
						)}

						{project.resources.sitemap && (
							<div>
								<h3 className="font-medium mb-2">Sitemap</h3>
								<div className="w-full lg:w-1/2">
									<Zoom>
										<Image
											width={10000}
											height={10000}
											src={project.resources.sitemap}
											alt="ER Diagram"
											className="rounded-lg border shadow mt-2 cursor-zoom-in w-full h-auto"
										/>
									</Zoom>
								</div>
								<a
									href={project.resources.sitemap}
									download
									className="text-sm text-primary underline block mt-1"
								>
									⬇ Download Sitemap
								</a>
							</div>
						)}

						{project.resources.userFlow && (
							<div>
								<h3 className="font-medium mb-2">User Flow</h3>
								<div className="w-full lg:w-1/2">
									<Zoom>
										<Image
											width={10000}
											height={10000}
											src={project.resources.userFlow}
											alt="ER Diagram"
											className="rounded-lg border shadow mt-2 cursor-zoom-in w-full h-auto"
										/>
									</Zoom>
								</div>
								<a
									href={project.resources.userFlow}
									download
									className="text-sm text-primary underline block mt-1"
								>
									⬇ Download User Flow
								</a>
							</div>
						)}

						{project.resources.wireframe && (
							<div>
								<h3 className="font-medium mb-2">Wireframe</h3>
								<div className="w-full lg:w-1/2">
									<Zoom >
										<Image
											width={10000}
											height={10000}
											src={project.resources.wireframe}
											alt={`Wireframe ${project.title}`}
											className="rounded-lg border shadow cursor-zoom-in w-full h-auto"
										/>
									</Zoom>
								</div>
								<a
									href={project.resources.wireframe}
									download
									className="text-sm text-primary underline block mt-1"
								>
									⬇ Download full Wireframe
								</a>
							</div>
						)}

						{project.resources.frontendComponentTree && (
							<div>
								<h3 className="font-medium mb-2">Frontend Component Tree</h3>
								<div className="w-full lg:w-1/2">
									<Zoom>
										<Image
											width={10000}
											height={10000}
											src={project.resources.frontendComponentTree}
											alt="Component Tree"
											className="rounded-lg border shadow mt-2 cursor-zoom-in w-full h-auto"
										/>
									</Zoom>
								</div>
								<a
									href={project.resources.frontendComponentTree}
									download
									className="text-sm text-primary underline block mt-1"
								>
									⬇ Download Frontend Component Tree
								</a>
							</div>
						)}

						{project.resources.erd && (
							<div>
								<h3 className="font-medium mb-2">ER Diagram</h3>
								<div className="w-full lg:w-1/2">
									<Zoom>
										<Image
											width={10000}
											height={10000}
											src={project.resources.erd}
											alt="ER Diagram"
											className="rounded-lg border shadow mt-2 cursor-zoom-in w-full h-auto"
										/>
									</Zoom>
								</div>
								<a
									href={project.resources.erd}
									download
									className="text-sm text-primary underline block mt-1"
								>
									⬇ Download Full ER Diagram
								</a>
							</div>
						)}
					</div>
				</div>
			)}

			{/* Links */}
			<div className="mt-10 flex flex-wrap gap-4">
				{project.liveUrl && (
					<a
						href={project.liveUrl}
						target="_blank"
						className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium transition-all shadow hover:bg-primary/90"
					>
						Live Project
					</a>
				)}
				{project.githubUrl && (
					<a
						href={project.githubUrl}
						target="_blank"
						className="px-4 py-2 border rounded-lg text-sm font-medium transition-all bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
					>
						GitHub
					</a>
				)}
				{project.videoUrl && (
					<a
						href={project.videoUrl}
						target="_blank"
						className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg shadow text-sm font-medium transition-all hover:bg-secondary/80"
					>
						Demo Video
					</a>
				)}
			</div>
		</section>
	);
}
