// Concorrentes para páginas "Alternativa ao [X]" (SEO de fundo de funil).
// IMPORTANTE: conteúdo honesto. Não afirmamos nada falso sobre o concorrente — as
// páginas focam nas FORÇAS REAIS do MenosClique e num posicionamento justo. O oneLiner
// é uma descrição neutra e pública do concorrente.

export interface Concorrente {
  slug: string;
  nome: string;
  oneLiner: string;
}

export const concorrentes: Concorrente[] = [
  { slug: "iclinic", nome: "iClinic", oneLiner: "um dos sistemas de gestão para clínicas mais conhecidos do Brasil" },
  { slug: "feegow", nome: "Feegow", oneLiner: "um sistema de gestão voltado a clínicas e operadoras" },
  { slug: "amplimed", nome: "Amplimed", oneLiner: "um sistema de gestão para clínicas e consultórios" },
  { slug: "hidoctor", nome: "HiDoctor", oneLiner: "um software de prontuário e gestão para consultórios" },
  { slug: "ninsaude", nome: "Ninsaúde", oneLiner: "uma plataforma de gestão para clínicas e consultórios" },
  { slug: "shosp", nome: "Shosp", oneLiner: "um sistema de gestão e agendamento para clínicas" },
  { slug: "clinicorp", nome: "Clinicorp", oneLiner: "um sistema de gestão voltado a clínicas odontológicas" },
  { slug: "prodoctor", nome: "ProDoctor", oneLiner: "um software de prontuário e gestão para consultórios" },
  { slug: "simples-agenda", nome: "Simples Agenda", oneLiner: "um sistema de agendamento e gestão para clínicas" },
  { slug: "medplus", nome: "MedPlus", oneLiner: "um software de gestão para consultórios e clínicas" },
  { slug: "doctoralia", nome: "Doctoralia", oneLiner: "uma plataforma de agendamento e presença online para profissionais de saúde" },
];
