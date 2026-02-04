import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { ExternalLink, Github, PlayCircle, Calendar, Clock } from "lucide-react";

// ✅ Generate SEO Metadata
export async function generateMetadata({ params }) {
	const { project: param } = await params;
	const project = projects.find((p) => p.details === `/projects/${param}`);

	if (!project) {
		return {
			title: "Project Not Found | Tushar Biswas Portfolio",
			description: "The project you are looking for does not exist.",
		};
	}

	const domain = "https://asynctushar.vercel.app";
	const ogImage =
		project.thumbnail || `${domain}/og-image.png`;

	return {
		title: `${project.title} | Tushar Biswas Portfolio`,
		description: project.description.short,
		keywords: [
			project.title,
			"Tushar Biswas project",
			"MERN stack project",
			"Next.js portfolio project",
			"React project",
			"Node.js project",
			...project.tech
		],
		alternates: {
			canonical: `${domain}/projects/${param}`,
		},
		openGraph: {
			title: `${project.title} | Tushar Biswas Portfolio`,
			description: project.description.long,
			url: `${domain}/projects/${param}`,
			siteName: "Tushar Biswas Portfolio",
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: `${project.title} preview`,
				},
			],
			locale: "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: `${project.title} | Tushar Biswas Portfolio`,
			description: project.description.short,
			images: [ogImage],
		},

	};
}

export async function generateStaticParams() {
	return projects.map((project) => ({
		project: project.details.split("/").pop(),
	}));
}

export const revalidate = 600;

