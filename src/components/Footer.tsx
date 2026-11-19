import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Stethoscope,
  Download,
  BookOpen,
  Mail,
  ShieldCheck,
  HardDrive,
  Lock,
} from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { COMPANY_CONTACT } from "@/config/downloads";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-canvas border-t border-border-subtle text-ink-muted">
      {/* Faixa de Pilares */}
      <div className="border-b border-border-subtle bg-surface/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-accent-lime flex items-center justify-center text-canvas shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-ink">Sem Mensalidades</h4>
                <p className="text-xs text-ink-muted">
                  Licença vitalícia permanente. O software é seu de verdade.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-accent-mint flex items-center justify-center text-canvas shrink-0">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-ink">100% Offline (Zero Nuvem)</h4>
                <p className="text-xs text-ink-muted">
                  Seus dados ficam no seu computador. Se a internet cair, nada para.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-accent-violet flex items-center justify-center text-canvas shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-ink">Soberania e Privacidade LGPD</h4>
                <p className="text-xs text-ink-muted">
                  Total sigilo comercial e médico. Sem servidores de terceiros.
                </p>
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
              <div className="relative w-10 h-10 rounded-xl bg-accent-lime flex items-center justify-center">
                <span className="text-canvas font-extrabold text-lg">S</span>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-accent-violet border-2 border-canvas" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-ink tracking-tight">SPIN</span>
                <span className="text-xs text-ink-subtle">Software Prático e Inteligente</span>
              </div>
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
              Tecnologia direta ao ponto: gestão rápida, segura e sem complicação para o comércio e consultórios do Brasil. Desenvolvido para quem move a economia real.
            </p>
            <div className="pt-2">
              <div className="p-3.5 bg-surface border border-border-subtle rounded-xl space-y-2">
                <div className="text-xs text-ink-subtle font-mono flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-lime" />
                  <span>{"// "}canal oficial de atendimento</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={COMPANY_CONTACT.mailtoCommercial}
                    className="text-xs font-mono text-accent-lime hover:underline truncate"
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
            <h4 className="font-mono text-xs font-semibold text-accent-lime tracking-wider">
              {"// "}softwares
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/pdv-spin"
                  className="hover:text-accent-lime transition-colors flex items-center gap-2"
                >
                  <ShoppingCart className="w-3.5 h-3.5 text-accent-lime" />
                  <span>PDV SPIN Comercial</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/clinica-spin"
                  className="hover:text-accent-violet transition-colors flex items-center gap-2"
                >
                  <Stethoscope className="w-3.5 h-3.5 text-accent-violet" />
                  <span>Clínica SPIN Inteligente</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/downloads"
                  className="hover:text-ink transition-colors flex items-center gap-2 text-ink-muted"
                >
                  <Download className="w-3.5 h-3.5 text-ink-subtle" />
                  <span>Central de Instaladores</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Manuais & Guias */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-accent-violet tracking-wider">
              {"// "}documentação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/manuais/pdv-spin"
                  className="hover:text-accent-lime transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-accent-lime" />
                  <span>Manual Online PDV</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/manuais/clinica-spin"
                  className="hover:text-accent-violet transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-accent-violet" />
                  <span>Manual Online Clínica</span>
                </Link>
              </li>
              <li>
                <a
                  href="/downloads/manuais/manual-pdv-spin.pdf"
                  download
                  className="hover:text-ink transition-colors text-ink-muted"
                >
                  PDF Manual PDV SPIN
                </a>
              </li>
              <li>
                <a
                  href="/downloads/manuais/manual-clinica-spin.pdf"
                  download
                  className="hover:text-ink transition-colors text-ink-muted"
                >
                  PDF Manual Clínica SPIN
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Suporte & Contato */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-accent-mint tracking-wider">
              {"// "}atendimento
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={COMPANY_CONTACT.mailtoCommercial}
                  className="hover:text-accent-lime transition-colors"
                >
                  Contato Comercial
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONTACT.mailtoSupportPdv}
                  className="hover:text-accent-lime transition-colors"
                >
                  Suporte Técnico PDV
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONTACT.mailtoSupportClinica}
                  className="hover:text-accent-violet transition-colors"
                >
                  Suporte Técnico Clínica
                </a>
              </li>
              <li className="pt-1">
                <span className="inline-block font-mono text-xs text-ink-subtle">
                  Desenvolvido no Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-subtle font-mono">
          <p>
            © {currentYear} SPIN — Software Prático e Inteligente.
          </p>
          <div className="flex items-center gap-3 text-ink-subtle">
            <span>Licenciamento Perpétuo</span>
            <span>·</span>
            <span>Zero Nuvem</span>
            <span>·</span>
            <span>LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
