"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/projects", label: "Projects" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="font-bold text-xl">
					<span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
						Tushar
					</span>
					<span className="text-foreground">.dev</span>
				</Link>

				{/* Desktop Links */}
				<div className="hidden md:flex items-center space-x-8">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`transition-colors font-medium ${pathname === item.href
									? "text-primary"
									: "text-muted-foreground hover:text-foreground"
								}`}
						>
							{item.label}
						</Link>
					))}
				</div>

				{/* Right actions */}
				<div className="flex items-center gap-3">
					<Button size="sm" asChild className="hidden sm:flex">
						<Link href="/Tushar_Biswas_Full_Stack_Developer.pdf" target="_blank">
							Resume
						</Link>
					</Button>
					<ModeToggle />

					{/* Mobile Drawer */}
					<Drawer direction="right" open={open} onOpenChange={setOpen}>
						<DrawerTrigger asChild className="md:hidden">
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
							</Button>
						</DrawerTrigger>
						<DrawerContent className="h-full w-[300px] ml-auto">
							<DrawerHeader className="text-left">
								<div className="flex items-center justify-between">
									<DrawerTitle>Menu</DrawerTitle>
									<DrawerClose asChild>
										<Button variant="ghost" size="icon">
											<X className="h-5 w-5" />
										</Button>
									</DrawerClose>
								</div>
							</DrawerHeader>
							<div className="px-4 py-4 space-y-4">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setOpen(false)}
										className={`block py-3 text-lg transition-colors ${pathname === item.href
												? "text-primary font-semibold"
												: "text-muted-foreground hover:text-foreground"
											}`}
									>
										{item.label}
									</Link>
								))}
								<div className="pt-4 border-t">
									<Link
										href="/Tushar_Biswas_Full_Stack_Developer.pdf"
										target="_blank"
										onClick={() => setOpen(false)}
									>
										<Button className="w-full">Download Resume</Button>
									</Link>
								</div>
							</div>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</nav>
	);
}