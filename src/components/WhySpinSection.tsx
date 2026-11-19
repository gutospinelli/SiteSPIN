import React from "react";
import { ShieldCheck, HardDrive, Lock, Zap, Laptop } from "lucide-react";
import Link from "next/link";

export default function WhySpinSection() {
  const pillars = [
    {
      num: "01",
      icon: ShieldCheck,
      circleBg: "bg-accent-lime",
      tagColor: "text-accent-lime",
      title: "O Software é Seu de Verdade",
      subtitle: "Sem mensalidades, sem anuidade, sem taxas escondidas",
      description:
        "Diferente da maioria dos sistemas modernos que cobram aluguel todo mês e bloqueiam seu negócio se você atrasar um boleto, os softwares da SPIN são sua propriedade legítima e vitalícia.",
    },
    {
      num: "02",
      icon: HardDrive,
      circleBg: "bg-accent-violet",
      tagColor: "text-accent-violet",
      title: "100% Offline (Zero Nuvem)",
      subtitle: "Se a internet da sua rua cair, nada para",
      description:
        "Seu balcão de vendas e seu consultório não dependem do provedor de internet. Prontuários, emissão de comprovantes, controle de estoque e caixa operam na velocidade máxima local do disco.",
    },
    {
      num: "03",
      icon: Lock,
      circleBg: "bg-accent-mint",
      tagColor: "text-accent-mint",
      title: "Privacidade Absoluta & LGPD",
      subtitle: "Seus dados nunca saem do seu computador",
      description:
        "Zero envio de dados de pacientes ou faturamento para servidores externos ou Big Techs. Em total conformidade com a LGPD e o sigilo profissional.",
    },
    {
      num: "04",
      icon: Zap,
      circleBg: "bg-accent-amber",
      tagColor: "text-accent-amber",
      title: "Leve e Direto ao Ponto",
      subtitle: "Sem servidores pesados ou configurações complexas",
      description:
        "Não exige instalação de bancos de dados gigantescos (como MySQL corporativo ou SQL Server). Você instala em 2 minutos e já começa a operar imediatamente.",
    },
    {
      num: "05",
      icon: Laptop,
      circleBg: "bg-accent-coral",
      tagColor: "text-accent-coral",
      title: "Rede Local e Backup em Pen Drive",
      subtitle: "Cópia física sob sua custódia em 1 segundo",
      description:
        "Exportação atômica em arquivo único com verificação SHA-256 para salvar em Pen Drive. No Clínica SPIN, conecte médico e secretária pelo Wi-Fi interno sem precisar de internet.",
    },
    {
      num: "06",
      icon: ShieldCheck,
      circleBg: "bg-accent-lime",
      tagColor: "text-accent-lime",
      title: "Ativação Permanente Offline",
      subtitle: "Processo rápido, seguro e documentado",
      description:
        "Uma vez ativada no seu computador, a licença nunca mais expira. O sistema preserva todas as suas configurações mesmo após desligar, reiniciar ou formatar a máquina.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="font-mono text-xs sm:text-sm text-accent-lime block">
            {"// "}a filosofia spin
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Por que escolher a SPIN — Software Prático e Inteligente?
          </h2>
          <p className="text-ink-muted text-base leading-relaxed">
            Criamos tecnologia para o comerciante e para o profissional de saúde que valorizam independência, segurança dos seus dados e previsibilidade financeira real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="rounded-2xl bg-surface border border-border-subtle p-7 hover:border-accent-lime/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-canvas ${pillar.circleBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-accent-lime/90">
                      {pillar.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-1.5">{pillar.title}</h3>
                  <h4 className={`font-mono text-xs font-medium mb-3 ${pillar.tagColor}`}>
                    {pillar.subtitle}
                  </h4>
                  <p className="text-sm text-ink-muted leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Chamada estilo Barra de Transparência BrainBugs */}
        <div className="mt-12 rounded-2xl bg-surface border border-border-subtle p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-mono text-xs text-accent-amber block">
              {"// "}transparência e autonomia
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-ink">
              Cansado de pagar aluguel mensal de sistema e ficar refém da internet?
            </h3>
            <p className="text-sm text-ink-muted">
              Conheça nossas soluções completas com manuais oficiais abertos e instaladores disponíveis para download imediato.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/pdv-spin"
              className="px-5 py-2.5 rounded-xl bg-accent-lime hover:brightness-110 text-canvas font-bold text-sm transition-all"
            >
              Ver PDV SPIN
            </Link>
            <Link
              href="/clinica-spin"
              className="px-5 py-2.5 rounded-xl bg-accent-violet hover:brightness-110 text-canvas font-bold text-sm transition-all"
            >
              Ver Clínica SPIN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
