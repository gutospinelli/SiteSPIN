import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPIN — Software Prático e Inteligente | PDV SPIN e Clínica SPIN",
  description:
    "Tecnologia direta ao ponto: gestão rápida, segura e sem complicação para o comércio e consultórios. 100% offline, sem mensalidades e com soberania de dados (Zero Nuvem).",
  keywords: [
    "PDV SPIN",
    "Clínica SPIN",
    "Software de Gestão Comercial",
    "Frente de Caixa Offline",
    "Prontuário Eletrônico LGPD",
    "Software sem mensalidade",
    "Sistema para consultório médico",
    "SPIN Software",
  ],
  authors: [{ name: "SPIN - Software Prático e Inteligente" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
