"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ShieldCheck, Sparkles } from "lucide-react";

const faqItems = [
  {
    question: "Preciso pagar alguma mensalidade ou anuidade?",
    answer:
      "Não! O pagamento de R$ 40,00 (PDV Spin) ou R$ 99,00 (Clínica Spin) é 100% único e vitalício. Você adquire a licença definitiva do software para o seu computador e nunca receberá boletos mensais, taxas de renovação ou cobranças surpresa. O sistema é seu de verdade.",
  },
  {
    question: "Como recebo o sistema após a compra?",
    answer:
      "O envio é 100% digital e imediato, sem nenhum custo de frete! Assim que sua compra é confirmada, você recebe imediatamente a sua Chave de Licença Vitalícia, os instaladores oficiais e o Manual Completo do Usuário. Caso adquira pelo Mercado Livre, basta escolher a opção 'Retirar com o vendedor / Combinar com o vendedor' para não pagar frete.",
  },
  {
    question: "É difícil de usar? Precisa de internet ou computador potente?",
    answer:
      "É extremamente simples, leve e direto ao ponto! Os sistemas foram criados para funcionar em qualquer computador ou notebook básico com Windows 10, Windows 11 ou macOS (mesmo com apenas 2 GB de RAM), sem exigir instalação de bancos de dados pesados. Além disso, funcionam 100% offline: se a internet cair na sua loja ou consultório, você continua vendendo e atendendo normalmente.",
  },
  {
    question: "A compra pelo Mercado Livre ou canal oficial é segura?",
    answer:
      "Totalmente segura! Ao adquirir pelo Mercado Livre, você conta com a proteção integral da Compra Garantida do Mercado Livre (seu dinheiro 100% protegido até que o software esteja instalado e funcionando na sua máquina), além de suporte técnico oficial prioritário direto com a nossa equipe de engenharia pelo chat da compra ou pelo e-mail spinsoftwareinteligente@gmail.com.",
  },
  {
    question: "E se eu formatar ou trocar de computador no futuro?",
    answer:
      "Tanto o PDV Spin (.pdvbak) quanto o Clínica Spin (.spinbackup) possuem backup em 1 clique para Pen Drive em menos de 1 segundo. Se você formatar ou trocar de máquina, basta instalar novamente o sistema e restaurar o seu arquivo de backup para recuperar 100% dos seus produtos, clientes, pacientes, prontuários e histórico financeiro.",
  },
  {
    question: "O PDV Spin funciona com leitor de código de barras e impressora comum?",
    answer:
      "Sim! O PDV Spin reconhece automaticamente qualquer leitor de código de barras USB (com ou sem fio), imprime em qualquer impressora térmica de bobina (58mm ou 80mm padrão ESC/POS) e também exporta comprovantes, extratos de caixa e carnês em PDF com 1 clique para imprimir em qualquer impressora comum de folha A4.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes sobre Licença Vitalícia e Pagamento Único
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
            Tudo o que você precisa saber antes de adquirir o <strong>PDV Spin (R$ 40,00)</strong> ou o{" "}
            <strong>Clínica Spin (R$ 99,00)</strong> com entrega digital imediata.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-slate-950 border-indigo-500/40 shadow-lg"
                    : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        isOpen ? "text-indigo-400" : "text-slate-400"
                      }`}
                    />
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pl-14 text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selo de Garantia no Rodapé do FAQ */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-sky-950/30 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Compra 100% Segura • Pagamento Único • Zero Mensalidade
              </h4>
              <p className="text-xs text-slate-400">
                Licença vitalícia com entrega digital imediata e suporte direto com nossos desenvolvedores.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 shrink-0">
            PDV R$ 40 • Clínica R$ 99
          </span>
        </div>
      </div>
    </section>
  );
}
