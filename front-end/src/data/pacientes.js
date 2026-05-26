import capaDocumentacao from '../assets/cases/documentacao-registro.jpg'
import capaEstetica from '../assets/cases/estetica-consulta.jpg'
import capaPrevencao from '../assets/cases/prevencao-orientacao.jpg'
import capaRadiografia from '../assets/cases/radiografia-panoramica.jpg'
import pacienteAComparacaoEstetica from '../assets/cases/paciente-a/antes-e-depois-do-sorriso-perfeito.png'
import pacienteAArcadaInferior from '../assets/cases/paciente-a/exame-clinico-arco-dentario-inferior.png'
import pacienteAIntraoralFrontal from '../assets/cases/paciente-a/foto-clinica-intraoral-detalhada.png'
import pacienteAOrientacaoPreventiva from '../assets/cases/paciente-a/orientacao-preventiva-no-consultorio.png'
import pacienteARadiografiaBiteWing from '../assets/cases/paciente-a/radiografia-bite-wing.png'
import pacienteARadiografiaLateral from '../assets/cases/paciente-a/radiografia-cefalometrica-lateral.png'
import pacienteARadiografiaPanoramica from '../assets/cases/paciente-a/radiografia-panoramica.png'
import pacienteAArcadaSuperior from '../assets/cases/paciente-a/visao-clinica-cavidade-oral-superior.png'
import pacienteBAntesDepois from '../assets/cases/paciente-b/avaliacao-estetica/paciente-b-antes-depois-sorriso.png'
import pacienteBRadiografiaBitewing from '../assets/cases/paciente-b/imagem-complementar/paciente-b-radiografia-bitewing.png'
import pacienteBRadiografiaLateral from '../assets/cases/paciente-b/imagem-complementar/paciente-b-radiografia-lateral.png'
import pacienteBRadiografiaPanoramica from '../assets/cases/paciente-b/imagem-complementar/paciente-b-radiografia-panoramica.png'
import pacienteBOrientacaoOrtodontica from '../assets/cases/paciente-b/orientacao-saude-bucal/paciente-b-orientacao-ortodontica.png'
import pacienteBArcadaInferior from '../assets/cases/paciente-b/registro-clinico/paciente-b-arcada-inferior.png'
import pacienteBArcadaSuperior from '../assets/cases/paciente-b/registro-clinico/paciente-b-arcada-superior.png'
import pacienteBIntraoralFrontal from '../assets/cases/paciente-b/registro-clinico/paciente-b-intraoral-frontal.png'

export const caseFilters = [
  'Todos',
  'Documentação',
  'Radiografia',
  'Estética',
  'Prevenção',
]

export const caseCards = [
  {
    key: 'registroClinico',
    filtro: 'Documentação',
    categoria: 'Documentação clínica',
    titulo: 'Registro clínico inicial',
    subtitulo: 'Registro acadêmico',
    descricaoCurta:
      'Registro fotográfico intraoral para acompanhamento visual, diagnóstico inicial e evolução do caso.',
    capa: capaDocumentacao,
  },
  {
    key: 'avaliacaoEstetica',
    filtro: 'Estética',
    categoria: 'Planejamento estético',
    titulo: 'Avaliação estética do sorriso',
    subtitulo: 'Antes e depois',
    descricaoCurta:
      'Análise da harmonia do sorriso com comparação visual e planejamento inicial.',
    capa: capaEstetica,
  },
  {
    key: 'imagemComplementar',
    filtro: 'Radiografia',
    categoria: 'Estudo radiográfico',
    titulo: 'Avaliação complementar de imagem',
    subtitulo: 'Análise orientada',
    descricaoCurta:
      'Análise estrutural e interpretação acadêmica de exames complementares.',
    capa: capaRadiografia,
  },
  {
    key: 'orientacaoSaudeBucal',
    filtro: 'Prevenção',
    categoria: 'Prevenção odontológica',
    titulo: 'Orientação em saúde bucal',
    subtitulo: 'Educação preventiva',
    descricaoCurta:
      'Orientação de higiene oral e cuidados preventivos em ambiente clínico.',
    capa: capaPrevencao,
  },
]

