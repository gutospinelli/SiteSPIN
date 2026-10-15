import React from "react";
import Link from "next/link";
import { ShoppingCart, Stethoscope, Download, BookOpen, Mail, ShieldCheck, HardDrive, Lock } from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { COMPANY_CONTACT } from "@/config/downloads";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      {/* Faixa de Pilares */}
      <div className="border-b border-slate-900 bg-slate-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Sem Mensalidades</h4>
                <p className="text-xs text-slate-400">Licença vitalícia permanente. O software é seu de verdade.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">100% Offline (Zero Nuvem)</h4>
                <p className="text-xs text-slate-400">Seus dados ficam no seu computador. Se a internet cair, nada para.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Soberania e Privacidade LGPD</h4>
                <p className="text-xs text-slate-400">Total sigilo comercial e médico. Sem servidores de terceiros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Coluna 1 e 2: Marca & Missão */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">SPIN</span>
                <span className="text-xs text-slate-400">Software Prático e Inteligente</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Tecnologia direta ao ponto: gestão rápida, segura e sem complicação para o comércio e consultórios do Brasil. Desenvolvido para quem move a economia real.
            </p>
            <div className="pt-2">
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
                <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Canal Oficial de Atendimento:</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={COMPANY_CONTACT.mailtoCommercial}
                    className="text-xs font-mono text-slate-200 hover:text-indigo-300 truncate"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                  <CopyEmailButton variant="pill" showIcon={false} />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 3: Nossos Softwares */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Softwares</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pdv-spin"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ShoppingCart className="w-3.5 h-3.5 text-emerald-500" />
                  <span>PDV SPIN Comercial</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/clinica-spin"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <Stethoscope className="w-3.5 h-3.5 text-sky-500" />
                  <span>Clínica SPIN Inteligente</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/downloads"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Central de Instaladores</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Manuais & Guias */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Documentação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/manuais/pdv-spin"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Manual Online PDV</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/manuais/clinica-spin"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                  <span>Manual Online Clínica</span>
                </Link>
              </li>
              <li>
                <a
                  href="/downloads/manuais/manual-pdv-spin.pdf"
                  download
                  className="hover:text-white transition-colors text-slate-400"
                >
                  PDF Manual PDV SPIN
                </a>
              </li>
              <li>
                <a
                  href="/downloads/manuais/manual-clinica-spin.pdf"
                  download
                  className="hover:text-white transition-colors text-slate-400"
                >
                  PDF Manual Clínica SPIN
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Suporte & Contato */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={COMPANY_CONTACT.mailtoCommercial}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contato Comercial
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONTACT.mailtoSupportPdv}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Suporte Técnico PDV
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONTACT.mailtoSupportClinica}
                  className="hover:text-sky-400 transition-colors"
                >
                  Suporte Técnico Clínica
                </a>
              </li>
              <li className="pt-1">
                <span className="inline-block text-xs text-slate-500">
                  🇧🇷 Desenvolvido com orgulho no Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} SPIN — Software Prático e Inteligente. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Licenciamento Perpétuo</span>
            <span>•</span>
            <span>Zero Nuvem</span>
            <span>•</span>
            <span>Conformidade LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
