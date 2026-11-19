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
} from "lucide-react";
import ClinicaSimulatorMockup from "@/components/clinica/ClinicaSimulatorMockup";
import ClinicaModulesTabs from "@/components/clinica/ClinicaModulesTabs";
import CopyEmailButton from "@/components/CopyEmailButton";
import { DOWNLOADS_DATA, COMPANY_CONTACT } from "@/config/downloads";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title:
    "Clínica Spin — Sistema de Gestão para Clínicas e Consultórios com Pagamento Único (R$ 99)",
  description:
    "Sistema de Gestão para Clínicas e Consultórios com Prontuário Eletrônico LGPD, Agenda Inteligente, Sala de Espera, WhatsApp em 1 Clique e Rede Local para 2 PCs sem internet. R$ 99,00 pagamento único.",
};

export default function ClinicaSpinPage() {
  const clinica = PRODUCTS.clinica;
  const clinicaDownloads = DOWNLOADS_DATA.clinica;

  return (
    <div className="bg-canvas text-ink min-h-screen">
      {/* Hero da Página */}
      <section className="pt-12 pb-20 border-b border-border-subtle bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-ink-subtle mb-6">
            <Link href="/" className="hover:text-accent-violet transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-accent-violet">Clínica SPIN Gestão Inteligente</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto do Hero */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs text-accent-violet">
                  {"// "}clínica spin · saúde &amp; estética
                </span>
                <span className="px-3 py-1 rounded-full bg-accent-violet text-canvas text-[11px] font-extrabold uppercase tracking-wide">
                  Pagamento Único · R$ 99,00
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.12]">
                Clínica Spin — Sistema de Gestão para Clínicas e Consultórios com Pagamento Único
              </h1>

              <p className="text-base sm:text-lg text-accent-violet font-medium">
                {clinica.tagline} · Licença Definitiva (Até 2 PCs) por{" "}
                <strong className="text-ink font-mono">R$ 99,00</strong> (Zero Mensalidade)
              </p>

              <p className="text-base text-ink-muted leading-relaxed">{clinica.description}</p>

              {/* Box de Downloads Duplo no Topo */}
              <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-4">
                <span className="font-mono text-xs text-accent-violet block">
                  {"// "}instalador oficial verificado (sem cadastro prévio)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Botão Primário: Software Windows EXE */}
                  <a
                    href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
                    download
                    className="flex flex-col p-4 rounded-xl bg-accent-violet hover:brightness-110 text-canvas transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[11px] font-bold uppercase">
                        Instalador Windows (.EXE)
                      </span>
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </div>
                    <span className="text-sm font-extrabold">Baixar Clínica SPIN</span>
                    <span className="font-mono text-[11px] text-canvas/80 mt-1">
                      Tamanho: 87.2 MB · Win 10/11
                    </span>
                  </a>

                  {/* Botão Secundário: Manual Oficial */}
                  <a
                    href={clinicaDownloads.manual.url}
                    download
                    className="flex flex-col p-4 rounded-xl bg-canvas hover:bg-surface-elevated text-ink border border-border-subtle transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[11px] uppercase text-ink-subtle">
                        Manual do Usuário
                      </span>
                      <BookOpen className="w-4 h-4 text-accent-violet group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-extrabold text-ink">Baixar Manual em PDF</span>
                    <span className="font-mono text-[11px] text-ink-subtle mt-1">
                      Tamanho: {clinicaDownloads.manual.sizeFormatted} · 15 páginas
                    </span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-subtle pt-3 border-t border-border-subtle">
                  <Link
                    href={clinicaDownloads.manual.onlineUrl}
                    className="text-accent-violet hover:underline flex items-center gap-1.5 font-semibold"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ler Manual Online Interativo</span>
                  </Link>
                  <span>Compatível também com macOS e Linux</span>
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
      <section className="py-16 bg-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="font-mono text-xs sm:text-sm text-accent-violet block">
              {"// "}capítulo 5 do manual
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Perfis de Operador &amp; Separação Ética de Dados (LGPD)
            </h2>
            <p className="text-ink-muted text-sm">
              Proteja o sigilo médico e mantenha a recepção focada no atendimento. O sistema já vem com 3 perfis configurados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Perfil 1: Administrador */}
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-accent-lime flex items-center justify-center text-canvas">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-canvas text-accent-lime border border-border-subtle text-xs font-mono font-semibold">
                  admin / admin123
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink">1. Perfil Administrador</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Acesso total irrestrito: financeiro consolidado da clínica, relatórios de lucratividade, tabela de procedimentos, auditoria de operadores, licença e backups.
              </p>
            </div>

            {/* Perfil 2: Recepção */}
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-accent-violet flex items-center justify-center text-canvas">
                  <Users className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-canvas text-accent-violet border border-border-subtle text-xs font-mono font-semibold">
                  recepcao / recepcao123
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink">2. Perfil Recepção / Secretária</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Agenda de consultas, fila da sala de espera, cadastro de pacientes, caixa diário e lembretes de WhatsApp.{" "}
                <strong className="text-ink">Sigilo total:</strong> NÃO tem acesso a anotações médicas confidenciais.
              </p>
            </div>

            {/* Perfil 3: Profissional de Saúde */}
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-accent-mint flex items-center justify-center text-canvas">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-canvas text-accent-mint border border-border-subtle text-xs font-mono font-semibold">
                  medico / medico123
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink">3. Profissional de Saúde</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Atendimentos clínicos, anamnese, prescrições, receitas, linha do tempo histórica e extrato dos seus repasses.{" "}
                <strong className="text-ink">Privacidade:</strong> não acessa o caixa da recepção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos em Abas Detalhadas */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="font-mono text-xs sm:text-sm text-accent-violet block">
            {"// "}rotina completa
          </span>
          <h2 className="text-3xl font-extrabold text-ink tracking-tight">
            Módulos Reais Extraídos do Manual Oficial
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            Da chegada do paciente na recepção ao prontuário médico e cálculo automático de comissões.
          </p>
        </div>

        <ClinicaModulesTabs />
      </section>

      {/* Arquitetura de Rede Local (2 PCs) */}
      <section className="py-20 bg-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="font-mono text-xs sm:text-sm text-accent-violet block">
                {"// "}capítulo 4 do manual
              </span>
              <h2 className="text-3xl font-extrabold text-ink tracking-tight">
                Rede Local: Médico + Secretária Conectados sem Internet da Rua
              </h2>
              <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                A licença do Clínica SPIN já inclui suporte a até 2 computadores interligados na mesma clínica. Eles se comunicam através do roteador interno da clínica (por cabo ou Wi-Fi), com resposta instantânea em microssegundos.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-surface border border-border-subtle flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-violet shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-ink">
                      Passo 1: No PC Principal (Servidor / Consultório)
                    </h4>
                    <p className="text-xs text-ink-muted mt-0.5">
                      Acesse Configurações → Rede Local e marque &quot;Habilitar Servidor Local&quot;. O sistema exibirá o seu IP interno (ex: 192.168.1.15).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-surface border border-border-subtle flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-mint shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-ink">
                      Passo 2: No Segundo PC (Terminal / Recepção)
                    </h4>
                    <p className="text-xs text-ink-muted mt-0.5">
                      Acesse Configurações → Rede Local, selecione &quot;Conectar a Servidor Existente&quot;, digite o IP anotado e clique em Conectar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface border border-border-subtle text-xs text-ink-muted">
                <strong className="text-accent-mint">Independência Total:</strong> Mesmo que ocorra um rompimento de fibra óptica na rua e a internet caia completamente, a secretária continua agendando pacientes e o médico atendendo sem interrupções!
              </div>
            </div>

            {/* Ilustração Visual da Rede */}
            <div className="p-8 rounded-2xl bg-surface border border-border-subtle space-y-6">
              <div className="text-center pb-4 border-b border-border-subtle">
                <span className="text-xs font-mono text-ink-subtle block">
                  ROTEADOR INTERNO DA CLÍNICA (WI-FI / CABO)
                </span>
                <span className="text-xs font-bold text-accent-mint font-mono">
                  CONEXÃO LOCAL EM TEMPO REAL
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-canvas border border-accent-violet/60 text-center space-y-2.5">
                  <div className="w-11 h-11 rounded-full bg-accent-violet text-canvas flex items-center justify-center mx-auto">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-ink">Computador do Médico</h4>
                  <p className="text-[11px] text-ink-muted">
                    Servidor Local · Prontuários e Chamada da Sala
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-canvas border border-border-subtle text-center space-y-2.5">
                  <div className="w-11 h-11 rounded-full bg-accent-mint text-canvas flex items-center justify-center mx-auto">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-ink">Computador da Recepção</h4>
                  <p className="text-[11px] text-ink-muted">
                    Terminal Cliente · Agenda, Caixa e WhatsApp
                  </p>
                </div>
              </div>

              <div className="p-3 bg-canvas border border-border-subtle rounded-xl text-center text-xs font-mono text-ink-subtle">
                Latência: &lt; 1ms · Zero Tráfego Externo · 100% Blindado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instalação e Ativação em 3 Minutos */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="font-mono text-xs sm:text-sm text-accent-violet block">
            {"// "}capítulo 2 e 3 do manual
          </span>
          <h2 className="text-3xl font-extrabold text-ink tracking-tight">
            Instalação Descomplicada &amp; Ativação em 3 Minutos
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            Sem processos burocráticos. Tudo o que você precisa fazer para colocar seu consultório para rodar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {clinica.setupSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-surface border border-border-subtle flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="font-mono text-3xl font-bold text-accent-violet block">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-ink">{step.title}</h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Multiplataforma: Windows, Mac e Linux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-2">
            <span className="font-mono text-xs text-accent-violet block">{"// "}ambiente windows</span>
            <h4 className="text-sm font-bold text-ink">Windows 10 e Windows 11</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Instalador executável direto. No SmartScreen: clique em &quot;Mais informações&quot; e depois &quot;Executar assim mesmo&quot;.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-2">
            <span className="font-mono text-xs text-accent-mint block">{"// "}ambiente macos</span>
            <h4 className="text-sm font-bold text-ink">Apple Mac (Intel &amp; Apple Silicon)</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Imagem .DMG. No Gatekeeper: acesse Ajustes do Sistema → Privacidade e Segurança → &quot;Abrir Mesmo Assim&quot;.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-2">
            <span className="font-mono text-xs text-accent-lime block">{"// "}ambiente linux</span>
            <h4 className="text-sm font-bold text-ink">Debian, Ubuntu &amp; Distribuições</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Pacote .DEB ou AppImage autônomo com suporte a execução direta sem dependências externas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Específico */}
      <section className="py-20 bg-canvas border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-12">
            <span className="font-mono text-xs sm:text-sm text-accent-violet block">
              {"// "}capítulo 8 do manual
            </span>
            <h2 className="text-3xl font-extrabold text-ink tracking-tight">
              Perguntas Frequentes do Clínica SPIN
            </h2>
          </div>

          <div className="space-y-4">
            {clinica.faq.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2"
              >
                <h3 className="text-base font-bold text-ink flex items-start gap-3">
                  <span className="font-mono text-sm font-bold text-accent-violet shrink-0 mt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pl-8">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Duplo */}
      <section className="py-20 bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-accent-violet flex items-center justify-center text-canvas mx-auto">
            <Stethoscope className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Modernize o Atendimento do Seu Consultório
          </h2>
          <p className="text-ink-muted text-sm sm:text-base max-w-xl mx-auto">
            Prontuário com sigilo absoluto, sala de espera sincronizada e tranquilidade para o seu dia a dia clínico.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-violet hover:brightness-110 text-canvas font-bold py-3.5 px-6 rounded-xl transition-all text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Clínica SPIN (Windows EXE 87.2 MB)</span>
            </a>

            <a
              href={clinicaDownloads.manual.url}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-elevated text-ink border border-border-subtle font-semibold py-3.5 px-6 rounded-xl transition-all text-sm"
            >
              <BookOpen className="w-4 h-4 text-accent-violet" />
              <span>Baixar Manual em PDF</span>
            </a>
          </div>

          <div className="pt-6">
            <p className="text-xs text-ink-subtle">
              Dúvidas comerciais ou suporte de implantação:{" "}
              <a
                href={COMPANY_CONTACT.mailtoSupportClinica}
                className="text-accent-violet hover:underline font-mono"
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
