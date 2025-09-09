import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

// Fonts
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// SEO metadata
export const metadata = {
	title: "Tushar Biswas | Full-Stack Developer",
	description:
		"Portfolio of Tushar Biswas — full-stack developer specializing in React, Next.js, Node.js, and modern UI/UX. Explore projects, case studies, and open-source work.",
	metadataBase: new URL("https://asynctushar.vercel.app"),
	keywords: [
		"Tushar Biswas",
		"Full Stack Developer",
		"React",
		"Next.js",
		"Node.js",
		"MERN",
		"Frontend",
		"Backend",
		"Portfolio",
	],
	authors: [{ name: "Tushar Biswas" }],
	creator: "Tushar Biswas",
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png" }],
	},
	openGraph: {
		title: "Tushar Biswas | Full-Stack Developer",
		description:
			"Portfolio showcasing projects, skills, and case studies in full-stack development.",
		url: "https://asynctushar.vercel.app",
		siteName: "Tushar Biswas Portfolio",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Tushar Biswas Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tushar Biswas | Full-Stack Developer",
		description:
			"Portfolio of Tushar Biswas — React, Next.js, Node.js, and modern web development.",
		images: ["/og-image.png"],
		creator: "@asynctushar",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<div className="flex min-h-screen flex-col px-2 sm:px-4 md:px-8">
						<Navbar />
						<main className="flex-1 flex flex-col">{children}</main>
						<Footer />
						<Toaster richColors position="top-right" duration={3000} closeButton />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
