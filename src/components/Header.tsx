"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Stethoscope, Download, BookOpen, Mail, Sparkles, ArrowRight } from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { COMPANY_CONTACT } from "@/config/downloads";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo da SPIN */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-xl tracking-wider">S</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-white tracking-tight">SPIN</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Offline & Vitalício
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                Software Prático e Inteligente
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/#sobre"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              A Empresa
            </Link>
            <Link
              href="/pdv-spin"
              className="px-3 py-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <ShoppingCart className="w-4 h-4 text-emerald-400" />
              PDV SPIN
            </Link>
            <Link
              href="/clinica-spin"
              className="px-3 py-2 text-sm font-medium text-sky-400 hover:text-sky-300 hover:bg-sky-950/40 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Stethoscope className="w-4 h-4 text-sky-400" />
              Clínica SPIN
            </Link>
            <Link
              href="/downloads"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-slate-400" />
              Downloads
            </Link>
            <div className="relative group">
              <Link
                href="/downloads#manuais"
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-slate-400" />
                Manuais
              </Link>
            </div>
            <Link
              href="/#contato"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Ações Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <CopyEmailButton variant="secondary" />
            <a
              href={COMPANY_CONTACT.mailtoCommercial}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md shadow-indigo-600/25 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1.5">
            <Link
              href="/#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              A Empresa & Filosofia
            </Link>
            <Link
              href="/pdv-spin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-medium text-emerald-400 hover:bg-emerald-950/40 rounded-lg flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-emerald-400" />
                PDV SPIN Gestão Comercial
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
            <Link
              href="/clinica-spin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-medium text-sky-400 hover:bg-sky-950/40 rounded-lg flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-sky-400" />
                Clínica SPIN Gestão Inteligente
              </span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
            <Link
              href="/downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-lg flex items-center gap-2"
            >
              <Download className="w-5 h-5 text-indigo-400" />
              Central de Downloads
            </Link>
            <div className="pl-4 py-1 flex flex-col gap-1 border-l-2 border-slate-700 my-1">
              <Link
                href="/manuais/pdv-spin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-slate-300 hover:text-emerald-400 py-1"
              >
                • Manual Online PDV SPIN
              </Link>
              <Link
                href="/manuais/clinica-spin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-slate-300 hover:text-sky-400 py-1"
              >
                • Manual Online Clínica SPIN
              </Link>
            </div>
            <Link
              href="/#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-lg flex items-center gap-2"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              Contato Comercial
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono truncate mr-2">
                {COMPANY_CONTACT.email}
              </span>
              <CopyEmailButton variant="pill" showIcon={false} />
            </div>
            <a
              href={COMPANY_CONTACT.mailtoCommercial}
              className="w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm"
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
