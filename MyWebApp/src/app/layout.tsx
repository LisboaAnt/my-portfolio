import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antônio Lisboa",
  description: "Especializado em tecnologias como React, TypeScript, JavaScript e Next. Antônio Lisboa é um cientista da computação apaixonado por desenvolvimento de aplicativos web, ele dá aulas, cursos e vídeos pelo YouTube.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
