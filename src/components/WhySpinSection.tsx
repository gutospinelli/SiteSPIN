import React from "react";
import { ShieldCheck, HardDrive, Lock, Zap, Laptop } from "lucide-react";
import Link from "next/link";

export default function WhySpinSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      title: "O Software é Seu de Verdade",
      subtitle: "Sem mensalidades, sem anuidade, sem taxas escondidas",
      description:
        "Diferente da maioria dos sistemas modernos que cobram aluguel todo mês e bloqueiam seu negócio se você atrasar um boleto, os softwares da SPIN são sua propriedade legítima e vitalícia.",
    },
    {
      icon: HardDrive,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      title: "100% Offline (Zero Nuvem)",
      subtitle: "Se a internet da sua rua cair, nada para",
      description:
        "Seu balcão de vendas e seu consultório não dependem do provedor de internet. Prontuários, emissão de comprovantes, controle de estoque e caixa operam na velocidade máxima local do disco.",
    },
    {
      icon: Lock,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      title: "Privacidade Absoluta & LGPD",
      subtitle: "Seus dados nunca saem do seu computador",
      description:
        "Zero envio de dados de pacientes ou faturamento para servidores externos ou Big Techs. Em total conformidade com a LGPD e o sigilo profissional.",
    },
    {
      icon: Zap,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      title: "Leve e Direto ao Ponto",
      subtitle: "Sem servidores pesados ou configurações complexas",
      description:
        "Não exige instalação de bancos de dados gigantescos (como MySQL corporativo ou SQL Server). Você instala em 2 minutos e já começa a operar imediatamente.",
    },
    {
      icon: Laptop,
      color: "text-teal-400 bg-teal-500/10 border-teal-500/20",
      title: "Rede Local e Backup em Pen Drive",
      subtitle: "Cópia física sob sua custódia em 1 segundo",
      description:
        "Exportação atômica em arquivo único com verificação SHA-256 para salvar em Pen Drive. No Clínica SPIN, conecte médico e secretária pelo Wi-Fi interno sem precisar de internet.",
    },
    {
      icon: ShieldCheck,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      title: "Ativação Permanente Offline",
      subtitle: "Processo rápido, seguro e documentado",
      description:
        "Uma vez ativada no seu computador, a licença nunca mais expira. O sistema preserva todas as suas configurações mesmo após desligar, reiniciar ou formatar a máquina.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-slate-900/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            A Filosofia SPIN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que escolher a SPIN — Software Prático e Inteligente?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Criamos tecnologia para o comerciante e para o profissional de saúde que valorizam independência, segurança dos seus dados e previsibilidade financeira real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-950/70 border border-slate-800 p-7 hover:border-slate-700 transition-all hover:-translate-y-1 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${pillar.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">{pillar.title}</h3>
                <h4 className="text-xs font-semibold text-indigo-400 mb-3">{pillar.subtitle}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Banner de Chamada */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-950 border border-indigo-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Cansado de pagar aluguel mensal de sistema e ficar refém da internet?
            </h3>
            <p className="text-sm text-slate-300">
              Conheça nossas soluções completas com manuais oficiais abertos e instaladores disponíveis para download imediato.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/pdv-spin"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-900/30"
            >
              Ver PDV SPIN
            </Link>
            <Link
              href="/clinica-spin"
              className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md shadow-sky-900/30"
            >
              Ver Clínica SPIN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
