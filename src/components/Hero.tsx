import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  Stethoscope,
  Download,
  CheckCircle2,
} from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { COMPANY_CONTACT } from "@/config/downloads";

export default function Hero() {
  return (
    <section className="relative pt-14 pb-20 lg:pt-24 lg:pb-28 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow Editorial estilo BrainBugs */}
          <p className="font-mono text-xs sm:text-sm text-accent-lime tracking-wide">
            {"// "}licença vitalícia · 100% offline · pagamento único
          </p>

          {/* Título Principal Otimizado para SEO e Conversão */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.12]">
            <span className="block text-lg sm:text-xl font-mono font-medium text-ink-muted mb-3 tracking-normal">
              PDV Spin &amp; Clínica Spin — Sistemas Sem Mensalidade
            </span>
            Tecnologia direta ao ponto:{" "}
            <span className="text-accent-lime">
              gestão rápida, segura e com pagamento único
            </span>{" "}
            para o seu negócio.
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg text-ink-muted font-normal leading-relaxed max-w-3xl mx-auto">
            Sistemas definitivos de Frente de Caixa (PDV), Controle de Estoque e Gestão para Clínicas e Consultórios. O programa é seu de verdade:{" "}
            <strong className="text-ink font-semibold">zero mensalidades</strong> e funcionamento 100% local, mesmo se a internet cair.
          </p>

          {/* Botões de Ação Principal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Link
              href="/pdv-spin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent-lime hover:brightness-110 text-canvas font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>PDV Spin — R$ 40,00</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/clinica-spin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent-violet hover:brightness-110 text-canvas font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all"
            >
              <Stethoscope className="w-5 h-5" />
              <span>Clínica Spin — R$ 99,00</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/downloads"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-elevated text-ink border border-border-subtle font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all"
            >
              <Download className="w-4 h-4 text-accent-mint" />
              <span>Baixar Instaladores</span>
            </Link>
          </div>

          {/* Linha de Confiança */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-ink-muted border-t border-border-subtle max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-mint shrink-0" />
              <span>Entrega Digital Imediata</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-mint shrink-0" />
              <span>Ativação vitalícia offline</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-mint shrink-0" />
              <span>Backup em Pen Drive em 1 clique</span>
            </div>
          </div>
        </div>

        {/* Mockup Comparativo Duplo */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Visual PDV */}
          <div className="group rounded-2xl bg-surface border border-border-subtle p-6 hover:border-accent-lime/60 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-accent-lime flex items-center justify-center text-canvas shrink-0">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-ink text-lg leading-snug">
                    PDV Spin — Sistema PDV Frente de Caixa e Estoque Sem Mensalidade
                  </h2>
                  <p className="font-mono text-xs text-accent-lime mt-1">
                    Comércio · Mercadinho · Adega · Varejo
                  </p>
                </div>
              </div>

              {/* Bloco de Preço e Selo CRO */}
              <div className="mb-4 p-4 rounded-xl bg-canvas border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] uppercase text-ink-subtle block">
                    Licença Definitiva Vitalícia
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-ink font-mono">R$ 40,00</span>
                    <span className="text-xs text-accent-lime font-semibold">Pagamento Único</span>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent-lime text-canvas text-[11px] font-extrabold uppercase tracking-wide shrink-0">
                  Zero Mensalidade
                </span>
              </div>

              {/* Simulação Visual do Caixa */}
              <div className="bg-canvas rounded-xl p-4 border border-border-subtle font-mono text-xs space-y-2 mb-4">
                <div className="flex justify-between text-ink-subtle pb-1.5 border-b border-border-subtle">
                  <span>[F1] FRENTE DE CAIXA</span>
                  <span className="text-accent-lime font-bold">CAIXA ABERTO</span>
                </div>
                <div className="flex justify-between text-ink-muted">
                  <span>Item: Refrigerante Lata 350ml</span>
                  <span className="font-bold text-ink">R$ 6,50</span>
                </div>
                <div className="flex justify-between text-ink-muted">
                  <span>Item: Salgado Forno Especial</span>
                  <span className="font-bold text-ink">R$ 9,00</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border-subtle font-sans">
                  <span className="text-ink-muted font-medium">Total da Venda:</span>
                  <span className="text-lg font-extrabold font-mono text-accent-lime">R$ 15,50</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-ink-subtle pt-1 font-mono">
                  <span>[F4] Finalizar</span>
                  <span className="text-accent-mint">PIX QR Code · Dinheiro · Cartão</span>
                </div>
              </div>

              <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                Frente de caixa rápida com leitor USB, fechamento cego contra fraudes, controle de estoque com margem de lucro e crediário.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
              <Link
                href="/pdv-spin"
                className="text-xs font-semibold text-accent-lime hover:underline flex items-center gap-1"
              >
                Ver módulos e telas <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-accent-lime hover:brightness-110 text-canvas text-xs font-bold transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar ZIP (7.0 MB)</span>
              </a>
            </div>
          </div>

          {/* Card Visual Clínica */}
          <div className="group rounded-2xl bg-surface border border-border-subtle p-6 hover:border-accent-violet/60 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-accent-violet flex items-center justify-center text-canvas shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-ink text-lg leading-snug">
                    Clínica Spin — Sistema de Gestão para Clínicas e Consultórios com Pagamento Único
                  </h2>
                  <p className="font-mono text-xs text-accent-violet mt-1">
                    Médicos · Dentistas · Estética · Recepção
                  </p>
                </div>
              </div>

              {/* Bloco de Preço e Selo CRO */}
              <div className="mb-4 p-4 rounded-xl bg-canvas border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] uppercase text-ink-subtle block">
                    Licença Definitiva (Até 2 PCs)
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-ink font-mono">R$ 99,00</span>
                    <span className="text-xs text-accent-violet font-semibold">Pagamento Único</span>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent-violet text-canvas text-[11px] font-extrabold uppercase tracking-wide shrink-0">
                  Entrega Imediata
                </span>
              </div>

              {/* Simulação Visual da Clínica */}
              <div className="bg-canvas rounded-xl p-4 border border-border-subtle font-mono text-xs space-y-2 mb-4">
                <div className="flex justify-between text-ink-subtle pb-1.5 border-b border-border-subtle">
                  <span>SALA DE ESPERA AO VIVO</span>
                  <span className="text-accent-violet font-bold">REDE LOCAL ATIVA</span>
                </div>
                <div className="flex justify-between items-center text-ink-muted">
                  <span>Ana Clara Medeiros</span>
                  <span className="px-2 py-0.5 rounded-full bg-accent-amber text-canvas font-bold text-[10px]">
                    8 min espera
                  </span>
                </div>
                <div className="flex justify-between items-center text-ink-muted">
                  <span>Dr. Roberto Spinelli</span>
                  <span className="px-2 py-0.5 rounded-full bg-accent-mint text-canvas font-bold text-[10px]">
                    Consultório 01
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border-subtle font-sans">
                  <span className="text-ink-muted font-medium">Prontuário LGPD:</span>
                  <span className="text-xs font-mono font-semibold text-accent-violet">
                    Sigilo Absoluto Local
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-ink-subtle pt-1 font-mono">
                  <span>Médico + Secretária</span>
                  <span className="text-accent-mint">WhatsApp 1 Clique · Repasses</span>
                </div>
              </div>

              <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                Agenda com detecção de conflitos, sala de espera com cronômetro, prontuário com linha do tempo, WhatsApp grátis e rede local sem internet.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
              <Link
                href="/clinica-spin"
                className="text-xs font-semibold text-accent-violet hover:underline flex items-center gap-1"
              >
                Ver módulos e telas <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-accent-violet hover:brightness-110 text-canvas text-xs font-bold transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar EXE (87.2 MB)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Chamada para Contato Direto */}
        <div className="mt-10 text-center">
          <p className="text-xs text-ink-subtle">
            Dúvidas comerciais ou suporte direto? E-mail oficial:{" "}
            <a
              href={COMPANY_CONTACT.mailtoCommercial}
              className="text-accent-lime hover:underline font-mono"
            >
              {COMPANY_CONTACT.email}
            </a>{" "}
            <CopyEmailButton variant="pill" showIcon={false} className="ml-2" />
          </p>
        </div>
      </div>
    </section>
  );
}
