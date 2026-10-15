# Plano 01: Identidade da Marca, Layout Base e Home Page

## Objetivo
Implementar o design system corporativo da SPIN - Software Prático e Inteligente, o Header global responsivo com navegação rápida, o Hero Institucional de alto impacto, seções corporativas de diferenciais ("Por que a SPIN?", "Zero Nuvem", "Sem Mensalidades"), vitrines resumidas para os dois produtos, canal de contato comercial com botão interativo de cópia de e-mail e Footer completo.

## Checklist de Tarefas
- [ ] Configuração do Design System em `tailwind.config.ts` ou globals.css com a paleta institucional (Slate/Indigo/Blue), PDV SPIN (Emerald/Teal) e Clínica SPIN (Sky/Cyan).
- [ ] Componente `Header`: barra de navegação fixa, menu responsivo mobile, logotipo estilizado da SPIN, links para A Empresa, PDV SPIN, Clínica SPIN, Manuais, Downloads e botão de Contato Comercial.
- [ ] Componente `Hero`: chamada de impacto com o slogan oficial ("Tecnologia direta ao ponto: gestão rápida, segura e sem complicação para o seu negócio"), badges de "Zero Nuvem", "100% Offline" e "Licença Vitalícia".
- [ ] Seção "Por Que Escolher a SPIN?": cards explicativos dos pilares (Soberania de Dados, Zero Mensalidades, Funcionamento Offline, Instalação Direta).
- [ ] Seção "Comparativo Rápido de Soluções": tabela visual comparando sistemas convencionais em nuvem (mensalidades caras, travamento sem internet, dados de terceiros) vs SPIN (vitalício, offline, privacidade total).
- [ ] Vitrines de Acesso Rápido na Home: cards destacados para PDV SPIN e Clínica SPIN com badges de compatibilidade, destaques de recursos e links diretos para `/pdv-spin`, `/clinica-spin` e downloads.
- [ ] Seção de Contato Comercial: destaque para `spinsoftwareinteligente@gmail.com`, mailto direto com assunto preenchido, botão interativo "Copiar E-mail" com feedback visual ("Copiado!").
- [ ] Componente `Footer`: links de navegação, avisos de direitos reservados, canal oficial e atalhos para documentação.
- [ ] Validação com `npx tsc --noEmit` e `npm run build`.
