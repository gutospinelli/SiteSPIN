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
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-surface-elevated text-ink border border-border-subtle text-xs font-semibold cursor-pointer transition-colors ${className}`}
      title="Imprimir ou Salvar em PDF via Navegador"
    >
      <Printer className="w-4 h-4 text-ink-muted" />
      <span>{label}</span>
    </button>
  );
}
