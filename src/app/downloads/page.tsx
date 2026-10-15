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
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Cabeçalho da Página */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
            <Download className="w-3.5 h-3.5" />
            <span>Repositório Oficial de Binários e Documentação</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Central de Downloads & Manuais
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Obtenha aqui as versões oficiais e definitivas dos softwares da SPIN. Sem formulários obrigatórios ou cadastros prévios: clique e baixe diretamente.
          </p>
        </div>

        {/* Tabela de Instaladores Oficiais */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Binários de Produção
              </span>
              <h2 className="text-2xl font-bold text-white">Instaladores de Softwares</h2>
            </div>
            <span className="text-xs text-slate-400">
              Arquivos limpos, livres de adware e testados contra vírus
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900 text-xs uppercase font-bold text-slate-300">
                    <th className="py-4 px-6">Software / Pacote</th>
                    <th className="py-4 px-6">Sistema Operacional</th>
                    <th className="py-4 px-6">Versão</th>
                    <th className="py-4 px-6">Tamanho Real</th>
                    <th className="py-4 px-6 text-right">Download Imediato</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
                  {/* PDV Windows */}
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                          <ShoppingCart className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-white">PDV SPIN Gestão Comercial</div>
                          <div className="text-xs font-mono text-slate-400">
                            PDV-Spin-Gestao-Comercial-Windows.zip
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-semibold">
                        Windows 10 / 11
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-300">1.0 Oficial</td>
                    <td className="py-4 px-6 font-mono text-xs text-emerald-400 font-bold">8.8 MB</td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-950/40 transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar ZIP</span>
                      </a>
                    </td>
                  </tr>

                  {/* PDV macOS */}
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                          <ShoppingCart className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-white">PDV SPIN para macOS</div>
                          <div className="text-xs font-mono text-slate-400">PDV-Spin-macOS.zip</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-semibold">
                        Apple macOS (Intel / Silicon)
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-300">1.0 Oficial</td>
                    <td className="py-4 px-6 font-mono text-xs text-emerald-400 font-bold">6.2 MB</td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="/downloads/softwares/PDV-Spin-macOS.zip"
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all"
                      >
                        <Download className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Baixar ZIP</span>
                      </a>
                    </td>
                  </tr>

                  {/* Clínica SPIN Windows EXE */}
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                          <Stethoscope className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-white">Clínica SPIN Setup Oficial</div>
                          <div className="text-xs font-mono text-slate-400">
                            Clinica-Spin-Setup-1.0.0.exe
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-semibold">
                        Windows 10 / 11
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-300">1.0.0 Definitiva</td>
                    <td className="py-4 px-6 font-mono text-xs text-sky-400 font-bold">87.2 MB</td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md shadow-sky-950/40 transition-all"
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Documentação Completa
              </span>
              <h2 className="text-2xl font-bold text-white">Manuais Oficiais do Usuário</h2>
            </div>
            <span className="text-xs text-slate-400">
              Disponíveis para download em formato PDF e leitura online formatada
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Manual PDV SPIN */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/30 flex flex-col justify-between space-y-6 hover:border-emerald-500/60 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-slate-300">
                    20 Páginas • PDF
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  Manual Oficial & Guia de Operação — PDV SPIN
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Guia passo a passo ilustrado com rotinas de caixa, teclas de atalho (F1 a F6), fechamento de caixa cego, controle de estoque com margem de lucro, crediário e backup físico em Pen Drive.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href={pdv.manual.url}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-950/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar PDF ({pdv.manual.sizeFormatted})</span>
                </a>
                <Link
                  href="/manuais/pdv-spin"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold"
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Ler Online</span>
                </Link>
              </div>
            </div>

            {/* Manual Clínica SPIN */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-sky-500/30 flex flex-col justify-between space-y-6 hover:border-sky-500/60 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-slate-300">
                    15 Páginas • PDF
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  Manual de Instalação & Operação — Clínica SPIN
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  O guia definitivo para médicos, dentistas, fisioterapeutas e equipe de recepção. Abrange configuração de rede local (Médico + Secretária sem internet), prontuário LGPD, sala de espera e repasses.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href={clinica.manual.url}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md shadow-sky-950/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar PDF ({clinica.manual.sizeFormatted})</span>
                </a>
                <Link
                  href="/manuais/clinica-spin"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold"
                >
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span>Ler Online</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Passo a Passo Pós-Download */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Instruções Rápidas Pós-Download</h3>
              <p className="text-xs text-slate-400">O que você precisa saber após baixar os instaladores</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h4 className="font-bold text-white text-sm">Descompactar / Executar</h4>
              <p className="text-slate-400 leading-relaxed">
                No PDV SPIN, extraia o arquivo ZIP e execute o atalho. No Clínica SPIN, execute o arquivo .EXE.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
                2
              </span>
              <h4 className="font-bold text-white text-sm">Windows SmartScreen</h4>
              <p className="text-slate-400 leading-relaxed">
                Se surgir a tela azul do Windows, clique em <strong>&quot;Mais informações&quot;</strong> e depois <strong>&quot;Executar assim mesmo&quot;</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
                3
              </span>
              <h4 className="font-bold text-white text-sm">Ativação Offline</h4>
              <p className="text-slate-400 leading-relaxed">
                Insira sua chave de licença vitalícia permanente enviada na sua compra. Não é necessário internet.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
                4
              </span>
              <h4 className="font-bold text-white text-sm">Acesso Padrão</h4>
              <p className="text-slate-400 leading-relaxed">
                Usuário padrão de fábrica: <strong>admin</strong> | Senha: <strong>admin123</strong>. Altere nas Configurações.
              </p>
            </div>
          </div>
        </div>

        {/* Box de Suporte Direto */}
        <div className="text-center p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h3 className="text-xl font-bold text-white">Precisa de Ajuda com o Download ou Instalação?</h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Nossa equipe técnica atende diretamente pelo e-mail oficial sem burocracia ou robôs:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="font-mono text-sm text-indigo-400 select-all font-bold">
              {COMPANY_CONTACT.email}
            </span>
            <CopyEmailButton variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
