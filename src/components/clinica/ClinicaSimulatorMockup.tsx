"use client";

import React, { useState } from "react";
import { Stethoscope, Calendar, Clock, Laptop, Send } from "lucide-react";

export default function ClinicaSimulatorMockup() {
  const [activeTab, setActiveTab] = useState<
    "agenda" | "espera" | "prontuario" | "redelocal" | "whatsapp"
  >("espera");
  const [called, setCalled] = useState(false);

  return (
    <div className="rounded-2xl bg-surface border border-border-subtle overflow-hidden">
      {/* Barra de Título */}
      <div className="bg-canvas px-4 py-3 border-b border-border-subtle flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-accent-coral inline-block" />
            <span className="w-3 h-3 rounded-full bg-accent-amber inline-block" />
            <span className="w-3 h-3 rounded-full bg-accent-violet inline-block" />
          </div>
          <span className="text-xs font-mono font-semibold text-ink-muted ml-2">
            Clínica SPIN v1.0.0 Oficial Definitiva — [LGPD &amp; Zero Nuvem]
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface text-accent-violet border border-border-subtle text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
            REDE LOCAL: 192.168.1.15 (CONECTADO)
          </span>
        </div>
      </div>

      {/* Abas do Simulador */}
      <div className="flex flex-wrap border-b border-border-subtle bg-canvas/60 text-[11px]">
        <button
          type="button"
          onClick={() => setActiveTab("espera")}
          className={`px-3 py-2.5 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "espera"
              ? "text-accent-violet border-b-2 border-accent-violet bg-surface"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          Sala de Espera
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("prontuario")}
          className={`px-3 py-2.5 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "prontuario"
              ? "text-accent-violet border-b-2 border-accent-violet bg-surface"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <Stethoscope className="w-3.5 h-3.5" />
          Prontuário LGPD
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("agenda")}
          className={`px-3 py-2.5 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "agenda"
              ? "text-accent-violet border-b-2 border-accent-violet bg-surface"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          Agenda
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("redelocal")}
          className={`px-3 py-2.5 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "redelocal"
              ? "text-accent-violet border-b-2 border-accent-violet bg-surface"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <Laptop className="w-3.5 h-3.5" />
          Rede 2 PCs
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("whatsapp")}
          className={`px-3 py-2.5 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "whatsapp"
              ? "text-accent-violet border-b-2 border-accent-violet bg-surface"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <Send className="w-3.5 h-3.5" />
          WhatsApp
        </button>
      </div>

      {/* Conteúdo das Abas */}
      <div className="p-6">
        {activeTab === "espera" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-border-subtle">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-accent-violet">
                  Fila da Sala de Espera
                </span>
                <p className="text-xs text-ink-muted">
                  Sincronização em tempo real entre balcão e consultório
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-canvas text-accent-mint text-xs font-mono font-semibold border border-border-subtle">
                Dr. Roberto Spinelli (Consultório 01)
              </span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-canvas border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-ink font-sans">Ana Clara Medeiros</span>
                    <span className="px-2 py-0.5 rounded-full bg-accent-violet text-canvas font-bold text-[10px]">
                      Particular
                    </span>
                  </div>
                  <div className="text-ink-subtle text-[11px]">
                    Procedimento: Consulta Cardiológica Inicial
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-full bg-accent-amber text-canvas text-[11px] font-bold whitespace-nowrap">
                    8 min espera
                  </span>
                  <button
                    type="button"
                    onClick={() => setCalled(!called)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-sans cursor-pointer transition-all whitespace-nowrap ${
                      called
                        ? "bg-accent-mint text-canvas"
                        : "bg-accent-violet hover:brightness-110 text-canvas"
                    }`}
                  >
                    {called ? "Em Atendimento..." : "Chamar Paciente"}
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-canvas/70 border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 opacity-80">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-ink font-sans">
                      Lucas Gabriel Santos
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-elevated text-ink-muted text-[10px]">
                      Unimed
                    </span>
                  </div>
                  <div className="text-ink-subtle text-[11px]">Procedimento: Retorno Clínico</div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-full bg-surface text-ink-muted text-[11px] font-semibold border border-border-subtle whitespace-nowrap">
                    2 min espera
                  </span>
                  <span className="text-xs text-ink-subtle font-sans whitespace-nowrap">Aguardando vez</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-ink-subtle font-mono">
              {"// "}o médico visualiza quem chegou e chama o próximo paciente com 1 clique
            </p>
          </div>
        )}

        {activeTab === "prontuario" && (
          <div className="space-y-4 text-xs font-sans">
            <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-accent-violet">
                  Prontuário Médico Eletrônico
                </span>
                <h4 className="text-sm font-bold text-ink">
                  Paciente: Ana Clara Medeiros (34 anos)
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-accent-mint text-canvas text-[11px] font-bold">
                LGPD: Sigilo Restrito
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-3">
                <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle space-y-1">
                  <span className="font-mono text-[11px] uppercase text-ink-subtle">
                    Queixa Principal &amp; Motivo:
                  </span>
                  <p className="text-ink">
                    Episódios ocasionais de palpitação após esforço moderado. Relata cefaleia matinal leve.
                  </p>
                </div>

                <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle space-y-1">
                  <span className="font-mono text-[11px] uppercase text-ink-subtle">
                    Evolução Clínica &amp; Conduta:
                  </span>
                  <p className="text-ink">
                    PA: 125/80 mmHg. Ausculta cardíaca em 2T sem sopros. Solicitado ECG e ecocardiograma com doppler.
                  </p>
                </div>

                <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle space-y-1">
                  <span className="font-mono text-[11px] uppercase text-accent-mint">
                    Prescrições &amp; Receituário:
                  </span>
                  <p className="text-ink font-mono text-[11px]">
                    1. Polivitamínico Mineral — 1 cápsula pela manhã por 30 dias.
                  </p>
                </div>
              </div>

              {/* Linha do Tempo Histórica */}
              <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle space-y-2">
                <span className="font-mono text-[11px] uppercase text-accent-violet block border-b border-border-subtle pb-1.5">
                  Linha do Tempo
                </span>
                <div className="space-y-2.5 text-[11px] text-ink-muted">
                  <div className="border-l-2 border-accent-violet pl-2.5">
                    <span className="text-ink-subtle block text-[10px] font-mono">
                      15/06/2026 · Dra. Mariana
                    </span>
                    <span className="text-ink">Check-up preventivo anual.</span>
                  </div>
                  <div className="border-l-2 border-border-subtle pl-2.5">
                    <span className="text-ink-subtle block text-[10px] font-mono">
                      10/01/2026 · Dr. Roberto
                    </span>
                    <span>Consulta inicial de rotina.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "agenda" && (
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-border-subtle">
              <span className="font-mono text-xs uppercase font-bold text-accent-violet">
                Grade Semanal de Consultas
              </span>
              <span className="text-ink-subtle font-mono">Detecção de Conflitos Ativa</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-center">
              <div className="p-3 rounded-xl bg-canvas border border-border-subtle">
                <span className="text-ink-subtle block text-[10px]">08:30</span>
                <span className="text-accent-mint font-bold">Concluído</span>
                <span className="text-ink-muted block text-[11px] truncate">Maria S.</span>
              </div>
              <div className="p-3 rounded-xl bg-canvas border border-accent-violet">
                <span className="text-ink-subtle block text-[10px]">09:15</span>
                <span className="text-accent-violet font-bold">Atendimento</span>
                <span className="text-ink block text-[11px] truncate">Ana Clara M.</span>
              </div>
              <div className="p-3 rounded-xl bg-canvas border border-accent-amber/60">
                <span className="text-ink-subtle block text-[10px]">10:00</span>
                <span className="text-accent-amber font-bold">Na Espera</span>
                <span className="text-ink block text-[11px] truncate">Lucas G.</span>
              </div>
              <div className="p-3 rounded-xl bg-canvas border border-border-subtle">
                <span className="text-ink-subtle block text-[10px]">10:45</span>
                <span className="text-ink-subtle font-bold">Agendado</span>
                <span className="text-ink-muted block text-[11px] truncate">Rodrigo P.</span>
              </div>
            </div>

            <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle flex items-center justify-between text-ink-muted">
              <span>
                Opção de <strong className="text-ink">Encaixe de Urgência</strong> disponível sem sobrepor o histórico.
              </span>
              <span className="text-accent-lime font-mono font-bold">+ Novo Horário</span>
            </div>
          </div>
        )}

        {activeTab === "redelocal" && (
          <div className="space-y-4 text-xs">
            <span className="font-mono text-xs text-accent-violet block">
              {"// "}arquitetura de rede local (2 pcs)
            </span>
            <h4 className="text-base font-bold text-ink">
              Médico + Secretária Conectados sem Internet da Rua
            </h4>
            <p className="text-ink-muted leading-relaxed">
              Sua licença já cobre até 2 computadores na mesma clínica interligados pelo mesmo roteador Wi-Fi ou cabo de rede. O computador principal opera como Servidor Local e o terminal da secretária se conecta instantaneamente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle space-y-1">
                <span className="text-accent-violet font-bold block">
                  PC 1 (Servidor / Consultório)
                </span>
                <span className="text-ink-subtle text-[11px]">
                  Status: Habilitar Servidor Local
                </span>
                <div className="text-ink">IP Local: 192.168.1.15</div>
              </div>
              <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle space-y-1">
                <span className="text-accent-mint font-bold block">
                  PC 2 (Terminal / Recepção)
                </span>
                <span className="text-ink-subtle text-[11px]">
                  Status: Conectar ao IP 192.168.1.15
                </span>
                <div className="text-accent-mint">Conexão: Sincronizada em tempo real</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "whatsapp" && (
          <div className="space-y-4 text-xs">
            <span className="font-mono text-xs text-accent-mint block">
              {"// "}redução de faltas em 70%
            </span>
            <h4 className="text-base font-bold text-ink">
              Lembretes Gratuitos de Consulta no WhatsApp Web
            </h4>
            <p className="text-ink-muted leading-relaxed">
              Sem precisar contratar plataformas caras de disparo de SMS ou APIs pagas. O sistema prepara a mensagem personalizada e abre diretamente a conversa oficial no WhatsApp Web ou Desktop com o texto pronto.
            </p>
            <div className="p-4 bg-canvas rounded-xl border border-border-subtle space-y-2.5 font-mono">
              <span className="text-accent-mint text-[11px] block">Mensagem Formatada Pronta:</span>
              <p className="text-ink text-xs font-sans bg-surface p-3 rounded-lg border border-border-subtle">
                &quot;Olá, Ana Clara! Confirmamos sua consulta com o Dr. Roberto Spinelli amanhã às 09:15 na Clínica SPIN. Por favor, responda 1 para Confirmar ou 2 para Reagendar.&quot;
              </p>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-accent-mint text-canvas font-sans font-bold text-xs">
                  <Send className="w-3.5 h-3.5" /> Abrir no WhatsApp Web
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
