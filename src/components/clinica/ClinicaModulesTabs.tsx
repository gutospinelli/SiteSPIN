"use client";

import React, { useState } from "react";
import {
  Calendar,
  Stethoscope,
  Laptop,
  BarChart3,
  Sparkles,
  HardDrive,
  CheckCircle2,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function ClinicaModulesTabs() {
  const clinica = PRODUCTS.clinica;
  const [activeModuleId, setActiveModuleId] = useState(clinica.modules[0].id);

  const iconMap: Record<string, React.ElementType> = {
    Calendar,
    Stethoscope,
    Laptop,
    BarChart3,
    Sparkles,
    HardDrive,
  };

  const activeModule = clinica.modules.find((m) => m.id === activeModuleId) || clinica.modules[0];
  const ActiveIcon = iconMap[activeModule.icon] || Stethoscope;

  return (
    <div className="space-y-8">
      {/* Abas Superiores Desktop */}
      <div className="hidden lg:grid grid-cols-6 gap-3">
        {clinica.modules.map((mod, idx) => {
          const Icon = iconMap[mod.icon] || Stethoscope;
          const isActive = mod.id === activeModuleId;
          const num = String(idx + 1).padStart(2, "0");
          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => setActiveModuleId(mod.id)}
              className={`p-4 rounded-2xl text-left border transition-colors cursor-pointer flex flex-col justify-between ${
                isActive
                  ? "bg-surface border-accent-violet"
                  : "bg-surface/60 border-border-subtle hover:border-accent-violet/40 text-ink-muted hover:text-ink"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    isActive
                      ? "bg-accent-violet text-canvas"
                      : "bg-canvas text-ink-muted border border-border-subtle"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold text-accent-violet/80">{num}</span>
              </div>
              <div>
                <span className="text-xs font-bold block text-ink">{mod.tabTitle}</span>
                <span className="text-[11px] text-ink-subtle line-clamp-1">{mod.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Seletor Mobile */}
      <div className="lg:hidden flex overflow-x-auto gap-2 pb-2">
        {clinica.modules.map((mod) => {
          const isActive = mod.id === activeModuleId;
          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => setActiveModuleId(mod.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap border shrink-0 transition-all ${
                isActive
                  ? "bg-accent-violet text-canvas border-accent-violet"
                  : "bg-surface text-ink-muted border-border-subtle"
              }`}
            >
              {mod.tabTitle}
            </button>
          );
        })}
      </div>

      {/* Conteúdo Detalhado do Módulo */}
      <div className="rounded-2xl bg-surface border border-border-subtle p-6 sm:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-violet flex items-center justify-center text-canvas shrink-0">
              <ActiveIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs text-accent-violet block">
                {"// "}módulo integrado · clínica spin
              </span>
              <h3 className="text-2xl font-extrabold text-ink">{activeModule.title}</h3>
              <p className="text-sm text-ink-muted">{activeModule.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-ink-muted text-base leading-relaxed mb-6">
            {activeModule.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lista de Recursos */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-semibold text-ink-subtle uppercase tracking-wider">
                Rotinas Operacionais no Consultório
              </h4>
              <ul className="space-y-2.5">
                {activeModule.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ink">
                    <CheckCircle2 className="w-4 h-4 text-accent-violet shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destaques Técnicos do Manual */}
            <div className="space-y-3 bg-canvas p-5 rounded-2xl border border-border-subtle">
              <h4 className="font-mono text-xs font-semibold text-accent-violet">
                {"// "}segurança, lgpd e especificações oficiais
              </h4>
              <ul className="space-y-2 text-xs text-ink-muted">
                {activeModule.technicalPoints.map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent-mint font-mono font-bold">·</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
