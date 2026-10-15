# Documento de Descoberta e Extração de Insumos: SPIN - Software Prático e Inteligente

> Documento gerado automaticamente na Fase 0 para servir de fonte de verdade absoluta e 100% fiel aos manuais e binários disponíveis na pasta `./_insumos/`.

---

## 1. Identidade Corporativa e Posicionamento

- **Razão Social / Nome da Empresa:** SPIN - Software Prático e Inteligente
- **Slogan Principal:** "Tecnologia direta ao ponto: gestão rápida, segura e sem complicação para o seu negócio."
- **Posicionamento de Mercado:**
  - **O Software é Seu de Verdade:** Licença vitalícia e permanente, sem mensalidades, sem anuidade, sem taxas de renovação e sem cancelamento de acesso.
  - **Soberania de Dados & Zero Nuvem:** Dados protegidos exclusivamente no computador do cliente, garantindo privacidade absoluta e total conformidade com a LGPD e sigilo comercial/médico.
  - **100% Offline (Se a Internet Cair, Nada Para):** Frente de caixa, agendamentos, prontuários médicos e controle de estoque continuam operando normalmente sem depender de operadoras de internet ou servidores remotos.
  - **Leve e Direto:** Sem necessidade de instalar bancos de dados pesados externos (como MySQL ou SQL Server corporativo) ou servidores complexos na rede.
- **Canal Oficial de Atendimento e Comercial:**
  - E-mail Oficial: `spinsoftwareinteligente@gmail.com`
  - Assunto Comercial: `Contato Comercial - SPIN Software`
  - Assunto Suporte PDV: `Suporte PDV SPIN`
  - Assunto Suporte Clínica: `Suporte Clínica SPIN`
  - Canal adicional de pós-venda citado nos manuais: Chat oficial da compra no Mercado Livre.

---

## 2. Insumos Físicos e Binários Disponíveis em `./_insumos/`

| Arquivo Original | Tipo | Tamanho Real | Destino Planejado / Tratamento |
| :--- | :--- | :--- | :--- |
| `PDV-Spin-Manual-do-Usuario.pdf` | Manual PDF | 2.590.672 bytes (~2,47 MB) | `public/downloads/manuais/manual-pdv-spin.pdf` + Manual Online em `/manuais/pdv-spin` |
| `Manual_do_Usuario_Clinica_Spin.pdf` | Manual PDF | 2.098.562 bytes (~2,00 MB) | `public/downloads/manuais/manual-clinica-spin.pdf` + Manual Online em `/manuais/clinica-spin` |
| `PDV-Spin-Gestao-Comercial-Windows.zip` | Software Windows | 9.268.658 bytes (~8,84 MB) | `public/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip` (Vercel <95MB) |
| `PDV-Spin-macOS.zip` | Software macOS | 6.533.762 bytes (~6,23 MB) | `public/downloads/softwares/PDV-Spin-macOS.zip` (Vercel <95MB) |
| `Clinica Spin Setup 1.0.0.exe` | Software Windows | 91.438.237 bytes (~87,20 MB) | `public/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe` (Vercel <95MB) |
| `Clinica Spin-1.0.0-arm64.dmg` | Software macOS Apple Silicon | 111.209.203 bytes (~106,06 MB) | GitHub Release ou Download Alternativo |
| `Clinica Spin-1.0.0.dmg` | Software macOS Intel | 115.808.045 bytes (~110,44 MB) | GitHub Release ou Download Alternativo |

---

## 3. Especificação Completa do PDV SPIN GESTÃO COMERCIAL

### 3.1 Visão Geral e Arquitetura
- **Versão:** 1.0
- **Finalidade:** Gestão comercial ágil e frente de caixa descomplicada para comércios com 1 Ponto de Venda.
- **Sistemas Operacionais Suportados:** Windows 10, Windows 11 e macOS.
- **Modelo de Licenciamento:** Licença Vitalícia Offline permanente por máquina.

### 3.2 Passo a Passo de Instalação e Primeiro Uso
1. **Descompactação:** O arquivo `PDV-Spin-Gestao-Comercial-Windows.zip` é descompactado pelo usuário.
2. **Conteúdo:** Executável `pdvspin.exe` e script auxiliar `Instalar-Atalho.bat`.
3. **Criação de Atalho:** O arquivo `Instalar-Atalho.bat` cria o ícone na Área de Trabalho com 2 cliques.
4. **Desmistificação do Windows SmartScreen:** O manual explica de forma transparente que o aviso "O Windows protegeu o seu computador" ocorre porque certificados anuais caríssimos de multinacionais encareceriam o produto (repassados como mensalidades de R$ 80 a R$ 200). Para rodar: clicar em "Mais informações" e depois "Executar assim mesmo". O aviso nunca mais se repete.

### 3.3 Ativação da Licença Permanente Offline
- **Processo:** 100% offline, sem necessidade de conexão com a internet.
- **Campos Obrigatórios:**
  - Chave de Licença (formato 25 dígitos: `XXXXX-XXXXX-XXXXX-XXXXX-XXXXX`)
  - CPF ou CNPJ do Titular informado na compra
  - Nome ou Razão Social
