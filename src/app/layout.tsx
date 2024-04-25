import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: '--font-bricolage'
});

export const metadata: Metadata = {
  title: "Edson Lucas",
  description: "Desenvolvedor FrontEnd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bricolageGrotesque.variable}`}>{children}</body>
    </html>
  );
}
