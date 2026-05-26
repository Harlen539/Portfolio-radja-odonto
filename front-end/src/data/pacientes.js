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

export const resumoPacientes = pacientes.map((paciente) => ({
  paciente: paciente.nome,
  idade: paciente.idade,
  registros: Object.values(paciente.casos).map((caso) => caso.titulo),
  observacao: 'Registros fictícios organizados separadamente por tópico clínico.',
}))

export default pacientes
