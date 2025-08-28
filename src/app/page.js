import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Code, Layout, Server, Wrench, Briefcase, GraduationCap } from "lucide-react";

const HomePage = () => {
	return (
		<>
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center py-20 text-center">
				<p className="text-base sm:text-lg text-muted-foreground">Hi, I'm Tushar 👋</p>

				<h1 className="mt-3 text-2xl sm:text-4xl font-bold leading-tight">
					Building scalable & user-friendly{" "}
					<span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
						web applications
					</span>{" "}
					with React & Next.js
				</h1>

				<p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
					I design & build modern applications with clean UI and solid architecture.
					Focused on creating solutions that are fast, responsive, and user-friendly.
				</p>

				<div className="mt-6 flex flex-wrap justify-center gap-4">
					<Button asChild>
						<Link href="/projects">View My Projects</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/resume.pdf" target="_blank">
							Download Resume
						</Link>
					</Button>
					<Button variant="secondary" asChild>
						<Link href="/contact">Contact Me</Link>
					</Button>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="container mx-auto py-16">
				<h2 className="mb-8 text-3xl font-semibold text-center">Featured Projects</h2>
				<div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
					<Link
						href="/case-studies/spothotel"
						className="group rounded-lg border bg-card overflow-hidden shadow-sm transition hover:shadow-md"
					>
						<Image
							src="/projects/spothotel-thumb.png"
							alt="SpotHotel thumbnail"
							width={600}
							height={300}
							className="w-full h-40 object-cover"
						/>
						<div className="p-5">
							<h3 className="font-semibold group-hover:text-primary">SpotHotel</h3>
							<p className="text-sm text-muted-foreground">
								Hotel booking app with real-time availability & payments.
							</p>
							<p className="mt-2 text-xs text-muted-foreground">
								Next.js • Prisma • PostgreSQL
							</p>
						</div>
					</Link>

					<Link
						href="/case-studies/trackzone"
						className="group rounded-lg border bg-card overflow-hidden shadow-sm transition hover:shadow-md"
					>
						<Image
							src="/projects/trackzone-thumb.png"
							alt="TrackZone thumbnail"
							width={600}
							height={300}
							className="w-full h-40 object-cover"
						/>
						<div className="p-5">
							<h3 className="font-semibold group-hover:text-primary">TrackZone</h3>
							<p className="text-sm text-muted-foreground">
								Project management app built with SDLC approach.
							</p>
							<p className="mt-2 text-xs text-muted-foreground">
								React • Tailwind • Node.js
							</p>
						</div>
					</Link>
				</div>

				<div className="mt-8 text-center">
					<Button asChild>
						<Link href="/projects">View All Projects</Link>
					</Button>
				</div>
			</section>

			{/* Skills / Tech Stack */}
			<section className="container mx-auto py-20">
				<h2 className="mb-10 text-3xl font-bold text-center">Tech Stack</h2>

				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center">
					{/* Languages */}
					<div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
						<div className="flex justify-center mb-3">
							<Code className="h-6 w-6 text-primary" />
						</div>
						<h3 className="mb-12 text-xl font-semibold">Languages</h3>
						<div className="flex flex-col gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=js"
										alt="JavaScript"
										width={28}
										height={28}
									/>
								</div>
								<span>JavaScript</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=ts"
										alt="TypeScript"
										width={28}
										height={28}
									/>
								</div>
								<span>TypeScript</span>
							</div>
						</div>
					</div>

					{/* Frontend */}
					<div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
						<div className="flex justify-center mb-3">
							<Layout className="h-6 w-6 text-primary" />
						</div>
						<h3 className="mb-12 text-xl font-semibold">Front-End</h3>
						<div className="flex flex-col gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=react"
										alt="React"
										width={28}
										height={28}
									/>
								</div>
								<span>React</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=nextjs"
										alt="Next.js"
										width={28}
										height={28}
									/>
								</div>
								<span>Next.js</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=redux"
										alt="Redux"
										width={28}
										height={28}
									/>
								</div>
								<span>Redux Toolkit</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=tailwind"
										alt="Tailwind"
										width={28}
										height={28}
									/>
								</div>
								<span>Tailwind CSS</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=materialui"
										alt="MUI"
										width={28}
										height={28}
									/>
								</div>
								<span>Material UI</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="/images/shadcn-ui.png"
										alt="Shadcn"
										width={28}
										height={28}
									/>
								</div>
								<span>Shadcn</span>
							</div>
						</div>
					</div>

					{/* Backend */}
					<div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
						<div className="flex justify-center mb-3">
							<Server className="h-6 w-6 text-primary" />
						</div>
						<h3 className="mb-12 text-xl font-semibold">Back-End</h3>
						<div className="flex flex-col gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=nodejs"
										alt="Node.js"
										width={28}
										height={28}
									/>
								</div>
								<span>Node.js</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=express"
										alt="Express.js"
										width={28}
										height={28}
									/>
								</div>
								<span>Express.js</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=mongodb"
										alt="MongoDB"
										width={28}
										height={28}
									/>
								</div>
								<span>MongoDB</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="/images/Socket.png"
										alt="Socket.io"
										className="bg-slate-50 rounded-full"
										width={28}
										height={28}
									/>
								</div>
								<span>Socket.io</span>
							</div>
						</div>
					</div>

					{/* Tools & Services */}
					<div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
						<div className="flex justify-center mb-3">
							<Wrench className="h-6 w-6 text-primary" />
						</div>
						<h3 className="mb-12 text-xl font-semibold">Tools & Services</h3>
						<div className="flex flex-col gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=git"
										alt="Git"
										width={28}
										height={28}
									/>
								</div>
								<span>Git</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=github"
										alt="Github"
										width={28}
										height={28}
									/>
								</div>
								<span>Github</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=vscode"
										alt="VSCode"
										width={28}
										height={28}
									/>
								</div>
								<span>VSCode</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=firebase"
										alt="Firebase"
										width={28}
										height={28}
									/>
								</div>
								<span>Firebase</span>
							</div>
							<div className="flex items-center gap-6">
								<div className="flex justify-end w-1/3">
									<Image
										src="https://skillicons.dev/icons?i=vercel"
										alt="Vercel"
										width={28}
										height={28}
									/>
								</div>
								<span>Vercel</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="container mx-auto py-16">
				<h2 className="mb-8 text-3xl font-semibold text-center">Experience</h2>
				<div className="max-w-2xl mx-auto space-y-6">
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

			{/* Education Section */}
			<section className="container mx-auto py-16">
				<h2 className="mb-8 text-3xl font-semibold text-center">Education</h2>
				<div className="max-w-2xl mx-auto space-y-6">
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

			{/* About Me */}
			<section className="container mx-auto py-16">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="mb-4 text-3xl font-semibold">About Me</h2>
					<p className="text-muted-foreground leading-relaxed text-lg">
						I'm a passionate frontend developer who loves building scalable and
						user-friendly web apps. My journey started with freelancing, solving bugs
						and implementing features, and has grown into developing full-stack projects
						with modern tools and frameworks.
						<br /> <br />I focus on crafting clean UIs, smooth user experiences, and
						writing maintainable code that delivers real impact.
					</p>
					<div className="mt-6">
						<Button asChild>
							<Link href="/about">Read More</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomePage;
