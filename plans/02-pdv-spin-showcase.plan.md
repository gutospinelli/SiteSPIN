# Plano 02: Vitrine Completa do PDV SPIN (/pdv-spin)

## Objetivo
Desenvolver a página dedicada `/pdv-spin` detalhando 100% das características, módulos e recursos reais extraídos do manual em `_insumos/`, incluindo mockups visuais da interface (Frente de Caixa, Fechamento Cego, Crediário, QR Code PIX), requisitos técnicos, atalhos de teclado (F1, F2, F4, ESC, F6), guia de instalação e botões de download direto do software e do manual do usuário.

## Checklist de Tarefas
- [ ] Rota `/pdv-spin/page.tsx` com metadados SEO específicos para PDV SPIN.
- [ ] Hero dedicado com identidade verde esmeralda (`emerald-600`), proposta de valor ("Tecnologia Soberana para o Comércio Brasileiro") e Box Duplo de Download (Instalador Oficial + Manual em PDF).
- [ ] Mockup Interativo e Visual do PDV SPIN: simulação visual rica em Tailwind de uma venda na frente de caixa, leitor de código de barras, cálculo de troco em verde e QR Code PIX dinâmico.
- [ ] Navegação por Módulos em Abas/Cards:
  - Frente de Caixa Ágil (F1) & Atalhos Rápidos (F1, F2, F4, ESC, F6).
  - Gestão de Caixa & Fechamento Cego (segurança total para o proprietário).
  - Produtos, Categorias & Controle de Estoque (com estoque mínimo crítico e margem de lucro).
  - Crediário & Carnê a Receber (venda no fiado profissionalizada com recibo de quitação em PDF).
  - Configurações da Loja, Logotipo e Impressoras (térmica 58mm/80mm ESC/POS e PDF A4).
  - Backup em Pen Drive (.pdvbak) com verificação SHA-256.
- [ ] Guia de Instalação Passo a Passo:
  - Descompactação do arquivo zip e execução do `Instalar-Atalho.bat`.
  - Como descomplicar o aviso do Windows SmartScreen em 2 cliques.
  - Ativação offline permanente com chave de 25 dígitos.
  - Credenciais padrão de fábrica (`admin` / `admin123`).
- [ ] Tabela de Requisitos Técnicos e Compatibilidade (Windows 10/11, macOS, leitor USB padrão).
- [ ] FAQ Específico do PDV SPIN extraído do Capítulo 10 do manual.
- [ ] CTA Duplo Final para download do instalador e do manual em PDF.
- [ ] Validação com `npx tsc --noEmit` e `npm run build`.
