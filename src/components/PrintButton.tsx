"use client";

import React from "react";
import { Printer } from "lucide-react";

export default function PrintButton({
  label = "Imprimir Manual Completo",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold cursor-pointer transition-colors ${className}`}
      title="Imprimir ou Salvar em PDF via Navegador"
    >
      <Printer className="w-4 h-4 text-slate-400" />
      <span>{label}</span>
    </button>
  );
}
