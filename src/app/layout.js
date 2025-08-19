import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
	openGraph: {
		title: "Tushar Biswas | Full-Stack Developer",
		description:
			"Portfolio showcasing projects, skills, and case studies in full-stack development.",
		url: "https://asynctushar.vercel.app", // update when you buy domain
		siteName: "Tushar Biswas Portfolio",
		images: [
			{
				url: "/og-image.png", // create later (1200x630px preview)
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
		creator: "@asynctushar", // optional
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
