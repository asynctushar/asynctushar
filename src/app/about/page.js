import Image from "next/image";
import { Code, Briefcase, GraduationCap, Mouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
	title: "About Me | Tushar Biswas - MERN Stack & Next.js Developer",
	description:
		"Learn more about Tushar Biswas, a MERN Stack & Next.js developer with freelancing experience, full-stack projects, and a passion for building scalable web apps.",
	keywords: [
		"About Tushar Biswas",
		"Tushar Biswas developer",
		"MERN stack developer",
		"Next.js developer",
		"React developer",
		"freelance developer",
		"full stack developer",
	],
	openGraph: {
		title: "About Tushar Biswas | MERN Stack & Next.js Developer",
		description:
			"Discover Tushar Biswas's journey as a MERN Stack & Next.js developer — from freelancing on Fiverr to delivering full-stack projects with React, Node.js, and MongoDB.",
		url: "https://asynctushar.vercel.app/about",
		siteName: "Tushar Biswas Portfolio",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "About Tushar Biswas Portfolio",
			},
		],
		locale: "en_US",
		type: "profile",
	},
	twitter: {
		card: "summary_large_image",
		title: "About Tushar Biswas | MERN Stack & Next.js Developer",
		description:
			"Explore the background and skills of Tushar Biswas, a MERN Stack & Next.js developer passionate about building scalable, user-friendly applications.",
		images: ["/og-image.png"],
	},
};



