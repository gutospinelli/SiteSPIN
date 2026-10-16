import React from "react";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Stethoscope, Download, ShieldCheck, HardDrive, CheckCircle2, Sparkles } from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { COMPANY_CONTACT } from "@/config/downloads";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Luzes de Fundo / Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badges de Destaque */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-inner">
            <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Licença Vitalícia
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <HardDrive className="w-4 h-4" />
              100% Offline (Zero Nuvem)
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-sky-400 font-semibold">Pagamento Único (Sem Mensalidade)</span>
          </div>

          {/* Título Principal Otimizado para SEO e Conversão */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            <span className="block text-xl sm:text-2xl font-bold text-indigo-400 mb-2 tracking-normal">
              PDV Spin &amp; Clínica Spin — Sistemas Sem Mensalidade
            </span>
            Tecnologia direta ao ponto:{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              gestão rápida, segura e com pagamento único
            </span>{" "}
            para o seu negócio.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Sistemas definitivos de Frente de Caixa (PDV), Controle de Estoque e Gestão para Clínicas e Consultórios. O programa é seu de verdade: <strong>zero mensalidades</strong> e funcionamento 100% local, mesmo se a internet cair.
          </p>

          {/* Botões de Ação Principal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/pdv-spin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-900/30 hover:scale-[1.02] transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>PDV Spin — R$ 40,00</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/clinica-spin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-sky-900/30 hover:scale-[1.02] transition-all"
            >
              <Stethoscope className="w-5 h-5" />
              <span>Clínica Spin — R$ 99,00</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/downloads"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base px-5 py-3.5 rounded-xl transition-all"
            >
              <Download className="w-5 h-5 text-indigo-400" />
              <span>Baixar Instaladores</span>
            </Link>
          </div>

          {/* Linha de Confiança */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Entrega Digital Imediata</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Ativação vitalícia offline</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Backup em Pen Drive em 1 clique</span>
            </div>
          </div>
        </div>

        {/* Mockup Comparativo Duplo */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Visual PDV */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-emerald-500/30 p-6 shadow-xl hover:border-emerald-400/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-lg leading-snug">
                      PDV Spin — Sistema PDV Frente de Caixa e Estoque Sem Mensalidade
                    </h2>
                    <p className="text-xs text-emerald-400 font-medium mt-0.5">
                      Comércio, Mercadinho, Adega, Loja de Roupas &amp; Varejo
                    </p>
                  </div>
                </div>
              </div>

              {/* Bloco de Preço e Selo CRO */}
              <div className="mb-4 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] uppercase font-bold text-emerald-300 block">
                    Licença Definitiva Vitalícia
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">R$ 40,00</span>
                    <span className="text-xs text-emerald-400 font-semibold">Pagamento Único</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 text-[11px] font-semibold">
                  <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
                  Pagamento Único • Zero Mensalidade • Entrega Digital Imediata
                </span>
              </div>

              {/* Simulação Visual do Caixa */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs space-y-2 mb-4">
                <div className="flex justify-between text-slate-400 pb-1 border-b border-slate-800">
                  <span>[F1] FRENTE DE CAIXA</span>
                  <span className="text-emerald-400 font-bold">CAIXA ABERTO</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>Item: Refrigerante Lata 350ml</span>
                  <span className="font-bold text-white">R$ 6,50</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>Item: Salgado Forno Especial</span>
                  <span className="font-bold text-white">R$ 9,00</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800 font-sans">
                  <span className="text-slate-400 font-medium">Total da Venda:</span>
                  <span className="text-lg font-black text-emerald-400">R$ 15,50</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>[F4] Finalizar</span>
                  <span className="text-emerald-400">PIX QR Code • Dinheiro • Cartão</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Frente de caixa rápida com leitor USB, fechamento cego contra fraudes, controle de estoque com margem de lucro e crediário.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <Link
                href="/pdv-spin"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                Ver todos os módulos e telas <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar ZIP (8.8 MB)</span>
              </a>
            </div>
          </div>

          {/* Card Visual Clínica */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-sky-500/30 p-6 shadow-xl hover:border-sky-400/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-lg leading-snug">
                      Clínica Spin — Sistema de Gestão para Clínicas e Consultórios com Pagamento Único
                    </h2>
                    <p className="text-xs text-sky-400 font-medium mt-0.5">
                      Médicos, Dentistas, Estética, Psicologia, Fisioterapia &amp; Recepção
                    </p>
                  </div>
                </div>
              </div>

              {/* Bloco de Preço e Selo CRO */}
              <div className="mb-4 p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] uppercase font-bold text-sky-300 block">
                    Licença Definitiva (Até 2 PCs)
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">R$ 99,00</span>
                    <span className="text-xs text-sky-400 font-semibold">Pagamento Único</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-200 border border-sky-500/30 text-[11px] font-semibold">
                  <Sparkles className="w-3 h-3 text-sky-400 shrink-0" />
                  Pagamento Único • Zero Mensalidade • Entrega Digital Imediata
                </span>
              </div>

              {/* Simulação Visual da Clínica */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs space-y-2 mb-4">
                <div className="flex justify-between text-slate-400 pb-1 border-b border-slate-800">
                  <span>SALA DE ESPERA EM TEMPO REAL</span>
                  <span className="text-sky-400 font-bold">REDE LOCAL ATIVA</span>
                </div>
                <div className="flex justify-between items-center text-slate-200">
                  <span>Ana Clara Medeiros</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[11px]">8 min na espera</span>
                </div>
                <div className="flex justify-between items-center text-slate-200">
                  <span>Dr. Roberto Spinelli</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px]">Consultório 01</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800 font-sans">
                  <span className="text-slate-400 font-medium">Prontuário LGPD:</span>
                  <span className="text-xs font-semibold text-sky-400">Sigilo Absoluto Local</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Médico + Secretária</span>
                  <span className="text-sky-400">WhatsApp 1 Clique • Repasses</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Agenda com detecção de conflitos, sala de espera com cronômetro, prontuário com linha do tempo, WhatsApp grátis e rede local sem internet.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <Link
                href="/clinica-spin"
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
              >
                Ver todos os módulos e telas <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar EXE (87.2 MB)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Chamada para Contato Direto */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            Dúvidas comerciais ou suporte direto? E-mail oficial:{" "}
            <a
              href={COMPANY_CONTACT.mailtoCommercial}
              className="text-indigo-400 hover:underline font-mono"
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