- **Credenciais de Fábrica Padrão:**
  - Usuário: `admin`
  - Senha: `admin123` (ou `admin`), com possibilidade de alteração imediata nas Configurações.

### 3.4 Módulos e Recursos Operacionais
1. **Dashboard & Indicadores em Tempo Real:**
   - Vendas Hoje (faturamento diário e contagem de cupons emitidos).
   - Faturamento Mês & Lucro Bruto (cálculo automático baseado no custo de aquisição).
   - Alerta de Estoque Crítico (itens que atingiram ou caíram abaixo do saldo mínimo).
   - Sessão de Caixa Atual (status Aberto/Fechado, operador e troco inicial).
   - Histórico das últimas vendas.
2. **Atalhos Rápidos de Teclado:**
   - `F1`: Abre imediatamente a Frente de Caixa (PDV Rápido).
   - `F2`: Busca rápida de produtos por nome ou descrição dentro do PDV.
   - `F4`: Painel de recebimento e finalização da venda.
   - `ESC`: Cancela a venda em andamento ou fecha o modal atual.
   - `F6`: Acesso direto ao módulo de Ordens de Serviço (assistência/oficina).
3. **Configurações da Loja e Periféricos:**
   - Cadastro completo (Nome Fantasia, Razão Social, CNPJ/CPF, Telefone/WhatsApp, Endereço).
   - Upload de Logotipo da loja (PNG/JPG) exibido no topo do menu e cabeçalhos impressos.
   - Integração PIX nativa com QR Code na tela: cadastro de chave PIX e nome do titular. O sistema gera na tela o QR Code dinâmico para o cliente ler com o celular no balcão.
   - Impressoras Térmicas de Bobina (58mm e 80mm): compatibilidade com qualquer impressora não fiscal padrão ESC/POS (Epson, Bematech, Daruma, Elgin, marcas USB).
   - Exportação para PDF em 1 Clique: gera comprovantes e extratos na pasta Downloads para impressão em folha A4 comum em qualquer impressora jato de tinta ou laser.
4. **Produtos, Categorias e Gestão de Estoque:**
   - Categorias personalizadas (Bebidas, Mercearia, Ferramentas, Limpeza, Vestuário, etc.).
   - Código de Barras / EAN com suporte nativo a leitores USB ou geração de código interno automático.
   - Cálculo automático da margem de lucro (%) entre Preço de Custo e Preço de Venda.
   - Ponto de Reposição / Estoque Mínimo com alertas automáticos.
   - Ajuste rápido de saldo para entradas de mercadorias, perdas ou avarias.
5. **Gestão de Caixa com "Fechamento Cego":**
   - Abertura de turno informando o Fundo de Troco inicial.
   - Suprimento (entrada avulsa de troco) e Sangria (retirada com justificativa obrigatória).
   - **Fechamento de Caixa Cego:** o sistema NÃO exibe o saldo calculado ao operador. O operador conta as cédulas físicas e digita o valor. O sistema audita internamente registrando Exato, Sobra ou Falta, prevenindo desvios.
   - Extrato do Caixa em PDF na pasta Downloads com vendas divididas por meio de pagamento.
6. **Frente de Caixa (PDV Ágil):**
   - Lançamento por leitor de código de barras USB ou tecla F2.
   - Painel F4 de recebimento: Dinheiro (cálculo de troco em verde), Cartão Débito/Crédito (com parcelamento), PIX (QR Code dinâmico na tela) e Crediário.
7. **Crediário & Carnê a Receber (Venda Fiado):**
   - Vínculo a cliente com limite de crédito.
   - Parcelamento automático em 1x, 2x, 3x com datas de vencimento.
   - Baixa no balcão com seleção da forma de recebimento, crédito automático no caixa aberto e emissão de Recibo de Quitação em PDF.
8. **Backup Físico (.pdvbak) e Restauração:**
   - Backup em 1 clique em 1 segundo empacotando produtos, vendas, clientes e configurações.
   - Restauração com validação de integridade criptográfica SHA-256.

---

## 4. Especificação Completa do CLÍNICA SPIN GESTÃO INTELIGENTE

### 4.1 Visão Geral e Arquitetura
- **Versão:** 1.0.0 Oficial Definitiva
- **Público-Alvo:** Médicos, Dentistas, Fisioterapeutas, Psicólogos, Terapeutas e Equipe de Recepção de consultórios e clínicas particulares.
- **Sistemas Operacionais Suportados:** Windows 10/11 (.exe), macOS (Intel e Apple Silicon .dmg), Linux (.AppImage / .deb).
- **Modelo de Licenciamento:** 100% vitalício, zero mensalidades, zero nuvem, 100% offline.

