import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedRole from "@/components/animated-role";

const HomePage = () => {
	return (
		<section className="relative flex-1 flex items-center justify-center px-4 py-12 md:py-0">
			<div className="container mx-auto max-w-7xl">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-6">
						{/* Available for Freelance Badge */}
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
							<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
							<span className="text-sm font-medium">Available for Freelance</span>
						</div>

						{/* Main Heading */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
							Hi, I'm{" "}
							<span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
								Tushar Biswas
							</span>
						</h1>

						{/* Animated Role */}
						<AnimatedRole />

						{/* Description */}
						<p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
							I design and build modern web applications with clean UI and solid
							architecture. Focused on creating fast, responsive, and user-friendly
							solutions that deliver real impact.
						</p>

						{/* Action Buttons */}
						<div className="flex flex-wrap gap-4 pt-4">
							<Button asChild size="lg" className="font-medium">
								<Link href="/projects">View My Projects</Link>
							</Button>

							<Button variant="outline" asChild size="lg" className="font-medium">
								<Link
									href="/Tushar_Biswas_Full_Stack_Developer.pdf"
									target="_blank"
								>
									Download Resume
								</Link>
							</Button>
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
								className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-full opacity-20"
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