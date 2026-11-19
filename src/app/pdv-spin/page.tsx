import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  Download,
  BookOpen,
  ShieldCheck,
  Laptop,
  Printer,
  Zap,
} from "lucide-react";
import PdvSimulatorMockup from "@/components/pdv/PdvSimulatorMockup";
import PdvModulesTabs from "@/components/pdv/PdvModulesTabs";
import CopyEmailButton from "@/components/CopyEmailButton";
import { DOWNLOADS_DATA, COMPANY_CONTACT } from "@/config/downloads";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "PDV Spin — Sistema PDV Frente de Caixa e Estoque Sem Mensalidade (R$ 40)",
  description:
    "Sistema de Frente de Caixa (PDV), Controle de Estoque, Fechamento de Caixa Cego, QR Code PIX e Crediário com pagamento único de R$ 40,00. 100% offline e sem mensalidade.",
};

export default function PdvSpinPage() {
  const pdv = PRODUCTS.pdv;
  const pdvDownloads = DOWNLOADS_DATA.pdv;

  return (
    <div className="bg-canvas text-ink min-h-screen">
      {/* Hero da Página do PDV */}
      <section className="pt-12 pb-20 border-b border-border-subtle bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-ink-subtle mb-6">
            <Link href="/" className="hover:text-accent-lime transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-accent-lime">PDV SPIN Gestão Comercial</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto do Hero */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs text-accent-lime">
                  {"// "}pdv spin · gestão comercial
                </span>
                <span className="px-3 py-1 rounded-full bg-accent-lime text-canvas text-[11px] font-extrabold uppercase tracking-wide">
                  Pagamento Único · R$ 40,00
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.12]">
                PDV Spin — Sistema PDV Frente de Caixa e Estoque Sem Mensalidade
              </h1>

              <p className="text-base sm:text-lg text-accent-lime font-medium">
                {pdv.tagline} · Licença Definitiva por apenas{" "}
                <strong className="text-ink font-mono">R$ 40,00</strong> (Zero Mensalidade)
              </p>

              <p className="text-base text-ink-muted leading-relaxed">{pdv.description}</p>

              {/* Box de Downloads Duplo no Topo */}
              <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-4">
                <span className="font-mono text-xs text-accent-lime block">
                  {"// "}downloads oficiais imediatos (sem cadastro)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Botão Primário: Software Windows */}
                  <a
                    href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
                    download
                    className="flex flex-col p-4 rounded-xl bg-accent-lime hover:brightness-110 text-canvas transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[11px] font-bold uppercase">
                        Software Windows (.ZIP)
                      </span>
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </div>
                    <span className="text-sm font-extrabold">Baixar PDV SPIN</span>
                    <span className="font-mono text-[11px] text-canvas/80 mt-1">
                      Tamanho: 7.0 MB · Win 10/11
                    </span>
                  </a>

                  {/* Botão Secundário: Manual Oficial */}
                  <a
                    href={pdvDownloads.manual.url}
                    download
                    className="flex flex-col p-4 rounded-xl bg-canvas hover:bg-surface-elevated text-ink border border-border-subtle transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[11px] uppercase text-ink-subtle">
                        Manual do Usuário
                      </span>
                      <BookOpen className="w-4 h-4 text-accent-lime group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-extrabold text-ink">Baixar Manual em PDF</span>
                    <span className="font-mono text-[11px] text-ink-subtle mt-1">
                      Tamanho: {pdvDownloads.manual.sizeFormatted} · 20 páginas
                    </span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-subtle pt-3 border-t border-border-subtle">
                  <Link
                    href={pdvDownloads.manual.onlineUrl}
                    className="text-accent-lime hover:underline flex items-center gap-1.5 font-semibold"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ler Manual Online Interativo</span>
                  </Link>
                  <a
                    href="/downloads/softwares/PDV-Spin-macOS.zip"
                    download
                    className="hover:text-ink transition-colors"
                  >
                    Opção para macOS (.ZIP 6.2 MB)
                  </a>
                </div>
              </div>
            </div>

            {/* Simulador de Interface */}
            <div className="lg:col-span-5">
              <PdvSimulatorMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Atalhos Rápidos de Teclado */}
      <section className="py-14 bg-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-1.5">
              <span className="font-mono text-xs text-accent-lime block">
                {"// "}velocidade extrema no balcão
              </span>
              <h2 className="text-2xl font-extrabold text-ink">
                Teclas de Atalho Rápido do PDV SPIN
              </h2>
            </div>
            <p className="text-xs text-ink-muted max-w-md">
              Projetado para operar inteiramente pelo teclado e leitor de código de barras, dispensando o uso obrigatório do mouse em filas de atendimento.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {pdv.shortcuts?.map((s) => (
              <div
                key={s.key}
                className="p-4 rounded-2xl bg-surface border border-border-subtle space-y-2"
              >
                <div className="inline-block px-2.5 py-1 rounded-lg bg-canvas border border-border-subtle font-mono text-sm font-bold text-accent-lime">
                  {s.key}
                </div>
                <h3 className="text-xs font-bold text-ink">{s.action}</h3>
                <p className="text-[11px] text-ink-muted leading-snug">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos em Abas Detalhadas */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="font-mono text-xs sm:text-sm text-accent-lime block">
            {"// "}estrutura completa
          </span>
          <h2 className="text-3xl font-extrabold text-ink tracking-tight">
            Módulos Reais Desenvolvidos para o Seu Negócio
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            Sem telas desnecessárias ou funções inúteis. Tudo o que um comerciante precisa para ter controle absoluto.
          </p>
        </div>

        <PdvModulesTabs />
      </section>

      {/* Passo a Passo de Instalação e SmartScreen (Timeline estilo Slide 11) */}
      <section className="py-20 bg-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="font-mono text-xs sm:text-sm text-accent-lime block">
              {"// "}capítulo 1 e 2 do manual
            </span>
            <h2 className="text-3xl font-extrabold text-ink tracking-tight">
              Guia Rápido de Instalação e Primeiro Uso
            </h2>
            <p className="text-ink-muted text-sm sm:text-base">
              Instalação autônoma sem bancos pesados ou técnicos especializados. Pronto para operar em menos de 2 minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {pdv.setupSteps.map((step) => {
              const num = String(step.step).padStart(2, "0");
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-surface border border-border-subtle flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="font-mono text-3xl font-bold text-accent-lime block">
                      {num}
                    </span>
                    <h3 className="text-base font-bold text-ink">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {step.tip && (
                    <div className="p-3.5 rounded-xl bg-canvas border border-border-subtle text-xs text-ink-muted">
                      <strong className="text-accent-amber">Transparência:</strong> {step.tip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Destaque do SmartScreen estilo Barra de Transparência BrainBugs */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-accent-amber flex items-center justify-center text-canvas shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="text-base font-bold text-ink">
                <span className="text-accent-amber">Transparência SmartScreen:</span> Como autorizar o Windows em 2 cliques
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                A Microsoft cobra anualmente taxas pesadas de certificados que outros sistemas repassam cobrando mensalidades de você. Para executar o PDV SPIN 100% vitalício e seguro: na tela azul do Windows, clique em{" "}
                <strong className="text-ink">&quot;Mais informações&quot;</strong> e em seguida no botão{" "}
                <strong className="text-ink">&quot;Executar assim mesmo&quot;</strong>. Pronto! O Windows nunca mais repetirá esse aviso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Periféricos e Requisitos Técnicos */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <span className="font-mono text-xs text-accent-lime block">
              {"// "}compatibilidade universal de hardware
            </span>
            <h2 className="text-2xl font-extrabold text-ink">Periféricos e Impressoras</h2>
            <div className="space-y-3.5">
              <div className="p-5 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-lime flex items-center justify-center text-canvas shrink-0">
                  <Printer className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-ink">
                    Impressoras Térmicas Não Fiscais (58mm e 80mm)
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Compatível com qualquer impressora padrão ESC/POS USB (Epson, Bematech, Elgin, Daruma, marcas chinesas comuns).
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-mint flex items-center justify-center text-canvas shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-ink">
                    Impressoras Convencionais (Exportação em PDF A4)
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Não possui impressora térmica? Exporte com 1 clique para PDF na pasta Downloads e imprima em qualquer impressora de folha A4.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-violet flex items-center justify-center text-canvas shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-ink">Leitor de Código de Barras USB</h3>
                  <p className="text-xs text-ink-muted">
                    Funciona automaticamente com qualquer leitor de código de barras USB (com ou sem fio).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Requisitos Mínimos de Sistema */}
          <div className="space-y-5">
            <span className="font-mono text-xs text-accent-lime block">
              {"// "}especificações da máquina
            </span>
            <h2 className="text-2xl font-extrabold text-ink">Requisitos de Sistema</h2>
            <div className="rounded-2xl bg-surface border border-border-subtle p-6 space-y-4 text-xs font-mono">
              <div className="flex justify-between gap-4 pb-3 border-b border-border-subtle">
                <span className="text-ink-subtle">Sistema Operacional:</span>
                <span className="text-accent-lime font-bold text-right">
                  Windows 10 / Windows 11 / macOS
                </span>
              </div>
              <div className="flex justify-between gap-4 pb-3 border-b border-border-subtle">
                <span className="text-ink-subtle">Memória RAM Mínima:</span>
                <span className="text-ink font-bold text-right">2 GB (Recomendado 4 GB)</span>
              </div>
              <div className="flex justify-between gap-4 pb-3 border-b border-border-subtle">
                <span className="text-ink-subtle">Espaço em Disco:</span>
                <span className="text-ink font-bold text-right">Menos de 150 MB livres</span>
              </div>
              <div className="flex justify-between gap-4 pb-3 border-b border-border-subtle">
                <span className="text-ink-subtle">Banco de Dados Externo:</span>
                <span className="text-accent-mint font-bold text-right">
                  NÃO NECESSÁRIO (Embutido)
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-ink-subtle">Conexão com a Internet:</span>
                <span className="text-accent-lime font-bold text-right">
                  100% Dispensável (Offline)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Específico */}
      <section className="py-20 bg-canvas border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-12">
            <span className="font-mono text-xs sm:text-sm text-accent-lime block">
              {"// "}capítulo 10 do manual
            </span>
            <h2 className="text-3xl font-extrabold text-ink tracking-tight">
              Perguntas Frequentes (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            {pdv.faq.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2"
              >
                <h3 className="text-base font-bold text-ink flex items-start gap-3">
                  <span className="font-mono text-sm font-bold text-accent-lime shrink-0 mt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pl-8">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Duplo */}
      <section className="py-20 bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-accent-lime flex items-center justify-center text-canvas mx-auto">
            <ShoppingCart className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Leve o PDV SPIN para o seu Comércio Hoje Mesmo
          </h2>
          <p className="text-ink-muted text-sm sm:text-base max-w-xl mx-auto">
            Baixe o pacote oficial, leia o manual do usuário e tenha soberania total sobre as vendas da sua loja.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-lime hover:brightness-110 text-canvas font-bold py-3.5 px-6 rounded-xl transition-all text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Software PDV SPIN (Windows 7.0 MB)</span>
            </a>

            <a
              href={pdvDownloads.manual.url}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-elevated text-ink border border-border-subtle font-semibold py-3.5 px-6 rounded-xl transition-all text-sm"
            >
              <BookOpen className="w-4 h-4 text-accent-lime" />
              <span>Baixar Manual em PDF</span>
            </a>
          </div>

          <div className="pt-6">
            <p className="text-xs text-ink-subtle">
              Dúvidas comerciais ou suporte direto:{" "}
              <a
                href={COMPANY_CONTACT.mailtoSupportPdv}
                className="text-accent-lime hover:underline font-mono"
              >
                {COMPANY_CONTACT.email}
              </a>
              <CopyEmailButton variant="pill" showIcon={false} className="ml-2" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
