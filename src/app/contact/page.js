"use client";

import { useState } from "react";
import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";


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
				toast.success("Message sent successfully 🚀"
				);
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
		<section className="max-w-3xl mx-auto py-16 px-4">
			{/* Header */}
			<h1 className="text-3xl font-bold text-center mb-4">Let’s Connect</h1>
			<p className="text-center text-muted-foreground mb-10">
				Whether you have a project in mind, a question, or just want to say hi — my inbox is
				always open. I'll try my best to get back to you!
			</p>

			{/* Contact Info */}
			<div className="grid gap-6 sm:grid-cols-2 mb-12">
				<a
					href="mailto:tusarbiswas888@gmail.com"
					className="flex items-center gap-3 rounded-lg border p-4 hover:bg-muted transition"
				>
					<Mail className="w-5 h-5 text-primary" />
					<span>tusarbiswas888@gmail.com</span>
				</a>
				<a
					href="tel:+8801705520909"
					className="flex items-center gap-3 rounded-lg border p-4 hover:bg-muted transition"
				>
					<Phone className="w-5 h-5 text-primary" />
					<span>+880 170 5520 909</span>
				</a>
				<a
					href="https://twitter.com/asynctushar"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 rounded-lg border p-4 hover:bg-muted transition"
				>
					<Image src="/images/x.png" className="w-8 h-8" width={20} height={20} />
					<span>X</span>
				</a>
				<a
					href="https://linkedin.com/in/asynctushar"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 rounded-lg border p-4 hover:bg-muted transition"
				>
					<Linkedin className="w-5 h-5 text-primary" />
					<span>LinkedIn</span>
				</a>
			</div>

			{/* Contact Form */}
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label htmlFor="name" className="block text-sm font-medium">
						Name
					</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Your name"
						className="mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring focus:ring-primary/30"
						required
					/>
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium">
						Email
					</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Your email"
						className="mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring focus:ring-primary/30"
						required
					/>
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						placeholder="Tell me about your project or inquiry..."
						rows={5}
						className="mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring focus:ring-primary/30"
						required
					></textarea>
				</div>
				<Button type="submit" className="w-full" disabled={loading}>
					{loading ? "Sending..." : "Send Message"}
				</Button>
			</form>
		</section>
	);
}
