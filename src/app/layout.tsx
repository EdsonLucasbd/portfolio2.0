import type { Metadata, Viewport } from "next";
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
	metadataBase: new URL('https://oedsonlucas.com.br'),
	title: 'Edson Lucas | Portfólio',
	description: 'Portfólio Desenvolvedor FrontEnd',
	creator: 'Edson Lucas',
	keywords: [
		'Desenvolvedor', 'Desenvolvedor front-end', 'Desenvolvedor front end',
		'Desenvolvedor React', 'Desenvolvedor Javascript', 'Portfólio', 'Portfólio desenvolvedor',
		'Portfólio front-end', 'Portfólio front end', 'Portfólio desenvolvedor front-end',
		'Portfólio desenvolvedor front end', 'Front-end', 'Front end', 'Front-end freelancer',
		'Front end freelancer'
	],
	openGraph: {
		title: 'Edson Lucas | Portfólio',
		description: 'Portfólio Desenvolvedor FrontEnd',
		url: 'https://oedsonlucas.com.br',
		images: '/og-image.svg',
		locale: 'pt_BR',
		type: 'website',
	},
};

export const viewport: Viewport = {
	themeColor: 'black',
}

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
