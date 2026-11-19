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
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer text-sm select-none rounded-xl whitespace-nowrap shrink-0";

  const variantStyles = {
    primary:
      "bg-accent-lime hover:brightness-110 text-canvas font-bold px-4 py-2.5",
    secondary:
      "bg-surface hover:bg-surface-elevated text-ink border border-border-subtle px-4 py-2.5",
    subtle:
      "bg-surface-elevated hover:bg-border-subtle text-ink border border-border-subtle px-3 py-1.5",
    pill:
      "bg-surface-elevated hover:bg-border-subtle text-accent-lime border border-border-subtle px-3 py-1 text-xs font-mono rounded-full",
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
          <Check
            className={`w-4 h-4 mr-1.5 shrink-0 ${
              variant === "primary" ? "text-canvas" : "text-accent-mint"
            }`}
          />
          <span
            className={`font-bold ${
              variant === "primary" ? "text-canvas" : "text-accent-mint"
            }`}
          >
            E-mail copiado!
          </span>
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
    <div
      className={`inline-flex items-center gap-2 bg-surface border border-border-subtle rounded-full px-3.5 py-1.5 text-xs text-ink-muted ${className}`}
    >
      <Mail className="w-3.5 h-3.5 text-accent-lime shrink-0" />
      <span className="font-mono text-ink select-all">{COMPANY_CONTACT.email}</span>
      <CopyEmailButton variant="pill" showIcon={false} />
    </div>
  );
}
