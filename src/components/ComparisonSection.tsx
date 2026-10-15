import React from "react";
import { Check, X, ShieldAlert, ShieldCheck } from "lucide-react";

export default function ComparisonSection() {
  const comparisons = [
    {
      feature: "Custo Mensal / Aluguel",
      traditional: "Cobrança obrigatória de R$ 90 a R$ 350 todo mês, com risco de corte se atrasar.",
      spin: "ZERO mensalidades. Você compra uma única vez e a licença vitalícia é sua para sempre.",
      spinWins: true,
    },
    {
      feature: "Funcionamento sem Internet",
      traditional: "Travamento imediato de vendas, agenda e prontuários caso o sinal de internet caia.",
      spin: "100% autônomo offline. Seu balcão e consultório operam na velocidade máxima local do disco.",
      spinWins: true,
    },
    {
      feature: "Privacidade e Sigilo LGPD",
      traditional: "Dados confidenciais de faturamento e pacientes trafegando em servidores na nuvem.",
      spin: "Soberania absoluta. Seus dados nunca saem do seu computador ou da sua rede local.",
      spinWins: true,
    },
    {
      feature: "Segurança de Caixa (Fechamento)",
      traditional: "Operador visualiza quanto dinheiro deveria haver na gaveta, facilitando divergências.",
      spin: "Fechamento de Caixa Cego: contagem cega do dinheiro físico com conferência automática interna.",
      spinWins: true,
    },
    {
      feature: "Custódia de Backup",
      traditional: "Dependência de downloads lentos em plataformas externas ou taxa de resgate.",
      spin: "Backup físico atômico em Pen Drive em menos de 1 segundo com integridade SHA-256.",
      spinWins: true,
    },
    {
      feature: "Complexidade de Instalação",
      traditional: "Exige técnicos de TI, portas de roteador abertas e bancos de dados pesados.",
      spin: "Instalação direta em 2 minutos. Assistente autônomo sem configurações complicadas.",
      spinWins: true,
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Comparativo Transparente
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sistemas Tradicionais com Mensalidade vs Filosofia SPIN
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Entenda por que milhares de empreendedores e médicos estão trocando aluguéis caros de sistemas em nuvem por ferramentas definitivas e soberanas.
          </p>
        </div>

        {/* Tabela Comparativa Desktop */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900">
                <th className="py-5 px-6 text-sm font-bold text-white w-1/4">Critério Operacional</th>
                <th className="py-5 px-6 text-sm font-bold text-rose-400 w-3/8 flex-1">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                    <span>Sistemas Tradicionais em Nuvem (SaaS)</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-sm font-bold text-emerald-400 w-3/8 bg-emerald-950/20 border-l border-emerald-900/40">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>SPIN — Software Prático e Inteligente</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm">
              {comparisons.map((item, index) => (
                <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-200">{item.feature}</td>
                  <td className="py-4 px-6 text-slate-400">
                    <div className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-emerald-200 bg-emerald-950/10 border-l border-emerald-900/40 font-medium">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item.spin}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards Comparativos Mobile */}
        <div className="lg:hidden space-y-4">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-3"
            >
              <h3 className="text-base font-bold text-white pb-2 border-b border-slate-800">
                {item.feature}
              </h3>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                  <X className="w-3.5 h-3.5" /> Sistemas com Mensalidade:
                </span>
                <p className="text-xs text-slate-400 pl-5">{item.traditional}</p>
              </div>

              <div className="space-y-1 bg-emerald-950/20 p-3 rounded-lg border border-emerald-900/30">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> SPIN Tecnologia:
                </span>
                <p className="text-xs text-emerald-200 pl-5 font-medium">{item.spin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
