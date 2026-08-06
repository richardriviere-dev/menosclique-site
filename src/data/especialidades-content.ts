// Conteúdo ÚNICO por especialidade (SEO/GEO). Complementa especialidades.ts:
// aqui vive o texto rico e específico de cada página (intro, recursos enquadrados,
// fluxo de uso e FAQ próprio), garantindo que cada /especialidades/[slug] entregue
// valor real e distinto — nada de "página rasa"/template. Indexado por slug.
// Fonte: recursos REAIS do MenosClique (nada inventado).

export interface EspConteudo {
  keywords: string[];
  intro: string[]; // 2 parágrafos de contexto real da rotina
  recursos: { t: string; d: string }[]; // 4 recursos reais enquadrados p/ a especialidade
  fluxo: string[]; // passos de um uso típico
  faqs: { q: string; a: string }[]; // perguntas específicas da especialidade
}

export const especialidadesConteudo: Record<string, EspConteudo> = {
  // ───────────────────────── Médica (grupo A) ─────────────────────────
  "dermatologista": {
    keywords: ["sistema para dermatologista", "prontuário de dermatologia", "software para clínica de dermatologia", "agenda para dermatologista", "gestão de clínica dermatológica", "sistema para procedimentos estéticos"],
    intro: [
      "Na dermatologia, cada retorno depende de comparar o que mudou: uma lesão diminuiu, uma mancha clareou, a pele reagiu bem a um procedimento. Sem um registro organizado, essa comparação vira memória e fotos soltas no celular. O MenosClique concentra prontuário, imagens e agenda em um único lugar, para que você abra o histórico do paciente e veja, lado a lado, o que foi feito em cada sessão — sem procurar em pastas ou aplicativos separados.",
      "Além do acompanhamento clínico, a rotina de dermatologia envolve muitos procedimentos estéticos vendidos em pacotes de sessões, retornos recorrentes e documentos como termo de consentimento. O sistema organiza tudo isso: agenda com recorrência para as séries de procedimento, pacotes por sessões com saldo visível e documentos em PDF gerados a partir de modelos, já com os dados do paciente preenchidos automaticamente."
    ],
    recursos: [
      { t: "Imagem anotável para acompanhar lesões e procedimentos", d: "Marque a lesão ou a região tratada sobre uma imagem do paciente e volte a ela em cada retorno. A imagem anotável é um recurso permanente do paciente, então a evolução fica registrada consulta após consulta, sem depender de fotos avulsas." },
      { t: "Prontuário com modelos próprios de dermatologia", d: "Crie seções e campos específicos para mapeamento de lesões, anamnese estética ou pós-procedimento. Use favoritos clínicos para condutas repetidas e registre adendos clínicos permanentes quando precisar complementar um atendimento já fechado." },
      { t: "Pacotes de sessões para procedimentos estéticos", d: "Venda um pacote por sessões (ex.: peeling, laser, procedimentos seriados) com saldo de sessões controlado pelo sistema, ou ofereça um plano recorrente mensal. O repasse por procedimento pode ser configurado em valor fixo ou percentual." },
      { t: "Documentos prontos para receituário e termo de consentimento", d: "Gere receituário, termo de consentimento e recibo em PDF a partir de modelos, com dados do paciente e da clínica preenchidos automaticamente e numeração sequencial. Documentos anulados ficam com marca d'água e trilha de auditoria." }
    ],
    fluxo: [
      "Confirme a presença do paciente por WhatsApp antes da sessão de procedimento agendada em série.",
      "Registre a lesão ou área tratada na imagem anotável e preencha o modelo de prontuário da consulta.",
      "Gere o termo de consentimento ou receituário em PDF direto do atendimento.",
      "Feche a cobrança da sessão, dando baixa no saldo do pacote e registrando o pagamento."
    ],
    faqs: [
      { q: "Como comparo a evolução de uma lesão entre duas consultas?", a: "Use a imagem anotável: marque a lesão na primeira consulta e volte à mesma imagem nos retornos seguintes. Como é um recurso permanente do paciente, todo o histórico de marcações fica disponível para consulta a qualquer momento." },
      { q: "Dá para vender um pacote de sessões de procedimento estético?", a: "Sim. Você cria um pacote por sessões com o número de sessões contratadas e o sistema controla o saldo automaticamente a cada atendimento consumido, além de calcular o repasse do profissional por procedimento." },
      { q: "Como reduzo faltas em sessões de procedimentos estéticos?", a: "Pelo link de confirmação de presença por WhatsApp, o paciente confirma ou cancela o horário antes da sessão, o que ajuda a reduzir faltas e reorganizar a agenda com antecedência." },
      { q: "Consigo emitir termo de consentimento já com os dados do paciente?", a: "Sim, os documentos em PDF são gerados a partir de modelos com os dados do paciente, do procedimento e da clínica preenchidos automaticamente, e recebem numeração sequencial e trilha de anulação auditada." }
    ]
  },
  "cardiologista": {
    keywords: ["sistema para cardiologista", "prontuário de cardiologia", "software para clínica de cardiologia", "agenda para cardiologista", "gestão de clínica cardiológica", "sistema para consultório de cardiologia"],
    intro: [
      "No consultório de cardiologia, cada retorno começa recuperando o que aconteceu no anterior: qual foi a última aferição de pressão registrada, que medicação foi ajustada, quais exames o paciente trouxe. Quando esse histórico está espalhado entre papel e memória, a consulta perde tempo reconstruindo o que já era sabido. O MenosClique mantém o histórico clínico do paciente organizado por atendimento, com notas rápidas e observações datadas, prontas para consulta antes de abrir a porta.",
      "Pacientes cardiológicos costumam ter acompanhamento longo, com retornos recorrentes e vários exames anexados ao longo dos anos. O sistema permite agendar a série de retornos com recorrência, anexar arquivos ao cadastro do paciente e registrar adendos clínicos permanentes quando um exame ou uma conduta precisa ser documentada depois do atendimento já fechado."
    ],
    recursos: [
      { t: "Histórico clínico contínuo do paciente", d: "Cada atendimento fica registrado com data e hora, incluindo notas rápidas e observações. Antes do retorno, você abre o histórico clínico do paciente e vê a evolução registrada em consultas anteriores, sem depender de memória." },
      { t: "Arquivos de exames anexados ao cadastro", d: "Anexe exames e laudos ao cadastro do paciente para consulta rápida no dia do retorno. Tudo fica vinculado ao mesmo prontuário, sem precisar procurar em outro sistema ou pasta física." },
      { t: "Prontuário personalizável para acompanhamento cardiológico", d: "Monte modelos de prontuário com seções e campos próprios para acompanhamento de pressão arterial, medicação em uso e conduta, além de favoritos clínicos para condutas que se repetem entre pacientes." },
      { t: "Agenda com recorrência para retornos periódicos", d: "Programe a série de retornos do paciente com recorrência e use a confirmação de presença por WhatsApp para reduzir faltas em consultas de acompanhamento espaçadas no tempo." }
    ],
    fluxo: [
      "Confirme a presença do paciente por WhatsApp antes do retorno periódico.",
      "Abra o histórico clínico e reveja a última aferição e a medicação registrada no atendimento anterior.",
      "Registre a evolução no prontuário e anexe os exames trazidos pelo paciente.",
      "Emita a receita atualizada e feche a cobrança do atendimento."
    ],
    faqs: [
      { q: "Como vejo rápido o que foi registrado no retorno anterior do paciente?", a: "O histórico clínico reúne todos os atendimentos do paciente em ordem cronológica, com notas rápidas e observações datadas, então você abre o prontuário e vê a última conduta antes mesmo de chamar o paciente." },
      { q: "Dá para anexar exames antigos ao cadastro do paciente?", a: "Sim, o cadastro do paciente tem uma aba de arquivos anexos, onde exames e laudos ficam guardados junto com o histórico, disponíveis em qualquer retorno futuro." },
      { q: "Como organizo retornos periódicos de pacientes crônicos?", a: "Use a agenda com recorrência para programar a série de retornos e a confirmação de presença por WhatsApp para que o paciente confirme ou remarque antes de cada consulta, reduzindo faltas." },
      { q: "Consigo registrar uma informação depois que o atendimento já foi fechado?", a: "Sim, use o adendo clínico: é um registro permanente e imutável que complementa o atendimento já encerrado, útil quando um exame chega depois ou uma conduta precisa ser documentada posteriormente." }
    ]
  },
  "ortopedista": {
    keywords: ["sistema para ortopedista", "prontuário de ortopedia", "software para clínica de ortopedia", "agenda para ortopedista", "sistema para consultório ortopédico", "gestão de clínica de ortopedia"],
    intro: [
      "A rotina do ortopedista costuma ter agenda cheia e pouco tempo entre pacientes, com pedidos frequentes de atestado, guia e receita no meio da consulta. Quando emitir um documento depende de digitar tudo de novo, cada solicitação simples consome minutos que fazem falta na agenda do dia. O MenosClique gera esses documentos a partir de modelos, já com os dados do paciente e do atendimento preenchidos, para que a emissão seja rápida mesmo em um dia cheio.",
      "Fraturas, entorses e pós-operatórios também pedem um jeito rápido de marcar a região afetada e acompanhar a evolução em consultas seguintes. A imagem anotável permite indicar o local exato sobre uma imagem do paciente, enquanto o prontuário personalizável guarda a conduta de cada retorno e a agenda com recorrência organiza o cronograma de reavaliações."
    ],
    recursos: [
      { t: "Documentos rápidos: atestado, receituário e recibo", d: "Gere atestado, receituário e recibo em PDF a partir de modelos, com os dados do paciente e da clínica preenchidos automaticamente e numeração sequencial, sem perder tempo digitando as mesmas informações a cada consulta." },
      { t: "Imagem anotável para marcar a região afetada", d: "Marque sobre uma imagem a região da fratura, entorse ou área operada e acompanhe a evolução nos retornos seguintes. É um recurso permanente do paciente, disponível em qualquer consulta futura." },
      { t: "Agenda ágil com encaixe para casos urgentes", d: "Use o encaixe (walk-in) para atender casos que chegam sem hora marcada, como uma entorse recente, sem bagunçar os horários já agendados, e visualize múltiplos profissionais na mesma agenda por unidade." },
      { t: "Prontuário com modelos por tipo de queixa", d: "Monte seções específicas para trauma, pós-operatório ou fisioterapia associada, com favoritos clínicos para condutas repetidas e observações datadas a cada retorno de reavaliação." }
    ],
    fluxo: [
      "Registre o encaixe do paciente que chegou sem hora marcada direto na agenda.",
      "Marque a região afetada na imagem anotável e preencha o prontuário do atendimento.",
      "Emita o atestado ou o receituário em PDF já com os dados preenchidos.",
      "Agende o retorno de reavaliação com recorrência, se for um cronograma de acompanhamento."
    ],
    faqs: [
      { q: "Como emito um atestado rápido no meio de uma agenda cheia?", a: "O documento é gerado em PDF a partir de um modelo, com os dados do paciente e do atendimento já preenchidos automaticamente, então a emissão leva poucos cliques mesmo com a agenda apertada." },
      { q: "Dá para marcar exatamente onde está a lesão ou a fratura?", a: "Sim, com a imagem anotável você marca a região sobre uma imagem do paciente e esse registro fica permanente, disponível para consulta em qualquer retorno futuro." },
      { q: "Como atendo um paciente que chega sem horário marcado?", a: "Use o encaixe (walk-in): o atendimento entra na agenda do dia sem gerar conflito com os horários já marcados, mantendo o fluxo normal dos demais pacientes." },
      { q: "Consigo organizar o cronograma de retornos de um pós-operatório?", a: "Sim, a agenda com recorrência programa a série de retornos e a confirmação de presença por WhatsApp ajuda o paciente a confirmar ou remarcar cada reavaliação." }
    ]
  },
  "ginecologista": {
    keywords: ["sistema para ginecologista", "prontuário de ginecologia", "software para clínica de ginecologia", "agenda para ginecologista", "gestão de clínica ginecológica", "sistema para consultório de ginecologia"],
    intro: [
      "O acompanhamento ginecológico costuma se estender por anos, com exames periódicos, mudanças de método contraceptivo e conversas registradas ao longo de várias consultas. Reconstruir esse histórico de memória a cada retorno é arriscado e consome tempo da consulta. O MenosClique organiza o histórico clínico da paciente por atendimento, com observações datadas e notas rápidas, para que anos de acompanhamento fiquem acessíveis em poucos cliques antes de cada consulta.",
      "Além do histórico clínico, a rotina inclui convênios, exames anexados e documentos como receituário e termo de consentimento para procedimentos. O cadastro da paciente reúne dados, convênios e arquivos em um só lugar, e os documentos em PDF são gerados a partir de modelos, com os dados já preenchidos automaticamente a cada emissão."
    ],
    recursos: [
      { t: "Histórico clínico de longo prazo por paciente", d: "Cada consulta fica registrada com data e hora, incluindo observações e notas rápidas. Anos depois, o histórico clínico completo da paciente continua acessível, sem depender de prontuário em papel ou memória do atendimento anterior." },
      { t: "Cadastro completo com convênios e arquivos", d: "Registre dados da paciente, convênios vinculados e arquivos anexados, como exames e laudos, tudo no mesmo cadastro, disponível para consulta em qualquer atendimento futuro." },
      { t: "Prontuário personalizável para acompanhamento ginecológico", d: "Crie modelos com seções e campos próprios para anamnese ginecológica, método contraceptivo em uso ou acompanhamento periódico, com favoritos clínicos para condutas que se repetem entre pacientes." },
      { t: "Documentos com termo de consentimento e receituário", d: "Gere receituário e termo de consentimento para procedimentos em PDF a partir de modelos, com dados da paciente preenchidos automaticamente e numeração sequencial, prontos para impressão ou envio." }
    ],
    fluxo: [
      "Abra o cadastro da paciente e revise o histórico clínico e os exames anexados.",
      "Registre a consulta no prontuário com o modelo de acompanhamento ginecológico.",
      "Emita receituário ou termo de consentimento em PDF, se necessário.",
      "Agende o retorno periódico com recorrência e confirme a presença por WhatsApp."
    ],
    faqs: [
      { q: "Como acompanho o histórico de uma paciente ao longo de vários anos?", a: "O histórico clínico reúne todos os atendimentos em ordem cronológica, com observações datadas, então mesmo consultas de anos atrás continuam acessíveis para consulta rápida antes do retorno atual." },
      { q: "Dá para registrar qual convênio a paciente usa em cada consulta?", a: "Sim, o cadastro da paciente vincula os convênios, e cada cobrança do atendimento pode ser associada ao convênio correspondente na hora do fechamento financeiro." },
      { q: "Consigo emitir termo de consentimento para um procedimento ginecológico?", a: "Sim, o documento é gerado em PDF a partir de um modelo, com os dados da paciente e do procedimento preenchidos automaticamente e numeração sequencial para controle." },
      { q: "Como organizo retornos anuais de exame periódico?", a: "Use a agenda com recorrência para programar os retornos anuais e a confirmação de presença por WhatsApp para reduzir faltas nesses agendamentos espaçados." }
    ]
  },
  "obstetra": {
    keywords: ["sistema para obstetra", "prontuário de obstetrícia", "software para clínica de pré-natal", "agenda para obstetra", "gestão de clínica obstétrica", "sistema para consultório de pré-natal"],
    intro: [
      "O pré-natal é uma sequência de retornos próximos, cada um dependendo do que foi registrado no anterior: peso, exames, intercorrências. Perder esse fio entre consultas compromete o acompanhamento. O MenosClique organiza a agenda de retornos com recorrência e mantém o histórico clínico da paciente por atendimento, com observações datadas, para que cada consulta do pré-natal comece exatamente de onde a anterior parou.",
      "Depois do parto, o acompanhamento continua no pós-parto, muitas vezes com outro profissional ou outra unidade da mesma clínica. O prontuário personalizável guarda o histórico completo, os arquivos de exames ficam anexados ao cadastro da paciente, e a confirmação de presença por WhatsApp ajuda a reduzir faltas nos retornos entre o pré-natal e o pós-parto."
    ],
    recursos: [
      { t: "Agenda de pré-natal com recorrência", d: "Programe a série de retornos do pré-natal com recorrência, mantendo o cronograma de consultas organizado do início ao pós-parto, com bloqueios de horário para reservar a agenda quando necessário." },
      { t: "Histórico clínico contínuo da gestação ao pós-parto", d: "Cada consulta do pré-natal e do pós-parto fica registrada com data e hora, incluindo observações e notas rápidas, formando um histórico clínico contínuo acessível em qualquer retorno." },
      { t: "Exames anexados ao cadastro da paciente", d: "Anexe exames de imagem e laboratoriais ao cadastro da paciente, disponíveis para consulta rápida no dia do retorno, sem depender de arquivos físicos trazidos pela paciente." },
      { t: "Confirmação de presença por WhatsApp entre retornos", d: "Reduza faltas nos retornos frequentes do pré-natal com o link de confirmação por WhatsApp, em que a paciente confirma ou avisa que não poderá comparecer antes da consulta." }
    ],
    fluxo: [
      "Confirme a presença da paciente por WhatsApp antes de cada retorno do pré-natal.",
      "Abra o histórico clínico e reveja o que foi registrado na consulta anterior.",
      "Registre a evolução da gestação no prontuário e anexe exames trazidos.",
      "Agende o próximo retorno já dentro da série de recorrência do pré-natal."
    ],
    faqs: [
      { q: "Como mantenho o cronograma de retornos do pré-natal organizado?", a: "A agenda com recorrência programa toda a série de consultas do pré-natal de uma vez, e a confirmação de presença por WhatsApp ajuda a reduzir faltas entre um retorno e outro." },
      { q: "O histórico da paciente continua acessível depois do parto?", a: "Sim, o histórico clínico é contínuo: as consultas de pré-natal e as de pós-parto ficam no mesmo prontuário, com observações datadas de cada atendimento." },
      { q: "Dá para anexar exames de imagem ao cadastro da gestante?", a: "Sim, o cadastro da paciente tem uma aba de arquivos anexos onde exames de imagem e laboratoriais ficam guardados junto com o histórico clínico." },
      { q: "Consigo bloquear horários da agenda para partos ou urgências?", a: "Sim, é possível criar bloqueios de horário na agenda para reservar períodos, mantendo o restante da grade disponível para os demais agendamentos." }
    ]
  },
  "pediatra": {
    keywords: ["sistema para pediatra", "prontuário de pediatria", "software para clínica de pediatria", "agenda para pediatra", "gestão de clínica pediátrica", "sistema para consultório pediátrico"],
    intro: [
      "No consultório pediátrico, é comum atender mais de um filho da mesma família, cada um com seu próprio histórico de crescimento, vacinas e retornos. Confundir informações entre irmãos ou perder o fio do acompanhamento de anos é um risco real quando o registro não é organizado por paciente. O MenosClique mantém um cadastro e um histórico clínico próprios para cada criança, mesmo que os responsáveis e o endereço sejam os mesmos.",
      "O cadastro guarda o responsável legal vinculado à criança, e o histórico clínico reúne todas as consultas em ordem cronológica, com observações datadas. A agenda com recorrência organiza os retornos de acompanhamento, e a confirmação de presença por WhatsApp ajuda a reduzir faltas nas consultas de rotina marcadas com meses de antecedência."
    ],
    recursos: [
      { t: "Cadastro individual para cada criança da família", d: "Cada filho tem seu próprio cadastro e histórico clínico, com o responsável legal vinculado, mesmo quando vários irmãos são atendidos na mesma clínica, evitando confundir informações entre eles." },
      { t: "Histórico clínico de acompanhamento contínuo", d: "Registre cada consulta com data e hora, notas rápidas e observações, formando um histórico de acompanhamento que atravessa anos de crescimento da criança, acessível em qualquer retorno." },
      { t: "Agenda com recorrência para consultas de rotina", d: "Programe os retornos periódicos de acompanhamento com recorrência e use a confirmação de presença por WhatsApp para reduzir faltas em consultas marcadas com bastante antecedência." },
      { t: "Documentos para atestado e receituário", d: "Gere atestado escolar e receituário em PDF a partir de modelos, com os dados da criança e do responsável preenchidos automaticamente, prontos para entregar aos pais." }
    ],
    fluxo: [
      "Localize o cadastro específico da criança, mesmo entre irmãos da mesma família.",
      "Abra o histórico clínico e reveja o acompanhamento das consultas anteriores.",
      "Registre a consulta no prontuário e emita atestado ou receituário, se necessário.",
      "Agende o próximo retorno de rotina dentro da série de recorrência."
    ],
    faqs: [
      { q: "Como evito confundir o histórico de irmãos atendidos na mesma clínica?", a: "Cada criança tem cadastro e histórico clínico próprios, vinculados ao responsável legal, então mesmo irmãos atendidos no mesmo dia têm registros completamente separados." },
      { q: "Dá para emitir atestado escolar rápido durante a consulta?", a: "Sim, o atestado é gerado em PDF a partir de um modelo, com os dados da criança e do responsável já preenchidos automaticamente." },
      { q: "Como organizo os retornos de acompanhamento de rotina?", a: "A agenda com recorrência programa a série de consultas de acompanhamento, e a confirmação de presença por WhatsApp ajuda a reduzir faltas em retornos marcados com meses de antecedência." },
      { q: "O sistema guarda o histórico de crescimento da criança ao longo dos anos?", a: "O histórico clínico reúne todas as consultas em ordem cronológica com observações datadas, então o acompanhamento de anos anteriores fica acessível antes de cada novo retorno." }
    ]
  },
  "psiquiatra": {
    keywords: ["sistema para psiquiatra", "prontuário de psiquiatria", "software para clínica de psiquiatria", "agenda para psiquiatra", "gestão de consultório psiquiátrico", "sistema para clínica de saúde mental"],
    intro: [
      "No acompanhamento psiquiátrico, cada sessão registra evolução e conduta que só fazem sentido lidas em sequência: o que mudou desde o último ajuste de medicação, como o paciente respondeu, o que ficou combinado para a próxima consulta. O MenosClique registra cada atendimento com notas rápidas e observações datadas, formando um histórico clínico contínuo, e mantém os dados isolados por clínica, com acesso restrito por permissão de cargo.",
      "A privacidade do registro importa tanto quanto a continuidade: só os cargos autorizados têm acesso ao prontuário, controlado por permissões (Admin, Recepção, Financeiro, Profissional). Documentos como receituário e atestado são gerados em PDF a partir de modelos, e retornos podem ser agendados com recorrência para manter a periodicidade das sessões."
    ],
    recursos: [
      { t: "Histórico clínico contínuo de evolução e conduta", d: "Registre a evolução e a conduta de cada sessão com notas rápidas e observações datadas, formando um histórico clínico contínuo que pode ser revisado antes de cada novo atendimento." },
      { t: "Permissões por cargo para acesso ao prontuário", d: "O acesso ao prontuário é controlado por permissão de cargo (Admin, Recepção, Financeiro, Profissional), o que ajuda a restringir quem visualiza o conteúdo clínico registrado nas sessões." },
      { t: "Agenda com recorrência para periodicidade das sessões", d: "Programe as sessões com a periodicidade combinada usando a agenda com recorrência, e use a confirmação de presença por WhatsApp para reduzir faltas sem contato direto por telefone." },
      { t: "Adendos clínicos para complementar um atendimento fechado", d: "Registre um adendo clínico permanente e imutável quando precisar complementar informações de uma sessão já encerrada, mantendo a trilha do que foi acrescentado e quando." }
    ],
    fluxo: [
      "Confirme a presença do paciente por WhatsApp antes da sessão agendada.",
      "Abra o histórico clínico e reveja a conduta registrada na sessão anterior.",
      "Registre a evolução da sessão atual com notas rápidas e observações.",
      "Emita receituário, se necessário, e agende a próxima sessão dentro da série de recorrência."
    ],
    faqs: [
      { q: "Quem pode ver o conteúdo clínico registrado nas sessões?", a: "O acesso é controlado por permissão de cargo: apenas os cargos autorizados (como Profissional e Admin) visualizam o conteúdo clínico do prontuário, restringindo o acesso de outros usuários da clínica." },
      { q: "Como registro a evolução de cada sessão sem perder o fio da conduta anterior?", a: "O histórico clínico reúne as observações e notas rápidas de todas as sessões em ordem cronológica, então antes de cada atendimento você revisa rapidamente o que foi combinado na sessão passada." },
      { q: "Dá para manter a periodicidade das sessões organizada na agenda?", a: "Sim, a agenda com recorrência programa as sessões na periodicidade combinada, e a confirmação de presença por WhatsApp ajuda a reduzir faltas sem precisar ligar para o paciente." },
      { q: "Consigo complementar o registro de uma sessão depois de encerrada?", a: "Sim, use o adendo clínico: um registro permanente e imutável que complementa o atendimento já fechado, preservando a informação original e o que foi acrescentado depois." }
    ]
  },
  "neurologista": {
    keywords: ["sistema para neurologista", "prontuário de neurologia", "software para clínica de neurologia", "agenda para neurologista", "gestão de consultório neurológico", "sistema para clínica de neurologia"],
    intro: [
      "O acompanhamento neurológico costuma envolver históricos longos, com laudos de exames de imagem, ajustes de medicação e evolução registrada ao longo de anos de retornos. Quando essas informações ficam espalhadas entre pastas e sistemas diferentes, reconstruir o caso a cada consulta consome tempo que poderia ser usado no atendimento. O MenosClique organiza tudo por atendimento, com histórico clínico, arquivos anexados e observações datadas no mesmo cadastro do paciente.",
      "Cada retorno pode ser revisado antes da consulta, com os laudos anexados ao cadastro do paciente e o prontuário personalizável guardando seções específicas para exame neurológico e evolução. A agenda com recorrência organiza os retornos periódicos de acompanhamento, típicos de quadros crônicos."
    ],
    recursos: [
      { t: "Histórico clínico de acompanhamentos longos", d: "Reúna anos de evolução em um único histórico clínico, com observações datadas de cada retorno, permitindo revisar rapidamente o caso completo antes de uma consulta de acompanhamento longo." },
      { t: "Laudos e exames anexados ao cadastro", d: "Anexe laudos de exames de imagem e outros documentos ao cadastro do paciente, disponíveis para consulta em qualquer retorno futuro, sem depender de cópias físicas trazidas pelo paciente." },
      { t: "Prontuário com modelos para exame neurológico", d: "Monte seções e campos próprios para exame neurológico e evolução, com favoritos clínicos para condutas e observações que se repetem entre pacientes com quadros semelhantes." },
      { t: "Agenda com recorrência para quadros crônicos", d: "Programe os retornos periódicos de acompanhamento de quadros crônicos com recorrência, e use a confirmação de presença por WhatsApp para reduzir faltas nesses retornos espaçados." }
    ],
    fluxo: [
      "Abra o histórico clínico e reveja os laudos anexados antes do retorno.",
      "Registre o exame neurológico e a evolução no prontuário do atendimento.",
      "Emita receituário atualizado em PDF, se necessário.",
      "Agende o próximo retorno periódico dentro da série de recorrência."
    ],
    faqs: [
      { q: "Como reviso rapidamente um histórico longo antes do retorno do paciente?", a: "O histórico clínico reúne todos os atendimentos em ordem cronológica, com observações datadas, então você revisa anos de acompanhamento em poucos minutos antes de abrir a consulta." },
      { q: "Dá para guardar laudos de exames de imagem no cadastro do paciente?", a: "Sim, o cadastro do paciente tem uma aba de arquivos anexos onde laudos e exames ficam guardados junto com o histórico clínico, disponíveis em qualquer retorno." },
      { q: "Como organizo os retornos periódicos de um quadro crônico?", a: "Use a agenda com recorrência para programar a série de retornos e a confirmação de presença por WhatsApp para reduzir faltas nesses agendamentos espaçados no tempo." },
      { q: "Consigo criar um modelo de prontuário específico para exame neurológico?", a: "Sim, o prontuário é personalizável: você cria seções e campos próprios para o exame neurológico e a evolução, além de favoritos clínicos para condutas repetidas." }
    ]
  },

  // ───────────────────────── Médica (grupo B) ─────────────────────────
  "endocrinologista": {
    keywords: ["sistema para clínica de endocrinologia", "prontuário eletrônico endocrinologista", "agenda para endocrinologista", "software para consultório de endocrinologia", "gestão de clínica endocrinológica", "prontuário para acompanhamento de diabetes", "sistema para controle de exames endócrinos"],
    intro: [
      "Acompanhar pacientes com diabetes, tireoide, obesidade e outras condições endócrinas exige comparar exames e decisões de consulta em consulta, muitas vezes ao longo de anos. Sem um registro estruturado, o profissional perde tempo procurando o último resultado de hemoglobina glicada ou TSH em papéis ou telas separadas, e a rotina da recepção some entre agenda, financeiro e envio de documentos.",
      "O MenosClique organiza esse acompanhamento em um só lugar: o prontuário eletrônico personalizável permite criar modelos com seções e campos específicos para metas terapêuticas e evolução clínica, enquanto os adendos clínicos registram observações permanentes ao longo do tratamento. A agenda com recorrência facilita marcar retornos periódicos, e os documentos em PDF geram receituários e atestados com os dados do paciente preenchidos automaticamente."
    ],
    recursos: [
      { t: "Prontuário personalizável para metas e evolução", d: "Crie modelos com seções e campos próprios para registrar metas terapêuticas, valores de exames e evolução do paciente ao longo dos acompanhamentos, mantendo o histórico organizado por consulta." },
      { t: "Histórico clínico centralizado", d: "Consulte adendos clínicos permanentes e observações com data e hora em uma linha do tempo única por paciente, facilitando comparar a evolução entre consultas distantes no tempo." },
      { t: "Agenda com recorrência para retornos", d: "Programe séries de retornos periódicos típicos do acompanhamento endócrino e reorganize horários arrastando o agendamento, sem recriar consultas manualmente a cada visita." },
      { t: "Documentos e receituário automáticos", d: "Gere receituário, atestado e termos em PDF a partir de modelos, com dados do paciente e da clínica preenchidos automaticamente e numeração para controle." }
    ],
    fluxo: [
      "Cadastrar o paciente com dados completos, convênio e responsável legal, quando houver.",
      "Criar um modelo de prontuário com os campos usados no acompanhamento (metas, exames, evolução).",
      "Registrar cada consulta preenchendo o modelo e adicionando adendos ou notas rápidas.",
      "Programar o retorno com recorrência e gerar os documentos necessários em PDF."
    ],
    faqs: [
      { q: "O MenosClique calcula metas glicêmicas ou faz ajuste de dose automaticamente?", a: "Não. O sistema é uma ferramenta de gestão e registro: ele organiza os dados que o profissional preenche, mas todo cálculo, ajuste de conduta e decisão clínica continuam sendo feitos exclusivamente pelo médico." },
      { q: "Dá para comparar exames de consultas antigas rapidamente?", a: "Sim. O histórico clínico do paciente reúne adendos e observações com data e hora em uma linha do tempo, permitindo localizar registros de consultas anteriores sem procurar em papéis separados." },
      { q: "É possível padronizar o prontuário para toda a equipe usar o mesmo modelo?", a: "Sim. Os modelos de prontuário com seções e campos podem ser reutilizados por todos os profissionais da clínica, mantendo o mesmo padrão de registro em todos os atendimentos." },
      { q: "Como funciona o controle financeiro de consultas e retornos?", a: "Cada atendimento gera uma cobrança própria, com desconto ou acréscimo quando necessário, pagamentos por Pix, cartão, dinheiro ou transferência, e recibo em PDF emitido automaticamente." }
    ]
  },
  "urologista": {
    keywords: ["sistema para clínica de urologia", "prontuário eletrônico urologista", "agenda para urologista", "software para consultório de urologia", "gestão de clínica urológica", "sistema para controle de procedimentos urológicos", "financeiro para consultório de urologia"],
    intro: [
      "Consultórios de urologia costumam misturar consultas, exames e pequenos procedimentos na mesma agenda, cada um com prazos de retorno diferentes. Quando o controle desses procedimentos e retornos fica em planilhas paralelas, é fácil perder o fio da relação entre a data de um procedimento e o retorno programado, ou duplicar cobranças.",
      "O MenosClique une agenda, prontuário e financeiro em um único sistema. A agenda inteligente organiza consultas, procedimentos e retornos com recorrência e bloqueios de horário, o prontuário eletrônico personalizável registra a evolução de cada caso com campos próprios, e o financeiro por atendimento controla cobrança, pagamento e recibo de cada procedimento sem depender de planilha externa."
    ],
    recursos: [
      { t: "Agenda para consultas, procedimentos e retornos", d: "Organize consultas e procedimentos na mesma agenda, com encaixe para casos urgentes e recorrência para programar automaticamente os retornos típicos após um procedimento." },
      { t: "Prontuário com campos próprios por caso", d: "Monte modelos de prontuário com seções específicas para cada tipo de acompanhamento urológico e registre a evolução com adendos clínicos permanentes e observações datadas." },
      { t: "Financeiro vinculado a cada atendimento", d: "Cada consulta ou procedimento gera sua própria cobrança, com desconto, acréscimo e pagamento registrado por Pix, cartão, dinheiro ou transferência, eliminando o controle em planilha paralela." },
      { t: "Documentos em PDF para cada etapa", d: "Emita receituário, atestado, termo de consentimento e recibo em PDF a partir de modelos, com numeração e dados preenchidos automaticamente a cada atendimento." }
    ],
    fluxo: [
      "Cadastrar o paciente e registrar convênio e responsável legal, se aplicável.",
      "Agendar a consulta ou procedimento e, se houver série de retornos, programar a recorrência.",
      "Registrar o atendimento no prontuário com o modelo específico do caso.",
      "Gerar a cobrança do procedimento, registrar o pagamento e emitir o recibo em PDF."
    ],
    faqs: [
      { q: "O sistema substitui planilhas de controle de procedimentos?", a: "Sim, esse é justamente o objetivo: agenda, prontuário e financeiro ficam no mesmo lugar, então não é mais necessário manter uma planilha separada para acompanhar procedimentos e retornos." },
      { q: "Consigo programar o retorno automaticamente após um procedimento?", a: "Sim. A agenda tem recorrência para séries de atendimentos, o que facilita programar retornos padronizados sem recriar o agendamento manualmente a cada vez." },
      { q: "O termo de consentimento pode ser gerado com os dados do paciente já preenchidos?", a: "Sim. Os documentos em PDF são gerados a partir de modelos com os dados do paciente, da clínica e do atendimento preenchidos automaticamente, com numeração e possibilidade de anulação auditada." },
      { q: "Como funciona o recebimento de pagamentos de procedimentos com convênio?", a: "O paciente pode ter convênios cadastrados, e a cobrança de cada atendimento é registrada com o valor combinado, aceitando pagamento por Pix, cartão, dinheiro ou transferência, com recibo emitido automaticamente." }
    ]
  },
  "oftalmologista": {
    keywords: ["sistema para clínica de oftalmologia", "prontuário eletrônico oftalmologista", "agenda para oftalmologista", "software para consultório de oftalmologia", "receituário de óculos", "gestão de clínica oftalmológica", "sistema para controle de acuidade visual"],
    intro: [
      "A rotina de oftalmologia combina alto volume de consultas com a necessidade de registrar, de forma padronizada, dados como acuidade visual e evolução de cada olho ao longo do tempo, além de emitir receituário de óculos com frequência. Fazer isso sem um modelo fixo de registro aumenta o risco de anotações incompletas e dificulta comparar consultas.",
      "O MenosClique permite criar modelos de prontuário eletrônico com campos próprios para registrar acuidade visual e evolução de forma padronizada em cada consulta, mantendo o histórico organizado por paciente. Os documentos em PDF geram o receituário de óculos e demais documentos com os dados preenchidos automaticamente, e a agenda com múltiplos profissionais organiza o alto volume de consultas do dia."
    ],
    recursos: [
      { t: "Modelo de prontuário padronizado por consulta", d: "Crie um modelo de prontuário com campos fixos para acuidade visual e evolução, garantindo que todo profissional da clínica registre a consulta no mesmo padrão, facilitando a comparação entre visitas." },
      { t: "Receituário de óculos em PDF", d: "Gere o receituário de óculos a partir de um modelo de documento, com os dados do paciente e da clínica preenchidos automaticamente e numeração para controle, pronto para impressão." },
      { t: "Agenda para alto volume de consultas", d: "Organize a agenda com múltiplos profissionais e visão por unidade, use encaixe para casos de urgência e arraste a consulta para remarcar sem refazer o agendamento do zero." },
      { t: "Confirmação de presença por WhatsApp", d: "Reduza faltas enviando um link de confirmação por WhatsApp, no qual o paciente confirma ou cancela a consulta antes do dia agendado." }
    ],
    fluxo: [
      "Cadastrar o paciente e criar o modelo de prontuário com os campos de acuidade e evolução.",
      "Agendar a consulta e enviar a confirmação de presença por WhatsApp.",
      "Registrar a consulta no prontuário e emitir o receituário de óculos em PDF quando necessário.",
      "Programar o retorno com recorrência para acompanhamentos periódicos."
    ],
    faqs: [
      { q: "O sistema calcula o grau da lente ou faz o exame de refração?", a: "Não. O MenosClique não realiza exame nem calcula grau; ele apenas gera o documento do receituário de óculos em PDF com os valores que o profissional informa, preenchendo os dados do paciente automaticamente." },
      { q: "É possível padronizar o registro de acuidade visual entre os profissionais da clínica?", a: "Sim. O modelo de prontuário com campos próprios pode ser definido uma vez e usado por todos os profissionais, mantendo o mesmo padrão de registro em cada consulta." },
      { q: "Dá para comparar a evolução de um paciente entre consultas antigas?", a: "Sim. O histórico clínico reúne os registros de cada atendimento e os adendos clínicos permanentes em uma linha do tempo por paciente, facilitando localizar consultas anteriores." },
      { q: "A confirmação de presença por WhatsApp é automática?", a: "É um link de confirmação enviado ao paciente, que confirma ou cancela a presença pelo próprio WhatsApp; não é um robô de atendimento nem uma integração automática com a API oficial do WhatsApp." }
    ]
  },
  "otorrinolaringologista": {
    keywords: ["sistema para clínica de otorrinolaringologia", "prontuário eletrônico otorrino", "agenda para otorrinolaringologista", "software para consultório de otorrino", "gestão de clínica otorrinolaringológica", "sistema para registro de exames otorrino", "financeiro para consultório de otorrino"],
    intro: [
      "A prática otorrinolaringológica reúne consultas, pequenos exames e procedimentos em consultório, cada um exigindo um registro diferente. Quando os registros de exames e condutas não seguem um padrão, o profissional perde tempo reorganizando anotações e a clínica tem dificuldade de manter um histórico consistente de cada paciente.",
      "O MenosClique permite padronizar esse registro com modelos de prontuário eletrônico específicos para exames e condutas de otorrinolaringologia, com seções e campos próprios para cada tipo de atendimento. A agenda organiza consultas e procedimentos com bloqueios de horário e encaixe, e os documentos em PDF emitem receituário, atestado e termos com os dados preenchidos automaticamente."
    ],
    recursos: [
      { t: "Modelos de prontuário por tipo de exame e conduta", d: "Defina seções e campos próprios para cada tipo de exame ou conduta comum na otorrinolaringologia, padronizando o registro de todos os profissionais da clínica." },
      { t: "Agenda com bloqueios e encaixe", d: "Reserve horários para exames em consultório com bloqueios de agenda e use o encaixe para atender casos urgentes sem reorganizar toda a programação do dia." },
      { t: "Histórico clínico por paciente", d: "Acompanhe adendos clínicos permanentes e observações datadas em uma linha do tempo única, útil para revisar exames e condutas anteriores antes de uma nova consulta." },
      { t: "Documentos em PDF prontos para emitir", d: "Gere receituário, atestado e termo de consentimento a partir de modelos, com dados do paciente e da clínica preenchidos automaticamente e numeração para controle." }
    ],
    fluxo: [
      "Cadastrar o paciente e montar os modelos de prontuário usados para exames e condutas.",
      "Agendar a consulta ou o exame em consultório, com bloqueio de horário quando necessário.",
      "Registrar o atendimento no prontuário com o modelo correspondente.",
      "Emitir os documentos necessários em PDF e registrar a cobrança do atendimento."
    ],
    faqs: [
      { q: "O sistema interpreta o resultado de um exame de audiometria ou nasofibroscopia?", a: "Não. O MenosClique registra e organiza os dados que o profissional insere no prontuário; a leitura, interpretação e conduta a partir do exame são sempre feitas pelo médico." },
      { q: "É possível ter um modelo de prontuário diferente para cada tipo de exame?", a: "Sim. É possível criar quantos modelos de prontuário forem necessários, cada um com suas próprias seções e campos, e escolher o modelo adequado no início do atendimento." },
      { q: "Como funciona o encaixe de casos urgentes na agenda?", a: "O modo walk-in permite agendar um atendimento de encaixe mesmo quando o horário já está ocupado, sem bloquear o fluxo normal da agenda dos demais profissionais." },
      { q: "Dá para reduzir faltas em consultas de retorno?", a: "Sim. A confirmação de presença por WhatsApp envia um link para o paciente confirmar ou cancelar o horário antes da data agendada, ajudando a reduzir faltas." }
    ]
  },
  "gastroenterologista": {
    keywords: ["sistema para clínica de gastroenterologia", "prontuário eletrônico gastroenterologista", "agenda para gastroenterologista", "software para consultório de gastro", "gestão de clínica gastroenterológica", "sistema para organizar laudos de exames", "financeiro para consultório de gastroenterologia"],
    intro: [
      "No acompanhamento gastroenterológico, é comum que cada consulta dependa de revisar laudos e a evolução de exames anteriores, muitas vezes espalhados entre papéis e arquivos digitais soltos. Sem um lugar único para reunir esses registros, o profissional perde tempo antes de cada consulta só para recuperar o histórico do paciente.",
      "O MenosClique reúne o histórico clínico do paciente em um só lugar: o prontuário eletrônico personalizável registra a evolução com campos próprios, o cadastro do paciente permite anexar arquivos como laudos de exames, e os adendos clínicos guardam observações permanentes ao longo do acompanhamento, tudo acessível a cada nova consulta."
    ],
    recursos: [
      { t: "Arquivos anexados ao cadastro do paciente", d: "Anexe laudos e outros arquivos ao cadastro do paciente, mantendo-os disponíveis junto ao prontuário para consulta rápida em qualquer atendimento futuro." },
      { t: "Prontuário com evolução registrada por consulta", d: "Use um modelo de prontuário com campos próprios para registrar sintomas, condutas e evolução do paciente a cada consulta, formando um histórico contínuo e organizado." },
      { t: "Histórico clínico em linha do tempo", d: "Reveja adendos clínicos permanentes e observações com data e hora antes da consulta, reduzindo o tempo gasto procurando informações de atendimentos anteriores." },
      { t: "Documentos e recibo em PDF", d: "Gere receituário, atestado, termo de consentimento e recibo em PDF a partir de modelos, com os dados do paciente e do atendimento preenchidos automaticamente." }
    ],
    fluxo: [
      "Cadastrar o paciente e anexar laudos ou arquivos de exames existentes.",
      "Criar ou selecionar o modelo de prontuário usado no acompanhamento gastroenterológico.",
      "Registrar cada consulta no prontuário, revisando o histórico clínico anterior.",
      "Programar o retorno com recorrência e emitir os documentos necessários."
    ],
    faqs: [
      { q: "O sistema interpreta laudos de endoscopia ou colonoscopia?", a: "Não. O MenosClique apenas organiza e armazena os arquivos anexados ao cadastro do paciente; a leitura e interpretação do laudo continuam sendo feitas exclusivamente pelo profissional." },
      { q: "Consigo acessar o laudo de um exame antigo durante a consulta atual?", a: "Sim. Os arquivos anexados ao cadastro do paciente ficam disponíveis junto ao histórico clínico, podendo ser consultados a qualquer momento durante o atendimento." },
      { q: "Como fica o registro de acompanhamentos longos, com muitas consultas ao longo dos anos?", a: "Cada consulta é registrada no prontuário e organizada em uma linha do tempo por paciente, com adendos clínicos permanentes e observações datadas, facilitando revisar anos de acompanhamento." },
      { q: "É possível emitir recibo separado para cada consulta?", a: "Sim. Cada atendimento gera sua própria cobrança e o recibo correspondente é emitido em PDF automaticamente após o registro do pagamento." }
    ]
  },
  "reumatologista": {
    keywords: ["sistema para clínica de reumatologia", "prontuário eletrônico reumatologista", "agenda para reumatologista", "software para consultório de reumatologia", "gestão de clínica reumatológica", "sistema para acompanhamento de doenças crônicas", "sistema para controle de medicações contínuas"],
    intro: [
      "Acompanhamentos reumatológicos costumam se estender por anos, com retornos frequentes e múltiplas medicações em uso contínuo, o que exige um registro consistente para não perder o fio da evolução do paciente entre uma consulta e outra. Anotações espalhadas dificultam enxergar a história completa do tratamento.",
      "O MenosClique organiza esse acompanhamento contínuo com um prontuário eletrônico personalizável, no qual modelos com seções e campos próprios registram medicações e evolução em cada consulta. Os adendos clínicos guardam informações permanentes do tratamento, a agenda com recorrência programa os retornos periódicos, e o histórico clínico reúne tudo em uma linha do tempo por paciente."
    ],
    recursos: [
      { t: "Prontuário com campos para medicações em uso", d: "Registre em um modelo próprio as medicações contínuas e a evolução do paciente a cada consulta, mantendo um retrato atualizado do tratamento em andamento." },
      { t: "Adendos clínicos permanentes", d: "Documente mudanças importantes de conduta ou tratamento como adendos permanentes e imutáveis, que ficam registrados no histórico clínico junto às demais observações datadas." },
      { t: "Agenda com recorrência para retornos periódicos", d: "Programe séries de retornos típicos do acompanhamento crônico, com a possibilidade de arrastar um agendamento específico para remarcar sem afastar da série." },
      { t: "Histórico clínico em linha do tempo", d: "Acompanhe anos de consultas, adendos e observações organizados por data, facilitando revisar rapidamente a evolução do paciente antes de cada retorno." }
    ],
    fluxo: [
      "Cadastrar o paciente e criar o modelo de prontuário com os campos de medicação e evolução.",
      "Agendar a série de retornos periódicos com recorrência.",
      "Registrar cada consulta no prontuário, atualizando medicações e adicionando adendos quando necessário.",
      "Revisar o histórico clínico completo antes de cada novo retorno."
    ],
    faqs: [
      { q: "O sistema alerta sobre interação entre medicações?", a: "Não. O MenosClique registra as medicações informadas pelo profissional, mas não faz nenhum tipo de análise, cálculo de risco ou alerta de interação medicamentosa; essa avaliação é sempre clínica." },
      { q: "Como acompanho um paciente que já está em tratamento há vários anos?", a: "O histórico clínico reúne todas as consultas, adendos clínicos permanentes e observações datadas em uma linha do tempo única por paciente, organizando anos de acompanhamento em um só lugar." },
      { q: "Dá para programar retornos automáticos sem recriar a consulta toda vez?", a: "Sim. A agenda permite criar uma recorrência para a série de retornos, e cada ocorrência pode ser remarcada individualmente arrastando o agendamento, sem afetar as demais." },
      { q: "É possível registrar uma mudança de conduta de forma permanente no prontuário?", a: "Sim, esse é o papel do adendo clínico: um registro permanente e imutável que fica anexado ao histórico do paciente, diferente de uma nota rápida que pode ser editada." }
    ]
  },
  "pneumologista": {
    keywords: ["sistema para clínica de pneumologia", "prontuário eletrônico pneumologista", "agenda para pneumologista", "software para consultório de pneumologia", "gestão de clínica pneumológica", "sistema para acompanhamento de tratamento prolongado", "sistema para registro de exames respiratórios"],
    intro: [
      "Tratamentos pneumológicos prolongados exigem acompanhar exames e evolução do paciente ao longo de várias consultas, muitas vezes comparando resultados de meses ou anos atrás com o quadro atual. Sem um histórico bem organizado, essa comparação fica mais lenta e sujeita a falhas.",
      "O MenosClique concentra esse acompanhamento no prontuário eletrônico personalizável, com modelos de seções e campos próprios para registrar exames e evolução a cada consulta. O histórico clínico organiza adendos e observações datadas em uma linha do tempo por paciente, e a agenda com recorrência programa os retornos do tratamento prolongado automaticamente."
    ],
    recursos: [
      { t: "Prontuário com campos para exames e evolução", d: "Crie um modelo de prontuário com seções dedicadas a exames respiratórios e evolução do quadro, registrando cada consulta de forma padronizada ao longo do tratamento." },
      { t: "Histórico clínico em linha do tempo", d: "Compare a evolução do paciente revendo adendos clínicos permanentes e observações datadas organizadas cronologicamente, sem precisar procurar em registros avulsos." },
      { t: "Agenda com recorrência para tratamento prolongado", d: "Programe a série de retornos do acompanhamento com recorrência e reorganize horários individuais arrastando o agendamento, sem recriar a série inteira." },
      { t: "Documentos em PDF a cada retorno", d: "Emita receituário, atestado e demais documentos em PDF a partir de modelos, com dados do paciente preenchidos automaticamente e numeração de controle a cada atendimento." }
    ],
    fluxo: [
      "Cadastrar o paciente e criar o modelo de prontuário com os campos de exames e evolução.",
      "Programar a série de retornos do tratamento prolongado com recorrência.",
      "Registrar cada consulta, comparando com o histórico clínico das visitas anteriores.",
      "Emitir os documentos necessários e registrar a cobrança do atendimento."
    ],
    faqs: [
      { q: "O sistema interpreta resultado de espirometria ou exame de imagem?", a: "Não. O MenosClique registra os dados e arquivos que o profissional insere, mas não interpreta exames nem sugere conduta; essa análise é sempre feita pelo médico." },
      { q: "Como comparo a evolução do paciente entre exames de meses diferentes?", a: "O histórico clínico organiza as consultas, adendos e observações em uma linha do tempo por paciente, facilitando localizar e comparar registros de diferentes datas do tratamento." },
      { q: "Dá para reduzir faltas em tratamentos com muitos retornos?", a: "Sim. A confirmação de presença por WhatsApp envia um link para o paciente confirmar ou cancelar cada retorno, ajudando a reduzir faltas ao longo do tratamento prolongado." },
      { q: "É possível anexar exames de imagem ao cadastro do paciente?", a: "Sim. O cadastro do paciente permite anexar arquivos, que ficam disponíveis junto ao histórico clínico para consulta em qualquer atendimento futuro." }
    ]
  },
  "geriatra": {
    keywords: ["sistema para clínica de geriatria", "prontuário eletrônico geriatra", "agenda para geriatra", "software para consultório de geriatria", "gestão de clínica geriátrica", "sistema para controle de polifarmácia", "sistema para histórico clínico extenso"],
    intro: [
      "Pacientes geriátricos costumam ter histórico clínico extenso e várias medicações em uso simultâneo, o que exige um registro claro para não perder informações entre consultas e, muitas vezes, entre diferentes cuidadores ou responsáveis envolvidos no acompanhamento. Consolidar tudo isso sem um sistema estruturado é trabalhoso e arriscado.",
      "O MenosClique organiza esse histórico extenso no prontuário eletrônico personalizável, com modelos de campos próprios para registrar medicações e evolução, cadastro com responsável legal quando necessário, e histórico clínico em linha do tempo reunindo adendos e observações de anos de acompanhamento em um único lugar."
    ],
    recursos: [
      { t: "Cadastro com responsável legal", d: "Registre o responsável legal do paciente junto ao cadastro completo, mantendo os dados de contato disponíveis para toda a equipe da clínica quando o paciente precisar de apoio no acompanhamento." },
      { t: "Prontuário com campos para medicações e evolução", d: "Use um modelo de prontuário com seções próprias para listar medicações em uso e evolução clínica a cada consulta, organizando a polifarmácia de forma consistente." },
      { t: "Histórico clínico extenso em linha do tempo", d: "Reúna anos de consultas, adendos clínicos permanentes e observações datadas em uma linha do tempo única por paciente, facilitando revisar o caso completo a qualquer momento." },
      { t: "Agenda com recorrência para retornos frequentes", d: "Programe séries de retornos periódicos, comuns no acompanhamento geriátrico, e remaneje horários individuais arrastando o agendamento sem afetar toda a série." }
    ],
    fluxo: [
      "Cadastrar o paciente com dados completos e o responsável legal, quando houver.",
      "Criar o modelo de prontuário com os campos de medicações e evolução usados no acompanhamento.",
      "Registrar cada consulta revisando o histórico clínico extenso já existente.",
      "Programar os retornos periódicos com recorrência e emitir os documentos necessários."
    ],
    faqs: [
      { q: "O sistema avalia risco de interação entre as medicações do paciente?", a: "Não. O MenosClique registra as medicações informadas pelo profissional no prontuário, mas não faz nenhuma análise de risco ou interação; essa avaliação continua sendo clínica e feita pelo médico." },
      { q: "Como o responsável legal do paciente é registrado?", a: "O cadastro do paciente tem um campo específico para os dados do responsável legal, que ficam disponíveis junto às demais informações do paciente para toda a equipe autorizada." },
      { q: "É possível acompanhar um histórico clínico de muitos anos sem perder informação?", a: "Sim. O histórico clínico organiza consultas, adendos clínicos permanentes e observações datadas em uma linha do tempo contínua por paciente, preservando todo o acompanhamento realizado na clínica." },
      { q: "Dá para reduzir faltas em pacientes que dependem de terceiros para levá-los à consulta?", a: "Sim. A confirmação de presença por WhatsApp envia um link de confirmação que pode ser respondido pelo paciente ou por quem o acompanha, ajudando a reduzir faltas." }
    ]
  },

  // ──────────────────── Médica + Odontologia (grupo C) ────────────────────
  "clinico-geral": {
    keywords: ["sistema para clínica geral", "prontuário eletrônico para clínico geral", "agenda para consultório médico", "software de gestão para clínica médica", "sistema de agendamento para médico clínico geral", "gestão de consultório clínico geral", "prontuário eletrônico personalizável"],
    intro: [
      "Atender clínica geral significa alto volume de pacientes por dia, motivos variados e pouco tempo entre uma consulta e outra. Sem um sistema adequado, a recepção perde tempo remarcando por telefone, o prontuário em papel dificulta consultar o histórico rápido, e o financeiro do dia vira controle manual em planilha. O MenosClique organiza toda a rotina do consultório clínico geral em um só lugar, do agendamento ao recebimento.",
      "Com prontuário eletrônico personalizável, cada profissional monta seções e campos do jeito que atende, sem formulário engessado. As notas rápidas registram queixas e condutas em segundos entre um paciente e outro, enquanto a confirmação de presença por WhatsApp reduz faltas antes mesmo do dia da consulta. O financeiro por atendimento fecha a cobrança sem precisar sair da tela do paciente."
    ],
    recursos: [
      { t: "Prontuário eletrônico personalizável", d: "Monte modelos com seções e campos próprios para consulta clínica geral, sem depender de formulário fixo. Use favoritos clínicos para reaproveitar textos frequentes e mantenha o histórico completo do paciente disponível em segundos, mesmo em dias de agenda cheia." },
      { t: "Notas rápidas e adendos clínicos", d: "Registre queixas, condutas e orientações em poucos segundos entre um atendimento e outro. Adendos clínicos permanentes guardam informações importantes que não podem ser apagadas depois, mantendo o histórico do paciente confiável ao longo dos anos." },
      { t: "Confirmação de presença por WhatsApp", d: "Envie um link para o paciente confirmar ou cancelar a consulta antes do dia marcado. Menos faltas significa agenda mais previsível e menos horários vagos no meio do expediente." },
      { t: "Financeiro por atendimento", d: "Registre cobrança com desconto ou acréscimo, receba em Dinheiro, Pix, cartão ou transferência e emita recibo na hora, sem sair da tela do paciente. Recebimento em lote agiliza o fechamento do dia." }
    ],
    fluxo: [
      "Agende a consulta na agenda com visão por profissional ou por unidade.",
      "Confirme a presença do paciente pelo link de WhatsApp enviado.",
      "Registre a consulta no prontuário personalizável com notas rápidas ou modelo próprio.",
      "Receba o pagamento e emita o recibo direto na tela do atendimento."
    ],
    faqs: [
      { q: "O MenosClique substitui o prontuário em papel do consultório de clínica geral?", a: "Sim. O prontuário eletrônico é personalizável, com seções e campos próprios, notas rápidas e adendos clínicos permanentes, então o histórico completo do paciente fica disponível a qualquer momento, sem pasta física." },
      { q: "Dá para atender vários profissionais de clínica geral na mesma clínica?", a: "Sim. A agenda suporta múltiplos profissionais e visão por unidade, com permissões por cargo (Admin, Recepção, Financeiro, Profissional), então cada um vê e atua apenas no que precisa." },
      { q: "Como funciona a confirmação de presença por WhatsApp?", a: "O paciente recebe um link único onde confirma ou cancela a consulta. Isso reduz faltas sem precisar de ligação da recepção, e o status atualiza automaticamente na agenda." },
      { q: "É possível gerar receituário ou atestado pelo sistema?", a: "Sim, documentos em PDF a partir de modelos, com dados preenchidos automaticamente e numeração sequencial. A anulação de um documento emitido por engano fica registrada com auditoria." }
    ]
  },
  "mastologista": {
    keywords: ["sistema para clínica de mastologia", "prontuário eletrônico para mastologista", "software para consultório de mastologia", "gestão de clínica de mastologia", "agenda para mastologista", "sistema para acompanhamento de exames em mastologia", "imagem anotável para mastologia"],
    intro: [
      "A mastologia exige acompanhar exames de imagem e a evolução da paciente ao longo de meses ou anos, com histórico sensível que precisa ficar organizado e seguro. Perder o fio da evolução entre uma consulta e outra, ou não ter onde marcar uma região de interesse sobre uma imagem, compromete o acompanhamento. O MenosClique organiza consulta, histórico e financeiro da clínica de mastologia em um só sistema.",
      "A imagem anotável permite marcar regiões diretamente sobre a imagem da paciente e acompanhar a evolução ao longo do tempo, sempre disponível na ficha clínica. O prontuário eletrônico personalizável registra histórico familiar, achados de exame e conduta em campos próprios da especialidade, e os adendos clínicos permanentes preservam informações sensíveis sem risco de alteração posterior. Os dados ficam isolados por clínica, com acesso controlado por permissão de cargo."
    ],
    recursos: [
      { t: "Imagem anotável", d: "Marque regiões de interesse diretamente sobre a imagem da paciente e acompanhe a evolução ao longo das consultas. É um recurso permanente da paciente, sempre disponível na ficha para comparar registros anteriores e a evolução clínica." },
      { t: "Prontuário eletrônico personalizável", d: "Crie modelos com seções para histórico familiar, exames e conduta específicos da mastologia. Favoritos clínicos agilizam o preenchimento de achados recorrentes, mantendo o histórico completo organizado e acessível a cada retorno." },
      { t: "Adendos clínicos permanentes", d: "Registre informações clínicas relevantes de forma imutável, sem risco de edição posterior. Combinado às observações com data e hora, forma um histórico clínico confiável e auditável ao longo de todo o acompanhamento." },
      { t: "Cadastro completo com convênios e anexos", d: "Guarde dados da paciente, responsável legal quando necessário, convênios vinculados e arquivos anexos como laudos de exames, tudo reunido na mesma ficha, sem depender de pasta física ou pendrive." }
    ],
    fluxo: [
      "Cadastre a paciente com dados, convênio e arquivos de exames anexados.",
      "Registre a consulta no prontuário personalizável e marque achados na imagem anotável.",
      "Acompanhe a evolução comparando registros e imagens de consultas anteriores.",
      "Gere documentos em PDF como termo de consentimento a partir de modelo."
    ],
    faqs: [
      { q: "A imagem anotável serve para acompanhar exames de imagem da mama?", a: "Serve para marcar regiões de interesse sobre uma imagem e acompanhar a evolução visual ao longo do tempo. É um registro permanente da paciente, útil para comparar achados entre consultas — o sistema não interpreta nem processa a imagem clinicamente." },
      { q: "O histórico da paciente fica seguro e isolado de outras clínicas?", a: "Sim. Os dados são isolados por clínica e o acesso é controlado por permissão de cargo, seguindo boas práticas de proteção de dados (LGPD-friendly)." },
      { q: "Dá para anexar laudos de exames externos ao cadastro da paciente?", a: "Sim, o cadastro completo permite anexar arquivos, além de dados, responsável legal e convênios, tudo na mesma ficha." },
      { q: "O sistema faz laudo de exame de imagem?", a: "Não. O MenosClique é um sistema de gestão e registro — ele organiza a imagem anotável, o prontuário e os documentos, mas não realiza ato clínico nem laudo de exame." }
    ]
  },
  "nefrologista": {
    keywords: ["sistema para clínica de nefrologia", "prontuário eletrônico para nefrologista", "software para consultório de nefrologia", "gestão de clínica de nefrologia", "agenda para nefrologista", "sistema para acompanhamento de exames laboratoriais", "histórico clínico para paciente renal crônico"],
    intro: [
      "Acompanhar um paciente nefrológico significa reunir exames laboratoriais de várias datas, ajustes de conduta e evolução clínica que se estende por meses ou anos, muitas vezes em doença renal crônica. Sem um histórico organizado, comparar marcadores entre consultas vira trabalho manual de procurar papel antigo. O MenosClique concentra prontuário, arquivos e financeiro do paciente nefrológico em um único lugar.",
      "O prontuário eletrônico personalizável permite criar campos próprios para registrar exames e conduta a cada retorno, com histórico clínico por paciente sempre visível. Arquivos de exames laboratoriais ficam anexados diretamente ao cadastro do paciente, e os adendos clínicos permanentes preservam informações importantes de forma imutável, sem risco de perda ou alteração ao longo do acompanhamento."
    ],
    recursos: [
      { t: "Prontuário eletrônico personalizável", d: "Monte modelos com campos próprios para exames laboratoriais, função renal e conduta a cada retorno. O histórico clínico por paciente fica organizado por data, facilitando comparar a evolução ao longo do tratamento." },
      { t: "Arquivos anexados ao cadastro do paciente", d: "Anexe exames laboratoriais e outros documentos externos diretamente na ficha do paciente, reunindo tudo em um só lugar, sem depender de pasta física ou pendrive levado de consulta em consulta." },
      { t: "Adendos clínicos permanentes e observações com data/hora", d: "Registre informações clínicas relevantes de forma imutável e observações timestampadas a cada retorno, formando uma linha do tempo confiável do acompanhamento, essencial em tratamentos de longa duração." },
      { t: "Agenda com recorrência para retornos periódicos", d: "Configure séries de agendamento para retornos periódicos do paciente em acompanhamento contínuo, com confirmação de presença por WhatsApp reduzindo faltas em consultas de rotina." }
    ],
    fluxo: [
      "Cadastre o paciente e anexe os exames laboratoriais mais recentes.",
      "Registre a consulta no prontuário com campos próprios para função renal e conduta.",
      "Configure retornos recorrentes na agenda para o acompanhamento periódico.",
      "Consulte o histórico clínico completo a cada retorno para comparar a evolução."
    ],
    faqs: [
      { q: "Dá para anexar resultados de exames laboratoriais ao prontuário do paciente?", a: "Sim, o cadastro do paciente permite anexar arquivos como exames laboratoriais, reunidos junto com o histórico clínico, dados e convênios na mesma ficha." },
      { q: "O sistema calcula taxa de filtração glomerular ou outros índices renais?", a: "Não. O MenosClique não faz calculadora clínica nem ato clínico — ele registra e organiza os dados que o profissional insere, incluindo exames anexados e campos de conduta no prontuário." },
      { q: "Como configurar retornos periódicos para pacientes em acompanhamento contínuo?", a: "A agenda tem recorrência (séries), permitindo programar retornos periódicos automaticamente, com confirmação de presença por WhatsApp enviada antes de cada consulta." },
      { q: "O histórico do paciente fica disponível mesmo depois de anos de acompanhamento?", a: "Sim. O histórico clínico por paciente reúne prontuário, observações com data e hora e adendos clínicos permanentes, ficando acessível a qualquer momento durante todo o acompanhamento." }
    ]
  },
  "cirurgiao-plastico": {
    keywords: ["sistema para clínica de cirurgia plástica", "prontuário eletrônico para cirurgião plástico", "software para consultório de cirurgia plástica", "gestão financeira para clínica de cirurgia plástica", "imagem anotável antes e depois", "pacotes de procedimentos cirurgia plástica", "agenda para cirurgião plástico"],
    intro: [
      "Cirurgia plástica combina orçamentos que envolvem várias etapas, acompanhamento de evolução com imagens e um financeiro que precisa fechar exatamente como foi negociado com o paciente. Sem controle organizado, pacote fechado em várias parcelas, retorno de pós-operatório e comparação de imagens de evolução viram tarefas espalhadas em planilhas e pastas soltas. O MenosClique reúne agenda, prontuário, imagem e financeiro da clínica de cirurgia plástica em um só sistema.",
      "A imagem anotável guarda o registro visual do paciente e a evolução ao longo do acompanhamento, marcando regiões diretamente sobre a imagem. Pacotes por sessões organizam o orçamento fechado com o paciente, com saldo controlado e repasse por procedimento configurável em valor fixo ou percentual. O financeiro por atendimento cobre desconto, acréscimo e recebimento em lote das etapas do tratamento."
    ],
    recursos: [
      { t: "Imagem anotável", d: "Registre imagens do paciente e marque regiões diretamente sobre elas para acompanhar a evolução ao longo do tratamento. É um recurso permanente do paciente, disponível na ficha para comparar diferentes momentos do acompanhamento." },
      { t: "Pacotes por sessões", d: "Organize procedimentos fechados em pacote, com saldo de sessões controlado automaticamente a cada atendimento. Ideal para tratamentos com múltiplas etapas, evitando cobrar duas vezes ou perder o controle do que já foi usado." },
      { t: "Repasse por procedimento", d: "Configure o repasse de cada procedimento por profissional, em valor fixo ou percentual, sobrepondo a regra padrão quando necessário. O cálculo fica automático a cada atendimento realizado e pagamento recebido." },
      { t: "Financeiro por atendimento com desconto e acréscimo", d: "Registre cobrança com desconto ou acréscimo negociado, receba em Dinheiro, Pix, cartão de crédito/débito ou transferência, e emita recibo numerado automaticamente para cada etapa do procedimento." }
    ],
    fluxo: [
      "Cadastre o paciente e monte o pacote de sessões ou procedimento fechado.",
      "Agende as etapas do tratamento e envie confirmação de presença por WhatsApp.",
      "Registre a evolução no prontuário e marque a imagem anotável a cada retorno.",
      "Receba o pagamento de cada etapa e acompanhe o saldo do pacote."
    ],
    faqs: [
      { q: "É possível fechar um pacote de procedimento em várias etapas de pagamento?", a: "Sim, os pacotes por sessões controlam o saldo automaticamente, e o financeiro por atendimento permite receber cada etapa separadamente, com desconto ou acréscimo quando necessário." },
      { q: "A imagem anotável serve para fotos de antes e depois?", a: "Ela permite registrar imagens do paciente, marcar regiões sobre elas e acompanhar a evolução visual ao longo do tratamento — é um registro permanente de acompanhamento, não um recurso de edição ou diagnóstico de imagem." },
      { q: "Como funciona o repasse do cirurgião por procedimento realizado?", a: "O repasse pode ser configurado por procedimento e por profissional, em valor fixo ou percentual, sobrepondo a regra padrão quando necessário. O cálculo é automático a cada atendimento." },
      { q: "O sistema gera termo de consentimento para o procedimento?", a: "Sim, documentos em PDF a partir de modelo, como termo de consentimento, com dados preenchidos automaticamente e numeração sequencial, além de anulação auditada se necessário." }
    ]
  },
  "dentista": {
    keywords: ["sistema para clínica odontológica", "prontuário eletrônico para dentista", "odontograma interativo online", "software de gestão para consultório odontológico", "sistema de agenda para dentista", "controle financeiro para clínica odontológica", "plano recorrente odontologia"],
    intro: [
      "Odontologia exige registrar o plano de tratamento dente a dente e saber exatamente o que já foi feito em cada visita, além de organizar tratamentos longos com várias sessões. Controle em papel ou planilha faz perder o histórico de cada dente e dificulta acompanhar pacotes fechados com o paciente. O MenosClique reúne agenda, odontograma, prontuário e financeiro do consultório odontológico em um só sistema.",
      "O odontograma interativo registra o plano de tratamento e o que já foi executado dente a dente, direto na ficha do paciente. Pacotes por sessões ou plano recorrente organizam tratamentos longos e manutenções mensais, com saldo controlado e repasse por procedimento configurável por profissional. O financeiro por atendimento fecha cada etapa com desconto, acréscimo e recibo numerado automaticamente."
    ],
    recursos: [
      { t: "Odontograma interativo", d: "Registre o plano de tratamento dente a dente e marque o que já foi feito, diretamente na ficha do paciente. Fica sempre disponível para consulta em retornos futuros, sem depender de anotação avulsa em papel." },
      { t: "Pacotes por sessões ou plano recorrente", d: "Organize tratamentos com várias sessões em pacote, com saldo controlado automaticamente, ou configure plano recorrente (mensalidade) para manutenções periódicas, como limpeza ou acompanhamento ortodôntico, com cobrança mensal automática." },
      { t: "Repasse por procedimento", d: "Configure o repasse de cada procedimento por profissional, em valor fixo ou percentual, sobrepondo a regra padrão quando necessário. O cálculo é feito automaticamente a cada sessão gerada do pacote ou plano." },
      { t: "Documentos em PDF a partir de modelos", d: "Gere receituário, atestado, termo de consentimento e recibo com dados preenchidos automaticamente e numeração sequencial. A anulação de um documento emitido por engano fica registrada com auditoria." }
    ],
    fluxo: [
      "Cadastre o paciente e registre o plano de tratamento no odontograma.",
      "Monte o pacote de sessões ou plano recorrente do tratamento combinado.",
      "Agende as sessões e envie confirmação de presença por WhatsApp.",
      "Registre no odontograma o que foi executado e receba o pagamento da sessão."
    ],
    faqs: [
      { q: "O odontograma interativo serve para qual especialidade?", a: "É específico para odontologia — dentista, ortodontista e implantodontista. Registra o plano de tratamento dente a dente e o que já foi executado, direto na ficha do paciente." },
      { q: "Como funciona o plano recorrente para manutenções mensais?", a: "O plano recorrente gera cobrança mensal automática (mensalidade), ideal para manutenção ortodôntica ou acompanhamento periódico, com saldo e histórico de sessões controlados pelo sistema." },
      { q: "Dá para controlar quantas sessões já foram usadas de um pacote fechado?", a: "Sim, o pacote por sessões mantém o saldo controlado automaticamente a cada atendimento, evitando cobrar a mais ou perder o controle do que já foi consumido pelo paciente." },
      { q: "O sistema faz assinatura digital ICP-Brasil nos documentos?", a: "Não. Os documentos são gerados em PDF a partir de modelo, com numeração e anulação auditada, mas o MenosClique não oferece assinatura digital com certificado ICP-Brasil." }
    ]
  },
  "ortodontista": {
    keywords: ["sistema para clínica de ortodontia", "software para consultório de ortodontista", "plano recorrente para tratamento ortodôntico", "controle financeiro de mensalidade odontológica", "odontograma para ortodontia", "agenda para manutenção ortodôntica", "gestão de clínica odontológica"],
    intro: [
      "Tratamento ortodôntico se estende por meses ou anos, com manutenções mensais recorrentes e um financeiro que precisa acompanhar exatamente esse ritmo. Cobrar manutenção manualmente todo mês, remarcar atrasos e controlar quantas sessões já foram feitas em cada aparelho vira trabalho repetitivo sem sistema adequado. O MenosClique organiza agenda, odontograma e financeiro do tratamento ortodôntico do início ao fim.",
      "O plano recorrente gera cobrança mensal automática para manutenções, enquanto o odontograma interativo registra o plano de tratamento e o que já foi feito a cada visita. A agenda com recorrência programa as manutenções periódicas, e a confirmação de presença por WhatsApp reduz faltas que atrasam o cronograma do tratamento, mantendo o ritmo mensal combinado com o paciente."
    ],
    recursos: [
      { t: "Plano recorrente (mensalidade)", d: "Configure cobrança mensal automática para o tratamento ortodôntico, com repetição periódica sem precisar lançar manualmente todo mês. O financeiro acompanha o que foi pago e o que está pendente em cada mensalidade." },
      { t: "Odontograma interativo", d: "Registre o plano de tratamento ortodôntico dente a dente e marque o que já foi feito em cada manutenção, mantendo o histórico visual do tratamento sempre disponível na ficha do paciente." },
      { t: "Agenda com recorrência para manutenções periódicas", d: "Programe séries de manutenção mensal na agenda, com confirmação de presença por WhatsApp enviada antes de cada visita, reduzindo faltas que atrasam o andamento do tratamento." },
      { t: "Repasse por procedimento", d: "Configure o repasse do ortodontista por procedimento, em valor fixo ou percentual, calculado automaticamente por sessão gerada do plano recorrente, nunca pela parcela financeira, mas pelo atendimento efetivamente realizado." }
    ],
    fluxo: [
      "Cadastre o paciente e monte o plano recorrente da manutenção mensal.",
      "Registre o plano de tratamento inicial no odontograma interativo.",
      "Agende as manutenções recorrentes com confirmação de presença por WhatsApp.",
      "Registre o que foi feito a cada visita e acompanhe o financeiro do plano."
    ],
    faqs: [
      { q: "Como funciona a cobrança mensal do tratamento ortodôntico?", a: "O plano recorrente gera a cobrança mensal automaticamente, sem precisar lançar manualmente todo mês, e o financeiro mostra o que foi pago e o que está pendente em cada mensalidade do paciente." },
      { q: "O repasse do ortodontista é calculado pela parcela ou pela sessão?", a: "Pelo atendimento efetivamente realizado (sessão gerada), nunca pela parcela financeira do plano recorrente. Isso evita repassar por manutenções ainda não executadas." },
      { q: "Dá para acompanhar o histórico do aparelho em cada manutenção?", a: "Sim, o odontograma interativo registra o plano de tratamento e o que já foi feito a cada visita, ficando disponível na ficha do paciente durante todo o tratamento." },
      { q: "O sistema envia lembrete automático da manutenção mensal?", a: "A confirmação de presença por WhatsApp envia um link para o paciente confirmar ou cancelar a consulta agendada, ajudando a reduzir faltas nas manutenções recorrentes." }
    ]
  },
  "implantodontista": {
    keywords: ["sistema para clínica de implantodontia", "software para consultório de implantodontista", "controle financeiro de implante dentário por etapas", "odontograma para implantodontia", "pacotes de procedimentos odontológicos", "repasse por procedimento implante", "agenda para implantodontista"],
    intro: [
      "Tratamento de implante dentário acontece em etapas — cirurgia, cicatrização, prótese — cada uma com seu próprio financeiro e acompanhamento clínico. Sem controle organizado, é fácil perder de vista em qual fase o paciente está, o que já foi cobrado e o que falta receber de cada etapa. O MenosClique organiza odontograma, pacotes e financeiro do tratamento de implante fase a fase.",
      "O odontograma interativo registra o plano de tratamento dente a dente e marca o que já foi executado em cada fase do implante. Pacotes organizam as etapas do tratamento com saldo controlado, e o repasse por procedimento calcula automaticamente o valor de cada profissional envolvido em cada fase, em valor fixo ou percentual, sem precisar recalcular manualmente a cada atendimento."
    ],
    recursos: [
      { t: "Odontograma interativo", d: "Registre o plano de tratamento do implante dente a dente e marque cada fase já executada — cirurgia, cicatrização, prótese — mantendo o histórico visual completo sempre disponível na ficha do paciente." },
      { t: "Pacotes por sessões", d: "Organize as etapas do implante em pacote, com saldo controlado automaticamente a cada fase realizada. Evita cobrar duas vezes a mesma etapa ou perder o controle do que falta receber do paciente." },
      { t: "Repasse por procedimento", d: "Configure o repasse de cada fase do implante por profissional, em valor fixo ou percentual, sobrepondo a regra padrão quando necessário. O cálculo é automático a cada sessão gerada do pacote." },
      { t: "Financeiro por atendimento com recebimento em lote", d: "Receba cada fase do tratamento separadamente, com desconto ou acréscimo quando negociado, ou use o recebimento em lote para quitar várias etapas pendentes do mesmo paciente de uma vez." }
    ],
    fluxo: [
      "Cadastre o paciente e monte o pacote com as fases do tratamento de implante.",
      "Registre o plano no odontograma indicando os dentes envolvidos em cada fase.",
      "Agende cada etapa e registre no odontograma o que foi executado.",
      "Receba o pagamento de cada fase e acompanhe o saldo do pacote."
    ],
    faqs: [
      { q: "Como acompanhar em qual fase do implante o paciente está?", a: "O odontograma interativo registra o plano de tratamento dente a dente e marca o que já foi executado, então fica claro em qual fase — cirurgia, cicatrização ou prótese — o paciente se encontra." },
      { q: "É possível cobrar cada fase do implante separadamente?", a: "Sim, os pacotes por sessões organizam as etapas com saldo controlado, e o financeiro por atendimento permite receber cada fase separadamente, com desconto ou acréscimo quando necessário." },
      { q: "Como funciona o repasse do implantodontista por fase realizada?", a: "O repasse pode ser configurado por procedimento e por profissional, em valor fixo ou percentual, calculado automaticamente a cada sessão gerada do pacote, evitando repasse por etapas ainda não executadas." },
      { q: "O sistema integra com laboratório de prótese?", a: "Não. O MenosClique não faz integração com laboratório ou PACS — ele organiza o odontograma, os pacotes e o financeiro do tratamento, mas não se conecta a sistemas de laboratório externos." }
    ]
  },

  // ─────────────────── Saúde e bem-estar (grupo D) ───────────────────
  "psicologo": {
    keywords: ["sistema para psicólogo", "prontuário psicológico online", "agenda para consultório de psicologia", "software para psicólogo", "gestão de pacotes de sessões psicologia", "prontuário eletrônico sigiloso", "sistema de gestão para psicólogos"],
    intro: [
      "Quem atende em psicologia lida com uma rotina de sessões recorrentes, muitas vezes vendidas em pacotes, e precisa manter cada evolução registrada com sigilo. Planilhas soltas e prontuário em papel dificultam acompanhar histórico, controlar sessões restantes e organizar a agenda sem furos. O MenosClique foi pensado para esse fluxo: cadastro completo do paciente, agenda com bloqueios e recorrência, e um prontuário eletrônico que guarda cada anotação com data e hora, sem misturar registros de pacientes diferentes.",
      "No prontuário eletrônico personalizável você monta modelos com as seções que usa no consultório e registra notas rápidas ou adendos clínicos permanentes a cada sessão. Para acompanhamentos estruturados, o plano terapêutico ABA organiza objetivos e metas por paciente. E quando o atendimento é vendido em pacote de sessões, o sistema controla o saldo automaticamente, evitando cobrar ou atender sessões a mais ou a menos."
    ],
    recursos: [
      { t: "Prontuário eletrônico personalizável", d: "Monte modelos com as seções e campos que fazem sentido para sua abordagem clínica. Registre notas rápidas em cada sessão, marque trechos como favoritos clínicos para reutilizar e adicione adendos clínicos permanentes quando precisar complementar um registro já salvo, sempre com data e hora." },
      { t: "Pacotes de sessões", d: "Venda atendimentos em pacotes por sessões ou como plano recorrente mensal. O sistema controla o saldo de sessões restantes automaticamente a cada atendimento, evitando planilha paralela para saber quantas sessões o paciente ainda tem contratadas." },
      { t: "Plano terapêutico ABA", d: "Para acompanhamentos com abordagem comportamental, estruture objetivos e metas por paciente dentro do plano terapêutico ABA, registrando a evolução de cada sessão de forma organizada e mantendo tudo vinculado ao histórico clínico do paciente no mesmo sistema." },
      { t: "Confirmação de presença por WhatsApp", d: "Envie um link de confirmação para o paciente confirmar ou cancelar a sessão agendada. Isso ajuda a reduzir faltas e permite reorganizar a agenda com antecedência quando alguém sinaliza que não vai comparecer." }
    ],
    fluxo: [
      "Cadastre o paciente com dados, responsável legal (quando houver) e convênio, se aplicável.",
      "Configure o pacote de sessões ou o plano recorrente e agende a série de atendimentos na agenda.",
      "Registre a evolução de cada sessão no prontuário eletrônico, usando modelos, notas rápidas ou adendos clínicos.",
      "Acompanhe o saldo de sessões e gere recibos e documentos em PDF a partir de modelos, com numeração automática."
    ],
    faqs: [
      { q: "O prontuário do MenosClique é sigiloso?", a: "Os dados são isolados por clínica e o acesso ao prontuário segue as permissões de cada usuário. O psicólogo registra sessões, notas e adendos em um histórico organizado por paciente, sem acesso cruzado entre clínicas diferentes." },
      { q: "Consigo controlar quantas sessões do pacote já foram usadas?", a: "Sim. Ao vender um pacote de sessões ou um plano recorrente mensal, o sistema controla o saldo de sessões automaticamente conforme os atendimentos são registrados na agenda, mostrando quantas sessões ainda restam para o paciente, sem precisar manter uma planilha separada para isso." },
      { q: "É possível corrigir uma anotação de sessão anterior?", a: "Anotações já registradas podem ser complementadas por meio de um adendo clínico, que é permanente e imutável, ficando vinculado à anotação original com data e hora. Isso preserva o histórico completo do atendimento sem apagar o que já foi escrito antes." },
      { q: "O sistema envia lembrete de sessão para o paciente?", a: "O MenosClique gera um link de confirmação de presença para envio por WhatsApp, em que o próprio paciente confirma ou cancela a sessão agendada. Isso ajuda a reduzir faltas e dá tempo para reorganizar a agenda quando alguém avisa que não vai comparecer." }
    ]
  },
  "psicanalista": {
    keywords: ["sistema para psicanalista", "agenda para consultório de psicanálise", "prontuário sigiloso psicanálise", "software para psicanalista", "gestão financeira consultório psicanálise", "sistema de gestão para psicanalistas"],
    intro: [
      "A psicanálise trabalha com sessões regulares ao longo de meses ou anos, e manter esse histórico organizado com sigilo é essencial. Muitos consultórios ainda dependem de agenda de papel e anotações soltas, o que dificulta localizar o histórico de um paciente ou controlar pagamentos recorrentes. O MenosClique reúne agenda, prontuário e financeiro em um só lugar, com dados isolados por clínica e controle de acesso por usuário.",
      "A agenda permite criar séries de sessões recorrentes e bloquear horários fixos que não devem ser ocupados. O prontuário eletrônico personalizável guarda observações com data e hora e permite adendos clínicos permanentes quando é preciso complementar um registro sem alterar o que já foi escrito. No financeiro, cada sessão pode gerar cobrança, pagamento e recibo em PDF, com controle de estorno auditável."
    ],
    recursos: [
      { t: "Agenda com sessões recorrentes", d: "Configure séries de sessões no mesmo horário e dia da semana, com bloqueios de horário para os períodos que não devem ser ocupados. Remarcações pontuais podem ser feitas arrastando o atendimento na agenda, sem quebrar a série." },
      { t: "Prontuário eletrônico com registro sigiloso", d: "Registre observações de cada sessão com data e hora automáticas. Use adendos clínicos permanentes para complementar um registro já salvo sem apagar o conteúdo original, mantendo um histórico íntegro e organizado por paciente." },
      { t: "Financeiro por sessão", d: "Gere cobrança para cada sessão, registre pagamentos em dinheiro, Pix, cartão ou transferência e emita recibo em PDF com numeração automática. Estornos ficam registrados com auditoria, preservando o histórico financeiro do paciente." },
      { t: "Confirmação de presença por WhatsApp", d: "Envie o link de confirmação de presença para o paciente confirmar ou cancelar a sessão agendada, reduzindo faltas e permitindo reorganizar a agenda quando alguém avisa com antecedência que não vai comparecer." }
    ],
    fluxo: [
      "Cadastre o paciente e registre convênio ou responsável legal, se houver.",
      "Crie a série de sessões recorrentes na agenda, no dia e horário combinados.",
      "Registre observações de cada sessão no prontuário eletrônico, com adendos quando necessário.",
      "Gere a cobrança, registre o pagamento e emita o recibo em PDF de cada sessão."
    ],
    faqs: [
      { q: "É possível manter sigilo entre os registros de diferentes pacientes?", a: "Sim. Cada prontuário é organizado individualmente por paciente e os dados ficam isolados por clínica, com acesso controlado por permissões de usuário. Os registros de sessão ficam vinculados apenas ao paciente correspondente, sem mistura entre históricos." },
      { q: "Consigo alterar uma anotação de sessão já salva sem apagar o que foi escrito antes?", a: "Sim, usando o adendo clínico, um registro permanente que complementa a anotação original com data e hora, sem sobrescrever ou apagar o conteúdo já salvo. O histórico completo do atendimento fica preservado." },
      { q: "Como funciona a cobrança de sessões recorrentes?", a: "Cada sessão gerada pela recorrência pode ter uma cobrança própria, com pagamento registrado individualmente em dinheiro, Pix, cartão ou transferência. Também é possível emitir recibo em PDF para cada pagamento, com numeração automática." },
      { q: "O paciente recebe algum aviso antes da sessão?", a: "É possível enviar um link de confirmação de presença por WhatsApp, em que o paciente confirma ou cancela a sessão. Isso ajuda a reduzir faltas e dá tempo para reorganizar o horário quando necessário." }
    ]
  },
  "fisioterapeuta": {
    keywords: ["sistema para fisioterapeuta", "software para clínica de fisioterapia", "prontuário eletrônico fisioterapia", "gestão de pacotes de sessões fisioterapia", "agenda para fisioterapeuta", "sistema de gestão para clínica de fisioterapia", "controle de sessões fisioterapia"],
    intro: [
      "Consultórios e clínicas de fisioterapia trabalham majoritariamente com pacotes de sessões, e controlar quantas sessões cada paciente já usou, quantas restam e como está a evolução funcional é parte do dia a dia. Fazer isso em planilhas separadas da agenda gera retrabalho e risco de erro. O MenosClique junta agenda, prontuário e financeiro em um único sistema, com controle automático de saldo de sessões.",
      "Ao vender um pacote de sessões ou um plano recorrente mensal, o sistema controla o saldo automaticamente a cada atendimento registrado. No prontuário eletrônico personalizável, é possível montar modelos com os campos usados na avaliação funcional e registrar a evolução de cada sessão, com notas rápidas e adendos clínicos quando for preciso complementar um registro já salvo."
    ],
    recursos: [
      { t: "Pacotes de sessões e planos recorrentes", d: "Venda atendimentos por pacote de sessões avulsas ou como plano recorrente mensal. O saldo de sessões é controlado automaticamente a cada atendimento, evitando planilha paralela para saber quantas sessões o paciente ainda tem contratadas." },
      { t: "Prontuário eletrônico personalizável", d: "Monte modelos com as seções e campos usados na avaliação e evolução funcional de cada paciente. Registre notas rápidas a cada sessão e use favoritos clínicos para agilizar o preenchimento de itens recorrentes na rotina." },
      { t: "Repasse por procedimento", d: "Configure o repasse de cada fisioterapeuta por procedimento, em valor fixo ou percentual, com possibilidade de sobrepor a regra padrão para um profissional específico. O cálculo considera as sessões geradas do pacote." },
      { t: "Confirmação de presença por WhatsApp", d: "Envie o link de confirmação para o paciente confirmar ou cancelar a sessão agendada. Reduz faltas em tratamentos com frequência semanal e ajuda a reorganizar a agenda quando alguém sinaliza ausência com antecedência." }
    ],
    fluxo: [
      "Cadastre o paciente e o pacote de sessões ou plano recorrente contratado.",
      "Agende a série de sessões na agenda, respeitando a frequência combinada com o paciente.",
      "Registre a evolução funcional de cada sessão no prontuário eletrônico, usando o modelo configurado.",
      "Acompanhe o saldo de sessões restantes e o repasse por procedimento gerado a cada atendimento."
    ],
    faqs: [
      { q: "O sistema avisa quando o pacote de sessões está acabando?", a: "O saldo de sessões do pacote fica sempre visível e é atualizado automaticamente a cada atendimento registrado, permitindo acompanhar quantas sessões restam e planejar a renovação do pacote com o paciente antes que ele termine." },
      { q: "Como funciona o repasse do fisioterapeuta em sessões de pacote?", a: "O repasse é calculado por procedimento, em valor fixo ou percentual, considerando as sessões efetivamente geradas do pacote. É possível configurar uma regra padrão e sobrepor o valor para um profissional específico quando necessário." },
      { q: "Consigo registrar a evolução funcional de cada sessão separadamente?", a: "Sim. O prontuário eletrônico permite montar um modelo com os campos usados na avaliação funcional e registrar notas a cada sessão, mantendo o histórico de evolução organizado e disponível para consulta em qualquer atendimento futuro." },
      { q: "O sistema serve para clínica com mais de um fisioterapeuta?", a: "Sim. O MenosClique suporta múltiplos profissionais, múltiplas unidades e permissões por cargo, permitindo que cada fisioterapeuta veja sua própria agenda e que a recepção tenha visão consolidada de todos os atendimentos da clínica." }
    ]
  },
  "nutricionista": {
    keywords: ["sistema para nutricionista", "prontuário eletrônico nutrição", "software para consultório de nutrição", "agenda para nutricionista", "registro de evolução nutricional", "sistema de gestão para nutricionista", "controle de retorno nutricional"],
    intro: [
      "O acompanhamento nutricional depende de registrar medidas e evolução do paciente ao longo de várias consultas, muitas vezes espaçadas por semanas. Sem um prontuário organizado, fica difícil comparar dados de consultas anteriores durante o retorno. O MenosClique reúne cadastro do paciente, agenda e prontuário eletrônico em um só sistema, com histórico organizado por data para cada consulta registrada.",
      "No prontuário eletrônico personalizável, o nutricionista monta um modelo com os campos de medidas e evolução que usa na rotina do consultório, preenchendo isso a cada retorno. A confirmação de presença por WhatsApp ajuda a reduzir faltas em consultas de acompanhamento, e o financeiro por atendimento permite registrar cobrança, pagamento e recibo de cada consulta, inclusive quando vendida em pacote de sessões."
    ],
    recursos: [
      { t: "Prontuário eletrônico personalizável", d: "Crie um modelo próprio com as seções e campos usados para registrar medidas, hábitos alimentares e evolução do paciente. A cada retorno, o histórico de consultas anteriores fica disponível para consulta e comparação dentro do mesmo prontuário." },
      { t: "Notas rápidas e favoritos clínicos", d: "Registre observações rápidas durante a consulta sem precisar montar um modelo completo, e use favoritos clínicos para reaproveitar orientações ou observações que se repetem entre pacientes com perfil semelhante, agilizando o atendimento." },
      { t: "Pacotes de sessões", d: "Venda o acompanhamento nutricional em pacote de sessões, com o sistema controlando automaticamente o saldo de consultas restantes a cada atendimento registrado, sem depender de planilha paralela para saber quantas consultas o paciente ainda tem." },
      { t: "Confirmação de presença por WhatsApp", d: "Envie o link de confirmação para o paciente confirmar ou cancelar a consulta de retorno agendada. Ajuda a reduzir faltas em acompanhamentos de longo prazo, com consultas espaçadas por semanas ou meses." }
    ],
    fluxo: [
      "Cadastre o paciente com dados pessoais e, se houver, convênio vinculado.",
      "Configure o modelo de prontuário com os campos de medidas e evolução usados na rotina.",
      "Agende a consulta e, a cada retorno, registre as novas medidas no prontuário eletrônico.",
      "Consulte o histórico de consultas anteriores para acompanhar a evolução do paciente ao longo do tempo."
    ],
    faqs: [
      { q: "Consigo comparar as medidas de consultas anteriores durante o retorno?", a: "Sim. Cada consulta registrada no prontuário eletrônico fica organizada por data, permitindo abrir o histórico do paciente e consultar as medidas e observações de atendimentos anteriores durante a consulta atual." },
      { q: "É possível personalizar os campos de medidas do prontuário?", a: "Sim. O prontuário eletrônico é personalizável: o nutricionista monta o modelo com as seções e campos que usa na rotina, como peso, circunferências e hábitos alimentares, e reaproveita esse modelo em todas as consultas." },
      { q: "O sistema controla consultas vendidas em pacote?", a: "Sim. Ao vender o acompanhamento em pacote de sessões, o saldo de consultas restantes é controlado automaticamente a cada atendimento registrado, sem precisar de planilha separada para acompanhar quantas consultas o paciente ainda tem contratadas." },
      { q: "O paciente recebe lembrete do retorno agendado?", a: "É possível enviar um link de confirmação de presença por WhatsApp, em que o paciente confirma ou cancela o retorno agendado, ajudando a reduzir faltas em acompanhamentos com consultas espaçadas por semanas ou meses." }
    ]
  },
  "fonoaudiologo": {
    keywords: ["sistema para fonoaudiólogo", "software para clínica de fonoaudiologia", "prontuário eletrônico fonoaudiologia", "gestão de pacotes de sessões fonoaudiologia", "agenda para fonoaudiólogo", "sistema de gestão para fonoaudiologia", "controle de sessões fonoaudiologia"],
    intro: [
      "Atendimentos de fonoaudiologia costumam acontecer em sessões semanais, vendidas em pacotes, com evolução registrada terapia após terapia. Controlar saldo de sessões em planilha separada da agenda aumenta o risco de erro e retrabalho. O MenosClique junta agenda, prontuário e financeiro em um só sistema, com saldo de sessões atualizado automaticamente a cada atendimento.",
      "O prontuário eletrônico personalizável permite montar um modelo com os campos usados na avaliação e evolução fonoaudiológica, registrando notas a cada sessão. Para acompanhamentos estruturados por objetivos, o plano terapêutico ABA organiza metas por paciente. E a confirmação de presença por WhatsApp ajuda a reduzir faltas em tratamentos com frequência semanal."
    ],
    recursos: [
      { t: "Pacotes de sessões", d: "Venda o tratamento fonoaudiológico em pacote de sessões, com o saldo controlado automaticamente a cada atendimento registrado na agenda. Isso evita depender de planilha paralela para saber quantas sessões o paciente ainda tem contratadas." },
      { t: "Plano terapêutico ABA", d: "Para acompanhamentos com abordagem comportamental, estruture objetivos e metas por paciente dentro do plano terapêutico ABA, registrando a evolução de cada sessão de forma organizada e vinculada ao histórico clínico do paciente." },
      { t: "Prontuário eletrônico personalizável", d: "Monte um modelo com os campos usados na avaliação e evolução fonoaudiológica, registrando notas rápidas a cada sessão. Favoritos clínicos agilizam o preenchimento de observações que se repetem entre diferentes pacientes em tratamento." },
      { t: "Confirmação de presença por WhatsApp", d: "Envie o link de confirmação para o paciente ou responsável confirmar ou cancelar a sessão agendada. Reduz faltas em tratamentos de frequência semanal, comuns em terapias infantis, e ajuda a reorganizar a agenda com antecedência." }
    ],
    fluxo: [
      "Cadastre o paciente, o responsável legal quando for atendimento infantil, e o pacote de sessões.",
      "Agende a série de sessões semanais na agenda, respeitando a frequência do tratamento.",
      "Registre a evolução de cada sessão no prontuário eletrônico, usando o plano terapêutico ABA quando aplicável.",
      "Acompanhe o saldo de sessões restantes e emita o recibo de cada pagamento registrado."
    ],
    faqs: [
      { q: "O sistema serve para atendimento infantil, com responsável legal cadastrado?", a: "Sim. O cadastro do paciente permite registrar o responsável legal, útil em atendimentos infantis. A confirmação de presença por WhatsApp e os documentos gerados também podem considerar essa informação no preenchimento automático." },
      { q: "Como funciona o controle de sessões do pacote?", a: "Ao vender um pacote de sessões, o saldo é controlado automaticamente conforme os atendimentos são registrados na agenda, mostrando quantas sessões ainda restam para o paciente, sem depender de planilha separada para esse controle." },
      { q: "É possível registrar objetivos e metas do tratamento?", a: "Sim, por meio do plano terapêutico ABA, voltado a acompanhamentos com abordagem comportamental. Ele organiza objetivos e metas por paciente e permite registrar a evolução de cada sessão de forma estruturada dentro do prontuário." },
      { q: "O paciente ou responsável recebe aviso antes da sessão?", a: "É possível enviar um link de confirmação de presença por WhatsApp para o paciente ou responsável confirmar ou cancelar a sessão agendada, o que ajuda a reduzir faltas em tratamentos com frequência semanal." }
    ]
  },
  "terapeuta-ocupacional": {
    keywords: ["sistema para terapeuta ocupacional", "software para clínica de terapia ocupacional", "prontuário eletrônico terapia ocupacional", "gestão de pacotes de sessões terapia ocupacional", "agenda para terapeuta ocupacional", "sistema de gestão para terapia ocupacional", "plano terapêutico ABA"],
    intro: [
      "Terapia ocupacional trabalha com acompanhamento contínuo, sessões recorrentes e, em muitos casos, objetivos e metas definidos por paciente. Registrar isso em papel ou planilha dificulta acompanhar a evolução ao longo do tratamento. O MenosClique reúne agenda, prontuário e financeiro em um único sistema, com o controle de sessões vinculado diretamente ao atendimento registrado.",
      "O plano terapêutico ABA organiza objetivos e metas por paciente para acompanhamentos com abordagem comportamental, muito usado nesse tipo de terapia. O prontuário eletrônico personalizável guarda a evolução de cada sessão com notas rápidas e adendos clínicos. E o controle de pacotes de sessões mantém o saldo sempre atualizado a cada atendimento."
    ],
    recursos: [
      { t: "Plano terapêutico ABA", d: "Estruture objetivos e metas por paciente dentro do plano terapêutico ABA, próprio para acompanhamentos com abordagem comportamental. Cada sessão pode registrar a evolução em relação às metas definidas, mantendo tudo vinculado ao histórico do paciente." },
      { t: "Pacotes de sessões", d: "Venda o acompanhamento em pacote de sessões, com o saldo controlado automaticamente a cada atendimento registrado na agenda. Isso evita depender de planilha paralela para saber quantas sessões o paciente ainda tem contratadas." },
      { t: "Prontuário eletrônico personalizável", d: "Monte um modelo com as seções e campos usados na avaliação e evolução do paciente. Registre notas rápidas a cada sessão e use adendos clínicos permanentes para complementar um registro já salvo sem apagar o conteúdo original." },
      { t: "Confirmação de presença por WhatsApp", d: "Envie o link de confirmação para o paciente ou responsável confirmar ou cancelar a sessão agendada. Reduz faltas em tratamentos contínuos e ajuda a reorganizar a agenda quando alguém sinaliza ausência com antecedência." }
    ],
    fluxo: [
      "Cadastre o paciente, responsável legal quando aplicável, e defina o pacote de sessões contratado.",
      "Configure o plano terapêutico ABA com os objetivos e metas definidos para o tratamento.",
      "Registre a evolução de cada sessão no prontuário eletrônico, em relação às metas estabelecidas.",
      "Acompanhe o saldo de sessões restantes e a evolução do paciente ao longo do tratamento."
    ],
    faqs: [
      { q: "Como funciona o registro de objetivos e metas do tratamento?", a: "O plano terapêutico ABA organiza objetivos e metas por paciente, próprio para acompanhamentos com abordagem comportamental. A cada sessão, é possível registrar a evolução em relação às metas definidas, mantendo o histórico completo dentro do prontuário." },
      { q: "O sistema controla quantas sessões do pacote já foram usadas?", a: "Sim. Ao vender um pacote de sessões, o saldo é controlado automaticamente conforme os atendimentos são registrados na agenda, mostrando quantas sessões ainda restam para o paciente, sem depender de planilha separada." },
      { q: "Consigo complementar um registro de sessão sem apagar o que já foi escrito?", a: "Sim, usando o adendo clínico, um registro permanente e imutável que complementa a anotação original com data e hora, sem sobrescrever o conteúdo já salvo. O histórico completo do atendimento fica preservado." },
      { q: "O sistema serve para clínica com mais de um terapeuta ocupacional?", a: "Sim. O MenosClique suporta múltiplos profissionais, múltiplas unidades e permissões por cargo, permitindo que cada terapeuta veja sua própria agenda e que a recepção tenha visão consolidada de todos os atendimentos da clínica." }
    ]
  },
  "acupunturista": {
    keywords: ["sistema para acupunturista", "software para clínica de acupuntura", "agenda para acupuntura", "controle de pacotes de sessões acupuntura", "prontuário eletrônico acupuntura", "sistema de gestão para acupuntura", "controle de retorno acupuntura"],
    intro: [
      "Tratamentos de acupuntura costumam ser vendidos em pacotes de sessões, com retornos frequentes ao longo de semanas. Controlar quantas sessões já foram usadas e organizar os retornos em planilha separada da agenda gera retrabalho. O MenosClique junta agenda, prontuário e financeiro em um só sistema, com o saldo de sessões atualizado automaticamente a cada atendimento registrado.",
      "Ao vender um pacote de sessões, o sistema controla o saldo automaticamente conforme os atendimentos acontecem. A agenda permite criar séries de sessões recorrentes, respeitando a frequência combinada com o paciente, e a confirmação de presença por WhatsApp ajuda a reduzir faltas nos retornos. O prontuário eletrônico registra a evolução de cada sessão com notas rápidas."
    ],
    recursos: [
      { t: "Pacotes de sessões", d: "Venda o tratamento em pacote de sessões, com o saldo controlado automaticamente a cada atendimento registrado na agenda. Isso evita depender de planilha paralela para saber quantas sessões o paciente ainda tem contratadas em cada pacote." },
      { t: "Agenda com sessões recorrentes", d: "Configure séries de sessões no mesmo dia e horário da semana, respeitando a frequência combinada com o paciente. Remarcações pontuais podem ser feitas arrastando o atendimento na agenda, sem quebrar o restante da série." },
      { t: "Prontuário eletrônico personalizável", d: "Registre a evolução de cada sessão com notas rápidas, mantendo o histórico organizado por data e disponível para consulta em qualquer retorno futuro. Use favoritos clínicos para agilizar observações que se repetem entre atendimentos." },
      { t: "Confirmação de presença por WhatsApp", d: "Envie o link de confirmação para o paciente confirmar ou cancelar a sessão agendada. Reduz faltas em tratamentos com retornos frequentes e ajuda a reorganizar a agenda quando alguém sinaliza ausência com antecedência." }
    ],
    fluxo: [
      "Cadastre o paciente e configure o pacote de sessões contratado para o tratamento.",
      "Agende a série de sessões recorrentes na agenda, respeitando a frequência dos retornos.",
      "Registre a evolução de cada sessão no prontuário eletrônico, com notas rápidas.",
      "Acompanhe o saldo de sessões restantes e emita o recibo de cada pagamento registrado."
    ],
    faqs: [
      { q: "O sistema controla quantas sessões do pacote já foram usadas?", a: "Sim. Ao vender um pacote de sessões, o saldo é controlado automaticamente conforme os atendimentos são registrados na agenda, mostrando quantas sessões ainda restam para o paciente, sem depender de planilha separada para esse controle." },
      { q: "Consigo agendar os retornos com frequência fixa, toda semana no mesmo horário?", a: "Sim. A agenda permite criar séries de sessões recorrentes no mesmo dia e horário da semana. Remarcações pontuais podem ser feitas arrastando o atendimento para outro horário, sem precisar recriar a série inteira." },
      { q: "É possível registrar a evolução do paciente a cada sessão?", a: "Sim. O prontuário eletrônico permite registrar notas a cada sessão, mantendo o histórico organizado por data. Isso facilita consultar a evolução do tratamento durante o retorno seguinte, sem depender de anotações em papel." },
      { q: "O paciente recebe aviso antes de cada retorno?", a: "É possível enviar um link de confirmação de presença por WhatsApp, em que o paciente confirma ou cancela a sessão agendada, o que ajuda a reduzir faltas em tratamentos com retornos frequentes." }
    ]
  },
  "esteticista": {
    keywords: ["sistema para esteticista", "software para clínica de estética", "controle de pacotes de procedimentos estéticos", "antes e depois estética sistema", "agenda para clínica de estética", "sistema de gestão para estética", "prontuário eletrônico estética"],
    intro: [
      "Clínicas de estética costumam vender procedimentos em pacotes e precisam acompanhar a evolução visual do paciente ao longo das sessões. Fazer esse controle em planilha separada da agenda, com fotos soltas em pastas, dificulta mostrar resultado ao paciente e saber quantas sessões restam. O MenosClique junta agenda, prontuário e financeiro em um único sistema, com controle automático de saldo de pacotes.",
      "A imagem anotável permite marcar regiões e acompanhar a evolução visual do paciente entre sessões, útil para antes e depois. O saldo de sessões do pacote é controlado automaticamente a cada atendimento registrado, e o financeiro por atendimento permite registrar cobrança, pagamento em diferentes formas e recibo em PDF de cada procedimento realizado."
    ],
    recursos: [
      { t: "Imagem anotável", d: "Marque regiões em uma imagem do paciente e acompanhe a evolução visual entre sessões, como em um antes e depois. A imagem fica permanente no cadastro do paciente e pode ser retomada em atendimentos futuros para comparação." },
      { t: "Pacotes de procedimentos", d: "Venda procedimentos estéticos em pacote de sessões, com o saldo controlado automaticamente a cada atendimento registrado na agenda. Isso evita depender de planilha paralela para saber quantas sessões do pacote o paciente ainda tem." },
      { t: "Financeiro por atendimento", d: "Registre cobrança com desconto ou acréscimo, pagamento em dinheiro, Pix, cartão de crédito ou débito, ou transferência, e emita recibo em PDF com numeração automática para cada procedimento realizado na clínica." },
      { t: "Confirmação de presença por WhatsApp", d: "Envie o link de confirmação para o paciente confirmar ou cancelar a sessão agendada. Reduz faltas em pacotes de procedimentos com várias sessões marcadas e ajuda a reorganizar a agenda com antecedência." }
    ],
    fluxo: [
      "Cadastre o paciente e configure o pacote de procedimentos contratado.",
      "Agende as sessões do pacote na agenda, no espaçamento combinado com o paciente.",
      "Registre a evolução visual em uma imagem anotável a cada sessão realizada.",
      "Acompanhe o saldo de sessões restantes e emita o recibo de cada pagamento registrado."
    ],
    faqs: [
      { q: "Consigo mostrar o antes e depois para o paciente dentro do sistema?", a: "Sim, por meio da imagem anotável, um recurso permanente vinculado ao cadastro do paciente. É possível marcar regiões na imagem e acompanhar a evolução visual entre sessões, retomando a mesma imagem em atendimentos futuros." },
      { q: "O sistema controla quantas sessões do pacote já foram usadas?", a: "Sim. Ao vender um pacote de procedimentos, o saldo de sessões é controlado automaticamente conforme os atendimentos são registrados na agenda, mostrando quantas sessões ainda restam para o paciente, sem depender de planilha separada." },
      { q: "Quais formas de pagamento o sistema aceita registrar?", a: "É possível registrar pagamentos em dinheiro, Pix, cartão de crédito, cartão de débito ou transferência bancária. Cada pagamento pode gerar um recibo em PDF com numeração automática, e estornos ficam registrados de forma auditável." },
      { q: "O paciente recebe aviso antes de cada sessão do pacote?", a: "É possível enviar um link de confirmação de presença por WhatsApp, em que o paciente confirma ou cancela a sessão agendada, ajudando a reduzir faltas em pacotes de procedimentos com várias sessões marcadas." }
    ]
  }
};
