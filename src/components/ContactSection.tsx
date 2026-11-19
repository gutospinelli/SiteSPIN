import React from "react";
import { Mail, ShoppingCart, Stethoscope, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { COMPANY_CONTACT } from "@/config/downloads";

export default function ContactSection() {
  const contactChannels = [
    {
      title: "Contato Comercial",
      subtitle: "Novas licenças, cotações e dúvidas de implantação",
      icon: Sparkles,
      circleBg: "bg-accent-lime",
      tag: "comercial · licenças",
      tagColor: "text-accent-lime",
      mailto: COMPANY_CONTACT.mailtoCommercial,
      actionText: "Enviar E-mail Comercial",
    },
    {
      title: "Suporte Técnico PDV SPIN",
      subtitle: "Dúvidas de operação de caixa, balcão, leitor e backup",
      icon: ShoppingCart,
      circleBg: "bg-accent-mint",
      tag: "pdv · caixa · backup",
      tagColor: "text-accent-mint",
      mailto: COMPANY_CONTACT.mailtoSupportPdv,
      actionText: "Abrir Chamado PDV SPIN",
    },
    {
      title: "Suporte Técnico Clínica SPIN",
      subtitle: "Configuração de rede local, prontuário LGPD e rotina",
      icon: Stethoscope,
      circleBg: "bg-accent-violet",
      tag: "clínica · rede local · lgpd",
      tagColor: "text-accent-violet",
      mailto: COMPANY_CONTACT.mailtoSupportClinica,
      actionText: "Abrir Chamado Clínica SPIN",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="font-mono text-xs sm:text-sm text-accent-lime block">
            {"// "}próximo passo · canal oficial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Fale Diretamente com a Equipe SPIN
          </h2>
          <p className="text-ink-muted text-base leading-relaxed">
            Atendimento direto sem robôs demorados. Nossa equipe de engenharia e suporte técnico responde com agilidade prioritária.
          </p>
        </div>

        {/* Box Central com E-mail em Destaque */}
        <div className="rounded-2xl bg-surface border border-border-subtle p-8 sm:p-10 mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-ink-subtle block">
              {"// "}e-mail oficial centralizado
            </span>
            <h3 className="text-lg sm:text-2xl font-mono font-bold text-accent-lime select-all break-words">
              {COMPANY_CONTACT.email}
            </h3>
            <p className="text-sm text-ink-muted max-w-xl">
              Utilize este canal para novos pedidos, ativação de licenças, dúvidas sobre o SmartScreen ou suporte pós-instalação.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <CopyEmailButton variant="primary" className="py-3 px-6 text-sm" />
            <a
              href={COMPANY_CONTACT.mailtoCommercial}
              className="inline-flex items-center gap-2 bg-canvas hover:bg-surface-elevated text-ink border border-border-subtle font-semibold py-3 px-5 rounded-xl text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-accent-lime" />
              <span>Abrir E-mail</span>
            </a>
          </div>
        </div>

        {/* Canais Específicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-surface border border-border-subtle p-6 flex flex-col justify-between hover:border-accent-lime/40 transition-colors"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-canvas mb-5 ${channel.circleBg}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-ink mb-1.5">{channel.title}</h4>
                  <p className="text-sm text-ink-muted mb-5 leading-relaxed">
                    {channel.subtitle}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-border-subtle">
                  <span className={`font-mono text-[11px] block ${channel.tagColor}`}>
                    {channel.tag}
                  </span>
                  <a
                    href={channel.mailto}
                    className="w-full text-center inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-canvas hover:bg-surface-elevated text-ink border border-border-subtle text-xs font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-ink-muted" />
                    <span>{channel.actionText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Garantias de Atendimento */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-ink-muted border-t border-border-subtle pt-8">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-lime" />
            <span>Resposta prioritária em dias úteis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-mint" />
            <span>Suporte oficial dos próprios desenvolvedores</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-violet" />
            <span>Canal também disponível nas mensagens da compra do Mercado Livre</span>
          </div>
        </div>
      </div>
    </section>
  );
}
