import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  BookOpen,
  ShoppingCart,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import { DOWNLOADS_DATA, COMPANY_CONTACT } from "@/config/downloads";

export const metadata: Metadata = {
  title: "Central Oficial de Downloads e Manuais | SPIN Software",
  description:
    "Baixe os instaladores oficiais e manuais do usuário do PDV SPIN e Clínica SPIN. Arquivos verificados, seguros e prontos para instalação imediata.",
};

export default function DownloadsPage() {
  const pdv = DOWNLOADS_DATA.pdv;
  const clinica = DOWNLOADS_DATA.clinica;

  return (
    <div className="bg-canvas text-ink min-h-screen py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Cabeçalho da Página */}
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs sm:text-sm text-accent-lime block">
            {"// "}repositório oficial de binários e documentação
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
            Central de Downloads &amp; Manuais
          </h1>

          <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
            Obtenha aqui as versões oficiais e definitivas dos softwares da SPIN. Sem formulários obrigatórios ou cadastros prévios: clique e baixe diretamente.
          </p>
        </div>

        {/* Tabela de Instaladores Oficiais */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-accent-lime block">
                {"// "}binários de produção
              </span>
              <h2 className="text-2xl font-extrabold text-ink">Instaladores de Softwares</h2>
            </div>
            <span className="font-mono text-xs text-ink-subtle">
              Arquivos limpos, livres de adware e verificados
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border-subtle bg-canvas/60 text-xs font-mono uppercase text-ink-subtle">
                    <th className="py-4 px-6">Software / Pacote</th>
                    <th className="py-4 px-6">Sistema Operacional</th>
                    <th className="py-4 px-6">Versão</th>
                    <th className="py-4 px-6">Tamanho Real</th>
                    <th className="py-4 px-6 text-right">Download Imediato</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle text-sm">
                  {/* PDV Windows */}
                  <tr className="hover:bg-surface-elevated/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-full bg-accent-lime flex items-center justify-center text-canvas shrink-0">
                          <ShoppingCart className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-ink">PDV SPIN Gestão Comercial</div>
                          <div className="text-xs font-mono text-ink-subtle">
                            PDV-Spin-Gestao-Comercial-Windows.zip
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-lg bg-canvas border border-border-subtle text-ink-muted text-xs font-mono">
                        Windows 10 / 11
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-ink-muted">1.0 Oficial</td>
                    <td className="py-4 px-6 font-mono text-xs text-accent-lime font-bold">
                      7.0 MB
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-lime hover:brightness-110 text-canvas text-xs font-bold transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar ZIP</span>
                      </a>
                    </td>
                  </tr>

                  {/* PDV macOS */}
                  <tr className="hover:bg-surface-elevated/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-full bg-accent-mint flex items-center justify-center text-canvas shrink-0">
                          <ShoppingCart className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-ink">PDV SPIN para macOS</div>
                          <div className="text-xs font-mono text-ink-subtle">
                            PDV-Spin-macOS.zip
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-lg bg-canvas border border-border-subtle text-ink-muted text-xs font-mono whitespace-nowrap">
                        Apple macOS (Intel / Silicon)
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-ink-muted">1.0 Oficial</td>
                    <td className="py-4 px-6 font-mono text-xs text-accent-mint font-bold">
                      6.2 MB
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="/downloads/softwares/PDV-Spin-macOS.zip"
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-canvas hover:bg-surface-elevated text-ink border border-border-subtle text-xs font-bold transition-all"
                      >
                        <Download className="w-3.5 h-3.5 text-accent-mint" />
                        <span>Baixar ZIP</span>
                      </a>
                    </td>
                  </tr>

                  {/* Clínica SPIN Windows EXE */}
                  <tr className="hover:bg-surface-elevated/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-full bg-accent-violet flex items-center justify-center text-canvas shrink-0">
                          <Stethoscope className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-ink">Clínica SPIN Setup Oficial</div>
                          <div className="text-xs font-mono text-ink-subtle">
                            Clinica-Spin-Setup-1.0.0.exe
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-lg bg-canvas border border-border-subtle text-ink-muted text-xs font-mono">
                        Windows 10 / 11
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-ink-muted">1.0.0 Definitiva</td>
                    <td className="py-4 px-6 font-mono text-xs text-accent-violet font-bold">
                      87.2 MB
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-violet hover:brightness-110 text-canvas text-xs font-bold transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar EXE</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Seção de Manuais do Usuário */}
        <div id="manuais" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-accent-violet block">
                {"// "}documentação completa
              </span>
              <h2 className="text-2xl font-extrabold text-ink">Manuais Oficiais do Usuário</h2>
            </div>
            <span className="font-mono text-xs text-ink-subtle">
              PDF para download + leitura online formatada
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Manual PDV SPIN */}
            <div className="p-8 rounded-2xl bg-surface border border-border-subtle flex flex-col justify-between space-y-6 hover:border-accent-lime/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-accent-lime flex items-center justify-center text-canvas">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-canvas border border-border-subtle text-xs font-mono text-accent-lime">
                    20 Páginas · PDF
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ink">
                  Manual Oficial &amp; Guia de Operação — PDV SPIN
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Guia passo a passo ilustrado com rotinas de caixa, teclas de atalho (F1 a F6), fechamento de caixa cego, controle de estoque com margem de lucro, crediário e backup físico em Pen Drive.
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-3">
                <a
                  href={pdv.manual.url}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent-lime hover:brightness-110 text-canvas text-xs font-bold transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar PDF ({pdv.manual.sizeFormatted})</span>
                </a>
                <Link
                  href="/manuais/pdv-spin"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-canvas hover:bg-surface-elevated text-ink border border-border-subtle text-xs font-semibold transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-accent-lime" />
                  <span>Ler Online</span>
                </Link>
              </div>
            </div>

            {/* Manual Clínica SPIN */}
            <div className="p-8 rounded-2xl bg-surface border border-border-subtle flex flex-col justify-between space-y-6 hover:border-accent-violet/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-accent-violet flex items-center justify-center text-canvas">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-canvas border border-border-subtle text-xs font-mono text-accent-violet">
                    15 Páginas · PDF
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ink">
                  Manual de Instalação &amp; Operação — Clínica SPIN
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  O guia definitivo para médicos, dentistas, fisioterapeutas e equipe de recepção. Abrange configuração de rede local (Médico + Secretária sem internet), prontuário LGPD, sala de espera e repasses.
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-3">
                <a
                  href={clinica.manual.url}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent-violet hover:brightness-110 text-canvas text-xs font-bold transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar PDF ({clinica.manual.sizeFormatted})</span>
                </a>
                <Link
                  href="/manuais/clinica-spin"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-canvas hover:bg-surface-elevated text-ink border border-border-subtle text-xs font-semibold transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-accent-violet" />
                  <span>Ler Online</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Passo a Passo Pós-Download (estilo Slide 5: 01, 02, 03, 04) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-accent-amber flex items-center justify-center text-canvas shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-accent-lime block">
                {"// "}quatro passos após baixar
              </span>
              <h3 className="text-xl font-extrabold text-ink">Instruções Rápidas Pós-Download</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-xs text-ink-muted">
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
              <span className="font-mono text-3xl font-bold text-accent-lime block">01</span>
              <h4 className="font-bold text-ink text-sm">Descompactar / Executar</h4>
              <p className="leading-relaxed">
                No PDV SPIN, extraia o arquivo ZIP e execute o atalho. No Clínica SPIN, execute o arquivo .EXE.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
              <span className="font-mono text-3xl font-bold text-accent-lime block">02</span>
              <h4 className="font-bold text-ink text-sm">Windows SmartScreen</h4>
              <p className="leading-relaxed">
                Se surgir a tela azul do Windows, clique em{" "}
                <strong className="text-ink">&quot;Mais informações&quot;</strong> e depois{" "}
                <strong className="text-ink">&quot;Executar assim mesmo&quot;</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
              <span className="font-mono text-3xl font-bold text-accent-lime block">03</span>
              <h4 className="font-bold text-ink text-sm">Ativação Offline</h4>
              <p className="leading-relaxed">
                Insira sua chave de licença vitalícia permanente enviada na sua compra. Não é necessário internet.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
              <span className="font-mono text-3xl font-bold text-accent-lime block">04</span>
              <h4 className="font-bold text-ink text-sm">Acesso Padrão</h4>
              <p className="leading-relaxed">
                Usuário padrão de fábrica: <strong className="text-ink font-mono">admin</strong> |
                Senha: <strong className="text-ink font-mono">admin123</strong>. Altere nas Configurações.
              </p>
            </div>
          </div>
        </div>

        {/* Box de Suporte Direto */}
        <div className="p-8 rounded-2xl bg-surface border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-mono text-xs text-accent-lime block">{"// "}suporte direto</span>
            <h3 className="text-xl font-bold text-ink">
              Precisa de Ajuda com o Download ou Instalação?
            </h3>
            <p className="text-sm text-ink-muted">
              Nossa equipe técnica atende diretamente pelo e-mail oficial sem burocracia ou robôs.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <span className="font-mono text-sm text-accent-lime select-all font-bold">
              {COMPANY_CONTACT.email}
            </span>
            <CopyEmailButton variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
