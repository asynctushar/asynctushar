import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedRole from "@/components/animated-role";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/asynctushar",
		icon: Github,
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/in/asynctushar",
		icon: Linkedin,
	},
	{
		name: "Email",
		href: "mailto:tusarbiswas888@gmail.com",
		icon: Mail,
	},
];

const HomePage = () => {
	return (
		<section className="min-h-[calc(100vh-4rem)] flex items-start justify-center px-4 pt-12 sm:pt-16 lg:pt-24">
			<div className="container mx-auto max-w-7xl">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
					{/* Left Content */}
					<div className="space-y-5 sm:space-y-6">
						{/* Available for Freelance Badge */}
						<div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 bg-primary/5">
							<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
							<span className="text-xs sm:text-sm font-medium">Open to work</span>
						</div>

						{/* Main Heading */}
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
							Hi, I'm{" "}
							<span className="bg-gradient-to-r from-primary to-purple-600  bg-clip-text text-transparent">
								Tushar Biswas
							</span>
						</h1>

						{/* Animated Role */}
						<AnimatedRole />

						{/* Description */}
						<p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
							I design and build modern web applications with clean UI and solid
							architecture. Focused on creating fast, responsive, and user-friendly
							solutions that deliver real impact.
						</p>

						{/* Action Buttons */}
						<div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
							<Button asChild className="font-medium text-sm sm:text-base">
								<Link href="/projects">View My Projects</Link>
							</Button>

							<Button variant="outline" asChild className="font-medium text-sm sm:text-base">
								<Link
									href="/Tushar_Biswas_Full_Stack_Developer.pdf"
									target="_blank"
								>
									Download Resume
								</Link>
							</Button>
						</div>

						{/* Social Links */}
						<div className="flex items-center gap-3 pt-2 sm:pt-4">
							<div className="flex gap-2 sm:gap-3">
								{socialLinks.map((social) => {
									const Icon = social.icon;
									return (
										<a
											key={social.name}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border bg-background hover:bg-muted hover:border-primary/50 flex items-center justify-center transition-all group"
											aria-label={social.name}
										>
											<Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
										</a>
									);
								})}
							</div>
						</div>
					</div>

					{/* Right Image - Hidden on mobile, shown on md and up */}
					<div className="hidden md:flex justify-center md:justify-end">
						<div className="relative">
							{/* Decorative Elements */}
							<div
								className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-600/20 to-blue-600/20 rounded-full blur-2xl"
								style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
							/>
							<div
								className="absolute -inset-2 bg-gradient-to-r from-primary to-purple-600  rounded-full opacity-20"
								style={{ animation: 'spin 8s linear infinite' }}
							/>

							{/* Profile Image */}
							<div className="relative w-80 h-80 lg:w-96 lg:h-96">
								<div className="absolute inset-0 rounded-full border-4 border-primary/30" />
								<Image
									src="/images/profile.png"
									alt="Tushar Biswas"
									fill
									className="rounded-full object-cover border-8 border-background shadow-2xl"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomePage;