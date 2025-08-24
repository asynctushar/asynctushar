import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
	{
		title: "SpotHotel",
		type: "Personal Project",
		description: "A full-stack hotel booking platform with real-time availability & payments.",
		tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
		liveUrl: "https://spothotel.vercel.app",
		githubUrl: "https://github.com/yourusername/spothotel",
		caseStudy: "/case-studies/spothotel",
		thumbnail: "/projects/spothotel.png",
	},
	{
		title: "TrackZone",
		type: "Personal Project",
		description: "Project management tool built following full SDLC: SRS → Figma → Code.",
		tech: ["React", "Tailwind", "Node.js"],
		liveUrl: "https://trackzone.vercel.app",
		githubUrl: "https://github.com/yourusername/trackzone",
		caseStudy: "/case-studies/trackzone",
		thumbnail: "/projects/trackzone.png",
	},
	{
		title: "Client Feature Development",
		type: "Freelance",
		description: "Implemented booking system, payment gateway, and role-based dashboard.",
		tech: ["Next.js", "MongoDB", "Stripe"],
		liveUrl: "https://clientproject.com",
		githubUrl: null, // not available
		caseStudy: "/case-studies/clientproject",
		thumbnail: "/projects/client.png",
	},
];

export default function ProjectsPage() {
	return (
		<section className="container mx-auto py-16">
			<h1 className="mb-12 text-center text-4xl font-bold">Projects</h1>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, idx) => (
					<div
						key={idx}
						className="group rounded-lg border bg-card shadow-sm transition hover:shadow-md"
					>
						<img
							src={project.thumbnail}
							alt={project.title}
							className="w-full h-40 object-cover rounded-t-lg"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold group-hover:text-primary">
								{project.title}
							</h3>
							<p className="mt-1 text-sm text-muted-foreground">
								{project.description}
							</p>
							<p className="mt-2 text-xs text-muted-foreground">
								{project.tech.join(", ")}
							</p>
							<p className="mt-2 text-xs font-medium text-primary">{project.type}</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{project.liveUrl && (
									<Button size="sm" asChild>
										<Link href={project.liveUrl} target="_blank">
											Live
										</Link>
									</Button>
								)}
								{project.githubUrl && (
									<Button size="sm" variant="outline" asChild>
										<Link href={project.githubUrl} target="_blank">
											GitHub
										</Link>
									</Button>
								)}
								<Button size="sm" variant="secondary" asChild>
									<Link href={project.caseStudy}>Case Study</Link>
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
