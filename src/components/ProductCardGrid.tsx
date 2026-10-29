import React from "react";
import Link from "next/link";
import { ShoppingCart, Stethoscope, ArrowRight, Download, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { DOWNLOADS_DATA } from "@/config/downloads";

export default function ProductCardGrid() {
  const pdv = DOWNLOADS_DATA.pdv;
  const clinica = DOWNLOADS_DATA.clinica;

  return (
    <section className="py-20 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Licença Vitalícia • Sem Mensalidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sistemas de Gestão com Pagamento Único para o Seu Negócio
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Desenvolvidos com arquitetura independente, rápida e segura. Pague uma única vez e tenha o software definitivo no seu computador.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Card PDV SPIN */}
          <div className="rounded-3xl bg-slate-950 border border-emerald-500/30 p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-500/60 transition-all shadow-xl shadow-emerald-950/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

            <div>
              {/* Header do Card */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-md shrink-0">
                    <ShoppingCart className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                      PDV Spin • Comércio &amp; Varejo
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      Sistema PDV Frente de Caixa e Estoque Sem Mensalidade
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shrink-0">
                  v{pdv.version}
                </span>
              </div>

              {/* Box de Preço e Selo CRO */}
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">R$ 40,00</span>
                    <span className="text-xs font-bold text-emerald-400 uppercase">
                      Licença Vitalícia
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    Sem boleto mensal • Sem anuidade
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pagamento Único • Zero Mensalidade • Entrega Digital Imediata</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                Frente de caixa ultra-rápida para comércios, mercadinhos, adegas e lojas com 1 Ponto de Venda. Venda em segundos com leitor de código de barras USB, emita comprovantes em bobina térmica ou PDF e elimine furos de caixa com o fechamento cego.
              </p>

              {/* Lista de Recursos Principais */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>Frente de Caixa Ágil (F1):</strong> suporte instantâneo a leitor USB e busca rápida (F2).
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>Fechamento de Caixa Cego:</strong> contagem cega do operador sem saber o saldo, evitando desvios.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>Crediário &amp; Carnê a Receber:</strong> venda no fiado com parcelas e recibo de quitação em PDF.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>QR Code PIX na Tela:</strong> o cliente aponta o celular no balcão e paga na hora.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>Backup em 1 Clique (.pdvbak):</strong> exportação atômica para Pen Drive em 1 segundo.
                  </span>
                </div>
              </div>
            </div>

            {/* Ações do Card */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/pdv-spin"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md shadow-emerald-900/30 text-sm"
                >
                  <span>Ver Detalhes do PDV Spin (R$ 40)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-3 px-4 rounded-xl transition-all text-sm"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Baixar ZIP (7.0 MB)</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                <Link
                  href="/manuais/pdv-spin"
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ler Manual Online</span>
                </Link>
                <a
                  href={pdv.manual.url}
                  download
                  className="hover:text-slate-200 transition-colors"
                >
                  Baixar Manual em PDF ({pdv.manual.sizeFormatted})
                </a>
              </div>
            </div>
          </div>

          {/* Card Clínica SPIN */}
          <div className="rounded-3xl bg-slate-950 border border-sky-500/30 p-8 sm:p-10 flex flex-col justify-between hover:border-sky-500/60 transition-all shadow-xl shadow-sky-950/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/10 transition-colors" />

            <div>
              {/* Header do Card */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-md shrink-0">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                      Clínica Spin • Saúde &amp; Estética
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      Sistema de Gestão para Clínicas e Consultórios com Pagamento Único
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 shrink-0">
                  v1.0.0
                </span>
              </div>

              {/* Box de Preço e Selo CRO */}
              <div className="mb-6 p-4 rounded-2xl bg-sky-950/30 border border-sky-500/30 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">R$ 99,00</span>
                    <span className="text-xs font-bold text-sky-400 uppercase">
                      Licença Vitalícia (Até 2 PCs)
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    Sem boleto mensal • Zero Nuvem
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-200 border border-sky-500/30 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Pagamento Único • Zero Mensalidade • Entrega Digital Imediata</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                Gestão clínica completa com prontuário eletrônico LGPD, sala de espera em tempo real e suporte a 2 computadores interligados na mesma clínica (Médico + Secretária) funcionando sem depender de internet.
              </p>

              {/* Lista de Recursos Principais */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>Rede Local Médico + Recepção:</strong> sincronização instantânea por Wi-Fi ou cabo sem internet.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>Prontuário Sigiloso LGPD:</strong> receituário, anamnese e linha do tempo protegidos localmente.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>Sala de Espera com Cronômetro:</strong> tempo de espera e botão direto para chamar o próximo.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>WhatsApp em 1 Clique:</strong> lembretes formatados sem custos ou plataformas pagas.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    <strong>Caixa &amp; Repasses Médicos:</strong> cálculo de comissões por procedimento e extratos em PDF.
                  </span>
                </div>
              </div>
            </div>

            {/* Ações do Card */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/clinica-spin"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md shadow-sky-900/30 text-sm"
                >
                  <span>Ver Detalhes do Clínica Spin (R$ 99)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-3 px-4 rounded-xl transition-all text-sm"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Baixar EXE (87.2 MB)</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                <Link
                  href="/manuais/clinica-spin"
                  className="text-sky-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ler Manual Online</span>
                </Link>
                <a
                  href={clinica.manual.url}
                  download
                  className="hover:text-slate-200 transition-colors"
                >
                  Baixar Manual em PDF ({clinica.manual.sizeFormatted})
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
