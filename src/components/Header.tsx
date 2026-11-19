"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ShoppingCart,
  Stethoscope,
  Download,
  BookOpen,
  Mail,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { COMPANY_CONTACT } from "@/config/downloads";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-md border-b border-border-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo da SPIN */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-accent-lime flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-canvas font-extrabold text-xl tracking-tight">S</span>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-accent-violet border-2 border-canvas" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-ink tracking-tight">SPIN</span>
                <span className="font-mono text-[11px] font-medium text-accent-lime hidden xl:inline whitespace-nowrap">
                  {"// "}offline &amp; vitalício
                </span>
              </div>
              <span className="text-[11px] text-ink-subtle font-medium tracking-wide whitespace-nowrap">
                Software Prático e Inteligente
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            <Link
              href="/#sobre"
              className="px-2.5 xl:px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface rounded-lg transition-colors whitespace-nowrap"
            >
              A Empresa
            </Link>
            <Link
              href="/pdv-spin"
              className="px-2.5 xl:px-3 py-2 text-sm font-semibold text-accent-lime hover:bg-surface rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <ShoppingCart className="w-4 h-4 text-accent-lime shrink-0" />
              PDV SPIN
            </Link>
            <Link
              href="/clinica-spin"
              className="px-2.5 xl:px-3 py-2 text-sm font-semibold text-accent-violet hover:bg-surface rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Stethoscope className="w-4 h-4 text-accent-violet shrink-0" />
              Clínica SPIN
            </Link>
            <Link
              href="/downloads"
              className="px-2.5 xl:px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-ink-subtle shrink-0" />
              Downloads
            </Link>
            <Link
              href="/downloads#manuais"
              className="px-2.5 xl:px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-ink-subtle shrink-0" />
              Manuais
            </Link>
            <Link
              href="/#contato"
              className="px-2.5 xl:px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface rounded-lg transition-colors whitespace-nowrap"
            >
              Contato
            </Link>
          </nav>

          {/* Ações Desktop */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <CopyEmailButton variant="secondary" />
            <a
              href={COMPANY_CONTACT.mailtoCommercial}
              className="inline-flex items-center gap-2 bg-accent-lime hover:brightness-110 text-canvas text-sm font-bold px-4 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-border-subtle px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col gap-1.5">
            <Link
              href="/#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-medium text-ink hover:bg-surface-elevated rounded-xl"
            >
              A Empresa &amp; Filosofia
            </Link>
            <Link
              href="/pdv-spin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-semibold text-accent-lime hover:bg-surface-elevated rounded-xl flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-accent-lime" />
                PDV SPIN Gestão Comercial
              </span>
              <ArrowRight className="w-4 h-4 text-accent-lime" />
            </Link>
            <Link
              href="/clinica-spin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-semibold text-accent-violet hover:bg-surface-elevated rounded-xl flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-accent-violet" />
                Clínica SPIN Gestão Inteligente
              </span>
              <ArrowRight className="w-4 h-4 text-accent-violet" />
            </Link>
            <Link
              href="/downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-medium text-ink hover:bg-surface-elevated rounded-xl flex items-center gap-2"
            >
              <Download className="w-5 h-5 text-accent-mint" />
              Central de Downloads
            </Link>
            <div className="pl-4 py-1 flex flex-col gap-1 border-l-2 border-border-subtle my-1">
              <Link
                href="/manuais/pdv-spin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-ink-muted hover:text-accent-lime py-1 font-mono"
              >
                {"// "}Manual Online PDV SPIN
              </Link>
              <Link
                href="/manuais/clinica-spin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-ink-muted hover:text-accent-violet py-1 font-mono"
              >
                {"// "}Manual Online Clínica SPIN
              </Link>
            </div>
            <Link
              href="/#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-medium text-ink hover:bg-surface-elevated rounded-xl flex items-center gap-2"
            >
              <Mail className="w-5 h-5 text-accent-lime" />
              Contato Comercial
            </Link>
          </nav>

          <div className="pt-3 border-t border-border-subtle flex flex-col gap-2.5">
            <div className="p-3 bg-canvas rounded-xl border border-border-subtle flex items-center justify-between">
              <span className="text-xs text-ink-muted font-mono truncate mr-2">
                {COMPANY_CONTACT.email}
              </span>
              <CopyEmailButton variant="pill" showIcon={false} />
            </div>
            <a
              href={COMPANY_CONTACT.mailtoCommercial}
              className="w-full text-center bg-accent-lime hover:brightness-110 text-canvas font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Enviar Mensagem Comercial</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