const skills = {
	languages: [
		{ name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
		{ name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
	],
	frontend: [
		{ name: "React", icon: "https://skillicons.dev/icons?i=react" },
		{ name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
		{ name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
		{ name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
		{ name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
		{ name: "Shadcn UI", icon: "/images/shadcn-ui.png" },
	],
	backend: [
		{ name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
		{ name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
		{ name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
		{ name: "Socket.io", icon: "/images/Socket.png" },
	],
	tools: [
		{ name: "Git", icon: "https://skillicons.dev/icons?i=git" },
		{ name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
		{ name: "VSCode", icon: "https://skillicons.dev/icons?i=vscode" },
		{ name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
		{ name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
	],
};

const AboutPage = () => {
	return (
		<main>
			{/* Hero Section - Full Height */}
			<section className="min-h-[calc(100vh-4rem)] flex items-center">
				<div className="container mx-auto px-4 py-12">
					<div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
						{/* Left - Profile Image */}
						<div className="flex justify-center lg:justify-start order-1 lg:order-1">
							<div className="relative">
								{/* Decorative background shapes */}
								<div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
								<div
									className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-purple-600/30 to-blue-600/30 rounded-2xl"
									style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
								></div>

								{/* Profile Image Container */}
								<div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
									<div className="absolute inset-0 rounded-2xl border-4 border-background shadow-2xl overflow-hidden">
										<Image
											src="/images/profile.png"
											alt="Tushar Biswas"
											fill
											className="object-cover"
											priority
										/>
									</div>
									{/* Corner accent */}
									<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-80 -z-10"></div>
								</div>
							</div>
						</div>

						{/* Right - About Content */}
						<div className="order-2 lg:order-2 space-y-6">
							<div>
								<h1 className="text-4xl sm:text-5xl font-bold mb-4">
									About Me
								</h1>
								<div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-full mb-6"></div>
							</div>

							<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
								I'm <span className="font-semibold text-foreground">Tushar Biswas</span>, a
								full-stack developer specializing in building modern, scalable web applications.
								With expertise in the MERN stack, I create seamless experiences from frontend to backend.
							</p>
							<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
								I started by freelancing on Fiverr, then expanded into building full-stack
								projects like hotel booking and task management apps. My goal is to contribute
								to impactful projects as a developer, while constantly sharpening my skills.
							</p>


							<div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
								<Button asChild size="lg">
									<a href="#skills" className="smooth-scroll">
										<Code className="w-4 h-4 mr-2" />
										View My Skills
									</a>
								</Button>
								<Button variant="outline" asChild size="lg">
									<Link href="/projects">
										View Projects
									</Link>
								</Button>
								<Button variant="outline" asChild size="lg" >
									<Link href="/contact">
										Get In Touch
									</Link>
								</Button>
							</div>
						</div>
					</div>

					{/* Scroll Indicator - Mouse Icon */}
					<div className="md:flex md:justify-center hidden mt-40">
						<a href="#skills" className="smooth-scroll flex flex-col items-center gap-2 group">
							<Mouse className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors animate-bounce" />
							<span className="text-xs text-muted-foreground">Scroll</span>
						</a>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="container min-h-[calc(100vh-4rem)] mx-auto px-4 py-16 max-w-5xl">
				<div className="container mx-auto px-4 py-12">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-semibold mb-3">Tech Stack</h2>
						<p className="text-muted-foreground">Technologies and tools I work with</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Languages */}
						<div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
							<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
								<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
									<Code className="h-5 w-5 text-primary" />
								</div>
								Languages
							</h3>
							<div className="flex flex-wrap gap-3">
								{skills.languages.map((skill) => (
									<div
										key={skill.name}
										className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-background hover:border-primary/50 hover:shadow-sm transition-all"
									>
										<Image src={skill.icon} alt={skill.name} width={20} height={20} />
										<span className="text-sm font-medium">{skill.name}</span>
									</div>
								))}
							</div>
						</div>

						{/* Frontend */}
						<div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
							<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
								<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
									<svg
										className="h-5 w-5 text-primary"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								Frontend
							</h3>
							<div className="flex flex-wrap gap-2">
								{skills.frontend.map((skill) => (
									<div
										key={skill.name}
										className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-background hover:border-primary/50 hover:shadow-sm transition-all"
									>
										<Image src={skill.icon} alt={skill.name} width={20} height={20} />
										<span className="text-sm font-medium">{skill.name}</span>
									</div>
								))}
							</div>
						</div>

						{/* Backend */}
						<div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
							<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
								<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
									<svg
										className="h-5 w-5 text-primary"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
										/>
									</svg>
								</div>
								Backend
							</h3>
							<div className="flex flex-wrap gap-3">
								{skills.backend.map((skill) => (
									<div
										key={skill.name}
										className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-background hover:border-primary/50 hover:shadow-sm transition-all"
									>
										<Image
											src={skill.icon}
											alt={skill.name}
											width={20}
											height={20}
											className={skill.name === "Socket.io" ? "bg-slate-50 rounded-full" : ""}
										/>
										<span className="text-sm font-medium">{skill.name}</span>
									</div>
								))}
							</div>
						</div>

						{/* Tools */}
						<div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
							<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
								<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
									<svg
										className="h-5 w-5 text-primary"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								Tools & Services
							</h3>
							<div className="flex flex-wrap gap-2">
								{skills.tools.map((skill) => (
									<div
										key={skill.name}
										className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-background hover:border-primary/50 hover:shadow-sm transition-all"
									>
										<Image src={skill.icon} alt={skill.name} width={20} height={20} />
										<span className="text-sm font-medium">{skill.name}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Scroll Indicator */}
					<div className="md:justify-center mt-24 hidden md:flex">
						<a href="#experience" className="smooth-scroll flex flex-col items-center gap-2 group">
							<Mouse className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors animate-bounce" />
							<span className="text-xs text-muted-foreground">Scroll</span>
						</a>
					</div>
				</div>
			</section>

			{/* Experience */}
			<section id="experience" className="container mx-auto px-4 py-16 max-w-5xl min-h-[calc(100vh-4rem)]">
				<h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
				<div className="rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow">
					<div className="flex items-start gap-4 mb-6">
						<div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
							<Briefcase className="h-7 w-7 text-primary" />
						</div>
						<div className="flex-1">
							<h3 className="font-semibold text-xl mb-1">Freelance MERN Stack Developer</h3>
							<p className="text-sm text-muted-foreground mb-4">Fiverr · Jan 2023 - Present · 2 years</p>
							<p className="text-sm text-muted-foreground mb-4 leading-relaxed">
								Building full-stack web applications for international clients, specializing in
								React, Next.js, Node.js, Express, and MongoDB. Consistently delivering high-quality
								solutions that meet client requirements and exceed expectations.
							</p>
						</div>
					</div>
					<div className="border-t pt-4 mt-4">
						<h4 className="font-semibold text-sm mb-3">Key Achievements:</h4>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li className="flex gap-3">
								<span className="text-primary mt-0.5 font-bold">•</span>
								<span>
									Successfully delivered 25+ projects for global clients, maintaining a 100% client
									satisfaction rate with consistent 5-star reviews
								</span>
							</li>
							<li className="flex gap-3">
								<span className="text-primary mt-0.5 font-bold">•</span>
								<span>
									Developed complex full-stack applications including a hotel booking platform with
									payment integration, real-time chat application with Socket.io, and interactive
									quiz systems with dynamic scoring
								</span>
							</li>
							<li className="flex gap-3">
								<span className="text-primary mt-0.5 font-bold">•</span>
								<span>
									Collaborated directly with non-technical clients to gather requirements, provide
									technical guidance, and transform ideas into fully functional, production-ready products
								</span>
							</li>
							<li className="flex gap-3">
								<span className="text-primary mt-0.5 font-bold">•</span>
								<span>
									Implemented responsive designs using Tailwind CSS and Material UI, ensuring seamless
									user experiences across all devices and screen sizes
								</span>
							</li>
						</ul>
					</div>
				</div>
				{/* Scroll Indicator */}
				<div className="md:justify-center mt-24 hidden md:flex">
					<a href="#education" className="smooth-scroll flex flex-col items-center gap-2 group">
						<Mouse className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors animate-bounce" />
						<span className="text-xs text-muted-foreground">Scroll</span>
					</a>
				</div>
			</section>

			{/* Education */}
			<section id="education" className="container mx-auto px-4 pt-16 pb-40 max-w-5xl">
				<h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>
				<div className="rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow">
					<div className="flex items-start gap-4 mb-6">
						<div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
							<GraduationCap className="h-7 w-7 text-primary" />
						</div>
						<div className="flex-1">
							<h3 className="font-semibold text-xl mb-1">Bachelor of Science in Textile Engineering</h3>
							<p className="text-sm text-muted-foreground mb-4">
								Barishal Textile Engineering College · 2018 - 2022
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Completed a comprehensive 4-year degree program specializing in Wet Process Engineering.
								Developed strong analytical and problem-solving skills through rigorous coursework in
								engineering principles, chemistry, and process optimization.
							</p>
						</div>
					</div>
					<div className="border-t pt-4 mt-4">
						<h4 className="font-semibold text-sm mb-3">Relevant Skills Developed:</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li className="flex gap-3">
								<span className="text-primary mt-0.5 font-bold">•</span>
								<span>
									Analytical thinking and systematic problem-solving approach, directly applicable to
									debugging and optimizing web applications
								</span>
							</li>
							<li className="flex gap-3">
								<span className="text-primary mt-0.5 font-bold">•</span>
								<span>
									Process flow understanding and optimization, which translates well to designing
									efficient data flows and application architectures
								</span>
							</li>
							<li className="flex gap-3">
								<span className="text-primary mt-0.5 font-bold">•</span>
								<span>
									Strong foundation in mathematics and logical reasoning, essential for algorithmic
									thinking in software development
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
};

export default AboutPage;