// app/contact/page.js
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
	title: "Contact | Tushar Biswas",
	description:
		"Get in touch with Tushar Biswas for collaborations, opportunities, or freelance work.",
};

export default function ContactPage() {
	return (
		<section className="max-w-3xl mx-auto py-16">
			{/* Header */}
			<h1 className="text-3xl font-bold text-center mb-4">Let’s Connect</h1>
			<p className="text-center text-muted-foreground mb-10">
				Whether you have a project in mind, a question, or just want to say hi — my inbox is
				always open. I’ll try my best to get back to you!
			</p>

			{/* Contact Info */}
			<div className="grid gap-6 sm:grid-cols-2 mb-12">
				<a
					href="mailto:youremail@example.com"
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
					href="https://github.com/yourusername"
					target="_blank"
					className="flex items-center gap-3 rounded-lg border p-4 hover:bg-muted transition"
				>
					<Github className="w-5 h-5 text-primary" />
					<span>GitHub</span>
				</a>
				<a
					href="https://linkedin.com/in/yourusername"
					target="_blank"
					className="flex items-center gap-3 rounded-lg border p-4 hover:bg-muted transition"
				>
					<Linkedin className="w-5 h-5 text-primary" />
					<span>LinkedIn</span>
				</a>
			</div>

			{/* Contact Form */}
			<form className="space-y-6">
				<div>
					<label htmlFor="name" className="block text-sm font-medium">
						Name
					</label>
					<input
						id="name"
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
						placeholder="Tell me about your project or inquiry..."
						rows={5}
						className="mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring focus:ring-primary/30"
						required
					></textarea>
				</div>
				<Button type="submit" className="w-full">
					Send Message
				</Button>
			</form>
		</section>
	);
}
