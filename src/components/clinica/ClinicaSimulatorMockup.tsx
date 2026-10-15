"use client";

import React, { useState } from "react";
import {
  Stethoscope,
  Calendar,
  Clock,
  Laptop,
  Send,
} from "lucide-react";

export default function ClinicaSimulatorMockup() {
  const [activeTab, setActiveTab] = useState<"agenda" | "espera" | "prontuario" | "redelocal" | "whatsapp">("espera");
  const [called, setCalled] = useState(false);

  return (
    <div className="rounded-2xl bg-slate-900 border border-sky-500/30 overflow-hidden shadow-2xl">
      {/* Barra de Título */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-sky-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-300 ml-2">
            Clínica SPIN v1.0.0 Oficial Definitiva — [LGPD & Zero Nuvem]
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            REDE LOCAL: 192.168.1.15 (CONECTADO)
          </span>
        </div>
      </div>

      {/* Abas do Simulador */}
      <div className="flex border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs">
        <button
          type="button"
          onClick={() => setActiveTab("espera")}
          className={`px-4 py-2.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "espera"
              ? "text-sky-400 border-b-2 border-sky-400 bg-slate-900/80"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Clock className="w-4 h-4" />
          Sala de Espera (Ao Vivo)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("prontuario")}
          className={`px-4 py-2.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "prontuario"
              ? "text-sky-400 border-b-2 border-sky-400 bg-slate-900/80"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Stethoscope className="w-4 h-4" />
          Prontuário LGPD
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("agenda")}
          className={`px-4 py-2.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "agenda"
              ? "text-sky-400 border-b-2 border-sky-400 bg-slate-900/80"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Calendar className="w-4 h-4" />
          Agenda Inteligente
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("redelocal")}
          className={`px-4 py-2.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "redelocal"
              ? "text-sky-400 border-b-2 border-sky-400 bg-slate-900/80"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Laptop className="w-4 h-4" />
          Rede Médico + Recepção
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("whatsapp")}
          className={`px-4 py-2.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "whatsapp"
              ? "text-sky-400 border-b-2 border-sky-400 bg-slate-900/80"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Send className="w-4 h-4" />
          WhatsApp 1 Clique
        </button>
      </div>

      {/* Conteúdo das Abas */}
      <div className="p-6">
        {activeTab === "espera" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
              <div>
                <span className="text-xs uppercase font-bold text-sky-400">Fila da Sala de Espera</span>
                <p className="text-xs text-slate-400">Sincronização em tempo real entre balcão e consultório</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/20">
                Dr. Roberto Spinelli (Consultório 01)
              </span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white font-sans">Ana Clara Medeiros</span>
                    <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px]">Particular</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">Procedimento: Consulta Cardiológica Inicial</div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold">
                    ⏱ 8 min na espera
                  </span>
                  <button
                    type="button"
                    onClick={() => setCalled(!called)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-sans cursor-pointer transition-all ${
                      called
                        ? "bg-emerald-600 text-white"
                        : "bg-sky-600 hover:bg-sky-500 text-white"
                    }`}
                  >
                    {called ? "▶ Em Atendimento..." : "▶ Chamar Paciente"}
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 opacity-80">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-200 font-sans">Lucas Gabriel Santos</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">Unimed</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">Procedimento: Retorno Clínico</div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-xs font-semibold">
                    ⏱ 2 min na espera
                  </span>
                  <span className="text-xs text-slate-500 font-sans">Aguardando vez</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              💡 Acabe com os gritos e avisos na porta! O médico visualiza quem chegou e chama com 1 clique.
            </p>
          </div>
        )}

        {activeTab === "prontuario" && (
          <div className="space-y-4 text-xs font-sans">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <span className="text-xs uppercase font-bold text-sky-400">Prontuário Médico Eletrônico</span>
                <h4 className="text-sm font-bold text-white">Paciente: Ana Clara Medeiros (34 anos)</h4>
              </div>
              <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
                LGPD: Sigilo Restrito ao Médico
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-3">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold uppercase text-slate-400">Queixa Principal & Motivo:</span>
                  <p className="text-slate-200">
                    Episódios ocasionais de palpitação após esforço moderado. Relata cefaleia matinal leve.
                  </p>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold uppercase text-slate-400">Evolução Clínica & Conduta:</span>
                  <p className="text-slate-200">
                    PA: 125/80 mmHg. Ausculta cardíaca em 2T sem sopros. Solicitado ECG e ecocardiograma com dopller.
                  </p>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold uppercase text-emerald-400">Prescrições & Receituário:</span>
                  <p className="text-slate-200 font-mono text-[11px]">
                    1. Polivitamínico Mineral — 1 cápsula pela manhã por 30 dias.
                  </p>
                </div>
              </div>

              {/* Linha do Tempo Histórica */}
              <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold uppercase text-sky-400 block border-b border-slate-800 pb-1">
                  Linha do Tempo (Consultas Anteriores)
                </span>
                <div className="space-y-2 text-[11px] text-slate-300">
                  <div className="border-l-2 border-sky-500 pl-2">
                    <span className="text-slate-400 block text-[10px]">15/06/2026 • Dra. Mariana</span>
                    <span>Check-up preventivo anual.</span>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-2">
                    <span className="text-slate-400 block text-[10px]">10/01/2026 • Dr. Roberto</span>
                    <span>Consulta inicial de rotina.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "agenda" && (
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-xs uppercase font-bold text-sky-400">Grade Semanal de Consultas</span>
              <span className="text-slate-400">Detecção Automática de Conflitos Ativa</span>
            </div>

            <div className="grid grid-cols-4 gap-2 font-mono text-center">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">08:30</span>
                <span className="text-emerald-400 font-bold">Concluído</span>
                <span className="text-slate-300 block text-[11px] truncate">Maria S.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-500/50">
                <span className="text-slate-400 block text-[10px]">09:15</span>
                <span className="text-sky-300 font-bold">Atendimento</span>
                <span className="text-white block text-[11px] truncate">Ana Clara M.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/30">
                <span className="text-slate-400 block text-[10px]">10:00</span>
                <span className="text-amber-300 font-bold">Na Espera</span>
                <span className="text-slate-200 block text-[11px] truncate">Lucas G.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">10:45</span>
                <span className="text-slate-400 font-bold">Agendado</span>
                <span className="text-slate-300 block text-[11px] truncate">Rodrigo P.</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between text-slate-300">
              <span>Opção de <strong>Encaixe de Urgência</strong> disponível sem sobrepor o histórico.</span>
              <span className="text-emerald-400 font-bold">+ Novo Horário</span>
            </div>
          </div>
        )}

        {activeTab === "redelocal" && (
          <div className="space-y-4 text-xs">
            <span className="text-xs uppercase font-bold text-sky-400">Arquitetura de Rede Local (2 PCs)</span>
            <h4 className="text-base font-bold text-white">Médico + Secretária Conectados sem Internet da Rua</h4>
            <p className="text-slate-300 leading-relaxed">
              Sua licença já cobre até 2 computadores na mesma clínica interligados pelo mesmo roteador Wi-Fi ou cabo de rede. O computador principal opera como Servidor Local e o terminal da secretária se conecta instantaneamente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                <span className="text-sky-400 font-bold block">PC 1 (Servidor / Consultório)</span>
                <span className="text-slate-400 text-[11px]">Status: Habilitar Servidor Local</span>
                <div className="text-white">IP Local: 192.168.1.15</div>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold block">PC 2 (Terminal / Recepção)</span>
                <span className="text-slate-400 text-[11px]">Status: Conectar ao IP 192.168.1.15</span>
                <div className="text-emerald-300">Conexão: Sincronizada em tempo real</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "whatsapp" && (
          <div className="space-y-4 text-xs">
            <span className="text-xs uppercase font-bold text-emerald-400">Redução de Faltas em 70%</span>
            <h4 className="text-base font-bold text-white">Lembretes Gratuitos de Consulta no WhatsApp Web</h4>
            <p className="text-slate-300 leading-relaxed">
              Sem precisar contratar plataformas caras de disparo de SMS ou APIs pagas. O sistema prepara a mensagem personalizada e abre diretamente a conversa oficial no WhatsApp Web ou Desktop com o texto pronto.
            </p>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 font-mono">
              <span className="text-emerald-400 text-[11px] block">Mensagem Formatada Pronta:</span>
              <p className="text-slate-200 text-xs font-sans bg-slate-900 p-3 rounded-lg border border-slate-800">
                &quot;Olá, Ana Clara! Confirmamos sua consulta com o Dr. Roberto Spinelli amanhã às 09:15 na Clínica SPIN. Por favor, responda 1 para Confirmar ou 2 para Reagendar.&quot;
              </p>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-600 text-white font-sans font-bold text-xs">
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
