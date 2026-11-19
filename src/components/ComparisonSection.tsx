import React from "react";
import { Check, X, ShieldAlert, ShieldCheck } from "lucide-react";

export default function ComparisonSection() {
  const comparisons = [
    {
      feature: "Custo Mensal / Aluguel",
      traditional:
        "Cobrança obrigatória de R$ 90 a R$ 350 todo mês, com risco de corte se atrasar.",
      spin: "ZERO mensalidades. Você compra uma única vez e a licença vitalícia é sua para sempre.",
      spinWins: true,
    },
    {
      feature: "Funcionamento sem Internet",
      traditional:
        "Travamento imediato de vendas, agenda e prontuários caso o sinal de internet caia.",
      spin: "100% autônomo offline. Seu balcão e consultório operam na velocidade máxima local do disco.",
      spinWins: true,
    },
    {
      feature: "Privacidade e Sigilo LGPD",
      traditional:
        "Dados confidenciais de faturamento e pacientes trafegando em servidores na nuvem.",
      spin: "Soberania absoluta. Seus dados nunca saem do seu computador ou da sua rede local.",
      spinWins: true,
    },
    {
      feature: "Segurança de Caixa (Fechamento)",
      traditional:
        "Operador visualiza quanto dinheiro deveria haver na gaveta, facilitando divergências.",
      spin: "Fechamento de Caixa Cego: contagem cega do dinheiro físico com conferência automática interna.",
      spinWins: true,
    },
    {
      feature: "Custódia de Backup",
      traditional:
        "Dependência de downloads lentos em plataformas externas ou taxa de resgate.",
      spin: "Backup físico atômico em Pen Drive em menos de 1 segundo com integridade SHA-256.",
      spinWins: true,
    },
    {
      feature: "Complexidade de Instalação",
      traditional:
        "Exige técnicos de TI, portas de roteador abertas e bancos de dados pesados.",
      spin: "Instalação direta em 2 minutos. Assistente autônomo sem configurações complicadas.",
      spinWins: true,
    },
  ];

  return (
    <section className="py-20 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="font-mono text-xs sm:text-sm text-accent-lime block">
            {"// "}comparativo transparente
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Sistemas Tradicionais com Mensalidade vs Filosofia SPIN
          </h2>
          <p className="text-ink-muted text-base leading-relaxed">
            Entenda por que milhares de empreendedores e médicos estão trocando aluguéis caros de sistemas em nuvem por ferramentas definitivas e soberanas.
          </p>
        </div>

        {/* Tabela Comparativa Desktop */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-border-subtle bg-surface">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-subtle bg-canvas/60">
                <th className="py-5 px-6 text-xs font-mono uppercase tracking-wider text-ink-subtle w-1/4">
                  Critério Operacional
                </th>
                <th className="py-5 px-6 text-sm font-bold text-accent-coral w-3/8">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-accent-coral" />
                    <span>Sistemas Tradicionais em Nuvem (SaaS)</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-sm font-bold text-accent-lime w-3/8 bg-accent-lime/[0.04] border-l border-border-subtle">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent-lime" />
                    <span>SPIN — Software Prático e Inteligente</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-sm">
              {comparisons.map((item, index) => (
                <tr key={index} className="hover:bg-surface-elevated/40 transition-colors">
                  <td className="py-4 px-6 font-bold text-ink">{item.feature}</td>
                  <td className="py-4 px-6 text-ink-muted">
                    <div className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-accent-coral shrink-0 mt-0.5" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-ink bg-accent-lime/[0.04] border-l border-border-subtle font-medium">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-accent-mint shrink-0 mt-0.5" />
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
              className="rounded-2xl bg-surface border border-border-subtle p-5 space-y-3"
            >
              <h3 className="text-base font-bold text-ink pb-2 border-b border-border-subtle">
                {item.feature}
              </h3>

              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-accent-coral flex items-center gap-1.5">
                  <X className="w-3.5 h-3.5" /> Sistemas com Mensalidade:
                </span>
                <p className="text-xs text-ink-muted pl-5">{item.traditional}</p>
              </div>

              <div className="space-y-1 bg-canvas p-3.5 rounded-xl border border-accent-lime/25">
                <span className="text-xs font-mono font-semibold text-accent-lime flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> SPIN Tecnologia:
                </span>
                <p className="text-xs text-ink pl-5 font-medium">{item.spin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
