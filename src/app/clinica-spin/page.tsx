import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  Download,
  BookOpen,
  ShieldCheck,
  Laptop,
  Users,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import ClinicaSimulatorMockup from "@/components/clinica/ClinicaSimulatorMockup";
import ClinicaModulesTabs from "@/components/clinica/ClinicaModulesTabs";
import CopyEmailButton from "@/components/CopyEmailButton";
import { DOWNLOADS_DATA, COMPANY_CONTACT } from "@/config/downloads";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Clínica Spin — Sistema de Gestão para Clínicas e Consultórios com Pagamento Único (R$ 99)",
  description:
    "Sistema de Gestão para Clínicas e Consultórios com Prontuário Eletrônico LGPD, Agenda Inteligente, Sala de Espera, WhatsApp em 1 Clique e Rede Local para 2 PCs sem internet. R$ 99,00 pagamento único.",
};

export default function ClinicaSpinPage() {
  const clinica = PRODUCTS.clinica;
  const clinicaDownloads = DOWNLOADS_DATA.clinica;

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero da Página */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-sky-400">
              Início
            </Link>
            <span>/</span>
            <span className="text-sky-400 font-medium">Clínica SPIN Gestão Inteligente</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto do Hero */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 text-xs font-semibold">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Pagamento Único • Zero Mensalidade • Entrega Digital Imediata</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Clínica Spin — Sistema de Gestão para Clínicas e Consultórios com Pagamento Único
              </h1>

              <p className="text-lg text-sky-300/90 font-medium">
                {clinica.tagline} • Licença Definitiva (Até 2 PCs) por <strong className="text-white">R$ 99,00 (Pagamento Único)</strong>
              </p>

              <p className="text-base text-slate-300 leading-relaxed">
                {clinica.description}
              </p>

              {/* Box de Downloads Duplo no Topo */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-sky-500/30 space-y-4 shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
                  Instalador Oficial Verificado (Sem Cadastro Prévio)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Botão Primário: Software Windows EXE */}
                  <a
                    href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
                    download
                    className="flex flex-col p-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white shadow-lg shadow-sky-900/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase">Instalador Windows (.EXE)</span>
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </div>
                    <span className="text-sm font-black">Baixar Clínica SPIN</span>
                    <span className="text-[11px] text-sky-100/80 mt-1">
                      Tamanho: 87.2 MB • Win 10/11
                    </span>
                  </a>

                  {/* Botão Secundário: Manual Oficial */}
                  <a
                    href={clinicaDownloads.manual.url}
                    download
                    className="flex flex-col p-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase text-slate-400">Manual do Usuário</span>
                      <BookOpen className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-black text-white">Baixar Manual em PDF</span>
                    <span className="text-[11px] text-slate-400 mt-1">
                      Tamanho: {clinicaDownloads.manual.sizeFormatted} • 15 páginas
                    </span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <Link
                    href={clinicaDownloads.manual.onlineUrl}
                    className="text-sky-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ler Manual Online Interativo</span>
                  </Link>
                  <span className="text-slate-400">
                    Compatível também com macOS e Linux
                  </span>
                </div>
              </div>
            </div>

            {/* Simulador de Interface */}
            <div className="lg:col-span-5">
              <ClinicaSimulatorMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Matriz de Perfis de Acesso & LGPD */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              Capítulo 5 do Manual
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Perfis de Operador & Separação Ética de Dados (LGPD)
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Proteja o sigilo médico e mantenha a recepção focada no atendimento. O sistema já vem com 3 perfis configurados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Perfil 1: Administrador */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold font-mono">
                  admin / admin123
                </span>
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white">1. Perfil Administrador</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Acesso total irrestrito: financeiro consolidado da clínica, relatórios de lucratividade, tabela de procedimentos, auditoria de operadores, licença e backups.
              </p>
            </div>

            {/* Perfil 2: Recepção */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-bold font-mono">
                  recepcao / recepcao123
                </span>
                <Users className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Perfil Recepção / Secretária</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Agenda de consultas, fila da sala de espera, cadastro de pacientes, caixa diário e lembretes de WhatsApp. <strong>Sigilo total:</strong> NÃO tem acesso a anotações médicas confidenciais.
              </p>
            </div>

            {/* Perfil 3: Profissional de Saúde */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold font-mono">
                  medico / medico123
                </span>
                <Stethoscope className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Profissional de Saúde</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Atendimentos clínicos, anamnese, prescrições, receitas, linha do tempo histórica e extrato dos seus repasses. <strong>Privacidade:</strong> não acessa o caixa da recepção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos em Abas Detalhadas */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
            Rotina Completa
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Módulos Reais Extraídos do Manual Oficial
          </h2>
          <p className="text-slate-400 text-sm">
            Da chegada do paciente na recepção ao prontuário médico e cálculo automático de comissões.
          </p>
        </div>

        <ClinicaModulesTabs />
      </section>

      {/* Arquitetura de Rede Local (2 PCs) */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Capítulo 4 do Manual
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Rede Local: Médico + Secretária Conectados sem Internet da Rua
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                A licença do Clínica SPIN já inclui suporte a até 2 computadores interligados na mesma clínica. Eles se comunicam através do roteador interno da clínica (por cabo ou Wi-Fi), com resposta instantânea em microssegundos.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Passo 1: No PC Principal (Servidor / Consultório)</h4>
                    <p className="text-xs text-slate-400">
                      Acesse Configurações → Rede Local e marque &quot;Habilitar Servidor Local&quot;. O sistema exibirá o seu IP interno (ex: 192.168.1.15).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Passo 2: No Segundo PC (Terminal / Recepção)</h4>
                    <p className="text-xs text-slate-400">
                      Acesse Configurações → Rede Local, selecione &quot;Conectar a Servidor Existente&quot;, digite o IP anotado e clique em Conectar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-900/30 text-xs text-sky-200">
                📶 <strong>Independência Total:</strong> Mesmo que ocorra um rompimento de fibra óptica na rua e a internet caia completamente, a secretária continua agendando pacientes e o médico atendendo sem interrupções!
              </div>
            </div>

            {/* Ilustração Visual da Rede */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
              <div className="text-center pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 block">ROTEADOR INTERNO DA CLÍNICA (WI-FI / CABO)</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">CONEXÃO LOCAL EM TEMPO REAL</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900 border border-sky-500/40 text-center space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mx-auto">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Computador do Médico</h4>
                  <p className="text-[11px] text-slate-400">Servidor Local • Prontuários e Chamada da Sala</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-700 text-center space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Computador da Recepção</h4>
                  <p className="text-[11px] text-slate-400">Terminal Cliente • Agenda, Caixa e WhatsApp</p>
                </div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl text-center text-xs font-mono text-slate-400">
                Latência: &lt; 1ms • Zero Tráfego Externo • 100% Blindado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instalação e Ativação em 3 Minutos */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
            Capítulo 2 e 3 do Manual
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Instalação Descomplicada & Ativação em 3 Minutos
          </h2>
          <p className="text-slate-400 text-sm">
            Sem processos burocráticos. Tudo o que você precisa fazer para colocar seu consultório para rodar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {clinica.setupSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Multiplataforma: Windows, Mac e Linux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase">Ambiente Windows</span>
            <h4 className="text-sm font-bold text-white">Windows 10 e Windows 11</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instalador executável direto. No SmartScreen: clique em &quot;Mais informações&quot; e depois &quot;Executar assim mesmo&quot;.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase">Ambiente macOS</span>
            <h4 className="text-sm font-bold text-white">Apple Mac (Intel & Apple Silicon)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Imagem .DMG. No Gatekeeper: acesse Ajustes do Sistema → Privacidade e Segurança → &quot;Abrir Mesmo Assim&quot;.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase">Ambiente Linux</span>
            <h4 className="text-sm font-bold text-white">Debian, Ubuntu & Distribuições</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pacote .DEB ou AppImage autônomo com suporte a execução direta sem dependências externas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Específico */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              Capítulo 8 do Manual
            </span>
            <h2 className="text-3xl font-extrabold text-white">Perguntas Frequentes do Clínica SPIN</h2>
          </div>

          <div className="space-y-4">
            {clinica.faq.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2"
              >
                <h3 className="text-base font-bold text-white flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7.5">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Duplo */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mx-auto">
            <Stethoscope className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Modernize o Atendimento do Seu Consultório
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Prontuário com sigilo absoluto, sala de espera sincronizada e tranquilidade para o seu dia a dia clínico.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-sky-900/30 transition-all text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Clínica SPIN (Windows EXE 87.2 MB)</span>
            </a>

            <a
              href={clinicaDownloads.manual.url}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-3.5 px-6 rounded-xl transition-all text-sm"
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Baixar Manual em PDF</span>
            </a>
          </div>

          <div className="pt-6">
            <p className="text-xs text-slate-400">
              Dúvidas comerciais ou suporte de implantação:{" "}
              <a
                href={COMPANY_CONTACT.mailtoSupportClinica}
                className="text-sky-400 hover:underline font-mono"
              >
                {COMPANY_CONTACT.email}
              </a>
              <CopyEmailButton variant="pill" showIcon={false} className="ml-2" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