export const pacientes = [
  {
    id: 'paciente-a',
    nome: 'Paciente A',
    idade: '24 anos',
    casos: {
      registroClinico: {
        categoria: 'Registro acadêmico',
        titulo: 'Registro clínico inicial',
        descricaoCurta:
          'Registro fotográfico intraoral para acompanhamento visual, diagnóstico inicial e evolução do caso.',
        queixaPrincipal:
          'Insatisfação leve com a harmonia do sorriso e desejo de avaliação estética inicial.',
        causaObservacaoInicial:
          'Discreta desarmonia visual anterior e necessidade de documentação fotográfica padronizada.',
        condutaRealizada:
          'Fotografias intraorais frontal e das arcadas superior e inferior.',
        oQueFoiFeito:
          'Organização dos registros, análise visual do sorriso e documentação acadêmica inicial.',
        resultadoAprendizado:
          'Compreensão da importância da documentação no diagnóstico e acompanhamento evolutivo.',
        observacaoAcademica:
          'Registro do Paciente A utilizado para estudo de documentação odontológica e padronização de imagens clínicas.',
        imagens: [
          {
            src: pacienteAIntraoralFrontal,
            alt: 'Fotografia intraoral frontal do Paciente A',
            label: 'Fotografia intraoral frontal',
          },
          {
            src: pacienteAArcadaSuperior,
            alt: 'Fotografia da arcada superior do Paciente A',
            label: 'Arcada superior',
          },
          {
            src: pacienteAArcadaInferior,
            alt: 'Fotografia da arcada inferior do Paciente A',
            label: 'Arcada inferior',
          },
        ],
        dadosClinicos: {
          tipoDeRegistro: 'Fotografias intraorais',
          finalidade: 'Diagnóstico inicial e acompanhamento visual',
          areaDeEstudo: 'Documentação clínica odontológica',
          nivelDoCaso: 'Acadêmico / introdutório',
          status: 'Registro inicial concluído',
        },
        tags: ['Documentação clínica', 'Fotografia intraoral', 'Avaliação inicial'],
      },
      avaliacaoEstetica: {
        categoria: 'Antes e depois',
        titulo: 'Avaliação estética do sorriso',
        descricaoCurta:
          'Comparação estética ilustrativa do sorriso para discussão de planejamento inicial.',
        queixaPrincipal:
          'Incômodo com a coloração dos dentes e desejo de compreender possibilidades estéticas.',
        causaObservacaoInicial:
          'Variação de tonalidade percebida no sorriso, avaliada em registro comparativo demonstrativo.',
        condutaRealizada:
          'Análise visual comparativa da tonalidade e harmonia anterior do sorriso.',
        oQueFoiFeito:
          'Orientação sobre planejamento estético e avaliação da comunicação visual de resultados.',
        resultadoAprendizado:
          'Estudo da percepção de cor e da importância de alinhar expectativa estética.',
        observacaoAcademica:
          'Comparação ilustrativa associada ao Paciente A, sem representar tratamento realizado.',
        imagens: [
          {
            src: pacienteAComparacaoEstetica,
            alt: 'Comparação estética ilustrativa do sorriso do Paciente A',
            label: 'Comparação estética ilustrativa',
          },
        ],
        dadosClinicos: {
          tipoDeRegistro: 'Sorriso comparativo ilustrativo',
          finalidade: 'Planejamento estético e análise visual',
          areaDeEstudo: 'Estética odontológica',
          nivelDoCaso: 'Acadêmico / introdutório',
          status: 'Planejamento demonstrativo',
        },
        tags: ['Planejamento estético', 'Comparação visual', 'Harmonia dental'],
      },
      imagemComplementar: {
        categoria: 'Análise orientada',
        titulo: 'Avaliação complementar de imagem',
        descricaoCurta:
          'Análise acadêmica de radiografia panorâmica e imagens complementares do mesmo prontuário.',
        queixaPrincipal:
          'Necessidade de avaliação complementar para apoiar o planejamento clínico inicial.',
        causaObservacaoInicial:
          'Indicação acadêmica de observação estrutural dentária e relação maxilomandibular.',
        condutaRealizada:
          'Seleção de radiografia panorâmica, bite-wing e cefalometria lateral.',
        oQueFoiFeito:
          'Observação das estruturas dentárias, regiões posteriores e referências cefalométricas.',
        resultadoAprendizado:
          'Entendimento da contribuição dos exames complementares para correlacionar registros clínicos.',
        observacaoAcademica:
          'Imagens radiográficas ilustrativas vinculadas ao estudo acadêmico do Paciente A, sem diagnóstico público.',
        imagens: [
          {
            src: pacienteARadiografiaPanoramica,
            alt: 'Radiografia panorâmica do Paciente A',
            label: 'Radiografia panorâmica',
          },
          {
            src: pacienteARadiografiaBiteWing,
            alt: 'Radiografia bite-wing do Paciente A',
            label: 'Radiografia bite-wing',
          },
          {
            src: pacienteARadiografiaLateral,
            alt: 'Radiografia lateral cefalométrica do Paciente A',
            label: 'Cefalometria lateral',
          },
        ],
        dadosClinicos: {
          tipoDeRegistro: 'Panorâmica e radiografias complementares',
          finalidade: 'Análise estrutural orientada',
          areaDeEstudo: 'Radiologia odontológica',
          nivelDoCaso: 'Acadêmico / introdutório',
          status: 'Estudo de imagem concluído',
        },
        tags: ['Radiografia', 'Panorâmica', 'Bite-wing'],
      },
      orientacaoSaudeBucal: {
        categoria: 'Educação preventiva',
        titulo: 'Orientação em saúde bucal',
        descricaoCurta:
          'Orientação de higiene oral e acompanhamento preventivo integrados ao caso acadêmico.',
        queixaPrincipal:
          'Dúvidas sobre técnica correta de escovação e manutenção diária da saúde bucal.',
        causaObservacaoInicial:
          'Necessidade de educação preventiva integrada ao acompanhamento do mesmo paciente.',
        condutaRealizada:
          'Demonstração de escovação em modelo didático e orientações de rotina.',
        oQueFoiFeito:
          'Educação em saúde bucal e reforço das medidas de prevenção.',
        resultadoAprendizado:
          'Valorização da prevenção como parte do acompanhamento clínico.',
        observacaoAcademica:
          'Cena ilustrativa de orientação preventiva referente ao acompanhamento acadêmico do Paciente A.',
        imagens: [
          {
            src: pacienteAOrientacaoPreventiva,
            alt: 'Orientação preventiva referente ao Paciente A',
            label: 'Orientação preventiva',
          },
        ],
        dadosClinicos: {
          tipoDeRegistro: 'Orientação clínica demonstrativa',
          finalidade: 'Educação e prevenção',
          areaDeEstudo: 'Promoção de saúde bucal',
          nivelDoCaso: 'Acadêmico / introdutório',
          status: 'Orientação registrada',
        },
        tags: ['Prevenção', 'Higiene bucal', 'Educação em saúde'],
      },
    },
  },
  {
    id: 'paciente-b',
    nome: 'Paciente B',
    idade: '22 anos',
    casos: {
      registroClinico: {
        categoria: 'Registro acadêmico',
        titulo: 'Registro clínico ortodôntico inicial',
        descricaoCurta:
          'Registro intraoral do Paciente B com foco em apinhamento dentário e avaliação inicial de alinhamento.',
        queixaPrincipal:
          'Incômodo com dentes desalinhados e dificuldade de higienização em algumas regiões.',
        causaObservacaoInicial:
          'Apinhamento dentário anterior, principalmente na região inferior, com necessidade de avaliação ortodôntica inicial.',
        condutaRealizada:
          'Registro fotográfico intraoral frontal e das arcadas para documentação inicial do caso.',
        oQueFoiFeito:
          'Análise visual do alinhamento dentário, das arcadas e da relação oclusal inicial.',
        resultadoAprendizado:
          'Estudo do apinhamento dentário, documentação ortodôntica e planejamento inicial.',
        observacaoAcademica:
          'Caso do Paciente B voltado à documentação ortodôntica inicial e ao estudo de apinhamento dentário.',
        imagens: [
          {
            src: pacienteBIntraoralFrontal,
            alt: 'Fotografia intraoral frontal do Paciente B com apinhamento dentário',
            label: 'Intraoral frontal',
          },
          {
            src: pacienteBArcadaSuperior,
            alt: 'Fotografia da arcada superior do Paciente B',
            label: 'Arcada superior',
          },
          {
            src: pacienteBArcadaInferior,
            alt: 'Fotografia da arcada inferior do Paciente B',
            label: 'Arcada inferior',
          },
        ],
        dadosClinicos: {
          tipoDeRegistro: 'Fotografias intraorais ortodônticas',
          finalidade: 'Avaliação de alinhamento e documentação inicial',
          areaDeEstudo: 'Ortodontia preventiva / interceptativa',
          nivelDoCaso: 'Acadêmico / intermediário',
          status: 'Registro ortodôntico inicial',
        },
        tags: ['Documentação clínica', 'Apinhamento', 'Avaliação ortodôntica'],
      },
      avaliacaoEstetica: {
        categoria: 'Antes e depois',
        titulo: 'Avaliação estética ortodôntica',
        descricaoCurta:
          'Comparação visual ilustrativa do sorriso do Paciente B para discussão de alinhamento e harmonia dental.',
        queixaPrincipal:
          'Incômodo com o alinhamento dos dentes anteriores e a aparência do sorriso.',
        causaObservacaoInicial:
          'Desarmonia estética relacionada ao posicionamento dos dentes anteriores.',
        condutaRealizada:
          'Comparação visual ilustrativa para estudo de planejamento estético e ortodôntico.',
        oQueFoiFeito:
          'Avaliação da linha do sorriso e do possível impacto do alinhamento na estética.',
        resultadoAprendizado:
          'Compreensão da relação entre alinhamento dentário, estética facial e expectativa do paciente.',
        observacaoAcademica:
          'Comparação ilustrativa do Paciente B utilizada para estudo de harmonia dental e alinhamento.',
        imagens: [
          {
            src: pacienteBAntesDepois,
            alt: 'Antes e depois ilustrativo do sorriso do Paciente B',
            label: 'Antes e depois ilustrativo',
          },
        ],
        dadosClinicos: {
          tipoDeRegistro: 'Sorriso comparativo ilustrativo',
          finalidade: 'Planejamento estético e ortodôntico',
          areaDeEstudo: 'Estética odontológica e ortodontia',
          nivelDoCaso: 'Acadêmico / intermediário',
          status: 'Comparação registrada',
        },
        tags: ['Comparação visual', 'Alinhamento dental', 'Harmonia do sorriso'],
      },
      imagemComplementar: {
        categoria: 'Análise orientada',
        titulo: 'Avaliação complementar ortodôntica',
        descricaoCurta:
          'Radiografias complementares do Paciente B utilizadas para avaliação estrutural e planejamento inicial.',
        queixaPrincipal:
          'Necessidade de avaliação complementar para análise de posicionamento dentário.',
        causaObservacaoInicial:
          'Indicação acadêmica de exames complementares para observar estruturas dentárias e relação maxilomandibular.',
        condutaRealizada:
          'Seleção de radiografia panorâmica, bite-wing e lateral para compor o estudo do caso.',
        oQueFoiFeito:
          'Observação das estruturas dentárias, raízes, regiões posteriores e referências cefalométricas.',
        resultadoAprendizado:
          'Entendimento da importância dos exames complementares no planejamento ortodôntico.',
        observacaoAcademica:
          'Imagens complementares do Paciente B vinculadas ao estudo acadêmico de alinhamento e ortodontia.',
        imagens: [
          {
            src: pacienteBRadiografiaPanoramica,
            alt: 'Radiografia panorâmica do Paciente B',
            label: 'Radiografia panorâmica',
          },
          {
            src: pacienteBRadiografiaBitewing,
            alt: 'Radiografia bite-wing do Paciente B',
            label: 'Radiografia bite-wing',
          },
          {
            src: pacienteBRadiografiaLateral,
            alt: 'Radiografia lateral cefalométrica do Paciente B',
            label: 'Radiografia lateral',
          },
        ],
        dadosClinicos: {
          tipoDeRegistro: 'Radiografias complementares',
          finalidade: 'Análise estrutural orientada',
          areaDeEstudo: 'Radiologia odontológica e ortodontia',
          nivelDoCaso: 'Acadêmico / intermediário',
          status: 'Estudo radiográfico registrado',
        },
        tags: ['Radiografia', 'Panorâmica', 'Bite-wing', 'Cefalometria'],
      },
      orientacaoSaudeBucal: {
        categoria: 'Educação preventiva',
        titulo: 'Orientação de higiene com aparelho',
        descricaoCurta:
          'Orientação demonstrativa para o Paciente B sobre higiene bucal em contexto ortodôntico.',
        queixaPrincipal:
          'Dúvidas sobre higiene bucal adequada durante acompanhamento ortodôntico.',
        causaObservacaoInicial:
          'Necessidade de reforçar escovação, uso de escova interdental e limpeza de áreas de difícil acesso.',
        condutaRealizada:
          'Demonstração prática em modelo odontológico com aparelho e orientação de rotina preventiva.',
        oQueFoiFeito:
          'Educação em saúde bucal e explicação de cuidados preventivos durante o uso de aparelho.',
        resultadoAprendizado:
          'Valorização da prevenção como parte essencial do acompanhamento ortodôntico.',
        observacaoAcademica:
          'Orientação ilustrativa do Paciente B sobre higiene oral em contexto ortodôntico.',
        imagens: [
          {
            src: pacienteBOrientacaoOrtodontica,
            alt: 'Orientação de higiene bucal com aparelho para o Paciente B',
            label: 'Orientação de higiene com aparelho',
          },
        ],
        dadosClinicos: {
          tipoDeRegistro: 'Orientação clínica demonstrativa',
          finalidade: 'Educação em saúde e prevenção',
          areaDeEstudo: 'Promoção de saúde bucal e ortodontia',
          nivelDoCaso: 'Acadêmico / introdutório',
          status: 'Orientação registrada',
        },
        tags: ['Prevenção', 'Higiene bucal', 'Ortodontia', 'Educação em saúde'],
      },
    },
  },
]