### 4.2 Instalação e Ativação
- **Windows:** Instalador `Clinica Spin Setup 1.0.0.exe` com orientações claras sobre SmartScreen e permissão do Firewall do Windows para funcionamento da Rede Local.
- **macOS:** Imagens `.dmg` (Universal e Apple Silicon arm64) com instruções de Gatekeeper em "Privacidade e Segurança -> Abrir Mesmo Assim".
- **Linux:** Pacotes `.deb` e executáveis `AppImage`.
- **Ativação Offline em 3 Minutos:** Chave de Licença (`SPIN-XXXX-XXXX-XXXX-OFFLINE`), Código Deste Computador (`REQ-XXXX-XXXX-XXXX`) e Código de Liberação Definitivo enviado pela equipe SPIN.

### 4.3 Modo Rede Local: Médico + Secretária (Sem Internet)
- Suporte nativo para interligar 2 computadores (Recepção + Sala de Atendimento) por Wi-Fi ou cabo de rede interno.
- O computador principal opera como Servidor Local exibindo o IP (ex.: `192.168.1.15`), e o segundo computador se conecta diretamente como Terminal Cliente.
- Se a internet da rua cair, ambos os computadores continuam sincronizados em tempo real.

### 4.4 Perfis de Operador e Conformidade LGPD
1. **Administrador (`admin` / `admin123`):** Acesso completo a financeiro, auditoria, operadores, tabela de preços, licença e backups.
2. **Recepção / Secretária (`recepcao` / `recepcao123`):** Consultas & Agenda, Sala de Espera, Cadastro de Pacientes, Caixa Diário e Lembretes de WhatsApp. Proteção total: NÃO visualiza anotações médicas nem prontuários confidenciais.
3. **Profissional de Saúde (`medico` / `medico123` - Dr. Roberto Spinelli):** Atendimentos & Prontuários (LGPD), Linha do Tempo e Extrato de Repasses Médicos. NÃO acessa o caixa da recepção.

### 4.5 Módulos e Recursos Operacionais
1. **Dashboard Geral & Gráficos:** Faturamento do mês e do dia com taxa de crescimento, Saldo em gaveta do turno, Agendamentos do dia, Fila de espera e Gráfico semanal de desempenho financeiro.
2. **Consultas & Agenda Inteligente:** Visualização por dia, semana ou por profissional, com detecção automática de conflito de horários e opção de "Encaixe de Urgência".
3. **Sala de Espera em Tempo Real:** Recepção marca paciente como "Chegou / Aguardando", ativando cronômetro de tempo de espera. Na tela do consultório, o médico clica em "Chamar Paciente", abrindo instantaneamente o prontuário.
4. **Atendimento Clínico & Prontuário Eletrônico:** Queixa Principal & Motivo, Evolução Clínica & Conduta, Prescrições & Receituário com impressão direta, e Linha do Tempo Integrada com histórico de consultas pregressas.
5. **Catálogo de Procedimentos & Preços Diferenciados:** Preços diferenciados para atendimento Particular vs Convênios (ex.: Unimed, Bradesco Saúde), Duração estimada do procedimento e Regra de Repasse Médico configurável (% ou valor fixo, ex.: 70% médico / 30% clínica).
6. **Controle de Caixa Diário & Turnos:** Abertura com troco inicial, recebimento por consultas e procedimentos (Dinheiro, PIX, Cartão Débito/Crédito, Convênio), e Fechamento de Caixa Cego com conferência de diferenças.
7. **Relatórios Gerenciais & Exportação em PDF:** Receita consolidada por profissional, cálculo automático de comissões/repasses médicos e emissão de folhas timbradas em PDF com 1 clique.
8. **WhatsApp em 1 Clique (Lembretes Gratuitos):** Redução de faltas em até 70% sem custo de APIs pagas, abrindo WhatsApp Web/Desktop com texto personalizado (nome, data, hora e médico) com 1 clique.
9. **Auditoria de Ações & Rastreabilidade:** Registro de logs de ações dos operadores para segurança clínica e administrativa.
10. **Backup em Pen Drive (.spinbackup):** Exportação atômica em arquivo único com senha de criptografia opcional e restauração simplificada.

---

## 5. Resumo das Decisões de Arquitetura do Site
- **Tecnologias:** Next.js (App Router), React 19, TypeScript estrito, Tailwind CSS, Lucide React Icons.
- **Roteamento:**
  - `/` (Home institucional + vitrines de produtos + comparativos + downloads rápidos + contato)
  - `/pdv-spin` (Página de alta conversão do PDV SPIN com todos os módulos, telas, guia de instalação e downloads)
  - `/clinica-spin` (Página de alta conversão do Clínica SPIN com todos os módulos, rede local, LGPD, guia de instalação e downloads)
  - `/downloads` (Central unificada de instaladores, manuais em PDF e suporte)
  - `/manuais/pdv-spin` (Manual Online Completo, Interativo e Imprimível)
  - `/manuais/clinica-spin` (Manual Online Completo, Interativo e Imprimível)
- **Design System:**
  - Marca SPIN: Indigo & Slate (`slate-900`, `indigo-600`, `blue-600`)
  - PDV SPIN: Emerald & Teal (`emerald-600`, `teal-600`)
  - Clínica SPIN: Sky & Cyan (`sky-600`, `cyan-600`)
- **Gestão de Downloads:** Centralizado em `src/config/downloads.ts`.
