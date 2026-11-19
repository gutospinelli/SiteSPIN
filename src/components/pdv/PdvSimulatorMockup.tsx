"use client";

import React, { useState } from "react";
import { ShoppingCart, QrCode, CreditCard, Receipt, Check } from "lucide-react";

export default function PdvSimulatorMockup() {
  const [activeTab, setActiveTab] = useState<"caixa" | "fechamento" | "pix" | "crediario">("caixa");
  const [receivedAmount, setReceivedAmount] = useState<number>(20);
  const totalSale = 15.5;
  const change = Math.max(0, receivedAmount - totalSale);

  return (
    <div className="rounded-2xl bg-surface border border-border-subtle overflow-hidden">
      {/* Barra de Título da Janela do PDV */}
      <div className="bg-canvas px-4 py-3 border-b border-border-subtle flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-accent-coral inline-block" />
            <span className="w-3 h-3 rounded-full bg-accent-amber inline-block" />
            <span className="w-3 h-3 rounded-full bg-accent-lime inline-block" />
          </div>
          <span className="text-xs font-mono font-semibold text-ink-muted ml-2">
            PDV SPIN v1.0 — [F1] Frente de Caixa Comercial
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface text-accent-lime border border-border-subtle text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
            OPERADOR: admin | CAIXA ABERTO
          </span>
        </div>
      </div>

      {/* Abas do Simulador */}
      <div className="flex flex-wrap border-b border-border-subtle bg-canvas/60 text-[11px]">
        <button
          type="button"
          onClick={() => setActiveTab("caixa")}
          className={`px-3 py-2.5 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "caixa"
              ? "text-accent-lime border-b-2 border-accent-lime bg-surface"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Caixa (F1)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("pix")}
          className={`px-3 py-2.5 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "pix"
              ? "text-accent-lime border-b-2 border-accent-lime bg-surface"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <QrCode className="w-3.5 h-3.5" />
          PIX QR Code
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("fechamento")}
          className={`px-3 py-2.5 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "fechamento"
              ? "text-accent-lime border-b-2 border-accent-lime bg-surface"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <CreditCard className="w-3.5 h-3.5" />
          Fechamento Cego
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("crediario")}
          className={`px-3 py-2.5 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "crediario"
              ? "text-accent-lime border-b-2 border-accent-lime bg-surface"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <Receipt className="w-3.5 h-3.5" />
          Crediário
        </button>
      </div>

      {/* Conteúdo da Aba */}
      <div className="p-5">
        {activeTab === "caixa" && (
          <div className="space-y-4">
            {/* Lista de Itens */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-canvas rounded-xl border border-border-subtle flex flex-wrap items-center justify-between gap-2 text-ink-muted">
                <span className="font-sans text-xs">Leitor USB:</span>
                <span className="text-accent-lime font-bold bg-surface px-2.5 py-0.5 rounded border border-border-subtle">
                  7891000100102 [ENTER]
                </span>
              </div>

              <div className="rounded-xl border border-border-subtle bg-canvas overflow-hidden">
                <div className="px-3 py-2 bg-surface-elevated font-semibold text-ink-muted grid grid-cols-12 gap-2 text-[10px]">
                  <span className="col-span-2">CÓD</span>
                  <span className="col-span-5">DESCRIÇÃO</span>
                  <span className="col-span-2 text-right">QTD</span>
                  <span className="col-span-3 text-right">TOTAL</span>
                </div>
                <div className="divide-y divide-border-subtle text-ink text-[11px]">
                  <div className="px-3 py-2.5 grid grid-cols-12 gap-2 items-center">
                    <span className="col-span-2 text-ink-subtle">0012</span>
                    <span className="col-span-5 font-medium truncate">Refrigerante 350ml</span>
                    <span className="col-span-2 text-right text-ink-muted">1x</span>
                    <span className="col-span-3 text-right font-bold">R$ 6,50</span>
                  </div>
                  <div className="px-3 py-2.5 grid grid-cols-12 gap-2 items-center bg-accent-lime/[0.04]">
                    <span className="col-span-2 text-ink-subtle">0045</span>
                    <span className="col-span-5 font-medium truncate">Salgado Forno</span>
                    <span className="col-span-2 text-right text-ink-muted">1x</span>
                    <span className="col-span-3 text-right font-bold">R$ 9,00</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-ink-subtle">
                <span>[F2] Buscar</span>
                <span>[F4] Finalizar</span>
                <span>[ESC] Cancelar</span>
              </div>
            </div>

            {/* Painel de Recebimento */}
            <div className="rounded-xl bg-canvas border border-border-subtle p-4 space-y-3.5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-[11px] uppercase text-ink-subtle">
                  Total da Venda
                </span>
                <div className="text-2xl font-extrabold font-mono text-accent-lime">
                  R$ 15,50
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs items-end">
                <div>
                  <label className="text-ink-muted block mb-1">Valor Entregue (R$):</label>
                  <input
                    type="number"
                    value={receivedAmount}
                    onChange={(e) => setReceivedAmount(Number(e.target.value))}
                    className="w-full bg-surface border border-border-subtle rounded-lg px-3 py-2 text-ink font-mono text-sm focus:outline-none focus:border-accent-lime"
                  />
                </div>

                <div className="p-2.5 rounded-lg bg-surface border border-border-subtle flex items-center justify-between gap-2">
                  <span className="text-ink-muted font-medium">Troco:</span>
                  <span className="text-lg font-extrabold text-accent-mint font-mono whitespace-nowrap">
                    R$ {change.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-accent-lime hover:brightness-110 text-canvas font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-4 h-4 shrink-0" />
                <span>Confirmar &amp; Imprimir (F4)</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "pix" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <span className="font-mono text-xs text-accent-lime block">
                {"// "}agilidade no balcão
              </span>
              <h4 className="text-lg font-bold text-ink">QR Code PIX Dinâmico na Tela</h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                Ao selecionar PIX no fechamento da venda, o PDV SPIN gera o QR Code diretamente no monitor da loja. O cliente aponta a câmera do aplicativo do banco e paga na hora, sem máquinas alugadas adicionais.
              </p>
              <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle text-xs font-mono space-y-1">
                <div className="text-ink-subtle">
                  Chave PIX: <span className="text-ink">Configurada na Loja</span>
                </div>
                <div className="text-ink-subtle">
                  Valor Atual: <span className="text-accent-lime font-bold">R$ 15,50</span>
                </div>
                <div className="text-ink-subtle">
                  Identificador: <span className="text-ink">VENDA-00284</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-canvas rounded-xl border border-border-subtle">
              <div className="w-36 h-36 bg-white p-2 rounded-xl flex items-center justify-center">
                <QrCode className="w-32 h-32 text-canvas" />
              </div>
              <span className="text-xs font-mono text-accent-lime font-bold mt-3">
                Aponte o app do banco para pagar
              </span>
            </div>
          </div>
        )}

        {activeTab === "fechamento" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-accent-amber text-canvas text-[11px] font-extrabold uppercase">
                Segurança Máxima
              </span>
              <h4 className="text-base font-bold text-ink">O que é o Fechamento de Caixa Cego?</h4>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              No final do expediente, ao clicar em Fechar Caixa, o sistema <strong className="text-ink">NÃO</strong> revela ao funcionário quanto dinheiro deveria haver na gaveta. O operador precisa contar as notas físicas e digitar o valor exato contado. O sistema faz a auditoria interna registrando Exato, Sobra ou Falta, prevenindo que operadores façam retiradas indevidas antes de fechar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle">
                <span className="text-ink-subtle block text-[11px]">STATUS AUDITORIA</span>
                <span className="text-accent-lime font-bold text-sm">EXATO (BATIDO)</span>
              </div>
              <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle">
                <span className="text-ink-subtle block text-[11px]">EXTRATO EM PDF</span>
                <span className="text-ink font-bold text-sm">Na pasta Downloads</span>
              </div>
              <div className="p-3.5 bg-canvas rounded-xl border border-border-subtle">
                <span className="text-ink-subtle block text-[11px]">SANGRIA DE SEGURANÇA</span>
                <span className="text-ink font-bold text-sm">Justificativa obrigatória</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "crediario" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-accent-violet text-canvas text-[11px] font-extrabold uppercase">
                Venda Fiado Profissional
              </span>
              <h4 className="text-base font-bold text-ink">
                Crediário &amp; Carnê com Recibo de Quitação
              </h4>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Muitos comércios do Brasil fidelizam seus clientes com a tradicional venda no fiado. O PDV SPIN profissionaliza essa operação vinculando a venda ao CPF e nome do cliente com controle de limite. Quando o cliente vem pagar, basta 1 clique para dar baixa, creditar no caixa aberto e emitir o Recibo de Quitação em PDF.
            </p>
            <div className="p-4 bg-canvas rounded-xl border border-border-subtle font-mono text-xs space-y-2">
              <div className="flex justify-between text-ink-muted pb-1.5 border-b border-border-subtle">
                <span>Cliente: Carlos Alberto Souza</span>
                <span className="text-accent-mint">Limite Disp: R$ 450,00</span>
              </div>
              <div className="flex justify-between items-center text-ink">
                <span>Parcela 01/02 — Vencimento: 25/10</span>
                <span className="px-2.5 py-0.5 rounded-full bg-accent-lime text-canvas font-bold">
                  R$ 55,00 [BAIXAR]
                </span>
              </div>
              <div className="flex justify-between items-center text-ink-subtle text-[11px] pt-1">
                <span>Baixa automática no Caixa Aberto</span>
                <span className="text-accent-violet">Recibo de Quitação em PDF</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
