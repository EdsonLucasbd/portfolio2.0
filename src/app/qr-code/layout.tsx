import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QrCode Generator | Edson Lucas",
  description: "Gere seu QrCode de forma simples e rapida!",
};

export default function QrCodeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}