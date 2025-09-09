import ProjectCard from "@/components/project-card";
import projects from "@/data/projects";

export const metadata = {
	title: "Projects | Tushar Biswas - MERN & Next.js Developer",
	description:
		"Explore personal and freelance projects by Tushar Biswas, showcasing expertise in MERN stack, Next.js, and full-stack web development.",
	keywords: [
		"Tushar Biswas projects",
		"MERN stack portfolio",
		"Next.js developer projects",
		"Full-stack web developer",
		"React freelance projects",
		"Node.js portfolio",
		"MongoDB developer",
		"Stripe integration projects",
		"Freelance developer Bangladesh",
	],
	openGraph: {
		title: "Projects | Tushar Biswas Portfolio",
		description:
			"Browse projects built by Tushar Biswas using MERN stack, Next.js, React, Node.js, and more. Includes personal and freelance work.",
		url: "https://asynctushar.vercel.app/projects",
		siteName: "Tushar Biswas Portfolio",
		images: [
			{
				url: "/og-projects.png",
				width: 1200,
				height: 630,
				alt: "Projects by Tushar Biswas",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects | Tushar Biswas Portfolio",
		description:
			"Explore freelance and personal web development projects built with MERN stack, Next.js, and modern tools.",
		images: ["/og-projects.png"],
	},
};


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
