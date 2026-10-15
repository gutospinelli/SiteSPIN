import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Download,
  ShieldCheck,
  Lock,
} from "lucide-react";
import PrintButton from "@/components/PrintButton";
import { DOWNLOADS_DATA, COMPANY_CONTACT } from "@/config/downloads";

export const metadata: Metadata = {
  title: "Manual do Usuário PDV SPIN | Leitura Online Oficial",
  description:
    "Manual completo do usuário do PDV SPIN Gestão Comercial. Guia passo a passo ilustrado: instalação, ativação offline, frente de caixa, estoque, fechamento cego e backup.",
};

export default function PdvManualPage() {
  const pdvDownloads = DOWNLOADS_DATA.pdv;

  const chapters = [
    { id: "cap1", title: "Capítulo 1: Instalação & Aviso SmartScreen" },
    { id: "cap2", title: "Capítulo 2: Ativação Permanente & Primeiro Login" },
    { id: "cap3", title: "Capítulo 3: Painel Geral & Teclas de Atalho" },
    { id: "cap4", title: "Capítulo 4: Configurações, Logotipo & Impressoras" },
    { id: "cap5", title: "Capítulo 5: Produtos, Categorias & Estoque" },
    { id: "cap6", title: "Capítulo 6: Gestão do Caixa & Fechamento Cego" },
    { id: "cap7", title: "Capítulo 7: Frente de Caixa (PDV Ágil) & PIX" },
    { id: "cap8", title: "Capítulo 8: Crediário & Carnê a Receber (Fiado)" },
    { id: "cap9", title: "Capítulo 9: Backup Físico (.pdvbak) em Pen Drive" },
    { id: "cap10", title: "Capítulo 10: Perguntas Frequentes (FAQ)" },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Barra Superior / Breadcrumb & Ações */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <Link href="/" className="hover:text-emerald-400">
                Início
              </Link>
              <span>/</span>
              <Link href="/downloads" className="hover:text-emerald-400">
                Downloads
              </Link>
              <span>/</span>
              <span className="text-emerald-400 font-medium">Manual Online PDV SPIN</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Manual Oficial do Usuário & Guia de Operação
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              PDV SPIN GESTÃO COMERCIAL • Versão 1.0 • Licença Vitalícia Offline
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <PrintButton />
            <a
              href={pdvDownloads.manual.url}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-950/30 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Baixar PDF ({pdvDownloads.manual.sizeFormatted})</span>
            </a>
          </div>
        </div>

        {/* Layout com Sumário Lateral e Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          {/* Sumário Lateral Fixo */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Sumário do Manual
                </span>
              </div>

              <nav className="space-y-1 text-xs">
                {chapters.map((chap) => (
                  <a
                    key={chap.id}
                    href={`#${chap.id}`}
                    className="block px-3 py-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors"
                  >
                    {chap.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
                <p>
                  Suporte direto:{" "}
                  <a
                    href={COMPANY_CONTACT.mailtoSupportPdv}
                    className="text-emerald-400 hover:underline font-mono"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                </p>
              </div>
            </div>
          </aside>

          {/* Conteúdo Textual Completo */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-14 text-slate-300 text-sm leading-relaxed">
            {/* Introdução */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>O Software é Seu de Verdade!</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Seja bem-vindo ao PDV SPIN Gestão Comercial!
              </h2>
              <p>
                Diferente da maioria dos sistemas modernos que cobram aluguel todo mês e travam sua loja se a internet cair, o PDV SPIN é sua propriedade legítima. Você não paga mensalidades e seus dados privados nunca saem do seu computador.
              </p>
            </div>

            {/* Capítulo 1 */}
            <section id="cap1" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 1
              </span>
              <h2 className="text-2xl font-bold text-white">
                Instalação no Windows & O Aviso SmartScreen Descomplicado
              </h2>
              <p>
                O PDV SPIN foi arquitetado para ser extremamente leve e direto. Ele não exige a instalação de bancos de dados pesados (como MySQL ou SQL Server) nem a configuração de servidores na sua rede.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <h3 className="font-bold text-white text-base">1.1 Como Descompactar e Executar no Windows:</h3>
                <ol className="list-decimal pl-5 space-y-1.5 text-slate-300">
                  <li>Após baixar o arquivo <code className="text-emerald-400 font-mono">PDV-Spin-Gestao-Comercial-Windows.zip</code>, clique com o botão direito nele e escolha &quot;Extrair Tudo...&quot;.</li>
                  <li>Dentro da pasta extraída, você verá o executável <code className="text-emerald-400 font-mono">pdvspin.exe</code> e o arquivo <code className="text-emerald-400 font-mono">Instalar-Atalho.bat</code>.</li>
                  <li>Dê dois cliques no arquivo <code className="text-emerald-400 font-mono">Instalar-Atalho.bat</code> para criar automaticamente o ícone do PDV SPIN na sua Área de Trabalho.</li>
                  <li>Dê dois cliques no ícone para abrir o sistema!</li>
                </ol>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-2">
                <h3 className="font-bold text-amber-300 text-base">1.2 Entendendo o Aviso do Windows Defender SmartScreen:</h3>
                <p>
                  Ao abrir o programa pela primeira vez em alguns computadores com Windows 10 ou 11, o Windows pode exibir uma tela azul dizendo: <em>&quot;O Windows protegeu o seu computador&quot;</em>.
                </p>
                <p>
                  <strong>Por que isso acontece?</strong> A Microsoft cobra taxas anuais de milhares de reais para validar certificados digitais em programas novos. Sistemas comerciais que pagam isso repassam esse custo cobrando mensalidades de R$ 80 a R$ 200 por mês de você. Como o PDV SPIN é vendido sem mensalidades e funciona 100% offline, ele é 100% limpo e seguro.
                </p>
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/20 font-sans space-y-1 text-xs">
                  <div className="font-bold text-white">Como liberar em 2 cliques rápidos:</div>
                  <div>1. Na tela azul do Windows, clique no link <strong>&quot;Mais informações&quot;</strong>.</div>
                  <div>2. Em seguida, clique no botão <strong>&quot;Executar assim mesmo&quot;</strong>.</div>
                  <div>3. Pronto! O sistema abre na hora e o Windows nunca mais repetirá esse aviso nessa máquina.</div>
                </div>
              </div>
            </section>

            {/* Capítulo 2 */}
            <section id="cap2" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 2
              </span>
              <h2 className="text-2xl font-bold text-white">
                Ativação Permanente e Primeiro Login
              </h2>
              <p>
                Na primeira inicialização, o sistema exibirá a janela de ativação vitalícia. Você <strong>não precisa</strong> de conexão com a internet para ativar.
              </p>
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <h3 className="font-bold text-white text-base">Preencha os três campos enviados na sua compra:</h3>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li><strong>Chave de Licença (25 dígitos):</strong> Cole sua chave no formato <code className="font-mono text-emerald-400">XXXXX-XXXXX-XXXXX-XXXXX-XXXXX</code>.</li>
                  <li><strong>CPF ou CNPJ do Titular:</strong> O documento informado no momento da compra.</li>
                  <li><strong>Nome ou Razão Social:</strong> O nome da sua loja ou do responsável.</li>
                </ul>
                <p className="text-xs text-slate-400">
                  Clique em &quot;Ativar Sistema Agora&quot;. Sua licença ficará gravada permanentemente no computador!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
                <div className="text-slate-400 mb-1 font-sans font-bold">Credenciais Padrão de Primeiro Acesso:</div>
                <div className="text-white">Usuário: <span className="text-emerald-400 font-bold">admin</span></div>
                <div className="text-white">Senha: <span className="text-emerald-400 font-bold">admin123</span> (ou admin)</div>
                <p className="font-sans text-slate-400 mt-2 text-[11px]">
                  Você poderá alterar a senha nas Configurações a qualquer momento para garantir sua privacidade.
                </p>
              </div>
            </section>

            {/* Capítulo 3 */}
            <section id="cap3" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 3
              </span>
              <h2 className="text-2xl font-bold text-white">
                Visão Geral do Painel de Controle e Menu Lateral
              </h2>
              <p>
                O Painel de Controle (Dashboard) oferece uma radiografia imediata da saúde da sua loja, sem enrolação.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white">Vendas Hoje</h4>
                  <p className="text-xs text-slate-400">Total arrecadado no dia e quantidade de vendas realizadas.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white">Faturamento Mês & Lucro Bruto</h4>
                  <p className="text-xs text-slate-400">Cálculo automático do lucro bruto baseado nos custos cadastrados.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white">Estoque Crítico</h4>
                  <p className="text-xs text-slate-400">Itens que atingiram ou caíram abaixo do estoque mínimo configurado.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white">Sessão de Caixa Atual</h4>
                  <p className="text-xs text-slate-400">Status em tempo real (Aberto/Fechado), operador logado e fundo de troco.</p>
                </div>
              </div>

              {/* Tabela de Atalhos */}
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 mt-4">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 font-bold text-slate-300 border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-4 w-24">Atalho</th>
                      <th className="py-2.5 px-4">Ação no Sistema</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="py-2 px-4 font-mono font-bold text-emerald-400">F1</td>
                      <td className="py-2 px-4">Abre diretamente a Frente de Caixa (PDV / Caixa Rápido).</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono font-bold text-emerald-400">F2 (no PDV)</td>
                      <td className="py-2 px-4">Abre a janela de busca rápida de produtos por nome ou descrição.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono font-bold text-emerald-400">F4 (no PDV)</td>
                      <td className="py-2 px-4">Abre o painel de recebimento para finalizar a venda.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono font-bold text-emerald-400">ESC (no PDV)</td>
                      <td className="py-2 px-4">Cancela a venda em andamento ou fecha a janela atual.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono font-bold text-emerald-400">F6</td>
                      <td className="py-2 px-4">Abre o módulo de Ordens de Serviço (caso utilize assistência/oficina).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Capítulo 4 */}
            <section id="cap4" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 4
              </span>
              <h2 className="text-2xl font-bold text-white">
                Configurações da Loja, Logotipo e Impressoras
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>4.1 Dados Cadastrais:</strong> Preencha Nome Fantasia, Razão Social, CNPJ/CPF, Telefone/WhatsApp e Endereço. Esses dados são impressos automaticamente no cabeçalho dos cupons de venda e extratos.
                </p>
                <p>
                  <strong>4.2 Logotipo nos Comprovantes:</strong> Clique em &quot;Enviar Imagem / Logo&quot; e escolha a foto ou logotipo do seu comércio (PNG ou JPG). O logo aparecerá no topo do menu lateral e nos cabeçalhos impressos.
                </p>
                <p>
                  <strong>4.3 Configuração da Chave PIX:</strong> Cadastre sua Chave PIX (CPF, CNPJ, E-mail, Celular ou Aleatória) e o Nome do Titular. Quando você selecionar &quot;PIX&quot; na frente de caixa, o sistema gerará automaticamente o QR Code dinâmico na tela para o cliente pagar com a câmera do celular.
                </p>
                <p>
                  <strong>4.4 Impressoras Térmicas e PDF:</strong> O sistema suporta qualquer impressora térmica padrão ESC/POS (58mm e 80mm). Se você não possui impressora térmica, todos os comprovantes, carnês e extratos podem ser exportados com 1 clique para PDF na pasta Downloads para impressão em qualquer impressora A4 comum.
                </p>
              </div>
            </section>

            {/* Capítulo 5 */}
            <section id="cap5" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 5
              </span>
              <h2 className="text-2xl font-bold text-white">
                Cadastro de Categorias, Produtos e Controle de Estoque
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>5.1 Categorias:</strong> Organize seus itens por categorias (ex: Bebidas, Mercearia, Limpeza, Vestuário) para agilizar os filtros de busca no dia a dia.
                </p>
                <p>
                  <strong>5.2 Cadastro de Produtos:</strong> Informe Código de Barras / EAN (com leitor USB ou gerador interno automático), Descrição, Preço de Custo e Preço de Venda. O sistema calcula automaticamente a sua margem de lucro percentual.
                </p>
                <p>
                  <strong>5.3 Estoque Mínimo e Ajuste Rápido:</strong> Configure o estoque mínimo aceitável. O botão de ajuste rápido na tabela permite lançar novas entradas ou perdas/avarias em segundos.
                </p>
              </div>
            </section>

            {/* Capítulo 6 */}
            <section id="cap6" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 6
              </span>
              <h2 className="text-2xl font-bold text-white">
                Gestão Segura do Caixa & Fechamento Cego
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>6.1 Abertura de Caixa:</strong> Informe o Fundo de Troco (valor deixado na gaveta) no início do turno.
                </p>
                <p>
                  <strong>6.2 Suprimentos e Sangrias:</strong> Registre entradas avulsas de moedas (suprimentos) ou saídas para o cofre/fornecedor (sangrias com justificativa obrigatória).
                </p>
                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-1.5">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span>6.3 O Que é o Fechamento de Caixa Cego?</span>
                  </h4>
                  <p className="text-xs text-slate-300">
                    No encerramento do expediente, o sistema <strong>NÃO</strong> revela ao funcionário quanto deveria haver na gaveta. O operador conta as cédulas físicas e digita o valor. O sistema faz a conferência interna e registra se houve Exato, Sobra ou Falta, prevenindo desvios.
                  </p>
                </div>
                <p>
                  <strong>6.4 Extrato em PDF:</strong> Exporte instantaneamente o extrato de fechamento com totalização por forma de pagamento direto para sua pasta Downloads.
                </p>
              </div>
            </section>

            {/* Capítulo 7 */}
            <section id="cap7" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 7
              </span>
              <h2 className="text-2xl font-bold text-white">
                Frente de Caixa (PDV Ágil, Leitor USB, PIX QR e Comprovantes)
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>7.1 Lançamento de Itens:</strong> Passe o produto no leitor de código de barras USB ou pressione <strong>F2</strong> para buscar por nome.
                </p>
                <p>
                  <strong>7.2 Finalização (F4):</strong> Pressione <strong>F4</strong> para abrir as formas de recebimento: Dinheiro (com troco em destaque verde), Cartão Débito/Crédito com parcelas, PIX QR Code ou Crediário.
                </p>
                <p>
                  <strong>7.3 Comprovantes:</strong> Escolha entre imprimir na bobina térmica ou gerar PDF para impressão A4.
                </p>
              </div>
            </section>

            {/* Capítulo 8 */}
            <section id="cap8" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 8
              </span>
              <h2 className="text-2xl font-bold text-white">
                Crediário & Carnê a Receber (Venda Fiado)
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>8.1 Realizando a Venda:</strong> Identifique o cliente cadastrado com limite de crédito, adicione as mercadorias, pressione F4 e escolha &quot;Crediário&quot; com o número de parcelas desejado.
                </p>
                <p>
                  <strong>8.2 Baixa de Parcelas:</strong> Quando o cliente pagar, acesse &quot;Crediário a Receber&quot;, localize o cliente, clique em &quot;Baixar / Receber&quot; e escolha o meio de pagamento. O valor é creditado imediatamente no seu Caixa Aberto e o Recibo de Quitação em PDF é emitido.
                </p>
              </div>
            </section>

            {/* Capítulo 9 */}
            <section id="cap9" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 9
              </span>
              <h2 className="text-2xl font-bold text-white">
                Backup em 1 Clique e Restauração Física em Pen Drive (.pdvbak)
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>9.1 Como Fazer Backup para Pen Drive:</strong> Conecte o Pen Drive, acesse o menu &quot;Backup (.pdvbak)&quot; e clique no botão &quot;Exportar Backup (.pdvbak)&quot;. Em menos de 1 segundo, o banco de dados inteiro é salvo em um arquivo único compacto.
                </p>
                <p>
                  <strong>9.2 Como Restaurar um Backup:</strong> Ao formatar ou trocar de máquina, instale o PDV SPIN, vá em Backup → &quot;Restaurar Estado Anterior&quot; e selecione seu arquivo <code className="text-emerald-400 font-mono">.pdvbak</code>. O sistema verifica a integridade criptográfica SHA-256 e restaura tudo exatamente como estava.
                </p>
              </div>
            </section>

            {/* Capítulo 10 */}
            <section id="cap10" className="space-y-4 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capítulo 10
              </span>
              <h2 className="text-2xl font-bold text-white">
                Perguntas Frequentes & Resolução Rápida de Dúvidas
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white">1. O sistema precisa de internet para vender?</h4>
                  <p className="text-xs text-slate-300">Não! O PDV SPIN é 100% offline e opera sem internet no balcão.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white">2. O software realmente não tem mensalidade?</h4>
                  <p className="text-xs text-slate-300">Sim! A licença adquirida é permanente e vitalícia. Você nunca receberá boletos de aluguel.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white">3. Funciona com leitor de código de barras comum?</h4>
                  <p className="text-xs text-slate-300">Sim! Qualquer leitor USB (com ou sem fio) funciona automaticamente sem drivers especiais.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white">4. Não tenho impressora térmica. Posso usar impressora comum?</h4>
                  <p className="text-xs text-slate-300">Sim! Todos os comprovantes, extratos e recibos exportam em PDF para a pasta Downloads para impressão em folha A4.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white">5. Posso instalar em mais de um computador?</h4>
                  <p className="text-xs text-slate-300">Cada licença cobre a ativação vitalícia de 1 computador (1 Ponto de Venda). Para mais computadores, basta adquirir licenças adicionais.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
