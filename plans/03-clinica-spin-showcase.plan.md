# Plano 03: Vitrine Completa do Clínica SPIN (/clinica-spin)

## Objetivo
Desenvolver a página dedicada `/clinica-spin` detalhando 100% das características, módulos e recursos reais extraídos do manual em `_insumos/`, incluindo o funcionamento em Rede Local (Médico + Secretária sem internet), conformidade com a LGPD e sigilo de dados (Zero Nuvem), prontuário eletrônico completo, WhatsApp em 1 clique, guia de instalação e botões de download direto do software e do manual do usuário.

## Checklist de Tarefas
- [ ] Rota `/clinica-spin/page.tsx` com metadados SEO dedicados ao Clínica SPIN.
- [ ] Hero dedicado com identidade azul saúde/ciano (`sky-600`), proposta de valor ("Gestão Inteligente para Médicos, Dentistas e Terapeutas") e Box Duplo de Download (Instalador Oficial + Manual em PDF).
- [ ] Mockup Interativo e Visual do Clínica SPIN: simulação visual de tela de Agenda Inteligente com status de consulta, Sala de Espera com cronômetro em minutos e Prontuário Eletrônico com linha do tempo.
- [ ] Destaque Arquitetural: Modo Rede Local (Médico + Secretária em 2 computadores interligados por Wi-Fi ou cabo sem precisar de internet da rua).
- [ ] Matriz de Perfis de Acesso & LGPD:
  - Administrador (`admin` / `admin123`): controle global.
  - Recepção / Secretária (`recepcao` / `recepcao123`): agenda, sala de espera, caixa e WhatsApp (sem ver anotações médicas).
  - Profissional de Saúde (`medico` / `medico123`): prontuário, linha do tempo e repasses (sem ver o caixa).
- [ ] Navegação por Módulos em Abas/Cards:
  - Agenda Inteligente & Detecção de Conflitos (com Encaixe de Urgência).
  - Sala de Espera com Cronômetro de Permanência e Botão "Chamar Paciente".
  - Prontuário Eletrônico Sigiloso (Anamnese, Conduta, Receituário, Linha do Tempo).
  - Catálogo de Procedimentos com Preço Particular vs Convênio e Regra de Repasse Médico.
  - Caixa Diário com Fechamento Cego e Turnos.
  - Relatórios Gerenciais & Extrato de Repasse Médico com exportação em PDF.
  - Lembretes Gratuitos de Consulta no WhatsApp em 1 clique (sem APIs pagas).
  - Backup Criptografado em Pen Drive (.spinbackup).
- [ ] Guia de Instalação Passo a Passo:
  - Windows (`Clinica Spin Setup 1.0.0.exe` e permissão de rede privada no Firewall).
  - macOS (Gatekeeper - "Abrir Mesmo Assim").
  - Linux (AppImage / .deb).
  - Ativação Definitiva Offline em 3 Minutos com chave e código de liberação.
- [ ] Requisitos de Sistema e FAQ Extraído do Capítulo 8 do manual.
- [ ] CTA Duplo Final para download do instalador e do manual em PDF.
- [ ] Validação com `npx tsc --noEmit` e `npm run build`.
