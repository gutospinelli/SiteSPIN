import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  Download,
  BookOpen,
  ShieldCheck,
  HelpCircle,
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
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero da Página do PDV */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-emerald-400">
              Início
            </Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">PDV SPIN Gestão Comercial</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto do Hero */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Pagamento Único • Zero Mensalidade • Entrega Digital Imediata</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                PDV Spin — Sistema PDV Frente de Caixa e Estoque Sem Mensalidade
              </h1>

              <p className="text-lg text-emerald-300/90 font-medium">
                {pdv.tagline} • Licença Definitiva por apenas <strong className="text-white">R$ 40,00 (Pagamento Único)</strong>
              </p>

              <p className="text-base text-slate-300 leading-relaxed">
                {pdv.description}
              </p>

              {/* Box de Downloads Duplo no Topo */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30 space-y-4 shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  Downloads Oficiais Imediatos (Sem Cadastro)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Botão Primário: Software Windows */}
                  <a
                    href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
                    download
                    className="flex flex-col p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-900/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase">Software Windows (.ZIP)</span>
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </div>
                    <span className="text-sm font-black">Baixar PDV SPIN</span>
                    <span className="text-[11px] text-emerald-100/80 mt-1">
                      Tamanho: 8.8 MB • Win 10/11
                    </span>
                  </a>

                  {/* Botão Secundário: Manual Oficial */}
                  <a
                    href={pdvDownloads.manual.url}
                    download
                    className="flex flex-col p-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase text-slate-400">Manual do Usuário</span>
                      <BookOpen className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-black text-white">Baixar Manual em PDF</span>
                    <span className="text-[11px] text-slate-400 mt-1">
                      Tamanho: {pdvDownloads.manual.sizeFormatted} • 20 páginas
                    </span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <Link
                    href={pdvDownloads.manual.onlineUrl}
                    className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ler Manual Online Interativo</span>
                  </Link>
                  <a
                    href="/downloads/softwares/PDV-Spin-macOS.zip"
                    download
                    className="hover:text-slate-200 transition-colors"
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
      <section className="py-12 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Velocidade Extrema no Balcão
              </span>
              <h2 className="text-xl font-bold text-white">Teclas de Atalho Rápido do PDV SPIN</h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Projetado para operar inteiramente pelo teclado e leitor de código de barras, dispensando o uso obrigatório do mouse em filas de atendimento.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {pdv.shortcuts?.map((s) => (
              <div
                key={s.key}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5"
              >
                <div className="inline-block px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 font-mono text-sm font-bold text-emerald-400">
                  {s.key}
                </div>
                <h3 className="text-xs font-bold text-white">{s.action}</h3>
                <p className="text-[11px] text-slate-400 leading-tight">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos em Abas Detalhadas */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Estrutura Completa
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Módulos Reais Desenvolvidos para o Seu Negócio
          </h2>
          <p className="text-slate-400 text-sm">
            Sem telas desnecessárias ou funções inúteis. Tudo o que um comerciante precisa para ter controle absoluto.
          </p>
        </div>

        <PdvModulesTabs />
      </section>

      {/* Passo a Passo de Instalação e SmartScreen */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Capítulo 1 e 2 do Manual
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Guia Rápido de Instalação e Primeiro Uso
            </h2>
            <p className="text-slate-400 text-sm">
              Instalação autônoma sem bancos pesados ou técnicos especializados. Pronto para operar em menos de 2 minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pdv.setupSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                </div>
                {step.tip && (
                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-[11px] text-emerald-300">
                    💡 <strong>Transparência:</strong> {step.tip}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Destaque do SmartScreen */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="text-base font-bold text-white">
                Como desmistificar o aviso do Windows SmartScreen em 2 cliques:
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                A Microsoft cobra anualmente taxas pesadas de certificados que outros sistemas repassam cobrando mensalidades de você. Para executar o PDV SPIN 100% vitalício e seguro: na tela azul do Windows, clique em <strong>&quot;Mais informações&quot;</strong> e em seguida no botão <strong>&quot;Executar assim mesmo&quot;</strong>. Pronto! O Windows nunca mais repetirá esse aviso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Periféricos e Requisitos Técnicos */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Compatibilidade Universal de Hardware
            </span>
            <h2 className="text-2xl font-bold text-white">Periféricos e Impressoras</h2>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Printer className="w-4 h-4 text-emerald-400" />
                  <span>Impressoras Térmicas Não Fiscais (58mm e 80mm)</span>
                </div>
                <p className="text-xs text-slate-400">
                  Compatível com qualquer impressora padrão ESC/POS USB (Epson, Bematech, Elgin, Daruma, marcas chinesas comuns).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Laptop className="w-4 h-4 text-emerald-400" />
                  <span>Impressoras Convencionais (Exportação em PDF A4)</span>
                </div>
                <p className="text-xs text-slate-400">
                  Não possui impressora térmica? Exporte com 1 clique para PDF na pasta Downloads e imprima em qualquer impressora de folha A4.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Leitor de Código de Barras USB</span>
                </div>
                <p className="text-xs text-slate-400">
                  Funciona automaticamente com qualquer leitor de código de barras USB (com ou sem fio).
                </p>
              </div>
            </div>
          </div>

          {/* Requisitos Mínimos de Sistema */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Especificações da Máquina
            </span>
            <h2 className="text-2xl font-bold text-white">Requisitos de Sistema</h2>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4 text-xs font-mono">
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Sistema Operacional:</span>
                <span className="text-emerald-400 font-bold">Windows 10 / Windows 11 / macOS</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Memória RAM Mínima:</span>
                <span className="text-white font-bold">2 GB (Recomendado 4 GB)</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Espaço em Disco:</span>
                <span className="text-white font-bold">Menos de 150 MB livres</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Banco de Dados Externo:</span>
                <span className="text-emerald-400 font-bold">NÃO NECESSÁRIO (Embutido)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Conexão com a Internet:</span>
                <span className="text-emerald-400 font-bold">100% Dispensável (Totalmente Offline)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Específico */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Capítulo 10 do Manual
            </span>
            <h2 className="text-3xl font-extrabold text-white">Perguntas Frequentes (FAQ)</h2>
          </div>

          <div className="space-y-4">
            {pdv.faq.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2"
              >
                <h3 className="text-base font-bold text-white flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7.5">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Duplo */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <ShoppingCart className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Leve o PDV SPIN para o seu Comércio Hoje Mesmo
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Baixe o pacote oficial, leia o manual do usuário e tenha soberania total sobre as vendas da sua loja.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-900/30 transition-all text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Software PDV SPIN (Windows 8.8 MB)</span>
            </a>

            <a
              href={pdvDownloads.manual.url}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-3.5 px-6 rounded-xl transition-all text-sm"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Baixar Manual em PDF</span>
            </a>
          </div>

          <div className="pt-6">
            <p className="text-xs text-slate-400">
              Dúvidas comerciais ou suporte direto:{" "}
              <a
                href={COMPANY_CONTACT.mailtoSupportPdv}
                className="text-emerald-400 hover:underline font-mono"
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
