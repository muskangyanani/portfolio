import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://muskangyanani.vercel.app/"),

	title: "Muskan Gyanani",
	authors: {
		name: "Muskan Gyanani",
	},

	description:
		"AI-Native Full-Stack Engineer building production AI products with React and Node.js. Specializing in agentic AI, LLM integrations, and automation at a fast-moving SaaS startup.",
	openGraph: {
		title: "Muskan Gyanani",
		description:
			"AI-Native Full-Stack Engineer building production AI products with React and Node.js. Specializing in agentic AI, LLM integrations, and automation at a fast-moving SaaS startup.",
		url: "https://muskangyanani.vercel.app/",
		siteName: "muskangyanani",
		images: "/portfolio.png",
		type: "website",
	},
	keywords: ["muskan", "muskangyanani","portfolio","aceternityUI", "website"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
			<html lang="en" suppressHydrationWarning>
				<head>
					<link rel="icon" href="/favicon.ico" />
				</head>
				<body className={spaceGrotesk.className}>
					<ThemeProvider
							attribute="class"
							defaultTheme="dark"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
				</body>
			</html>
  );
}
