"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/projects", label: "Projects" },
	{ href: "/case-studies", label: "Case Studies" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="font-bold text-lg">
					Tushar<span className="text-primary">.dev</span>
				</Link>

				{/* Links */}
				<div className="hidden md:flex items-center space-x-6">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`transition-colors ${
								pathname === item.href
									? "text-primary font-medium"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							{item.label}
						</Link>
					))}
				</div>

				{/* Right actions */}
				<div className="flex items-center gap-3">
					<Button size="sm" asChild>
						<Link href="/resume.pdf" target="_blank">
							Resume
						</Link>
					</Button>
					<ModeToggle />
				</div>
			</div>
		</nav>
	);
}