const Project = async ({ params }) => {
	const { project: param } = await params;

	const project = projects.find((project) => project.details === `/projects/${param}`);
	if (!project) return notFound();

	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<section className="border-b bg-gradient-to-b from-muted/50 to-background">
				<div className="container mx-auto px-4 py-8">
					<div className="max-w-4xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-background/50 text-sm mb-3">
							<span className="text-muted-foreground">{project.type}</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
							{project.title}
						</h1>
						<p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
							{project.description.short}
						</p>

						{/* Action Buttons */}
						<div className="flex flex-wrap justify-center gap-3">
							{project.liveUrl && (
								<Button asChild size="lg">
									<a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
										<ExternalLink className="w-4 h-4 mr-2" />
										Live Project
									</a>
								</Button>
							)}
							{project.githubUrl && (
								<Button asChild size="lg" variant="outline">
									<a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
										<Github className="w-4 h-4 mr-2" />
										View Code
									</a>
								</Button>
							)}
							{project.videoUrl && (
								<Button asChild size="lg" variant="outline">
									<a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
										<PlayCircle className="w-4 h-4 mr-2" />
										Demo Video
									</a>
								</Button>
							)}
						</div>
					</div>
				</div>
			</section>

			<div className="container mx-auto px-4 py-8">
				<div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
					{/* Main Content - Left Column */}
					<div className="lg:col-span-2 space-y-6">
						{/* Visuals - Moved to Top */}
						{project.visuals?.length > 0 && (
							<section className="mb-20">
								<h2 className="text-2xl sm:text-3xl font-bold mb-6">Project Showcase</h2>
								<Carousel className="w-full" opts={{ loop: true }}>
									<CarouselContent>
										{project.visuals.map((src, idx) => (
											<CarouselItem key={idx}>
												<Zoom>
													<Image
														src={src}
														width={1200}
														height={800}
														alt={`${project.title} screenshot ${idx + 1}`}
														className="w-full aspect-video cursor-zoom-in"
														priority={idx === 0}
													/>
												</Zoom>
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious className="left-4 h-10 w-10 bg-primary/90 dark:bg-primary/90 hover:bg-primary dark:hover:bg-primary border-2 text-background dark:text-foreground hover:text-background" />
									<CarouselNext className="right-4 h-10 w-10 bg-primary/90 dark:bg-primary/90 hover:bg-primary dark:hover:bg-primary border-2 text-background dark:text-foreground hover:text-background" />
								</Carousel>
							</section>
						)}

						{/* Overview */}
						<section>
							<h2 className="text-2xl sm:text-3xl font-bold mb-4">Overview</h2>
							<p className="text-muted-foreground leading-relaxed text-justify">
								{project.description.long}
							</p>
						</section>

						{/* Key Features */}
						<section>
							<h2 className="text-2xl sm:text-3xl font-bold mb-6">Key Features</h2>
							<div className="grid sm:grid-cols-2 gap-4">
								{project.features.map((feature, idx) => (
									<div
										key={idx}
										className="flex gap-3 p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
									>
										<div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
											<span className="text-primary text-sm font-bold">✓</span>
										</div>
										<p className="text-sm leading-relaxed">{feature}</p>
									</div>
								))}
							</div>
						</section>

						{/* Resources */}
						{project.resources && (
							<section>
								<h2 className="text-2xl sm:text-3xl font-bold mb-6">
									Design & Documentation
								</h2>
								<div className="grid sm:grid-cols-2 gap-4">
									{project.resources.srs && (
										<a
											href={project.resources.srs}
											target="_blank"
											rel="noopener noreferrer"
											className="group flex items-start gap-4 p-5 rounded-xl border bg-card hover:shadow-md hover:border-primary/50 transition-all"
										>
											<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
												📄
											</div>
											<div>
												<p className="font-semibold mb-1 group-hover:text-primary transition-colors">
													Project Documentation
												</p>
												<p className="text-sm text-muted-foreground">
													SRS, requirements, API specs, and data models
												</p>
											</div>
										</a>
									)}

									{project.resources.figma && (
										<a
											href={project.resources.figma}
											target="_blank"
											rel="noopener noreferrer"
											className="group flex items-start gap-4 p-5 rounded-xl border bg-card hover:shadow-md hover:border-primary/50 transition-all"
										>
											<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
												🎨
											</div>
											<div>
												<p className="font-semibold mb-1 group-hover:text-primary transition-colors">
													Figma Design
												</p>
												<p className="text-sm text-muted-foreground">
													Interactive design mockups
												</p>
											</div>
										</a>
									)}

									{project.resources.sitemap && (
										<a
											href={project.resources.sitemap}
											download
											className="group flex items-start gap-4 p-5 rounded-xl border bg-card hover:shadow-md hover:border-primary/50 transition-all"
										>
											<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
												🗺️
											</div>
											<div>
												<p className="font-semibold mb-1 group-hover:text-primary transition-colors">
													Sitemap
												</p>
												<p className="text-sm text-muted-foreground">
													Project structure overview
												</p>
											</div>
										</a>
									)}

									{project.resources.dataFlow && (
										<a
											href={project.resources.dataFlow}
											download
											className="group flex items-start gap-4 p-5 rounded-xl border bg-card hover:shadow-md hover:border-primary/50 transition-all"
										>
											<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
												🔀
											</div>
											<div>
												<p className="font-semibold mb-1 group-hover:text-primary transition-colors">
													Data Flow Diagram
												</p>
												<p className="text-sm text-muted-foreground">
													System data flow visualization
												</p>
											</div>
										</a>
									)}

									{project.resources.wireframe && (
										<a
											href={project.resources.wireframe}
											download
											className="group flex items-start gap-4 p-5 rounded-xl border bg-card hover:shadow-md hover:border-primary/50 transition-all"
										>
											<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
												📝
											</div>
											<div>
												<p className="font-semibold mb-1 group-hover:text-primary transition-colors">
													Wireframe
												</p>
												<p className="text-sm text-muted-foreground">
													Low-fidelity design layouts
												</p>
											</div>
										</a>
									)}

									{project.resources.frontendComponentTree && (
										<a
											href={project.resources.frontendComponentTree}
											download
											className="group flex items-start gap-4 p-5 rounded-xl border bg-card hover:shadow-md hover:border-primary/50 transition-all"
										>
											<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
												🌳
											</div>
											<div>
												<p className="font-semibold mb-1 group-hover:text-primary transition-colors">
													Component Tree
												</p>
												<p className="text-sm text-muted-foreground">
													Frontend architecture diagram
												</p>
											</div>
										</a>
									)}

									{project.resources.erd && (
										<a
											href={project.resources.erd}
											download
											className="group flex items-start gap-4 p-5 rounded-xl border bg-card hover:shadow-md hover:border-primary/50 transition-all"
										>
											<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
												🗄️
											</div>
											<div>
												<p className="font-semibold mb-1 group-hover:text-primary transition-colors">
													ER Diagram
												</p>
												<p className="text-sm text-muted-foreground">
													Database schema structure
												</p>
											</div>
										</a>
									)}
								</div>
							</section>
						)}
					</div>

					{/* Sidebar - Right Column */}
					<div className="lg:col-span-1 space-y-4 sticky top-20 self-start">
						{/* Tech Stack */}
						<div className="rounded-xl border bg-card p-6 shadow-sm">
							<h3 className="font-semibold mb-4 flex items-center gap-2">
								<span className="text-lg">Tech Stack</span>
							</h3>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, idx) => (
									<span
										key={idx}
										className="px-3 py-1.5 rounded-lg border bg-background text-sm font-medium hover:border-primary/50 transition-colors"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Project Info */}
						<div className="rounded-xl border bg-card p-6 shadow-sm">
							<h3 className="font-semibold mb-4">Project Info</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
										<Calendar className="w-4 h-4 text-primary" />
									</div>
									<div>
										<p className="text-sm text-muted-foreground">Type</p>
										<p className="font-medium">{project.type}</p>
									</div>
								</div>
								{project.duration && (
									<div className="flex items-start gap-3">
										<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
											<Clock className="w-4 h-4 text-primary" />
										</div>
										<div>
											<p className="text-sm text-muted-foreground">Duration</p>
											<p className="font-medium">{project.duration}</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Project;