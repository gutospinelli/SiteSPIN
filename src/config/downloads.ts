export const COMPANY_CONTACT = {
  name: 'SPIN - Software Prático e Inteligente',
  slogan: 'Tecnologia direta ao ponto: gestão rápida, segura e sem complicação para o seu negócio.',
  email: 'spinsoftwareinteligente@gmail.com',
  mailtoCommercial: 'mailto:spinsoftwareinteligente@gmail.com?subject=Contato%20Comercial%20-%20SPIN%20Software',
  mailtoSupportPdv: 'mailto:spinsoftwareinteligente@gmail.com?subject=Suporte%20PDV%20SPIN',
  mailtoSupportClinica: 'mailto:spinsoftwareinteligente@gmail.com?subject=Suporte%20Cl%C3%ADnica%20SPIN',
};

export interface DownloadItem {
  id: string;
  name: string;
  softwareName: string;
  category: 'software' | 'manual';
  version: string;
  os: 'Windows' | 'macOS' | 'Linux' | 'Multiplataforma';
  filename: string;
  url: string;
  sizeBytes: number;
  sizeFormatted: string;
  releaseDate: string;
  description: string;
}

export const DOWNLOADS_DATA = {
  pdv: {
    name: 'PDV SPIN Gestão Comercial',
    version: '1.0',
    manual: {
      title: 'Manual Oficial do Usuário & Guia de Operação (PDV SPIN)',
      filename: 'manual-pdv-spin.pdf',
      url: '/downloads/manuais/manual-pdv-spin.pdf',
      onlineUrl: '/manuais/pdv-spin',
      sizeBytes: 2590672,
      sizeFormatted: '2.5 MB',
      pages: 20,
      description: 'Guia completo passo a passo ilustrado com operação do caixa, estoque, crediário e backup.',
    },
    packages: [
      {
        id: 'pdv-win',
        name: 'PDV SPIN Gestão Comercial para Windows',
        softwareName: 'PDV SPIN',
        category: 'software' as const,
        version: '1.0',
        os: 'Windows' as const,
        compatibility: 'Windows 10, Windows 11 (64-bit)',
        filename: 'PDV-Spin-Gestao-Comercial-Windows.zip',
        url: '/downloads/softwares/PDV-Spin-Gestao-Comercial-Windows.zip',
        sizeBytes: 7364881,
        sizeFormatted: '7.0 MB',
        releaseDate: 'Outubro / 2026',
        description: 'Pacote completo contendo pdvspin.exe e instalador automático de atalho na Área de Trabalho.',
      },
      {
        id: 'pdv-mac',
        name: 'PDV SPIN Gestão Comercial para macOS',
        softwareName: 'PDV SPIN',
        category: 'software' as const,
        version: '1.0',
        os: 'macOS' as const,
        compatibility: 'macOS 11+ (Intel & Apple Silicon)',
        filename: 'PDV-Spin-macOS.zip',
        url: '/downloads/softwares/PDV-Spin-macOS.zip',
        sizeBytes: 6533762,
        sizeFormatted: '6.2 MB',
        releaseDate: 'Outubro / 2026',
        description: 'Pacote otimizado para sistemas Apple macOS.',
      },
    ],
  },
  clinica: {
    name: 'Clínica SPIN Gestão Inteligente',
    version: '1.0.0 Oficial Definitiva',
    manual: {
      title: 'Manual do Usuário & Guia de Implantação (Clínica SPIN)',
      filename: 'manual-clinica-spin.pdf',
      url: '/downloads/manuais/manual-clinica-spin.pdf',
      onlineUrl: '/manuais/clinica-spin',
      sizeBytes: 2098562,
      sizeFormatted: '2.0 MB',
      pages: 15,
      description: 'Guia oficial para médicos, dentistas, terapeutas e recepção. Inclui rede local e LGPD.',
    },
    packages: [
      {
        id: 'clinica-win',
        name: 'Clínica SPIN Setup Oficial para Windows',
        softwareName: 'Clínica SPIN',
        category: 'software' as const,
        version: '1.0.0',
        os: 'Windows' as const,
        compatibility: 'Windows 10, Windows 11',
        filename: 'Clinica-Spin-Setup-1.0.0.exe',
        url: '/downloads/softwares/Clinica-Spin-Setup-1.0.0.exe',
        sizeBytes: 91438237,
        sizeFormatted: '87.2 MB',
        releaseDate: 'Outubro / 2026',
        description: 'Instalador completo autônomo com suporte a rede local (Médico + Secretária).',
      },
    ],
  },
};
