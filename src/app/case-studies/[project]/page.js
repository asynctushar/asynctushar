"use client";

import { notFound } from "next/navigation";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const projects = {
	spothotel: {
		title: "SpotHotel",
		problem: "Booking hotels online often lacks real-time updates and smooth UX.",
		solution:
			"Built a full-stack platform with Next.js + Prisma + PostgreSQL. Integrated secure Stripe payments and real-time availability.",
		tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "Stripe"],
		features: [
			"Real-time room availability",
			"Secure payment gateway",
			"Admin & customer dashboards",
		],
		links: {
			live: "https://spothotel.vercel.app",
			github: "https://github.com/yourusername/spothotel",
			video: "https://youtube.com/demo-video",
		},
		visuals: ["/projects/spothotel-screenshot1.png", "/projects/spothotel-screenshot2.png"],
		resources: {
			srs: "/docs/trackzone-srs.pdf",
			figma: "https://www.figma.com/file/xyz/trackzone-design",
			wireframes: ["/projects/trackzone-wire1.png", "/projects/trackzone-wire2.png"],
			erd: "/projects/trackzone-erd.png",
			componentTree: "/projects/trackzone-component-tree.png",
		},
	},
	trackzone: {
		title: "TrackZone",
		problem: "Managing tasks with clarity is hard without proper workflow & visualization.",
		solution:
			"Created a project management app following SDLC (SRS → Wireframe → Figma → Code → Deploy).",
		tech: ["React", "Tailwind", "Node.js", "Figma"],
		features: ["Kanban board for tasks", "User roles & authentication", "Activity tracking"],
		links: {
			live: "https://trackzone.vercel.app",
			github: "https://github.com/yourusername/trackzone",
		},
		visuals: ["/projects/trackzone1.png", "/projects/trackzone2.png"],
	},
};

export default function CaseStudyPage({ params }) {
	const project = projects[params.project];
	if (!project) return notFound();

	return (
		<section className="container mx-auto py-16 px-4">
			<h1 className="mb-8 text-4xl font-bold">{project.title}</h1>

			{/* Problem */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-2">Problem</h2>
				<p className="text-muted-foreground">{project.problem}</p>
			</div>

			{/* Solution */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-2">Solution</h2>
				<p className="text-muted-foreground">{project.solution}</p>
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
					<h2 className="text-xl font-semibold mb-2">Visuals</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
						{project.visuals.map((src, idx) => (
							<Zoom key={idx}>
								<img
									src={src}
									alt={`Screenshot ${idx + 1}`}
									className="rounded-lg border shadow cursor-zoom-in"
								/>
							</Zoom>
						))}
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
								📄 View SRS Document (PDF)
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

						{project.resources.wireframes?.length > 0 && (
							<div>
								<h3 className="font-medium mb-2">Wireframes</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									{project.resources.wireframes.map((src, idx) => (
										<Zoom key={idx}>
											<img
												src={src}
												alt={`Wireframe ${idx + 1}`}
												className="rounded-lg border shadow cursor-zoom-in"
											/>
										</Zoom>
									))}
								</div>
							</div>
						)}

						{project.resources.erd && (
							<div>
								<h3 className="font-medium mb-2">ER Diagram</h3>
								<Zoom>
									<img
										src={project.resources.erd}
										alt="ER Diagram"
										className="rounded-lg border shadow mt-2 cursor-zoom-in"
									/>
								</Zoom>
								<a
									href={project.resources.erd}
									download
									className="text-sm text-primary underline block mt-1"
								>
									⬇ Download Full ER Diagram
								</a>
							</div>
						)}

						{project.resources.componentTree && (
							<div>
								<h3 className="font-medium mb-2">Component Tree</h3>
								<Zoom>
									<img
										src={project.resources.componentTree}
										alt="Component Tree"
										className="rounded-lg border shadow mt-2 cursor-zoom-in"
									/>
								</Zoom>
								<a
									href={project.resources.componentTree}
									download
									className="text-sm text-primary underline block mt-1"
								>
									⬇ Download Component Tree
								</a>
							</div>
						)}
					</div>
				</div>
			)}

			{/* Links */}
			<div className="mt-10 flex flex-wrap gap-4">
				{project.links.live && (
					<a
						href={project.links.live}
						target="_blank"
						className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium transition-all shadow hover:bg-primary/90"
					>
						Live Project
					</a>
				)}
				{project.links.github && (
					<a
						href={project.links.github}
						target="_blank"
						className="px-4 py-2 border rounded-lg text-sm font-medium transition-all bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
					>
						GitHub
					</a>
				)}
				{project.links.video && (
					<a
						href={project.links.video}
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
