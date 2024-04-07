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
		"A second year BTech student passionate about Computer Science and development. Proficient in front-end technologies and eager to delve into back-end development, I am enthusiastic about learning new technologies to enhance my skills further.",
	openGraph: {
		title: "Muskan Gyanani",
		description:
			"A second year BTech student passionate about Computer Science and development. Proficient in front-end technologies and eager to delve into back-end development, I am enthusiastic about learning new technologies to enhance my skills further.",
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
