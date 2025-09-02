import Link from "next/link";
import { Button } from "@/components/ui/button";
import projects from "@/data/projects";

export default function ProjectsPage() {
	return (
		<section className="container mx-auto py-16">
			<h1 className="mb-12 text-center text-4xl font-bold">Projects</h1>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, idx) => (
					<div
						key={idx}
						className="group rounded-lg border bg-card shadow-sm transition hover:shadow-md flex flex-col"
					>
						<img
							src={project.thumbnail}
							alt={project.title}
							className="w-full h-40 object-cover rounded-t-lg"
						/>
						<div className="p-6 flex-1 flex flex-col">
							<h3 className="text-xl font-semibold">
								{project.title}
							</h3>
							<p className="mt-1 text-sm text-muted-foreground flex-1">
								{project.description.short}
							</p>
							<p className="mt-3 text-xs text-muted-foreground">
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
									<Link href={project.details}>Details</Link>
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
