import ProjectCard from "@/components/project-card";
import projects from "@/data/projects";


const ProjectsPage = () => {
	return (
		<section className="container mx-auto py-16">
			<h1 className="mb-12 text-center text-4xl font-bold">Projects</h1>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, idx) => (
					<ProjectCard key={idx} project={project} />
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
