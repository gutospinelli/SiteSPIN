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
        {clinica.modules.map((mod) => {
          const Icon = iconMap[mod.icon] || Stethoscope;
          const isActive = mod.id === activeModuleId;
          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => setActiveModuleId(mod.id)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? "bg-slate-900 border-sky-500 shadow-lg shadow-sky-950/40 -translate-y-1"
                  : "bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                  isActive
                    ? "bg-sky-500/10 text-sky-400 border border-sky-500/30"
                    : "bg-slate-900 text-slate-400 border border-slate-800"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold block text-white">{mod.tabTitle}</span>
                <span className="text-[11px] text-slate-400 line-clamp-1">{mod.title}</span>
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
                  ? "bg-sky-600 text-white border-sky-500"
                  : "bg-slate-900 text-slate-300 border-slate-800"
              }`}
            >
              {mod.tabTitle}
            </button>
          );
        })}
      </div>

      {/* Conteúdo Detalhado do Módulo */}
      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <ActiveIcon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Módulo Integrado • Clínica SPIN
              </span>
              <h3 className="text-2xl font-black text-white">{activeModule.title}</h3>
              <p className="text-sm text-slate-400">{activeModule.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="py-6">
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            {activeModule.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lista de Recursos */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Rotinas Operacionais no Consultório:
              </h4>
              <ul className="space-y-2.5">
                {activeModule.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destaques Técnicos do Manual */}
            <div className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Segurança, LGPD e Especificações Oficiais:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeModule.technicalPoints.map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
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
