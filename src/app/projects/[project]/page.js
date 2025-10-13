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

	const project = projects.find(project => project.details === `/projects/${param}`);
	if (!project) return notFound();

	return (
		<section className="container mx-auto py-16 px-4">
			<h1 className="mb-8 text-4xl font-bold">{project.title}</h1>

			{/* Description */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-2">Description</h2>
				<p className="text-muted-foreground text-justify">{project.description.long}</p>
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
			{/* Documentation & Design */}
			{project.resources && (
				<div className="mb-12">
					<h2 className="text-xl font-semibold mb-6">Design & Documentation</h2>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{/* SRS */}
						{project.resources.srs && (
							<a
								href={project.resources.srs}
								target="_blank"
								className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-background"
							>
								<span className="text-2xl">📄</span>
								<div>
									<p className="font-medium">Project Documentation</p>
									<p className="text-sm text-muted-foreground">Access the SRS, client requirements, API specs, and data models.</p>
								</div>
							</a>
						)}

						{/* Figma */}
						{project.resources.figma && (
							<a
								href={project.resources.figma}
								target="_blank"
								className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-background"
							>
								<span className="text-2xl">🎨</span>
								<div>
									<p className="font-medium">Figma Design</p>
									<p className="text-sm text-muted-foreground">Open interactive design</p>
								</div>
							</a>
						)}

						{/* Sitemap */}
						{project.resources.sitemap && (
							<a
								href={project.resources.sitemap}
								download
								className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-background"
							>
								<span className="text-2xl">🗺️</span>
								<div>
									<p className="font-medium">Sitemap</p>
									<p className="text-sm text-muted-foreground">Download project structure</p>
								</div>
							</a>
						)}

						{/* User Flow */}
						{project.resources.dataFlow && (
							<a
								href={project.resources.dataFlow}
								download
								className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-background"
							>
								<span className="text-2xl">🔀</span>
								<div>
									<p className="font-medium">Data Flow Diagram</p>
									<p className="text-sm text-muted-foreground">Download full flow diagram</p>
								</div>
							</a>
						)}

						{/* Wireframe */}
						{project.resources.wireframe && (
							<a
								href={project.resources.wireframe}
								download
								className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-background"
							>
								<span className="text-2xl">📝</span>
								<div>
									<p className="font-medium">Wireframe</p>
									<p className="text-sm text-muted-foreground">Download low-fidelity design</p>
								</div>
							</a>
						)}

						{/* Frontend Component Tree */}
						{project.resources.frontendComponentTree && (
							<a
								href={project.resources.frontendComponentTree}
								download
								className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-background"
							>
								<span className="text-2xl">🌳</span>
								<div>
									<p className="font-medium">Component Tree</p>
									<p className="text-sm text-muted-foreground">Download frontend structure</p>
								</div>
							</a>
						)}

						{/* ER Diagram */}
						{project.resources.erd && (
							<a
								href={project.resources.erd}
								download
								className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-background"
							>
								<span className="text-2xl">🗄️</span>
								<div>
									<p className="font-medium">Entity Relation Diagram</p>
									<p className="text-sm text-muted-foreground">Download ER Diagram</p>
								</div>
							</a>
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
};

export default Project;