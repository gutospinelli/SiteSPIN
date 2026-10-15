# Plano 00: Fundação, Descoberta e Inicialização Segura

## Objetivo
Configurar a base do projeto web com Next.js (App Router, TypeScript, Tailwind CSS, Lucide Icons), copiar e organizar os arquivos de `./_insumos/` para `public/downloads/`, blindar o `.vercelignore` e `.gitignore` contra duplicações, e estruturar as fontes de dados em `src/config/downloads.ts` e `src/data/products.ts`.

## Checklist de Tarefas
- [x] Extração e análise completa dos manuais de usuário em `_insumos/` gerando `docs/discovery.md`.
- [ ] Criação de pastas `public/downloads/manuais/` e `public/downloads/softwares/`.
- [ ] Cópia dos arquivos PDF para `public/downloads/manuais/`:
  - `manual-pdv-spin.pdf`
  - `manual-clinica-spin.pdf`
- [ ] Cópia dos instaladores <95MB para `public/downloads/softwares/`:
  - `PDV-Spin-Gestao-Comercial-Windows.zip` (~8.84 MB)
  - `PDV-Spin-macOS.zip` (~6.23 MB)
  - `Clinica-Spin-Setup-1.0.0.exe` (~87.20 MB)
- [ ] Configuração de `.gitignore` e `.vercelignore` para ignorar `_insumos/` e arquivos temporários.
- [ ] Inicialização segura do Next.js via pasta temporária `_temp_next_app` (para não colidir com pasta não vazia):
  `npx create-next-app@latest _temp_next_app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes`
  `cp -R _temp_next_app/. . && rm -rf _temp_next_app`
- [ ] Instalação de utilitários `lucide-react`, `clsx`, `tailwind-merge` e `vercel` local.
- [ ] Criação de `src/config/downloads.ts` com dados da empresa, links de download e mailtos com assuntos específicos.
- [ ] Criação de `src/data/products.ts` com especificações ricas do PDV SPIN e Clínica SPIN extraídas dos manuais.
- [ ] Teste de compilação TypeScript (`npx tsc --noEmit`) e build inicial (`npm run build`).
