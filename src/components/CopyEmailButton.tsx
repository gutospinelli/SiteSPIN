"use client";

import React, { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";
import { COMPANY_CONTACT } from "@/config/downloads";

interface CopyEmailButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "subtle" | "pill";
  showIcon?: boolean;
}

export default function CopyEmailButton({
  className = "",
  variant = "secondary",
  showIcon = true,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY_CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback para navegadores sem permissão de clipboard direta
      const textArea = document.createElement("textarea");
      textArea.value = COMPANY_CONTACT.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer text-sm select-none rounded-lg";

  const variantStyles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow px-4 py-2.5",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 px-4 py-2.5",
    subtle:
      "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 px-3 py-1.5",
    pill:
      "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1 text-xs rounded-full",
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      title="Clique para copiar o e-mail oficial da SPIN"
      aria-label="Copiar e-mail oficial"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-400 mr-2 shrink-0 animate-in fade-in" />
          <span className="font-semibold text-emerald-300">E-mail copiado!</span>
        </>
      ) : (
        <>
          {showIcon && <Copy className="w-4 h-4 mr-2 shrink-0 opacity-80" />}
          <span>Copiar E-mail</span>
        </>
      )}
    </button>
  );
}

export function ContactDirectPill({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/80 rounded-full px-3 py-1.5 text-xs text-slate-300 ${className}`}>
      <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
      <span className="font-mono text-slate-200 select-all">{COMPANY_CONTACT.email}</span>
      <CopyEmailButton variant="pill" showIcon={false} />
    </div>
  );
}
