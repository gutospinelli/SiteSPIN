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
  metadataBase: new URL("https://sitespin.vercel.app"),
  title: "PDV Spin & Clínica Spin | Sistemas de Gestão Sem Mensalidade (Licença Vitalícia)",
  description:
    "Sistemas de Frente de Caixa (PDV), Controle de Estoque e Gestão para Clínicas e Consultórios com pagamento único. Simples, modernos e sem mensalidades. A partir de R$ 40.",
  keywords:
    "sistema pdv sem mensalidade, frente de caixa pagamento unico, sistema para clinica vitalicio, software consultorio sem mensalidade, pdv spin, clinica spin, controle de estoque barato",
  authors: [{ name: "SPIN - Software Prático e Inteligente" }],
  alternates: {
    canonical: "https://sitespin.vercel.app",
  },
  openGraph: {
    title: "PDV Spin & Clínica Spin | Sistemas de Gestão Sem Mensalidade (Licença Vitalícia)",
    description:
      "Sistemas de Frente de Caixa (PDV), Controle de Estoque e Gestão para Clínicas e Consultórios com pagamento único. Simples, modernos e sem mensalidades. A partir de R$ 40.",
    url: "https://sitespin.vercel.app",
    siteName: "SPIN - Software Prático e Inteligente",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDV Spin & Clínica Spin | Sistemas de Gestão Sem Mensalidade (Licença Vitalícia)",
    description:
      "Sistemas de Frente de Caixa (PDV), Controle de Estoque e Gestão para Clínicas e Consultórios com pagamento único. A partir de R$ 40.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Product", "SoftwareApplication"],
      name: "PDV Spin - Sistema PDV Frente de Caixa e Estoque Sem Mensalidade",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows 10, Windows 11, macOS",
      description:
        "Sistema de Frente de Caixa (PDV), Controle de Estoque, Fechamento de Caixa Cego, QR Code PIX e Crediário com pagamento único e licença vitalícia 100% offline, sem mensalidade.",
      brand: {
        "@type": "Brand",
        name: "SPIN - Software Prático e Inteligente",
      },
      offers: {
        "@type": "Offer",
        url: "https://sitespin.vercel.app/pdv-spin",
        priceCurrency: "BRL",
        price: "40.00",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        description: "Licença Vitalícia de Pagamento Único • Zero Mensalidade • Entrega Digital Imediata",
      },
    },
    {
      "@type": ["Product", "SoftwareApplication"],
      name: "Clínica Spin - Sistema de Gestão para Clínicas e Consultórios com Pagamento Único",
      applicationCategory: "MedicalApplication",
      operatingSystem: "Windows 10, Windows 11, macOS, Linux",
      description:
        "Sistema de Gestão para Clínicas e Consultórios com Prontuário Eletrônico LGPD, Agenda Inteligente, Sala de Espera Ao Vivo, Rede Local para 2 PCs sem internet e WhatsApp em 1 Clique. Licença vitalícia com pagamento único.",
      brand: {
        "@type": "Brand",
        name: "SPIN - Software Prático e Inteligente",
      },
      offers: {
        "@type": "Offer",
        url: "https://sitespin.vercel.app/clinica-spin",
        priceCurrency: "BRL",
        price: "99.00",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        description: "Licença Vitalícia de Pagamento Único • Zero Mensalidade • Entrega Digital Imediata",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
