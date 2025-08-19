"use client";

import { Briefcase, GraduationCap, Target, Code, CloudLightning, Users } from "lucide-react";

export default function AboutPage() {
	return (
		<main className="container mx-auto px-4 sm:px-8 py-16">
			{/* Intro */}
			<section className="text-center max-w-3xl mx-auto mb-16">
				<h1 className="text-4xl font-bold mb-4">About Me</h1>
				<p className="text-lg text-muted-foreground">
					I'm <span className="font-semibold text-foreground">Tushar Biswas</span>, a
					frontend developer passionate about crafting modern web apps with clean UI and
					solid architecture. I started by freelancing on Fiverr, then expanded into
					building full-stack projects like hotel booking and task management apps. My
					goal is to contribute to impactful projects as a developer, while constantly
					sharpening my skills.
				</p>
			</section>

			{/* Highlights / Core Values */}
			<section className="grid gap-6 md:grid-cols-4 mb-20">
				<div className=" mx-auto rounded-lg border bg-card p-6 shadow-sm text-center">
					<Target className="h-8 w-8 text-primary mx-auto mb-3" />
					<h3 className="font-semibold mb-2">Problem-Solver</h3>
					<p className="text-sm text-muted-foreground">
						I enjoy breaking down complex problems and delivering simple, scalable
						solutions.
					</p>
				</div>

				<div className=" mx-auto rounded-lg border bg-card p-6 shadow-sm text-center">
					<Code className="h-8 w-8 text-primary mx-auto mb-3" />
					<h3 className="font-semibold mb-2">Full-Stack Experience</h3>
					<p className="text-sm text-muted-foreground">
						While frontend is my focus, I've worked with Node.js, Express, and MongoDB
						to deliver complete applications.
					</p>
				</div>

				<div className=" mx-auto rounded-lg border bg-card p-6 shadow-sm text-center">
					<CloudLightning className="h-8 w-8 text-primary mx-auto mb-3" />
					<h3 className="font-semibold mb-2">Fast Learner</h3>
					<p className="text-sm text-muted-foreground">
						I pick up new technologies quickly and adapt to evolving project
						requirements.
					</p>
				</div>

				<div className="mx-auto rounded-lg border bg-card p-6 shadow-sm text-center">
					<Users className="h-8 w-8 text-primary mx-auto mb-3" />
					<h3 className="font-semibold mb-2">Team Player</h3>
					<p className="text-sm text-muted-foreground">
						Collaboration is key, and I thrive in both team-driven and independent work
						environments.
					</p>
				</div>
			</section>

			{/* Experience */}
			<section className="mb-20">
				<h2 className="text-3xl font-semibold text-center mb-8">Experience</h2>
				<div className="space-y-6 max-w-3xl mx-auto">
					<div className="rounded-lg border bg-card p-6 shadow-sm">
						<div className="flex items-center gap-3 mb-3">
							<Briefcase className="h-6 w-6 text-primary" />
							<h3 className="font-semibold">Freelance MERN Stack Developer</h3>
						</div>
						<p className="text-sm text-muted-foreground">Fiverr · 2023 - Present</p>
						<ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
							<li>
								Delivered 25+ projects for global clients with Mongodb, Express,
								React and Node.js
							</li>
							<li>
								Developed full-stack apps including quiz app and chat application.
							</li>
							<li>
								Collaborated with non-technical clients to transform ideas into
								functional products.
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Education */}
			<section>
				<h2 className="text-3xl font-semibold text-center mb-8">Education</h2>
				<div className="space-y-6 max-w-3xl mx-auto">
					<div className="rounded-lg border bg-card p-6 shadow-sm">
						<div className="flex items-center gap-3 mb-3">
							<GraduationCap className="h-6 w-6 text-primary" />
							<h3 className="font-semibold">B.Sc. in Textile Engineering</h3>
						</div>
						<p className="text-sm text-muted-foreground">
							[Barishal Textile Engineering College] · 2018 - 2022
						</p>
						<p className="mt-2 text-sm text-muted-foreground">
							Coursework: Wet Process Engineering
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
