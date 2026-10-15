export interface ModuleFeature {
  id: string;
  name: string;
  badge?: string;
  description: string;
  details: string[];
}

export interface ProductData {
  id: 'pdv-spin' | 'clinica-spin';
  name: string;
  tagline: string;
  headline: string;
  description: string;
  version: string;
  accentColor: 'emerald' | 'sky';
  highlights: {
    iconName: string;
    title: string;
    description: string;
  }[];
  modules: {
    id: string;
    tabTitle: string;
    title: string;
    subtitle: string;
    icon: string;
    description: string;
    bulletPoints: string[];
    technicalPoints: string[];
  }[];
  shortcuts?: {
    key: string;
    action: string;
    description: string;
  }[];
  setupSteps: {
    step: number;
    title: string;
    description: string;
    tip?: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const PRODUCTS: Record<'pdv' | 'clinica', ProductData> = {
  pdv: {
    id: 'pdv-spin',
    name: 'PDV SPIN Gestão Comercial',
    tagline: 'Tecnologia Soberana para o Comércio Brasileiro',
    headline: 'Frente de caixa ultra-rápida, controle de estoque e crediário. 100% offline e sem mensalidades.',
    description: 'Desenvolvido especialmente para o comerciante que busca independência, velocidade no balcão e segurança absoluta. Seus dados nunca saem do seu computador e sua loja não para se a internet cair.',
    version: '1.0 Oficial',
    accentColor: 'emerald',
    highlights: [
      {
        iconName: 'ShieldCheck',
        title: 'O Software é Seu de Verdade',
        description: 'Licença vitalícia definitiva sem aluguel mensal. Você nunca receberá boletos de renovação.',
      },
      {
        iconName: 'HardDrive',
        title: '100% Offline (Zero Nuvem)',
        description: 'Se a internet da sua rua cair, o atendimento não para. Vendas, estoque e caixa operam na velocidade máxima local.',
      },
      {
        iconName: 'Lock',
        title: 'Fechamento de Caixa Cego',
        description: 'O operador faz a contagem física sem ver o saldo do sistema. Auditoria interna imediata que impede fraudes.',
      },
      {
        iconName: 'Receipt',
        title: 'Crediário & Venda Fiado',
        description: 'Controle rigoroso de parcelas a receber, limites por cliente e emissão de recibos de quitação em PDF.',
      },
    ],
    modules: [
      {
        id: 'frente-caixa',
        tabTitle: 'Frente de Caixa (F1)',
        title: 'Ponto de Venda Ágil (PDV Rápido)',
        subtitle: 'Atendimento de fila em segundos com leitor USB ou teclado.',
        icon: 'ShoppingCart',
        description: 'Interface limpa, moderna e com foco total na velocidade da operação de venda. Suporte instantâneo a leitor de código de barras USB e atalhos intuitivos de teclado.',
        bulletPoints: [
          'Leitura direta de código de barras USB sem atrasos.',
          'Busca instantânea por nome ou descrição de produto via tecla F2.',
          'Painel de recebimento completo (tecla F4) com cálculo automático de troco em destaque verde.',
          'Geração de QR Code PIX dinâmico diretamente na tela do caixa para o cliente escanear e pagar na hora.',
          'Emissão de comprovantes de venda em bobina térmica (58mm/80mm) ou exportação em PDF para folha A4.',
        ],
        technicalPoints: [
          'Atalho F1: Abre a tela de venda imediatamente.',
          'Compatível com impressoras térmicas ESC/POS (Epson, Bematech, Elgin, Daruma, etc.).',
          'Exportação instantânea para a pasta Downloads do Windows/macOS.',
        ],
      },
      {
        id: 'gestao-caixa',
        tabTitle: 'Gestão de Caixa',
        title: 'Controle de Turno e Fechamento Cego',
        subtitle: 'Blindagem financeira contra quebras de caixa e desvios.',
        icon: 'CreditCard',
        description: 'Gerencie cada centavo que entra e sai da gaveta com abertura de turno com fundo de troco, suprimentos e sangrias justificadas.',
        bulletPoints: [
          'Abertura de caixa com registro de fundo de troco inicial.',
          'Suprimentos para troco adicional e sangrias de segurança com justificativa obrigatória.',
          'Fechamento de Caixa Cego: o operador conta o dinheiro físico sem saber o valor esperado, evitando manipulações.',
          'Conferência interna automática registrando status de Exato, Sobra ou Falta.',
          'Extrato consolidado do caixa exportado em PDF com 1 clique detalhando meios de pagamento.',
        ],
        technicalPoints: [
          'Separação por formas de pagamento: Dinheiro, PIX, Cartão de Débito, Cartão de Crédito e Crediário.',
          'Auditoria completa com data, horário e operador responsável.',
        ],
      },
      {
        id: 'estoque-produtos',
        tabTitle: 'Produtos & Estoque',
        title: 'Catálogo de Produtos e Saldo Crítico',
        subtitle: 'Controle automático de margem de lucro e reposição.',
        icon: 'Package',
        description: 'Mantenha seus produtos organizados por categorias personalizadas e seja alertado antes que itens essenciais faltem na prateleira.',
        bulletPoints: [
          'Cadastro ágil com código de barras/EAN ou geração automática de código interno.',
          'Cálculo automático de margem de lucro percentual entre Preço de Custo e Preço de Venda.',
          'Estoque Mínimo configurável com alerta visual de Estoque Crítico no Dashboard principal.',
          'Ajuste rápido de saldo para registrar novas entradas de mercadorias, avarias ou perdas sem burocracia.',
          'Filtros por categoria: Bebidas, Mercearia, Vestuário, Ferramentas, etc.',
        ],
        technicalPoints: [
          'Atualização de saldo em tempo real na baixa de vendas.',
          'Histórico de movimentações preservado localmente.',
        ],
      },
      {
        id: 'crediario-carne',
        tabTitle: 'Crediário & Fiado',
        title: 'Crediário Profissional e Carnê a Receber',
        subtitle: 'Profissionalize a venda a prazo sem perder o controle.',
        icon: 'FileText',
        description: 'Venda a prazo com segurança. Vincule limites ao cliente, parcele automaticamente e emita recibos de quitação quando o cliente pagar.',
        bulletPoints: [
          'Cadastro de clientes com CPF, telefone e limite de crédito personalizado.',
          'Parcelamento automático em 1x, 2x, 3x ou mais vezes com cálculo de datas de vencimento.',
          'Painel de títulos em aberto com destaque visual para parcelas vencidas.',
          'Baixa rápida no balcão com quitação automática no Caixa Aberto da loja.',
          'Emissão de Recibo de Quitação em PDF para entregar ao cliente na hora.',
        ],
        technicalPoints: [
          'Integração direta com o fluxo de caixa diário.',
          'Relatório de inadimplência e projeção de recebimentos futuros.',
        ],
      },
      {
        id: 'backup-seguranca',
        tabTitle: 'Backup Físico (.pdvbak)',
        title: 'Cópia de Segurança em Pen Drive',
        subtitle: 'Soberania absoluta dos seus dados com snapshot atômico.',
        icon: 'HardDrive',
        description: 'Faça backup em 1 clique em menos de 1 segundo. Seus dados são compactados em um arquivo único (.pdvbak) pronto para salvar no seu Pen Drive.',
        bulletPoints: [
          'Backup atômico em 1 segundo: empacota produtos, vendas, clientes e configurações.',
          'Compatível com qualquer Pen Drive ou HD externo via porta USB.',
          'Restauração simplificada com validação criptográfica de integridade SHA-256.',
          'Se formatar ou trocar de computador, basta restaurar o arquivo e continuar vendendo.',
        ],
        technicalPoints: [
          'Arquivo proprietário protegido .pdvbak.',
          'Integridade garantida por hash SHA-256.',
        ],
      },
    ],
    shortcuts: [
      { key: 'F1', action: 'Frente de Caixa', description: 'Abre diretamente a tela de PDV / Caixa Rápido.' },
      { key: 'F2', action: 'Busca de Produtos', description: 'No PDV, abre a pesquisa rápida por nome ou descrição.' },
      { key: 'F4', action: 'Finalizar Venda', description: 'No PDV, abre o painel de recebimento e formas de pagamento.' },
      { key: 'ESC', action: 'Cancelar / Voltar', description: 'Cancela a venda em andamento ou fecha a janela atual.' },
      { key: 'F6', action: 'Ordens de Serviço', description: 'Abre o módulo de OS para oficinas e assistências técnicas.' },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Descompactar o arquivo ZIP',
        description: 'Clique com o botão direito no arquivo PDV-Spin-Gestao-Comercial-Windows.zip e escolha "Extrair Tudo...".',
      },
      {
        step: 2,
        title: 'Criar Atalho na Área de Trabalho',
        description: 'Dê dois cliques no arquivo Instalar-Atalho.bat dentro da pasta extraída para criar o ícone automaticamente.',
      },
      {
        step: 3,
        title: 'Descomplicar o Aviso SmartScreen (Apenas no 1º Uso)',
        description: 'Se o Windows exibir a tela azul "O Windows protegeu o seu computador", clique em "Mais informações" e depois em "Executar assim mesmo". O aviso nunca mais se repete!',
        tip: 'Softwares sem mensalidade não cobram taxas de certificadoras caras que encarecem o produto.',
      },
      {
        step: 4,
        title: 'Ativação Permanente Offline',
        description: 'Digite sua Chave de Licença de 25 dígitos, seu CPF/CNPJ e Nome/Razão Social. A licença é gravada de forma definitiva no computador sem precisar de internet.',
      },
      {
        step: 5,
        title: 'Primeiro Acesso',
        description: 'Acesse com o usuário "admin" e senha "admin123" (ou "admin"). Você pode alterar a senha a qualquer momento nas Configurações.',
      },
    ],
    faq: [
      {
        question: 'O PDV SPIN precisa de internet para vender?',
        answer: 'Não! O PDV SPIN é 100% offline. Ele opera com velocidade máxima local mesmo durante quedas de sinal de internet ou em regiões sem cobertura.',
      },
      {
        question: 'O software realmente não tem mensalidade ou anuidade?',
        answer: 'Sim! A licença é vitalícia e permanente para o computador onde foi ativada. Você nunca receberá boletos de aluguel ou renovação.',
      },
      {
        question: 'Funciona com leitores comuns de código de barras USB?',
        answer: 'Sim! Qualquer leitor de código de barras USB (com ou sem fio) funciona automaticamente no sistema como teclado nativo, sem drivers especiais.',
      },
      {
        question: 'Não tenho impressora térmica. Posso imprimir em impressora comum?',
        answer: 'Sim! Todos os comprovantes de venda, extratos de caixa e carnês possuem exportação para PDF em 1 clique na pasta Downloads, permitindo imprimir em folha A4 em qualquer impressora laser ou jato de tinta.',
      },
      {
        question: 'Como faço se formatar ou trocar de computador?',
        answer: 'Basta fazer o backup do arquivo .pdvbak no seu Pen Drive. Ao instalar o PDV SPIN no computador novo, selecione "Restaurar Backup" e todo o histórico da sua loja é restabelecido em segundos.',
      },
    ],
  },
  clinica: {
    id: 'clinica-spin',
    name: 'Clínica SPIN Gestão Inteligente',
    tagline: 'O Guia Definitivo para Médicos, Dentistas, Fisioterapeutas e Recepção',
    headline: 'Prontuário eletrônico LGPD, agenda com sala de espera e rede local para 2 computadores sem internet.',
    description: 'Desenvolvido sob medida para consultórios particulares e clínicas de saúde. Garante sigilo médico absoluto, sem dados de pacientes em servidores de terceiros e sem travar quando a internet cair.',
    version: '1.0.0 Oficial Definitiva',
    accentColor: 'sky',
    highlights: [
      {
        iconName: 'ShieldCheck',
        title: 'Sigilo LGPD & Zero Nuvem',
        description: 'Nenhum dado confidencial de paciente é enviado para a nuvem. Banco de dados criptografado localmente no seu computador.',
      },
      {
        iconName: 'Laptop',
        title: 'Rede Local (Médico + Recepção)',
        description: 'Conecte o computador da secretária ao do médico por Wi-Fi ou cabo de rede interno sem precisar de conexão com a internet.',
      },
      {
        iconName: 'Clock',
        title: 'Sala de Espera com Cronômetro',
        description: 'Recepção registra chegada do paciente e o médico é notificado no consultório em tempo real com botão de chamada.',
      },
      {
        iconName: 'Activity',
        title: 'Prontuário & WhatsApp Grátis',
        description: 'Evolução clínica completa, receituário e disparos de lembretes no WhatsApp Web em 1 clique sem APIs pagas.',
      },
    ],
    modules: [
      {
        id: 'agenda-espera',
        tabTitle: 'Agenda & Sala de Espera',
        title: 'Agenda Inteligente e Fila em Tempo Real',
        subtitle: 'Sincronização imediata entre a recepção e o consultório médico.',
        icon: 'Calendar',
        description: 'Visualize horários por dia, semana ou por especialista. Detecta conflitos automaticamente e sincroniza a chegada do paciente com a sala de atendimento.',
        bulletPoints: [
          'Controle de horários por especialista com cores de identificação.',
          'Detecção automática de conflito de agenda com suporte a "Encaixe de Urgência".',
          'Sala de espera inteligente: cronômetro em minutos que mede o tempo real que o paciente aguarda.',
          'Botão "▶ Chamar Paciente" no consultório do médico que abre o prontuário e muda o status para "Em Atendimento".',
          'Histórico completo de faltas, presenças e cancelamentos.',
        ],
        technicalPoints: [
          'Atualização instantânea entre computadores via rede local interna.',
          'Filtros por profissional, procedimento e data.',
        ],
      },
      {
        id: 'prontuario-lgpd',
        tabTitle: 'Prontuário Eletrônico (LGPD)',
        title: 'Atendimento Clínico e Sigilo Total de Dados',
        subtitle: 'Conformidade rigorosa com normas médicas e proteção de dados.',
        icon: 'Stethoscope',
        description: 'Área restrita e exclusiva para o profissional de saúde registrar anamnese, evolução clínica, hipóteses diagnósticas e prescrições.',
        bulletPoints: [
          'Registro de Queixa Principal e Motivo da Consulta.',
          'Evolução Clínica e Conduta terapêutica detalhada.',
          'Emissão de receitas, prescrições e atestados médicos com impressão direta.',
          'Linha do Tempo Integrada: histórico cronológico de consultas passadas ao lado da tela atual.',
          'Blindagem LGPD: operadores da recepção não possuem permissão para ver anotações confidenciais.',
        ],
        technicalPoints: [
          'Banco de dados local criptografado.',
          'Sem tráfego de prontuários em servidores de terceiros ou APIs na nuvem.',
        ],
      },
      {
        id: 'rede-local',
        tabTitle: 'Rede Local (2 PCs)',
        title: 'Médico + Secretária Conectados sem Internet',
        subtitle: 'Até 2 computadores interligados pelo Wi-Fi ou cabo da clínica.',
        icon: 'Laptop',
        description: 'Sua licença já inclui suporte a 2 computadores na mesma clínica. Um atua como Servidor Local e o outro como Terminal da Recepção, conversando mesmo se o link de internet da rua cair.',
        bulletPoints: [
          'Configuração rápida em 2 cliques: marque "Habilitar Servidor Local" no PC principal.',
          'No terminal secundário, digite o IP local (ex: 192.168.1.15) e conecte.',
          'Opera 100% no roteador da clínica (cabo ou Wi-Fi interno).',
          'Se o provedor de internet falhar, a secretária continua agendando e o médico atendendo normalmente.',
        ],
        technicalPoints: [
          'Portas locais padronizadas com permissão de Firewall de rede privada.',
          'Sincronização de eventos e chamadas de pacientes em microssegundos.',
        ],
      },
      {
        id: 'financeiro-caixa',
        tabTitle: 'Caixa & Repasse Médico',
        title: 'Controle de Caixa e Divisão de Repasses',
        subtitle: 'Clareza financeira e cálculo automático de comissões por procedimento.',
        icon: 'BarChart3',
        description: 'Controle entradas por Dinheiro, PIX, Cartão e Convênios. Configure valores particulares vs convênios e regras de repasse médico automáticas.',
        bulletPoints: [
          'Tabela de procedimentos com preços particulares e valores diferenciados por convênio.',
          'Regras de Repasse Médico: configure % ou valor fixo devido ao profissional (ex: 70% médico / 30% clínica).',
          'Extrato detalhado de comissões por profissional de saúde pronto para acerto.',
          'Fechamento de Caixa Cego no final do turno para evitar divergências.',
          'Exportação de relatórios gerenciais e folhas timbradas em PDF com 1 clique.',
        ],
        technicalPoints: [
          'Fechamento cego auditável com conferência de sobras e faltas.',
          'Relatório analítico de lucratividade consolidada do consultório.',
        ],
      },
      {
        id: 'whatsapp-lembretes',
        tabTitle: 'WhatsApp em 1 Clique',
        title: 'Lembretes Gratuitos de Consulta',
        subtitle: 'Reduza faltas em até 70% sem pagar mensalidades de APIs.',
        icon: 'Sparkles',
        description: 'Dispare mensagens personalizadas de lembrete com nome do paciente, data, hora e médico diretamente para o WhatsApp Web ou Desktop com apenas 1 clique.',
        bulletPoints: [
          'Redução drástica de faltas e atrasos na rotina do consultório.',
          'Mensagens formatadas automaticamente pelo sistema.',
          'Zero custo adicional: não requer contratação de plataformas de disparo em massa.',
          'Abre a conversa oficial no WhatsApp com o texto pronto para envio.',
        ],
        technicalPoints: [
          'Integração nativa via protocolo universal de mensageria.',
          'Respeito total à privacidade dos contatos da clínica.',
        ],
      },
      {
        id: 'seguranca-backup',
        tabTitle: 'Backup em Pen Drive',
        title: 'Cópia Segura com Criptografia (.spinbackup)',
        subtitle: 'Seus dados sob sua custódia física.',
        icon: 'HardDrive',
        description: 'Exporte todo o histórico de consultas, prontuários e movimentações em um arquivo único compactado (.spinbackup) com proteção opcional de senha.',
        bulletPoints: [
          'Backup em 1 clique em arquivo único .spinbackup.',
          'Proteção opcional com senha pessoal para criptografia adicional.',
          'Restauração simplificada em qualquer computador novo.',
          'Garantia de conformidade com exigências de retenção de prontuários médicos.',
        ],
        technicalPoints: [
          'Arquivo único empacotado e otimizado.',
          'Compatibilidade com qualquer Pen Drive ou HD externo.',
        ],
      },
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Executar o Instalador Oficial',
        description: 'Dê um duplo clique no arquivo Clinica-Spin-Setup-1.0.0.exe para iniciar o assistente de instalação.',
      },
      {
        step: 2,
        title: 'Liberar no Windows SmartScreen',
        description: 'Se a tela azul "O Windows protegeu o seu computador" surgir, clique no link "Mais informações" e depois no botão "Executar assim mesmo".',
      },
      {
        step: 3,
        title: 'Permissão de Rede Privada no Firewall',
        description: 'Caso utilize o modo Médico + Secretária, marque a opção "Redes privadas" no aviso do Firewall para permitir a comunicação interna.',
      },
      {
        step: 4,
        title: 'Ativação Definitiva Offline em 3 Minutos',
        description: 'Informe sua Chave de Licença recebida na compra, copie o "Código Deste Computador" gerado e cole o "Código de Liberação Definitivo" fornecido pela equipe SPIN.',
      },
      {
        step: 5,
        title: 'Primeiro Acesso por Perfil',
        description: 'O sistema já conta com operadores pré-configurados: Administrador (admin / admin123), Recepção (recepcao / recepcao123) e Médico (medico / medico123).',
      },
    ],
    faq: [
      {
        question: 'E se a internet da clínica cair completamente durante o expediente?',
        answer: 'O Clínica SPIN continuará operando normalmente! Consultas, prontuários, agendamentos, chamadas da sala de espera e caixa funcionam de forma local e autônoma.',
      },
      {
        question: 'A secretária tem acesso aos prontuários confidenciais dos pacientes?',
        answer: 'Não! O perfil de "Recepção / Secretária" tem permissão para gerenciar a agenda, registrar pacientes, controlar o caixa diário e enviar WhatsApp, mas o acesso aos prontuários clínicos é restrito exclusivamente ao perfil do "Profissional de Saúde", garantindo total conformidade com a LGPD e o sigilo médico.',
      },
      {
        question: 'Existe limite na quantidade de pacientes ou prontuários cadastrados?',
        answer: 'Não. O Clínica SPIN não possui travas ou limites por quantidade de pacientes, histórico de prontuários ou tempo de utilização.',
      },
      {
        question: 'Como funciona a conexão entre 2 computadores (Médico + Secretária)?',
        answer: 'Ambos os computadores precisam estar conectados ao mesmo roteador da clínica (por cabo de rede ou Wi-Fi). O computador principal atua como Servidor Local e o computador da recepção se conecta usando o endereço IP informado, sem precisar de internet.',
      },
      {
        question: 'Posso utilizar o software em macOS ou Linux?',
        answer: 'Sim! Além do instalador executável para Windows, o Clínica SPIN possui pacotes dedicados para macOS (compatível com chips Intel e Apple Silicon) e Linux (.deb / AppImage).',
      },
    ],
  },
};
