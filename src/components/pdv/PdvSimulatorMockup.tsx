"use client";

import React, { useState } from "react";
import { ShoppingCart, QrCode, CreditCard, Receipt, Check } from "lucide-react";

export default function PdvSimulatorMockup() {
  const [activeTab, setActiveTab] = useState<"caixa" | "fechamento" | "pix" | "crediario">("caixa");
  const [receivedAmount, setReceivedAmount] = useState<number>(20);
  const totalSale = 15.50;
  const change = Math.max(0, receivedAmount - totalSale);

  return (
    <div className="rounded-2xl bg-slate-900 border border-emerald-500/30 overflow-hidden shadow-2xl">
      {/* Barra de Título da Janela do PDV */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-300 ml-2">
            PDV SPIN v1.0 — [F1] Frente de Caixa Comercial
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            OPERADOR: admin | CAIXA ABERTO
          </span>
        </div>
      </div>

      {/* Abas do Simulador */}
      <div className="flex border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs">
        <button
          type="button"
          onClick={() => setActiveTab("caixa")}
          className={`px-4 py-2.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "caixa"
              ? "text-emerald-400 border-b-2 border-emerald-400 bg-slate-900/80"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          Frente de Caixa (F1)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("pix")}
          className={`px-4 py-2.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "pix"
              ? "text-emerald-400 border-b-2 border-emerald-400 bg-slate-900/80"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <QrCode className="w-4 h-4" />
          QR Code PIX na Tela
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("fechamento")}
          className={`px-4 py-2.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "fechamento"
              ? "text-emerald-400 border-b-2 border-emerald-400 bg-slate-900/80"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <CreditCard className="w-4 h-4" />
          Fechamento Cego
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("crediario")}
          className={`px-4 py-2.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "crediario"
              ? "text-emerald-400 border-b-2 border-emerald-400 bg-slate-900/80"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Receipt className="w-4 h-4" />
          Crediário & Fiado
        </button>
      </div>

      {/* Conteúdo da Aba */}
      <div className="p-6">
        {activeTab === "caixa" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lista de Itens */}
            <div className="md:col-span-2 space-y-3 font-mono text-xs">
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between text-slate-300">
                <span className="text-slate-400 font-sans">Código de Barras / Leitor USB:</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800">
                  7891000100102 [ENTER]
                </span>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-950/80 overflow-hidden">
                <div className="px-3 py-2 bg-slate-800/60 font-semibold text-slate-300 grid grid-cols-12 text-[11px]">
                  <span className="col-span-2">CÓDIGO</span>
                  <span className="col-span-6">DESCRIÇÃO</span>
                  <span className="col-span-2 text-right">QTD</span>
                  <span className="col-span-2 text-right">TOTAL</span>
                </div>
                <div className="divide-y divide-slate-800 text-slate-200">
                  <div className="px-3 py-2.5 grid grid-cols-12">
                    <span className="col-span-2 text-slate-400">00012</span>
                    <span className="col-span-6 font-medium">Refrigerante Lata 350ml</span>
                    <span className="col-span-2 text-right">1x R$ 6,50</span>
                    <span className="col-span-2 text-right font-bold text-white">R$ 6,50</span>
                  </div>
                  <div className="px-3 py-2.5 grid grid-cols-12 bg-emerald-950/10">
                    <span className="col-span-2 text-slate-400">00045</span>
                    <span className="col-span-6 font-medium">Salgado Especial Forno</span>
                    <span className="col-span-2 text-right">1x R$ 9,00</span>
                    <span className="col-span-2 text-right font-bold text-white">R$ 9,00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>[F2] Buscar Produto</span>
                <span>[F4] Finalizar Venda</span>
                <span>[ESC] Cancelar</span>
              </div>
            </div>

            {/* Painel de Recebimento */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Total da Venda
                </span>
                <div className="text-3xl font-black text-emerald-400 font-sans mt-1">
                  R$ 15,50
                </div>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">Valor Entregue pelo Cliente (R$):</label>
                  <input
                    type="number"
                    value={receivedAmount}
                    onChange={(e) => setReceivedAmount(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-900/40 flex items-center justify-between">
                  <span className="text-emerald-300 font-medium">Troco a Devolver:</span>
                  <span className="text-xl font-black text-emerald-400 font-mono">
                    R$ {change.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wide flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Confirmar & Imprimir (F4)</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "pix" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Agilidade no Balcão
              </span>
              <h4 className="text-lg font-bold text-white">QR Code PIX Dinâmico na Tela</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ao selecionar PIX no fechamento da venda, o PDV SPIN gera o QR Code diretamente no monitor da loja. O cliente aponta a câmera do aplicativo do banco e paga na hora, sem máquinas alugadas adicionais.
              </p>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono space-y-1">
                <div className="text-slate-400">Chave PIX: <span className="text-slate-200">Configurada na Loja</span></div>
                <div className="text-slate-400">Valor Atual: <span className="text-emerald-400 font-bold">R$ 15,50</span></div>
                <div className="text-slate-400">Identificador: <span className="text-slate-200">VENDA-00284</span></div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-slate-950 rounded-xl border border-slate-800">
              <div className="w-36 h-36 bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                <QrCode className="w-32 h-32 text-slate-950" />
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold mt-3">
                Aponte o app do banco para pagar
              </span>
            </div>
          </div>
        )}

        {activeTab === "fechamento" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-bold uppercase">
                Segurança Máxima
              </span>
              <h4 className="text-base font-bold text-white">O que é o Fechamento de Caixa Cego?</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              No final do expediente, ao clicar em Fechar Caixa, o sistema <strong>NÃO</strong> revela ao funcionário quanto dinheiro deveria haver na gaveta. O operador precisa contar as notas físicas e digitar o valor exato contado. O sistema faz a auditoria interna registrando Exato, Sobra ou Falta, prevenindo que operadores façam retiradas indevidas antes de fechar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">STATUS AUDITORIA</span>
                <span className="text-emerald-400 font-bold text-sm">EXATO (BATIDO)</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">EXTRATO EM PDF</span>
                <span className="text-slate-200 font-bold text-sm">Na pasta Downloads</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">SANGRIA DE SEGURANÇA</span>
                <span className="text-slate-200 font-bold text-sm">Justificativa obrigatória</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "crediario" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-bold uppercase">
                Venda Fiado Profissional
              </span>
              <h4 className="text-base font-bold text-white">Crediário & Carnê com Recibo de Quitação</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Muitos comércios do Brasil fidelizam seus clientes com a tradicional venda no fiado. O PDV SPIN profissionaliza essa operação vinculando a venda ao CPF e nome do cliente com controle de limite. Quando o cliente vem pagar, basta 1 clique para dar baixa, creditar no caixa aberto e emitir o Recibo de Quitação em PDF.
            </p>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
              <div className="flex justify-between text-slate-300 pb-1 border-b border-slate-800">
                <span>Cliente: Carlos Alberto Souza</span>
                <span className="text-emerald-400">Limite Disp: R$ 450,00</span>
              </div>
              <div className="flex justify-between items-center text-slate-200">
                <span>Parcela 01/02 — Vencimento: 25/10</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">R$ 55,00 [BAIXAR]</span>
              </div>
              <div className="flex justify-between items-center text-slate-400 text-[11px] pt-1">
                <span>Baixa automática no Caixa Aberto</span>
                <span className="text-indigo-400">Recibo de Quitação em PDF</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
