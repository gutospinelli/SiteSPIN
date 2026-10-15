# Plano 04: Central Unificada de Downloads e Manuais Online Interativos

## Objetivo
Criar a Central de Downloads e Documentação (`/downloads`) e os Manuais Online Interativos e Imprimíveis (`/manuais/pdv-spin` e `/manuais/clinica-spin`), permitindo aos usuários baixar instaladores e PDFs oficiais ou navegar pelo manual diretamente no navegador com índice interativo, busca e suporte de impressão.

## Checklist de Tarefas
- [ ] Rota `/downloads/page.tsx`:
  - Visão geral dos pacotes de software oficiais da SPIN.
  - Tabela comparativa de instaladores com nome de arquivo, sistema operacional, tamanho real em MB e botão de download.
  - Seção de Manuais Oficiais em PDF (com tamanho, número de páginas e opções de "Baixar PDF" ou "Ler Online").
  - Checklist passo a passo pós-download (descompactar/instalar, aviso SmartScreen/Gatekeeper, ativação offline e primeiro login).
  - Box de Suporte Direto (`spinsoftwareinteligente@gmail.com`) com botão interativo de cópia de e-mail e mailto com assunto pré-definido.
- [ ] Rota `/manuais/pdv-spin/page.tsx`:
  - Leitor online estruturado capítulo a capítulo com índice lateral navegável (Sumário).
  - Conteúdo 100% fiel ao PDF (Capítulo 1 ao 10).
  - Botão de "Imprimir Manual" (`window.print()`) formatado para folha A4.
  - Botão de "Baixar Arquivo PDF Oficial".
- [ ] Rota `/manuais/clinica-spin/page.tsx`:
  - Leitor online estruturado capítulo a capítulo com índice lateral navegável (Sumário).
  - Conteúdo 100% fiel ao PDF (Capítulo 1 ao 8 com subseções 6.1 a 6.9).
  - Botão de "Imprimir Manual" (`window.print()`) formatado para folha A4.
  - Botão de "Baixar Arquivo PDF Oficial".
- [ ] Validação com `npx tsc --noEmit` e `npm run build`.
