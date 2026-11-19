import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Stethoscope,
  ArrowRight,
  Download,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { DOWNLOADS_DATA } from "@/config/downloads";

export default function ProductCardGrid() {
  const pdv = DOWNLOADS_DATA.pdv;
  const clinica = DOWNLOADS_DATA.clinica;

  return (
    <section className="py-20 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="font-mono text-xs sm:text-sm text-accent-lime block">
            {"// "}nossos softwares · licença vitalícia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Sistemas de Gestão com Pagamento Único para o Seu Negócio
          </h2>
          <p className="text-ink-muted text-base leading-relaxed">
            Desenvolvidos com arquitetura independente, rápida e segura. Pague uma única vez e tenha o software definitivo no seu computador.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card PDV SPIN */}
          <div className="rounded-2xl bg-surface border border-border-subtle p-8 sm:p-10 flex flex-col justify-between hover:border-accent-lime/50 transition-colors">
            <div>
              {/* Header do Card */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-lime flex items-center justify-center text-canvas shrink-0">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-accent-lime block">
                      {"// "}pdv spin · comércio &amp; varejo
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight mt-0.5">
                      Sistema PDV Frente de Caixa e Estoque Sem Mensalidade
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-canvas text-accent-lime border border-border-subtle shrink-0">
                  v{pdv.version}
                </span>
              </div>

              {/* Box de Preço e Selo CRO */}
              <div className="mb-6 p-4 rounded-xl bg-canvas border border-border-subtle space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl font-extrabold font-mono text-ink">R$ 40,00</span>
                    <span className="font-mono text-xs font-bold text-accent-lime uppercase">
                      Licença Vitalícia
                    </span>
                  </div>
                  <span className="text-xs text-ink-subtle font-mono">
                    Sem boleto · Sem anuidade
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-accent-lime text-canvas text-[11px] font-extrabold uppercase tracking-wide">
                    Pagamento Único
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent-mint text-canvas text-[11px] font-extrabold uppercase tracking-wide">
                    Entrega Digital Imediata
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-ink-muted mb-6 leading-relaxed">
                Frente de caixa ultra-rápida para comércios, mercadinhos, adegas e lojas com 1 Ponto de Venda. Venda em segundos com leitor de código de barras USB, emita comprovantes em bobina térmica ou PDF e elimine furos de caixa com o fechamento cego.
              </p>

              {/* Lista de Recursos Principais */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">Frente de Caixa Ágil (F1):</strong> suporte instantâneo a leitor USB e busca rápida (F2).
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">Fechamento de Caixa Cego:</strong> contagem cega do operador sem saber o saldo, evitando desvios.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">Crediário &amp; Carnê a Receber:</strong> venda no fiado com parcelas e recibo de quitação em PDF.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">QR Code PIX na Tela:</strong> o cliente aponta o celular no balcão e paga na hora.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">Backup em 1 Clique (.pdvbak):</strong> exportação atômica para Pen Drive em 1 segundo.
                  </span>
                </div>
              </div>
            </div>

            {/* Ações do Card */}
            <div className="pt-6 border-t border-border-subtle space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/pdv-spin"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-accent-lime hover:brightness-110 text-canvas font-bold py-3 px-4 rounded-xl transition-all text-sm"
                >
                  <span>Ver Detalhes do PDV Spin (R$ 40)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-canvas hover:bg-surface-elevated text-ink border border-border-subtle font-semibold py-3 px-4 rounded-xl transition-all text-sm"
                >
                  <Download className="w-4 h-4 text-accent-lime" />
                  <span>Baixar ZIP (7.0 MB)</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-subtle pt-1 font-mono">
                <Link
                  href="/manuais/pdv-spin"
                  className="text-accent-lime hover:underline flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ler Manual Online</span>
                </Link>
                <a
                  href={pdv.manual.url}
                  download
                  className="hover:text-ink transition-colors"
                >
                  PDF ({pdv.manual.sizeFormatted})
                </a>
              </div>

              <p className="font-mono text-[11px] text-accent-lime/80">
                Windows 10/11 · macOS · ESC/POS · Offline
              </p>
            </div>
          </div>

          {/* Card Clínica SPIN */}
          <div className="rounded-2xl bg-surface border border-border-subtle p-8 sm:p-10 flex flex-col justify-between hover:border-accent-violet/50 transition-colors">
            <div>
              {/* Header do Card */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-violet flex items-center justify-center text-canvas shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-accent-violet block">
                      {"// "}clínica spin · saúde &amp; estética
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight mt-0.5">
                      Sistema de Gestão para Clínicas e Consultórios com Pagamento Único
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-canvas text-accent-violet border border-border-subtle shrink-0">
                  v1.0.0
                </span>
              </div>

              {/* Box de Preço e Selo CRO */}
              <div className="mb-6 p-4 rounded-xl bg-canvas border border-border-subtle space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl font-extrabold font-mono text-ink">R$ 99,00</span>
                    <span className="font-mono text-xs font-bold text-accent-violet uppercase">
                      Licença Vitalícia (Até 2 PCs)
                    </span>
                  </div>
                  <span className="text-xs text-ink-subtle font-mono">
                    Sem boleto · Zero Nuvem
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-accent-violet text-canvas text-[11px] font-extrabold uppercase tracking-wide">
                    Pagamento Único
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent-mint text-canvas text-[11px] font-extrabold uppercase tracking-wide">
                    Entrega Digital Imediata
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-ink-muted mb-6 leading-relaxed">
                Gestão clínica completa com prontuário eletrônico LGPD, sala de espera em tempo real e suporte a 2 computadores interligados na mesma clínica (Médico + Secretária) funcionando sem depender de internet.
              </p>

              {/* Lista de Recursos Principais */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-violet shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">Rede Local Médico + Recepção:</strong> sincronização instantânea por Wi-Fi ou cabo sem internet.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-violet shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">Prontuário Sigiloso LGPD:</strong> receituário, anamnese e linha do tempo protegidos localmente.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-violet shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">Sala de Espera com Cronômetro:</strong> tempo de espera e botão direto para chamar o próximo.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-violet shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">WhatsApp em 1 Clique:</strong> lembretes formatados sem custos ou plataformas pagas.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-violet shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">
                    <strong className="text-ink">Caixa &amp; Repasses Médicos:</strong> cálculo de comissões por procedimento e extratos em PDF.
                  </span>
                </div>
              </div>
            </div>

            {/* Ações do Card */}
            <div className="pt-6 border-t border-border-subtle space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/clinica-spin"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-accent-violet hover:brightness-110 text-canvas font-bold py-3 px-4 rounded-xl transition-all text-sm"
                >
                  <span>Ver Detalhes do Clínica Spin (R$ 99)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-canvas hover:bg-surface-elevated text-ink border border-border-subtle font-semibold py-3 px-4 rounded-xl transition-all text-sm"
                >
                  <Download className="w-4 h-4 text-accent-violet" />
                  <span>Baixar EXE (87.2 MB)</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-subtle pt-1 font-mono">
                <Link
                  href="/manuais/clinica-spin"
                  className="text-accent-violet hover:underline flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ler Manual Online</span>
                </Link>
                <a
                  href={clinica.manual.url}
                  download
                  className="hover:text-ink transition-colors"
                >
                  PDF ({clinica.manual.sizeFormatted})
                </a>
              </div>

              <p className="font-mono text-[11px] text-accent-violet/80">
                Windows 10/11 · Rede Local 2 PCs · LGPD · Offline
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
