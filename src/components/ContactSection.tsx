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
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      mailto: COMPANY_CONTACT.mailtoCommercial,
      actionText: "Enviar E-mail Comercial",
    },
    {
      title: "Suporte Técnico PDV SPIN",
      subtitle: "Dúvidas de operação de caixa, balcão, leitor e backup",
      icon: ShoppingCart,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      mailto: COMPANY_CONTACT.mailtoSupportPdv,
      actionText: "Abrir Chamado PDV SPIN",
    },
    {
      title: "Suporte Técnico Clínica SPIN",
      subtitle: "Configuração de rede local, prontuário LGPD e rotina",
      icon: Stethoscope,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      mailto: COMPANY_CONTACT.mailtoSupportClinica,
      actionText: "Abrir Chamado Clínica SPIN",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Canal Oficial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fale Diretamente com a Equipe SPIN
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Atendimento direto sem robôs demorados. Nossa equipe de engenharia e suporte técnico responde com agilidade prioritária.
          </p>
        </div>

        {/* Box Central com E-mail em Destaque */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-8 sm:p-10 text-center shadow-2xl mb-12">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto mb-4">
            <Mail className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">
            E-mail Oficial Centralizado
          </span>
          <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-4 select-all break-all">
            {COMPANY_CONTACT.email}
          </h3>

          <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
            Utilize este canal para novos pedidos, ativação de licenças, dúvidas sobre o SmartScreen ou suporte pós-instalação.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <CopyEmailButton variant="primary" className="py-3 px-6 text-sm" />
            <a
              href={COMPANY_CONTACT.mailtoCommercial}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold py-3 px-6 rounded-lg text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Abrir no seu Gerenciador de E-mail</span>
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
                className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${channel.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1.5">{channel.title}</h4>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {channel.subtitle}
                  </p>
                </div>

                <a
                  href={channel.mailto}
                  className="w-full text-center inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 opacity-80" />
                  <span>{channel.actionText}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Garantias de Atendimento */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-slate-400 border-t border-slate-900 pt-8">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span>Resposta prioritária em dias úteis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Suporte oficial dos próprios desenvolvedores</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Canal também disponível nas mensagens da compra do Mercado Livre</span>
          </div>
        </div>
      </div>
    </section>
  );
}
