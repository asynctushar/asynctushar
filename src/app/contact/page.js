"use client";

import { useState } from "react";
import { Mail, Linkedin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";


const contactLinks = [
	{
		href: "mailto:tusarbiswas888@gmail.com",
		icon: Mail,
		label: "Email",
		value: "tusarbiswas888@gmail.com",
	},
	{
		href: "tel:+8801705520909",
		icon: Phone,
		label: "Phone",
		value: "+880 170 5520 909",
	},
	{
		href: "https://twitter.com/asynctushar",
		icon: null,
		image: "/images/x.png",
		label: "X (Twitter)",
		value: "@asynctushar",
		external: true,
	},
	{
		href: "https://linkedin.com/in/asynctushar",
		icon: Linkedin,
		label: "LinkedIn",
		value: "asynctushar",
		external: true,
	},
];

export default function ContactPage() {
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);

		const formData = new FormData(e.target);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		try {
			const res = await fetch("/api/message", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (res.ok) {
				toast.success("Message sent successfully 🚀");
				e.target.reset();
			} else {
				const err = await res.json();
				toast.error(err.error || "Something went wrong. Please try again.");
			}
		} catch (error) {
			toast.error("Network error. Please try again later.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<section className="flex-1 flex items-center justify-center py-8 px-4">
			<div className="w-full max-w-2xl">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-2xl sm:text-4xl font-bold mb-3">
						Let's Work Together
					</h1>
					<p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
						Have a project in mind? Drop me a message and I'll get back to you soon.
					</p>
				</div>

				{/* Contact Form */}
				<div className="rounded-2xl border bg-card shadow-sm p-6 mb-6">
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label htmlFor="name" className="block text-sm font-medium mb-2">
								Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								placeholder="John Doe"
								className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
								required
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-2">
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								placeholder="john@example.com"
								className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
								required
							/>
						</div>
						<div>
							<label htmlFor="message" className="block text-sm font-medium mb-2">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								placeholder="Tell me about your project or inquiry..."
								rows={4}
								className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
								required
							></textarea>
						</div>
						<Button type="submit" className="w-full" size="lg" disabled={loading}>
							{loading ? (
								<>
									<span className="animate-pulse">Sending...</span>
								</>
							) : (
								<>
									<Send className="w-4 h-4 mr-2" />
									Send Message
								</>
							)}
						</Button>
					</form>
				</div>

				{/* Quick Contact Links */}
				<div className="space-y-3">
					<p className="text-center text-sm text-muted-foreground my-5">
						Or reach out directly via
					</p>
					<div className="grid sm:grid-cols-2 gap-2 mb-16">
						{contactLinks.map((link) => {
							const Icon = link.icon;
							const Component = link.external ? "a" : Link;
							const props = link.external
								? { target: "_blank", rel: "noopener noreferrer" }
								: {};

							return (
								<Component
									key={link.label}
									href={link.href}
									{...props}
									className="group flex items-center gap-3 rounded-lg border bg-card p-3 transition-all hover:border-primary/50 hover:shadow-md"
								>
									{Icon ? (
										<Icon className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
									) : (
										<Image
											src={link.image}
											alt={link.label}
											width={24}
											height={24}
											className="w-8 h-8 transition-transform group-hover:scale-110"
										/>
									)}
									<div className="flex flex-col min-w-0">
										<span className="text-sm text-muted-foreground">
											{link.label}
										</span>
										<span className="text-sm font-medium truncate">
											{link.value}
										</span>
									</div>
								</Component>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}