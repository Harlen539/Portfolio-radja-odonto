export const caseFilters = [
  'Todos',
  'Documentação',
  'Radiografia',
  'Estética',
  'Prevenção',
]

export const clinicalCases = [
  {
    id: 'documentacao-clinica',
    category: 'Registro acadêmico',
    title: 'Documentação clínica',
    description:
      'Registro fotográfico intra e extraoral para acompanhamento visual, diagnóstico inicial e evolução do caso.',
    tag: 'Acadêmico',
    filter: 'Documentação',
    about:
      'Registro completo do caso com fotos intra e extraorais para acompanhamento visual e evolução clínica. Material utilizado para estudo acadêmico e discussão orientada.',
    patients: [
      {
        id: 'paciente-a',
        name: 'Paciente A',
        age: '24 anos',
        complaint: 'Avaliação estética do sorriso',
        observation: 'Desarmonia visual e necessidade de registro inicial.',
        conduct: 'Fotos intra e extraorais padronizadas.',
        completed: 'Organização dos registros e análise acadêmica.',
        result: 'Acompanhamento evolutivo e padronização fotográfica.',
        photos: [
          { id: 'frontal', label: 'Vista frontal', visual: 'documentation' },
          { id: 'oclusal', label: 'Vista oclusal', visual: 'occlusal' },
          { id: 'perfil', label: 'Perfil', visual: 'profile' },
          { id: 'lateral', label: 'Lateral', visual: 'aesthetic' },
          { id: 'detalhe', label: 'Detalhe', visual: 'documentation' },
        ],
      },
      {
        id: 'paciente-b',
        name: 'Paciente B',
        age: '31 anos',
        complaint: 'Avaliação de alinhamento anterior',
        observation: 'Apinhamento leve em região anterior superior.',
        conduct: 'Registro fotográfico e planejamento orientado.',
        completed: 'Comparação das vistas frontal e laterais.',
        result: 'Documentação organizada para acompanhamento.',
        photos: [
          { id: 'frontal', label: 'Vista frontal', visual: 'aesthetic' },
          { id: 'oclusal', label: 'Arcada superior', visual: 'occlusal' },
          { id: 'sorriso', label: 'Sorriso', visual: 'smile' },
          { id: 'perfil', label: 'Perfil', visual: 'profile' },
        ],
      },
      {
        id: 'paciente-c',
        name: 'Paciente C',
        age: '27 anos',
        complaint: 'Registro inicial preventivo',
        observation: 'Avaliação visual para controle periódico.',
        conduct: 'Fotografias clínicas e orientações preventivas.',
        completed: 'Catalogação das imagens iniciais.',
        result: 'Base visual para reavaliações futuras.',
        photos: [
          { id: 'frontal', label: 'Sorriso', visual: 'smile' },
          { id: 'detalhe', label: 'Detalhe', visual: 'documentation' },
          { id: 'oclusal', label: 'Arcada', visual: 'occlusal' },
        ],
      },
    ],
  },
  {
    id: 'estudo-radiografico',
    category: 'Análise orientada',
    title: 'Estudo radiográfico',
    description:
      'Análise estrutural e interpretação acadêmica inicial de condições ósseas e dentárias.',
    tag: 'Radiografia',
    filter: 'Radiografia',
    about:
      'Documentação de imagens radiográficas utilizada em análise orientada, com cuidado ético e sem finalidade diagnóstica pública.',
    patients: [
      {
        id: 'paciente-a',
        name: 'Paciente A',
        age: '29 anos',
        complaint: 'Investigação de desconforto posterior',
        observation: 'Necessidade de avaliação complementar de estruturas.',
        conduct: 'Radiografia panorâmica para estudo.',
        completed: 'Leitura técnica orientada dos achados.',
        result: 'Aprimoramento da percepção radiográfica.',
        photos: [
          { id: 'panoramica', label: 'Panorâmica', visual: 'xray' },
          { id: 'detalhe', label: 'Detalhe', visual: 'xray-detail' },
          { id: 'registro', label: 'Registro clínico', visual: 'documentation' },
        ],
      },
      {
        id: 'paciente-b',
        name: 'Paciente B',
        age: '36 anos',
        complaint: 'Planejamento de acompanhamento',
        observation: 'Imagem solicitada para comparação evolutiva.',
        conduct: 'Registro e análise radiográfica.',
        completed: 'Organização cronológica das imagens.',
        result: 'Acompanhamento documentado com responsabilidade.',
        photos: [
          { id: 'panoramica', label: 'Panorâmica', visual: 'xray' },
          { id: 'foco', label: 'Região posterior', visual: 'xray-detail' },
        ],
      },
    ],
  },
  {
    id: 'planejamento-estetico',
    category: 'Antes e depois',
    title: 'Planejamento estético',
    description:
      'Análise da harmonia do sorriso com documentação de planejamento e evolução visual.',
    tag: 'Demonstrativo',
    filter: 'Estética',
    about:
      'Galeria demonstrativa para estudar proporção, harmonia e planejamento visual do sorriso respeitando a individualidade.',
    patients: [
      {
        id: 'paciente-a',
        name: 'Paciente A',
        age: '22 anos',
        complaint: 'Harmonia do sorriso',
        observation: 'Assimetria percebida na linha do sorriso.',
        conduct: 'Planejamento estético fotográfico.',
        completed: 'Mapeamento visual para discussão acadêmica.',
        result: 'Análise comparativa da evolução estética.',
        photos: [
          { id: 'antes', label: 'Inicial', visual: 'aesthetic' },
          { id: 'sorriso', label: 'Sorriso', visual: 'smile' },
          { id: 'perfil', label: 'Perfil', visual: 'profile' },
          { id: 'evolucao', label: 'Evolução', visual: 'documentation' },
        ],
      },
      {
        id: 'paciente-b',
        name: 'Paciente B',
        age: '33 anos',
        complaint: 'Avaliação de proporções',
        observation: 'Necessidade de documentação do sorriso.',
        conduct: 'Fotos comparativas padronizadas.',
        completed: 'Estudo das referências estéticas.',
        result: 'Material demonstrativo para acompanhamento.',
        photos: [
          { id: 'sorriso', label: 'Sorriso', visual: 'smile' },
          { id: 'frontal', label: 'Frontal', visual: 'aesthetic' },
          { id: 'perfil', label: 'Perfil', visual: 'profile' },
        ],
      },
    ],
  },
  {
    id: 'prevencao-odontologica',
    category: 'Saúde bucal',
    title: 'Prevenção odontológica',
    description:
      'Cuidados preventivos, orientações diárias e acompanhamento acadêmico da saúde bucal.',
    tag: 'Prevenção',
    filter: 'Prevenção',
    about:
      'Registros educativos para demonstrar cuidados preventivos e a importância do acompanhamento contínuo em saúde bucal.',
    patients: [
      {
        id: 'paciente-a',
        name: 'Paciente A',
        age: '19 anos',
        complaint: 'Orientação de higiene oral',
        observation: 'Necessidade de reforço em cuidados diários.',
        conduct: 'Educação preventiva e registro inicial.',
        completed: 'Orientação personalizada de rotina.',
        result: 'Acompanhamento planejado de saúde bucal.',
        photos: [
          { id: 'orientacao', label: 'Orientação', visual: 'prevention' },
          { id: 'registro', label: 'Registro', visual: 'documentation' },
          { id: 'detalhe', label: 'Detalhe', visual: 'smile' },
        ],
      },
      {
        id: 'paciente-b',
        name: 'Paciente B',
        age: '42 anos',
        complaint: 'Controle preventivo periódico',
        observation: 'Consulta de manutenção e educação em saúde.',
        conduct: 'Acompanhamento fotográfico simplificado.',
        completed: 'Comparação com registros anteriores.',
        result: 'Continuidade do cuidado preventivo.',
        photos: [
          { id: 'inicial', label: 'Inicial', visual: 'prevention' },
          { id: 'sorriso', label: 'Sorriso', visual: 'smile' },
        ],
      },
    ],
  },
]
