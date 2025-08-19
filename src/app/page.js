import Navbar from "@/components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Code, Layout, Server, Wrench } from "lucide-react";

const HomePage = () => {
	return (
		<div className="px-2 sm:px-4 md:px-8">
			<Navbar />

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

			{/* About Me */}
			<section className="container mx-auto py-16">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="mb-4 text-3xl font-semibold">About Me</h2>
					<p className="text-muted-foreground leading-relaxed text-lg">
						I’m a passionate frontend developer who loves building scalable and
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

			{/* Skills / Tech Stack */}
			<section className="container mx-auto py-20">
				<h2 className="mb-10 text-3xl font-bold text-center">Tech Stack</h2>

				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center">
					{/* Languages */}
					<div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
						<div className="flex justify-center mb-3">
							<Code className="h-6 w-6 text-primary" />
						</div>
						<h3 className="mb-4 text-xl font-semibold">Languages</h3>
						<div className="flex flex-col gap-3 text-muted-foreground">
							<span>JavaScript</span>
							<span>TypeScript</span>
						</div>
					</div>

					{/* Frontend */}
					<div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
						<div className="flex justify-center mb-3">
							<Layout className="h-6 w-6 text-primary" />
						</div>
						<h3 className="mb-4 text-xl font-semibold">Front-End</h3>
						<div className="grid grid-cols-2 gap-4 place-items-center text-sm text-muted-foreground">
							<Image src="/icons/react.svg" alt="React" width={28} height={28} />
							<span>React</span>
							<Image src="/icons/nextjs.svg" alt="Next.js" width={28} height={28} />
							<span>Next.js</span>
							<Image src="/icons/redux.svg" alt="Redux" width={28} height={28} />
							<span>Redux Toolkit</span>
							<Image
								src="/icons/tailwind.svg"
								alt="Tailwind"
								width={28}
								height={28}
							/>
							<span>Tailwind CSS</span>
							<Image src="/icons/mui.svg" alt="MUI" width={28} height={28} />
							<span>Material UI</span>
							<Image src="/icons/shadcn.svg" alt="Shadcn" width={28} height={28} />
							<span>Shadcn</span>
						</div>
					</div>

					{/* Backend */}
					<div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
						<div className="flex justify-center mb-3">
							<Server className="h-6 w-6 text-primary" />
						</div>
						<h3 className="mb-4 text-xl font-semibold">Back-End</h3>
						<div className="grid grid-cols-2 gap-4 place-items-center text-sm text-muted-foreground">
							<Image src="/icons/nodejs.svg" alt="Node.js" width={28} height={28} />
							<span>Node.js</span>
							<Image
								src="/icons/express.svg"
								alt="Express.js"
								width={28}
								height={28}
							/>
							<span>Express.js</span>
							<Image src="/icons/mongodb.svg" alt="MongoDB" width={28} height={28} />
							<span>MongoDB</span>
						</div>
					</div>

					{/* Tools & Services */}
					<div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
						<div className="flex justify-center mb-3">
							<Wrench className="h-6 w-6 text-primary" />
						</div>
						<h3 className="mb-4 text-xl font-semibold">Tools & Services</h3>
						<div className="grid grid-cols-2 gap-4 place-items-center text-sm text-muted-foreground">
							<Image src="/icons/git.svg" alt="Git" width={28} height={28} />
							<span>Git</span>
							<Image src="/icons/vscode.svg" alt="VSCode" width={28} height={28} />
							<span>VSCode</span>
							<Image
								src="/icons/firebase.svg"
								alt="Firebase"
								width={28}
								height={28}
							/>
							<span>Firebase</span>
							<Image src="/icons/stripe.svg" alt="Stripe" width={28} height={28} />
							<span>Stripe</span>
							<Image src="/icons/vercel.svg" alt="Vercel" width={28} height={28} />
							<span>Vercel</span>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t py-8 text-center text-sm text-muted-foreground">
				<div className="flex justify-center gap-6 mb-3">
					<Link href="https://github.com/yourusername" target="_blank">
						GitHub
					</Link>
					<Link href="https://linkedin.com/in/yourusername" target="_blank">
						LinkedIn
					</Link>
					<Link href="https://fiverr.com/yourusername" target="_blank">
						Fiverr
					</Link>
					<Link href="mailto:youremail@example.com">Email</Link>
				</div>
				© {new Date().getFullYear()} Tushar Biswas. All rights reserved.
			</footer>
		</div>
	);
};

export default HomePage;
