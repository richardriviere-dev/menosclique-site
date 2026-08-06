// Conteúdo ÚNICO por concorrente (SEO/GEO de fundo de funil). Complementa concorrentes.ts.
// PRINCÍPIO (herdado): honestidade. Nenhuma afirmação falsa, negativa ou não verificável
// sobre o concorrente — a descrição dele é neutra e pública. Toda a diferenciação é feita
// com base nas FORÇAS REAIS do MenosClique. O ângulo varia por SEGMENTO do concorrente
// (odontológico, marketplace de agendamento, enterprise, agenda-first, tradicional…),
// gerando conteúdo genuinamente distinto por página. Indexado por slug.

export interface AltConteudo {
  intro: string[];       // 2 parágrafos: contexto neutro do concorrente + proposta do MenosClique
  idealPara: string;     // para quem o MenosClique é uma boa alternativa (frase única por segmento)
  faqs: { q: string; a: string }[]; // FAQ específico do concorrente (some às perguntas gerais)
}

export const alternativasConteudo: Record<string, AltConteudo> = {
  "iclinic": {
    intro: [
      "O iClinic é um dos sistemas de gestão para clínicas mais conhecidos do Brasil, com uma proposta ampla que atende muitas especialidades. É uma referência de mercado, e muita gente busca por ele justamente por ser tão estabelecido.",
      "O MenosClique nasce de outra ideia: fazer menos, melhor. Em vez de um catálogo enorme de recursos, entregamos o que a clínica usa todo dia — agenda, prontuário personalizável, financeiro e documentos — de um jeito simples de aprender, com todas as funcionalidades em todos os planos e preço a partir de R$ 69,90. Se o que pesa na sua decisão é simplicidade e custo, vale comparar na prática."
    ],
    idealPara: "clínicas e consultórios que querem um sistema completo, mas simples de usar e com preço previsível — sem pagar por módulos que não vão utilizar.",
    faqs: [
      { q: "Qual a diferença do MenosClique para o iClinic?", a: "As duas são ferramentas de gestão para clínicas. A proposta do MenosClique é a simplicidade: tudo incluído em todos os planos, preço transparente a partir de R$ 69,90 e uma curva de aprendizado curta. A melhor forma de comparar é testar 14 dias grátis, sem cartão." },
      { q: "Consigo trazer meus dados do iClinic?", a: "Oferecemos migração assistida de pacientes para você começar rápido, sem redigitar tudo. Fale com a gente durante o teste grátis que ajudamos você a organizar a importação." }
    ]
  },
  "feegow": {
    intro: [
      "O Feegow é um sistema de gestão voltado a clínicas e operadoras, conhecido por atender estruturas maiores, com muitas unidades e processos. Para operações desse porte, um sistema robusto faz sentido.",
      "Nem toda clínica precisa desse tamanho, e é aí que o MenosClique se encaixa: um sistema completo no essencial — agenda, prontuário, financeiro, pacotes e documentos — sem a complexidade de uma plataforma corporativa. A equipe aprende em minutos, tudo já vem incluído e o preço começa em R$ 69,90 por mês."
    ],
    idealPara: "clínicas e consultórios que acham as plataformas corporativas robustas demais e querem simplicidade sem abrir mão do essencial.",
    faqs: [
      { q: "O MenosClique serve para clínica com mais de uma unidade?", a: "Sim. O MenosClique é multi-unidade e multiusuário, com permissões por cargo (Admin, Recepção, Financeiro, Profissional) e dados isolados por clínica — só que sem a complexidade de uma plataforma corporativa." },
      { q: "Preciso de um sistema robusto como o Feegow?", a: "Depende do porte da operação. Se você sente que paga por complexidade que não usa, o MenosClique entrega o essencial de forma simples. Teste 14 dias grátis e veja se atende à sua rotina." }
    ]
  },
  "amplimed": {
    intro: [
      "O Amplimed é um sistema de gestão para clínicas e consultórios em nuvem, usado por profissionais que buscam sair do papel e organizar a rotina. É uma opção conhecida no segmento de gestão em nuvem.",
      "O MenosClique também é 100% web (você usa no computador e no celular, sem instalar nada), mas com foco obstinado em simplicidade e preço justo. Agenda, prontuário personalizável, financeiro e documentos em um só lugar, com todas as funcionalidades em todos os planos a partir de R$ 69,90 — e migração assistida para começar rápido."
    ],
    idealPara: "quem quer um sistema em nuvem simples, com preço transparente e sem funcionalidades presas em planos mais caros.",
    faqs: [
      { q: "O MenosClique funciona no navegador, sem instalar nada?", a: "Sim. É totalmente web e responsivo: funciona no computador e no celular pelo navegador, sem instalação. Seus dados ficam em nuvem, isolados por clínica, com backup automático diário." },
      { q: "Tem plano que libera todas as funcionalidades?", a: "Todos os planos já vêm com todas as funcionalidades. Você escolhe apenas pelo número de profissionais — nada fica preso em um plano superior." }
    ]
  },
  "hidoctor": {
    intro: [
      "O HiDoctor é um software de prontuário e gestão para consultórios com muitos anos de mercado, tradicional entre médicos. Muita gente o conhece por essa trajetória e pela familiaridade.",
      "Para quem quer uma experiência mais moderna e leve, o MenosClique é uma alternativa web: nada para instalar, acesso pelo navegador no computador ou celular, e uma interface pensada para exigir menos cliques. Prontuário personalizável, agenda, financeiro e documentos — tudo incluído, a partir de R$ 69,90 por mês."
    ],
    idealPara: "consultórios que querem migrar de um sistema mais tradicional para algo web, moderno e simples de usar no dia a dia.",
    faqs: [
      { q: "O MenosClique é instalado no computador como softwares tradicionais?", a: "Não. O MenosClique é totalmente online: você acessa pelo navegador, no computador ou no celular, sem instalar nada e sem depender de uma máquina específica. As atualizações são automáticas." },
      { q: "Consigo personalizar o prontuário como preciso?", a: "Sim. O prontuário é personalizável: você monta modelos com as seções e campos da sua especialidade, além de favoritos clínicos, adendos e histórico completo do paciente." }
    ]
  },
  "ninsaude": {
    intro: [
      "O Ninsaúde é uma plataforma de gestão para clínicas e consultórios, com uma proposta ampla de recursos para a rotina da saúde. É uma opção conhecida entre quem procura organizar a operação.",
      "O MenosClique aposta na simplicidade como diferencial: em vez de muitas telas e configurações, entrega direto o que a clínica usa — agenda, prontuário, financeiro e documentos — de forma que a equipe aprende rápido. Tudo em todos os planos, a partir de R$ 69,90, com 14 dias grátis para testar sem cartão."
    ],
    idealPara: "clínicas que querem ir direto ao ponto, com um sistema enxuto que a equipe domina rápido e um preço que cabe no orçamento.",
    faqs: [
      { q: "O MenosClique é difícil de configurar para começar a usar?", a: "Não. A proposta é justamente a simplicidade: você cria a conta, configura o essencial e já começa. Se quiser, a gente ajuda na migração dos pacientes durante o teste grátis." },
      { q: "Todas as funcionalidades estão disponíveis desde o começo?", a: "Sim. Todos os planos incluem todas as funcionalidades; você escolhe pelo número de profissionais. Nada fica bloqueado em um plano superior." }
    ]
  },
  "shosp": {
    intro: [
      "O Shosp é um sistema de gestão e agendamento para clínicas, conhecido por recursos ligados à agenda e à comunicação com o paciente. Para quem prioriza o agendamento, é uma opção reconhecida.",
      "O MenosClique também caprichou na agenda — com recorrência, encaixe, bloqueios e confirmação de presença por WhatsApp para reduzir faltas — mas entrega junto o prontuário eletrônico, o financeiro com repasse e os documentos em PDF, tudo integrado. Assim a clínica não precisa de um sistema só para agenda e outro para o resto."
    ],
    idealPara: "quem quer uma agenda forte com confirmação por WhatsApp, mas junto de prontuário e financeiro completos, num só sistema.",
    faqs: [
      { q: "A confirmação de presença por WhatsApp reduz faltas?", a: "Ajuda bastante: o MenosClique gera um link de confirmação por agendamento que você envia pelo WhatsApp, e o paciente confirma ou pede remarcação pela própria página — o status volta atualizado para a sua agenda." },
      { q: "Além da agenda, o que mais o MenosClique faz?", a: "Prontuário eletrônico personalizável, financeiro por atendimento com repasse, pacotes e sessões, documentos em PDF, relatórios, multi-unidade e backup automático — tudo integrado à agenda, em todos os planos." }
    ]
  },
  "clinicorp": {
    intro: [
      "O Clinicorp é um sistema de gestão voltado a clínicas odontológicas, conhecido nesse nicho. Para quem é da odontologia, faz sentido procurar um sistema que entenda a rotina do consultório dental.",
      "O MenosClique atende a odontologia com os recursos que ela pede: odontograma interativo para registrar o plano de tratamento dente a dente, pacotes por sessões e plano recorrente (mensalidade) para manutenções, e repasse por procedimento. Tudo isso com simplicidade e todas as funcionalidades incluídas a partir de R$ 69,90 por mês."
    ],
    idealPara: "consultórios e clínicas odontológicas que querem odontograma, planos recorrentes de manutenção e financeiro descomplicado num só sistema.",
    faqs: [
      { q: "O MenosClique tem odontograma?", a: "Sim. O odontograma interativo registra o plano de tratamento dente a dente e o que já foi executado, direto na ficha do paciente — pensado para dentistas, ortodontistas e implantodontistas." },
      { q: "Dá para cobrar mensalidade de tratamento ortodôntico?", a: "Sim. O plano recorrente gera a cobrança mensal automaticamente, ideal para manutenção ortodôntica, com controle do que foi pago e do que está pendente e repasse calculado por sessão realizada." }
    ]
  },
  "prodoctor": {
    intro: [
      "O ProDoctor é um software de prontuário e gestão para consultórios, tradicional e conhecido entre profissionais de saúde. É uma opção com bastante tempo de estrada.",
      "O MenosClique é uma alternativa web e simples: prontuário eletrônico personalizável com modelos por especialidade, agenda com confirmação por WhatsApp, financeiro e documentos — acessível pelo navegador no computador ou celular, sem instalação. Todas as funcionalidades vêm em todos os planos, a partir de R$ 69,90."
    ],
    idealPara: "consultórios que querem um prontuário personalizável e moderno, na nuvem, sem complicação e com preço transparente.",
    faqs: [
      { q: "O prontuário do MenosClique se adapta à minha especialidade?", a: "Sim. Você monta modelos com as seções e campos que usa de verdade, com favoritos clínicos para condutas repetidas, adendos permanentes e o histórico completo do paciente sempre à mão." },
      { q: "Preciso instalar algo para usar?", a: "Não. É totalmente online: acesso pelo navegador, no computador ou no celular, com atualizações automáticas e backup diário dos dados." }
    ]
  },
  "simples-agenda": {
    intro: [
      "O Simples Agenda é um sistema de agendamento e gestão para clínicas, conhecido pela proposta de organizar a agenda de forma direta. Para quem começa pela agenda, é uma opção reconhecida.",
      "O MenosClique parte da mesma ideia de simplicidade, mas entrega um sistema completo: além da agenda com recorrência e confirmação por WhatsApp, você tem prontuário eletrônico, financeiro com repasse, pacotes e documentos em PDF — tudo integrado, para a clínica crescer sem trocar de sistema depois."
    ],
    idealPara: "quem começou organizando a agenda e agora precisa de prontuário e financeiro completos, sem juntar vários sistemas.",
    faqs: [
      { q: "O MenosClique é só agenda ou faz mais que isso?", a: "Faz muito mais: agenda, prontuário eletrônico personalizável, financeiro por atendimento com repasse, pacotes e sessões, documentos em PDF, relatórios e multi-unidade — tudo em todos os planos." },
      { q: "Se minha clínica crescer, o sistema acompanha?", a: "Sim. O MenosClique já nasce multi-unidade e multiusuário com permissões por cargo, então você adiciona profissionais e unidades sem precisar migrar para outro sistema." }
    ]
  },
  "medplus": {
    intro: [
      "O MedPlus é um software de gestão para consultórios e clínicas, com recursos para organizar atendimento e rotina. É uma das opções disponíveis para quem busca gestão na saúde.",
      "O MenosClique se diferencia pela simplicidade e pela transparência: agenda, prontuário personalizável, financeiro e documentos num sistema que a equipe aprende rápido, com todas as funcionalidades em todos os planos e preço a partir de R$ 69,90 — mais 14 dias grátis, sem cartão, para decidir com calma."
    ],
    idealPara: "consultórios e clínicas que valorizam simplicidade, preço transparente e tudo incluído desde o primeiro plano.",
    faqs: [
      { q: "O que está incluído no plano do MenosClique?", a: "Tudo: agenda, prontuário eletrônico, financeiro e repasse, pacotes, documentos em PDF, confirmação por WhatsApp, relatórios, multi-unidade e backup. Você escolhe apenas pelo número de profissionais." },
      { q: "Consigo testar antes de contratar?", a: "Sim, são 14 dias grátis com todas as funcionalidades e sem precisar de cartão de crédito. Se decidir seguir, a migração dos pacientes é assistida." }
    ]
  },
  "doctoralia": {
    intro: [
      "A Doctoralia é uma plataforma de agendamento e presença online muito conhecida, onde pacientes encontram e marcam consultas com profissionais de saúde. Ela é forte na captação de pacientes e na visibilidade do profissional na internet.",
      "O MenosClique resolve outra parte: a gestão interna da clínica. Enquanto uma plataforma de presença online ajuda a atrair pacientes, o MenosClique cuida da rotina depois que eles chegam — agenda própria, prontuário eletrônico, financeiro com repasse, pacotes e documentos. Os dois podem, inclusive, conviver: captação de um lado, operação organizada do outro."
    ],
    idealPara: "profissionais que usam plataformas de presença online para captar pacientes e agora precisam de um sistema completo para gerir a clínica por dentro.",
    faqs: [
      { q: "O MenosClique substitui a Doctoralia?", a: "São coisas diferentes. Plataformas como a Doctoralia focam em captação e presença online; o MenosClique é o sistema de gestão interna da clínica — agenda, prontuário, financeiro e documentos. Muitos profissionais usam os dois de forma complementar." },
      { q: "O MenosClique tem prontuário e financeiro, não só agenda?", a: "Sim. Além da agenda própria com confirmação por WhatsApp, você tem prontuário eletrônico personalizável, financeiro por atendimento com repasse, pacotes e sessões e documentos em PDF — tudo integrado." }
    ]
  }
};
