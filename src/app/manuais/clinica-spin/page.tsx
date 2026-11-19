import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Download,
  ShieldCheck,
} from "lucide-react";
import PrintButton from "@/components/PrintButton";
import { DOWNLOADS_DATA, COMPANY_CONTACT } from "@/config/downloads";

export const metadata: Metadata = {
  title: "Manual do Usuário Clínica SPIN | Leitura Online Oficial",
  description:
    "Manual completo do usuário do Clínica SPIN Gestão Inteligente. Da instalação e ativação offline até a rotina de consultas, sala de espera, prontuário LGPD, rede local e repasses.",
};

export default function ClinicaManualPage() {
  const clinicaDownloads = DOWNLOADS_DATA.clinica;

  const chapters = [
    { id: "cap1", title: "1. Apresentação & Filosofia do Sistema" },
    { id: "cap2", title: "2. Instalação Passo a Passo (Win/Mac/Linux)" },
    { id: "cap3", title: "3. Ativação da Licença Definitiva Offline" },
    { id: "cap4", title: "4. Rede Local: Médico + Secretária (2 PCs)" },
    { id: "cap5", title: "5. Perfis de Operador & Controle de Acesso (LGPD)" },
    { id: "cap6", title: "6. Guia Prático das Funcionalidades (6.1 a 6.9)" },
    { id: "cap7", title: "7. Backup em Pen Drive (.spinbackup)" },
    { id: "cap8", title: "8. Perguntas Frequentes (FAQ)" },
  ];

  return (
    <div className="bg-canvas text-ink min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Barra Superior / Breadcrumb & Ações */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-border-subtle">
          <div>
            <div className="flex items-center gap-2 text-xs text-ink-subtle mb-2">
              <Link href="/" className="hover:text-accent-violet">
                Início
              </Link>
              <span>/</span>
              <Link href="/downloads" className="hover:text-accent-violet">
                Downloads
              </Link>
              <span>/</span>
              <span className="text-accent-violet font-medium">Manual Online Clínica SPIN</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-ink">
              Manual Oficial de Instalação & Operação Prática
            </h1>
            <p className="text-xs sm:text-sm text-ink-subtle">
              CLÍNICA SPIN GESTÃO INTELIGENTE • Versão 1.0.0 Oficial Definitiva • Zero Nuvem & LGPD
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <PrintButton />
            <a
              href={clinicaDownloads.manual.url}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-violet hover:brightness-110 text-canvas font-bold text-xs font-bold  transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Baixar PDF ({clinicaDownloads.manual.sizeFormatted})</span>
            </a>
          </div>
        </div>

        {/* Layout com Sumário Lateral e Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          {/* Sumário Lateral Fixo */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 p-5 rounded-2xl bg-surface border border-border-subtle space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-border-subtle">
                <BookOpen className="w-4 h-4 text-accent-violet" />
                <span className="text-xs font-bold uppercase tracking-wider text-ink">
                  Sumário Geral
                </span>
              </div>

              <nav className="space-y-1 text-xs">
                {chapters.map((chap) => (
                  <a
                    key={chap.id}
                    href={`#${chap.id}`}
                    className="block px-3 py-2 rounded-lg text-ink-subtle hover:text-accent-violet hover:bg-surface-elevated transition-colors"
                  >
                    {chap.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-border-subtle text-[11px] text-ink-subtle space-y-2">
                <p>
                  Suporte direto:{" "}
                  <a
                    href={COMPANY_CONTACT.mailtoSupportClinica}
                    className="text-accent-violet hover:underline font-mono"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                </p>
              </div>
            </div>
          </aside>

          {/* Conteúdo Textual Completo */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-14 text-ink-muted text-sm leading-relaxed">
            {/* Introdução & Filosofia */}
            <section id="cap1" className="space-y-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-accent-violet/40 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-accent-violet uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Os Três Pilares do Clínica SPIN</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-ink">
                  1. Apresentação & Filosofia do Sistema
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                  <div className="p-4 rounded-xl bg-canvas border border-border-subtle space-y-1">
                    <h4 className="font-bold text-ink">100% Seu (Sem Mensalidades)</h4>
                    <p className="text-ink-subtle">Adquirido em pagamento único, sem anuidades ou bloqueios por atraso.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-canvas border border-border-subtle space-y-1">
                    <h4 className="font-bold text-ink">Zero Nuvem (LGPD)</h4>
                    <p className="text-ink-subtle">Nenhuma informação de paciente sai do consultório. Banco criptografado localmente.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-canvas border border-border-subtle space-y-1">
                    <h4 className="font-bold text-ink">Totalmente Offline</h4>
                    <p className="text-ink-subtle">Se a internet cair, consultas, prontuários e agendamentos continuam operando.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Capítulo 2: Instalação */}
            <section id="cap2" className="space-y-4 pt-6 border-t border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-violet">
                Capítulo 2
              </span>
              <h2 className="text-2xl font-bold text-ink">
                2. Instalação Passo a Passo (Windows, macOS e Linux)
              </h2>
              <p>
                O instalador é 100% autônomo e não precisa baixar arquivos adicionais da internet.
              </p>

              <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-3">
                <h3 className="font-bold text-ink text-base">2.1 Instalação no Windows 10 e Windows 11 (.exe):</h3>
                <ol className="list-decimal pl-5 space-y-1.5 text-ink-muted">
                  <li>Dê um duplo clique no arquivo executável <code className="text-accent-violet font-mono">Clinica Spin Setup 1.0.0.exe</code>.</li>
                  <li>Se surgir o aviso do Windows SmartScreen: clique em <strong>&quot;Mais informações&quot;</strong> e depois em <strong>&quot;Executar assim mesmo&quot;</strong>.</li>
                  <li>O assistente abrirá. Clique em Avançar e confirme a instalação padrão.</li>
                  <li><strong>Aviso do Firewall:</strong> Para conectar 2 computadores na clínica, marque a caixa &quot;Redes privadas&quot; e clique em Permitir Acesso.</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-2">
                  <h4 className="font-bold text-ink text-sm">2.2 Instalação no macOS (.dmg):</h4>
                  <p className="text-xs text-ink-muted">
                    Abra o arquivo .DMG e arraste o ícone para Aplicativos. Se surgir o aviso do Gatekeeper, vá em Ajustes do Sistema → Privacidade e Segurança → role até Segurança e clique em <strong>&quot;Abrir Mesmo Assim&quot;</strong>.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-2">
                  <h4 className="font-bold text-ink text-sm">2.3 Instalação no Linux:</h4>
                  <p className="text-xs text-ink-muted">
                    No Debian/Ubuntu (.deb), instale via terminal com <code className="font-mono text-accent-violet">sudo dpkg -i clinica-spin_1.0.0_amd64.deb</code> ou execute diretamente o arquivo AppImage.
                  </p>
                </div>
              </div>
            </section>

            {/* Capítulo 3: Ativação */}
            <section id="cap3" className="space-y-4 pt-6 border-t border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-violet">
                Capítulo 3
              </span>
              <h2 className="text-2xl font-bold text-ink">
                3. Ativação da Licença Definitiva Offline em 3 Minutos
              </h2>
              <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-3">
                <p>
                  Para sua total segurança e para que você nunca dependa de servidores externos, a ativação é 100% offline:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong>Passo 1 — Chave de Licença:</strong> Digite a chave recebida na compra (ex: <code className="font-mono text-accent-violet">SPIN-9842-ML77-KL99-OFFLINE</code>).</li>
                  <li><strong>Passo 2 — Código Deste Computador:</strong> O sistema gera a identificação única da máquina (ex: <code className="font-mono text-accent-violet">REQ-4F9A-B821-E37C</code>). Clique em Copiar.</li>
                  <li><strong>Passo 3 — Envio:</strong> Envie o código pelas mensagens da compra ou por e-mail oficial.</li>
                  <li><strong>Passo 4 — Código de Liberação:</strong> Cole o código definitivo enviado pela equipe SPIN e clique em &quot;Ativar Sistema Permanentemente&quot;.</li>
                </ul>
                <div className="p-3 rounded-lg bg-canvas border border-accent-violet/40 text-xs text-accent-violet">
                  💡 <strong>Ativação Permanente:</strong> Uma vez ativado, o sistema nunca mais pedirá ativação e nunca expirará.
                </div>
              </div>
            </section>

            {/* Capítulo 4: Rede Local */}
            <section id="cap4" className="space-y-4 pt-6 border-t border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-violet">
                Capítulo 4
              </span>
              <h2 className="text-2xl font-bold text-ink">
                4. Rede Local: Médico + Secretária (2 Computadores sem Internet)
              </h2>
              <p>
                Sua licença já inclui suporte a até 2 computadores interligados na mesma clínica (por cabo ou Wi-Fi interno).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-2">
                  <h4 className="font-bold text-ink text-sm">1. Computador Principal (Servidor / Consultório)</h4>
                  <p className="text-xs text-ink-muted">
                    Acesse Configurações → Rede Local e marque &quot;Habilitar Servidor Local&quot;. Anote o IP exibido (ex: <code className="text-accent-violet font-mono">192.168.1.15</code>).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-2">
                  <h4 className="font-bold text-ink text-sm">2. Segundo Computador (Terminal / Recepção)</h4>
                  <p className="text-xs text-ink-muted">
                    Acesse Configurações → Rede Local, marque &quot;Conectar a Servidor Existente&quot;, digite o IP anotado e clique em Testar e Conectar.
                  </p>
                </div>
              </div>
            </section>

            {/* Capítulo 5: Perfis de Operador */}
            <section id="cap5" className="space-y-4 pt-6 border-t border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-violet">
                Capítulo 5
              </span>
              <h2 className="text-2xl font-bold text-ink">
                5. Perfis de Operador & Controle de Acesso (LGPD)
              </h2>
              <div className="overflow-hidden rounded-xl border border-border-subtle bg-surface text-xs">
                <table className="w-full text-left">
                  <thead className="bg-canvas font-bold text-ink-muted border-b border-border-subtle">
                    <tr>
                      <th className="py-3 px-4 w-1/4">Perfil</th>
                      <th className="py-3 px-4 w-3/8">O que pode fazer</th>
                      <th className="py-3 px-4 w-3/8">O que NÃO tem acesso</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    <tr>
                      <td className="py-3 px-4 font-bold text-accent-lime">Administrador (admin)</td>
                      <td className="py-3 px-4">Acesso total: financeiro, relatórios, auditoria, operadores e backup.</td>
                      <td className="py-3 px-4 text-ink-subtle">Sem restrições.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-accent-violet">Recepção (recepcao)</td>
                      <td className="py-3 px-4">Consultas & Agenda, Sala de Espera, Cadastro, Caixa Diário e WhatsApp.</td>
                      <td className="py-3 px-4 text-accent-coral">NÃO vê anotações médicas confidenciais nem faturamento gerencial.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-accent-mint">Profissional de Saúde (medico)</td>
                      <td className="py-3 px-4">Atendimentos, Prontuários (LGPD), Linha do Tempo e Repasses.</td>
                      <td className="py-3 px-4 text-accent-coral">NÃO acessa o caixa da recepção nem configurações globais.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Capítulo 6: Funcionalidades Tela a Tela */}
            <section id="cap6" className="space-y-6 pt-6 border-t border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-violet">
                Capítulo 6
              </span>
              <h2 className="text-2xl font-bold text-ink">
                6. Guia Prático das Funcionalidades (Rotina Tela a Tela)
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">6.1 Painel Geral (Dashboard) & Gráficos:</h4>
                  <p className="text-xs text-ink-muted">
                    Faturamento do mês e de hoje em tempo real, saldo em gaveta do turno, agendamentos do dia, pacientes na sala de espera e gráfico semanal de desempenho.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">6.2 Consultas & Agenda Inteligente:</h4>
                  <p className="text-xs text-ink-muted">
                    Grade por dia, semana ou profissional com controle visual de status e detecção de conflitos de horário com suporte a Encaixe de Urgência.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">6.3 Sala de Espera em Tempo Real:</h4>
                  <p className="text-xs text-ink-muted">
                    A recepção marca &quot;Chegou / Aguardando&quot;, ativando cronômetro de tempo de espera. No consultório, o médico clica em &quot;▶ Chamar Paciente&quot;, que muda para &quot;Em Atendimento&quot; e abre o prontuário.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">6.4 Atendimento Clínico & Prontuário Eletrônico (LGPD):</h4>
                  <p className="text-xs text-ink-muted">
                    Queixa Principal, Evolução Clínica & Conduta, Prescrições & Receituário com impressão direta, e Linha do Tempo Integrada com histórico de consultas passadas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">6.5 Catálogo de Procedimentos & Preços Diferenciados:</h4>
                  <p className="text-xs text-ink-muted">
                    Valores específicos para Particular vs Convênios, duração estimada e regra de repasse médico configurável (% ou valor fixo, ex: 70% médico / 30% clínica).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">6.6 Controle de Caixa Diário & Fechamento Cego:</h4>
                  <p className="text-xs text-ink-muted">
                    Abertura com fundo de troco, entradas por Dinheiro, PIX, Cartão e Convênio, e Fechamento Cego auditável no fim do expediente.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">6.7 Relatórios Gerenciais & Exportação em PDF:</h4>
                  <p className="text-xs text-ink-muted">
                    Receita consolidada por especialista, extrato automático de repasses médicos e emissão de folhas timbradas em PDF com 1 clique.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">6.8 WhatsApp em 1 Clique (Lembretes Gratuitos):</h4>
                  <p className="text-xs text-ink-muted">
                    Redução de faltas em até 70% sem custo de APIs: abre a conversa no WhatsApp Web ou Desktop com mensagem formatada pronta para enviar.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">6.9 Auditoria de Ações & Rastreabilidade:</h4>
                  <p className="text-xs text-ink-muted">
                    Registro detalhado de operações para total conformidade jurídica e administrativa.
                  </p>
                </div>
              </div>
            </section>

            {/* Capítulo 7: Backup */}
            <section id="cap7" className="space-y-4 pt-6 border-t border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-violet">
                Capítulo 7
              </span>
              <h2 className="text-2xl font-bold text-ink">
                7. Backup em Pen Drive (Segurança Total .spinbackup)
              </h2>
              <div className="space-y-3">
                <p>
                  Como o Clínica SPIN armazena todos os seus dados localmente no seu computador (sem enviar nada para a nuvem), fazer backups regulares em um Pen Drive ou HD externo garante a segurança contra qualquer pane na máquina.
                </p>
                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-2">
                  <h4 className="font-bold text-ink text-sm">Como Fazer o Backup em 1 Clique:</h4>
                  <ol className="list-decimal pl-5 space-y-1 text-xs text-ink-muted">
                    <li>Insira o Pen Drive na porta USB.</li>
                    <li>No sistema, acesse Configurações → Backup & Restauração.</li>
                    <li>Digite uma senha de proteção pessoal opcional para criptografia.</li>
                    <li>Clique em &quot;Exportar Arquivo de Backup&quot; e salve no Pen Drive.</li>
                    <li>Pronto! Um arquivo único compactado (<code className="text-accent-violet font-mono">.spinbackup</code>) será salvo com todo o histórico e prontuários.</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Capítulo 8: FAQ */}
            <section id="cap8" className="space-y-4 pt-6 border-t border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-violet">
                Capítulo 8
              </span>
              <h2 className="text-2xl font-bold text-ink">
                8. Perguntas Frequentes (FAQ) & Suporte
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">1. E se a internet da clínica cair completamente?</h4>
                  <p className="text-xs text-ink-muted">O Clínica SPIN continua funcionando normalmente! Consultas, prontuários, agendamentos e caixa operam de forma local.</p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">2. Posso instalar o sistema se trocar de computador?</h4>
                  <p className="text-xs text-ink-muted">Sim! Basta instalar no novo computador, restaurar o arquivo de backup do Pen Drive e ativar com sua chave.</p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1">
                  <h4 className="font-bold text-ink">3. Existe limite no número de pacientes cadastrados?</h4>
                  <p className="text-xs text-ink-muted">Não. Não há limite de pacientes, histórico de prontuários ou tempo de uso.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