const englishClinicalText = {
  Todos: 'All',
  Documentação: 'Documentation',
  Radiografia: 'Radiography',
  Estética: 'Aesthetics',
  Prevenção: 'Prevention',
  'Documentação clínica': 'Clinical documentation',
  'Registro clínico inicial': 'Initial clinical record',
  'Registro acadêmico': 'Academic record',
  'Registro fotográfico intraoral para acompanhamento visual, diagnóstico inicial e evolução do caso.':
    'Intraoral photographic record for visual monitoring, initial diagnosis, and case progress.',
  'Planejamento estético': 'Aesthetic planning',
  'Avaliação estética do sorriso': 'Aesthetic smile evaluation',
  'Antes e depois': 'Before and after',
  'Análise da harmonia do sorriso com comparação visual e planejamento inicial.':
    'Analysis of smile harmony with visual comparison and initial planning.',
  'Estudo radiográfico': 'Radiographic study',
  'Avaliação complementar de imagem': 'Complementary imaging assessment',
  'Análise orientada': 'Guided analysis',
  'Análise estrutural e interpretação acadêmica de exames complementares.':
    'Structural analysis and academic interpretation of complementary examinations.',
  'Prevenção odontológica': 'Dental prevention',
  'Orientação em saúde bucal': 'Oral health guidance',
  'Educação preventiva': 'Preventive education',
  'Orientação de higiene oral e cuidados preventivos em ambiente clínico.':
    'Oral hygiene guidance and preventive care in a clinical environment.',
  'Paciente A': 'Patient A',
  'Paciente B': 'Patient B',
  '24 anos': '24 years old',
  '22 anos': '22 years old',
  'Insatisfação leve com a harmonia do sorriso e desejo de avaliação estética inicial.':
    'Mild dissatisfaction with smile harmony and desire for an initial aesthetic evaluation.',
  'Discreta desarmonia visual anterior e necessidade de documentação fotográfica padronizada.':
    'Subtle anterior visual disharmony and need for standardized photographic documentation.',
  'Fotografias intraorais frontal e das arcadas superior e inferior.':
    'Frontal intraoral photographs and upper and lower arch photographs.',
  'Organização dos registros, análise visual do sorriso e documentação acadêmica inicial.':
    'Organization of records, visual smile analysis, and initial academic documentation.',
  'Compreensão da importância da documentação no diagnóstico e acompanhamento evolutivo.':
    'Understanding the importance of documentation in diagnosis and progress monitoring.',
  'Registro do Paciente A utilizado para estudo de documentação odontológica e padronização de imagens clínicas.':
    'Patient A record used to study dental documentation and standardization of clinical images.',
  'Fotografia intraoral frontal do Paciente A':
    'Frontal intraoral photograph of Patient A',
  'Fotografia intraoral frontal': 'Frontal intraoral photograph',
  'Fotografia da arcada superior do Paciente A': 'Photograph of Patient A upper arch',
  'Fotografia da arcada inferior do Paciente A': 'Photograph of Patient A lower arch',
  'Arcada superior': 'Upper arch',
  'Arcada inferior': 'Lower arch',
  'Fotografias intraorais': 'Intraoral photographs',
  'Diagnóstico inicial e acompanhamento visual': 'Initial diagnosis and visual monitoring',
  'Documentação clínica odontológica': 'Clinical dental documentation',
  'Acadêmico / introdutório': 'Academic / introductory',
  'Registro inicial concluído': 'Initial record completed',
  'Fotografia intraoral': 'Intraoral photography',
  'Avaliação inicial': 'Initial evaluation',
  'Comparação estética ilustrativa do sorriso para discussão de planejamento inicial.':
    'Illustrative aesthetic smile comparison for discussion of initial planning.',
  'Incômodo com a coloração dos dentes e desejo de compreender possibilidades estéticas.':
    'Concern about tooth color and desire to understand aesthetic possibilities.',
  'Variação de tonalidade percebida no sorriso, avaliada em registro comparativo demonstrativo.':
    'Shade variation perceived in the smile, evaluated in a demonstrative comparative record.',
  'Análise visual comparativa da tonalidade e harmonia anterior do sorriso.':
    'Comparative visual analysis of shade and anterior smile harmony.',
  'Orientação sobre planejamento estético e avaliação da comunicação visual de resultados.':
    'Guidance on aesthetic planning and assessment of visual communication of results.',
  'Estudo da percepção de cor e da importância de alinhar expectativa estética.':
    'Study of color perception and the importance of aligning aesthetic expectations.',
  'Comparação ilustrativa associada ao Paciente A, sem representar tratamento realizado.':
    'Illustrative comparison associated with Patient A, without representing treatment performed.',
  'Comparação estética ilustrativa do sorriso do Paciente A':
    'Illustrative aesthetic comparison of Patient A smile',
  'Comparação estética ilustrativa': 'Illustrative aesthetic comparison',
  'Sorriso comparativo ilustrativo': 'Illustrative smile comparison',
  'Planejamento estético e análise visual': 'Aesthetic planning and visual analysis',
  'Estética odontológica': 'Dental aesthetics',
  'Planejamento demonstrativo': 'Demonstrative planning',
  'Comparação visual': 'Visual comparison',
  'Harmonia dental': 'Dental harmony',
  'Análise acadêmica de radiografia panorâmica e imagens complementares do mesmo prontuário.':
    'Academic analysis of panoramic radiography and complementary images from the same record.',
  'Necessidade de avaliação complementar para apoiar o planejamento clínico inicial.':
    'Need for a complementary evaluation to support initial clinical planning.',
  'Indicação acadêmica de observação estrutural dentária e relação maxilomandibular.':
    'Academic indication for observation of dental structures and maxillomandibular relationship.',
  'Seleção de radiografia panorâmica, bite-wing e cefalometria lateral.':
    'Selection of panoramic, bite-wing, and lateral cephalometric radiographs.',
  'Observação das estruturas dentárias, regiões posteriores e referências cefalométricas.':
    'Observation of dental structures, posterior regions, and cephalometric references.',
  'Entendimento da contribuição dos exames complementares para correlacionar registros clínicos.':
    'Understanding how complementary exams contribute to correlating clinical records.',
  'Imagens radiográficas ilustrativas vinculadas ao estudo acadêmico do Paciente A, sem diagnóstico público.':
    'Illustrative radiographic images linked to Patient A academic study, without public diagnosis.',
  'Radiografia panorâmica do Paciente A': 'Panoramic radiograph of Patient A',
  'Radiografia panorâmica': 'Panoramic radiograph',
  'Radiografia bite-wing do Paciente A': 'Bite-wing radiograph of Patient A',
  'Radiografia bite-wing': 'Bite-wing radiograph',
  'Radiografia lateral cefalométrica do Paciente A':
    'Lateral cephalometric radiograph of Patient A',
  'Cefalometria lateral': 'Lateral cephalometry',
  'Panorâmica e radiografias complementares': 'Panoramic and complementary radiographs',
  'Análise estrutural orientada': 'Guided structural analysis',
  'Radiologia odontológica': 'Dental radiology',
  'Estudo de imagem concluído': 'Imaging study completed',
  Panorâmica: 'Panoramic',
  'Orientação de higiene oral e acompanhamento preventivo integrados ao caso acadêmico.':
    'Oral hygiene guidance and preventive follow-up integrated into the academic case.',
  'Dúvidas sobre técnica correta de escovação e manutenção diária da saúde bucal.':
    'Questions about correct brushing technique and daily oral health maintenance.',
  'Necessidade de educação preventiva integrada ao acompanhamento do mesmo paciente.':
    'Need for preventive education integrated into follow-up for the same patient.',
  'Demonstração de escovação em modelo didático e orientações de rotina.':
    'Brushing demonstration on a teaching model and routine guidance.',
  'Educação em saúde bucal e reforço das medidas de prevenção.':
    'Oral health education and reinforcement of preventive measures.',
  'Valorização da prevenção como parte do acompanhamento clínico.':
    'Recognition of prevention as part of clinical follow-up.',
  'Cena ilustrativa de orientação preventiva referente ao acompanhamento acadêmico do Paciente A.':
    'Illustrative preventive guidance scene related to Patient A academic follow-up.',
  'Orientação preventiva referente ao Paciente A': 'Preventive guidance for Patient A',
  'Orientação preventiva': 'Preventive guidance',
  'Orientação clínica demonstrativa': 'Demonstrative clinical guidance',
  'Educação e prevenção': 'Education and prevention',
  'Promoção de saúde bucal': 'Oral health promotion',
  'Orientação registrada': 'Guidance recorded',
  'Higiene bucal': 'Oral hygiene',
  'Educação em saúde': 'Health education',
  'Registro clínico ortodôntico inicial': 'Initial orthodontic clinical record',
  'Registro intraoral do Paciente B com foco em apinhamento dentário e avaliação inicial de alinhamento.':
    'Intraoral record of Patient B focused on dental crowding and initial alignment assessment.',
  'Incômodo com dentes desalinhados e dificuldade de higienização em algumas regiões.':
    'Concern about misaligned teeth and difficulty cleaning certain areas.',
  'Apinhamento dentário anterior, principalmente na região inferior, com necessidade de avaliação ortodôntica inicial.':
    'Anterior dental crowding, particularly in the lower region, requiring initial orthodontic assessment.',
  'Registro fotográfico intraoral frontal e das arcadas para documentação inicial do caso.':
    'Frontal intraoral and arch photographic record for initial case documentation.',
  'Análise visual do alinhamento dentário, das arcadas e da relação oclusal inicial.':
    'Visual analysis of tooth alignment, arches, and initial occlusal relationship.',
  'Estudo do apinhamento dentário, documentação ortodôntica e planejamento inicial.':
    'Study of dental crowding, orthodontic documentation, and initial planning.',
  'Caso do Paciente B voltado à documentação ortodôntica inicial e ao estudo de apinhamento dentário.':
    'Patient B case focused on initial orthodontic documentation and the study of dental crowding.',
  'Fotografia intraoral frontal do Paciente B com apinhamento dentário':
    'Frontal intraoral photograph of Patient B with dental crowding',
  'Intraoral frontal': 'Frontal intraoral',
  'Fotografia da arcada superior do Paciente B': 'Photograph of Patient B upper arch',
  'Fotografia da arcada inferior do Paciente B': 'Photograph of Patient B lower arch',
  'Fotografias intraorais ortodônticas': 'Orthodontic intraoral photographs',
  'Avaliação de alinhamento e documentação inicial':
    'Alignment evaluation and initial documentation',
  'Ortodontia preventiva / interceptativa': 'Preventive / interceptive orthodontics',
  'Acadêmico / intermediário': 'Academic / intermediate',
  'Registro ortodôntico inicial': 'Initial orthodontic record',
  Apinhamento: 'Crowding',
  'Avaliação ortodôntica': 'Orthodontic evaluation',
  'Avaliação estética ortodôntica': 'Orthodontic aesthetic evaluation',
  'Comparação visual ilustrativa do sorriso do Paciente B para discussão de alinhamento e harmonia dental.':
    'Illustrative visual comparison of Patient B smile to discuss alignment and dental harmony.',
  'Incômodo com o alinhamento dos dentes anteriores e a aparência do sorriso.':
    'Concern about the alignment of anterior teeth and the appearance of the smile.',
  'Desarmonia estética relacionada ao posicionamento dos dentes anteriores.':
    'Aesthetic disharmony related to the position of anterior teeth.',
  'Comparação visual ilustrativa para estudo de planejamento estético e ortodôntico.':
    'Illustrative visual comparison for the study of aesthetic and orthodontic planning.',
  'Avaliação da linha do sorriso e do possível impacto do alinhamento na estética.':
    'Evaluation of the smile line and the potential aesthetic impact of alignment.',
  'Compreensão da relação entre alinhamento dentário, estética facial e expectativa do paciente.':
    'Understanding the relationship between tooth alignment, facial aesthetics, and patient expectations.',
  'Comparação ilustrativa do Paciente B utilizada para estudo de harmonia dental e alinhamento.':
    'Illustrative comparison of Patient B used to study dental harmony and alignment.',
  'Antes e depois ilustrativo do sorriso do Paciente B':
    'Illustrative before-and-after of Patient B smile',
  'Antes e depois ilustrativo': 'Illustrative before and after',
  'Planejamento estético e ortodôntico': 'Aesthetic and orthodontic planning',
  'Estética odontológica e ortodontia': 'Dental aesthetics and orthodontics',
  'Comparação registrada': 'Comparison recorded',
  'Alinhamento dental': 'Tooth alignment',
  'Harmonia do sorriso': 'Smile harmony',
  'Avaliação complementar ortodôntica': 'Complementary orthodontic assessment',
  'Radiografias complementares do Paciente B utilizadas para avaliação estrutural e planejamento inicial.':
    'Complementary radiographs of Patient B used for structural assessment and initial planning.',
  'Necessidade de avaliação complementar para análise de posicionamento dentário.':
    'Need for complementary evaluation to analyze tooth positioning.',
  'Indicação acadêmica de exames complementares para observar estruturas dentárias e relação maxilomandibular.':
    'Academic indication for complementary exams to observe dental structures and maxillomandibular relationship.',
  'Seleção de radiografia panorâmica, bite-wing e lateral para compor o estudo do caso.':
    'Selection of panoramic, bite-wing, and lateral radiographs for the case study.',
  'Observação das estruturas dentárias, raízes, regiões posteriores e referências cefalométricas.':
    'Observation of dental structures, roots, posterior regions, and cephalometric references.',
  'Entendimento da importância dos exames complementares no planejamento ortodôntico.':
    'Understanding the importance of complementary exams in orthodontic planning.',
  'Imagens complementares do Paciente B vinculadas ao estudo acadêmico de alinhamento e ortodontia.':
    'Complementary images of Patient B linked to the academic study of alignment and orthodontics.',
  'Radiografia panorâmica do Paciente B': 'Panoramic radiograph of Patient B',
  'Radiografia bite-wing do Paciente B': 'Bite-wing radiograph of Patient B',
  'Radiografia lateral cefalométrica do Paciente B':
    'Lateral cephalometric radiograph of Patient B',
  'Radiografia lateral': 'Lateral radiograph',
  'Radiografias complementares': 'Complementary radiographs',
  'Radiologia odontológica e ortodontia': 'Dental radiology and orthodontics',
  'Estudo radiográfico registrado': 'Radiographic study recorded',
  Cefalometria: 'Cephalometry',
  'Orientação de higiene com aparelho': 'Hygiene guidance with braces',
  'Orientação demonstrativa para o Paciente B sobre higiene bucal em contexto ortodôntico.':
    'Demonstrative guidance for Patient B on oral hygiene in an orthodontic context.',
  'Dúvidas sobre higiene bucal adequada durante acompanhamento ortodôntico.':
    'Questions about appropriate oral hygiene during orthodontic follow-up.',
  'Necessidade de reforçar escovação, uso de escova interdental e limpeza de áreas de difícil acesso.':
    'Need to reinforce brushing, interdental brush use, and cleaning of hard-to-reach areas.',
  'Demonstração prática em modelo odontológico com aparelho e orientação de rotina preventiva.':
    'Practical demonstration on a dental model with braces and preventive routine guidance.',
  'Educação em saúde bucal e explicação de cuidados preventivos durante o uso de aparelho.':
    'Oral health education and explanation of preventive care while wearing braces.',
  'Valorização da prevenção como parte essencial do acompanhamento ortodôntico.':
    'Recognition of prevention as an essential part of orthodontic follow-up.',
  'Orientação ilustrativa do Paciente B sobre higiene oral em contexto ortodôntico.':
    'Illustrative guidance for Patient B on oral hygiene in an orthodontic context.',
  'Orientação de higiene bucal com aparelho para o Paciente B':
    'Oral hygiene guidance with braces for Patient B',
  'Educação em saúde e prevenção': 'Health education and prevention',
  'Promoção de saúde bucal e ortodontia': 'Oral health promotion and orthodontics',
  Ortodontia: 'Orthodontics',
}

function translateClinicalValue(value) {
  if (typeof value === 'string') {
    return englishClinicalText[value] || value
  }

  if (Array.isArray(value)) {
    return value.map(translateClinicalValue)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, translateClinicalValue(item)]),
    )
  }

  return value
}

export function getClinicalData(language = 'pt') {
  const data = { caseFilters, caseCards, pacientes }

  return language === 'en' ? translateClinicalValue(data) : data
}
