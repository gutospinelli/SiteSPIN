# Plano 05: Garantia de Qualidade, Build de Produção e Deploy na Vercel

## Objetivo
Realizar testes de integridade em todos os links e downloads, executar linting rigoroso e compilação de produção sem qualquer erro ou aviso pendente, e realizar a publicação automatizada do portal na conta Vercel (`spinelli1`) via Vercel CLI com confirmação de status HTTP 200.

## Checklist de Tarefas
- [ ] Verificação física de arquivos em `public/downloads/softwares/` e `public/downloads/manuais/` contra as URLs em `src/config/downloads.ts`.
- [ ] Confirmação de que `_insumos/` e arquivos temporários estão bloqueados no `.gitignore` e no `.vercelignore`.
- [ ] Execução de validação estrita: `npm run lint`.
- [ ] Execução de verificação de tipos TypeScript: `npx tsc --noEmit`.
- [ ] Execução de build de produção Next.js: `npm run build`.
- [ ] Verificação de autenticação na Vercel CLI (`npx vercel whoami`).
- [ ] Execução de deploy de produção não-interativo: `npx vercel --prod --yes`.
- [ ] Teste de resposta HTTP 200 nas rotas `/`, `/pdv-spin`, `/clinica-spin`, `/downloads`, `/manuais/pdv-spin`, `/manuais/clinica-spin` e nos links de download.
- [ ] Atualização final de `docs/progress.md` com a URL pública final e relatório de deploy.
