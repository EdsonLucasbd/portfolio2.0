import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({
	subsets: ["latin"],
	variable: "--font-bricolage",
});

export const metadata: Metadata = {
	title: "Edson Lucas | Portfólio",
	description: "Desenvolvedor FrontEnd",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.className} ${bricolageGrotesque.variable}`}>
				<div>
					{children}
					<Footer />
				</div>
				<Toaster />
			</body>
		</html>
	);
}
