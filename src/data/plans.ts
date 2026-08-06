// Fonte única de preços dos planos — usada em index.astro e precos.astro.
// Regra comercial: anual = 10x a mensalidade promocional ("2 meses grátis"),
// cobrado antecipado (à vista ou em até 12x no cartão).

export const EXTRA_ITEM = "__extra__"; // marcador: bullet do profissional extra (preço varia por período)

export interface PlanExtra {
  from: string; // preço "de" mensal (riscado)
  price: string; // mensal promocional
  yearPerMonth: string; // equivalente mensal no plano anual
}

export interface Plan {
  name: string;
  tagline: string;
  pros: string;
  from: string; // preço "de" mensal (riscado)
  off: string; // % OFF da promo mensal
  price: string; // mensal promocional
  yearTotal: string; // total do plano anual (10x mensal)
  yearPerMonth: string; // equivalente mensal no anual
  yearSave: string; // economia anual vs. 12x mensal
  featured: boolean;
  items: string[]; // bullets da home
  extra?: PlanExtra; // profissional extra (Clínica Plus)
}

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function build(p: {
  name: string;
  tagline: string;
  pros: string;
  fromMonthly: number;
  monthly: number;
  off: string;
  featured: boolean;
  items: string[];
  extra?: { fromMonthly: number; monthly: number };
}): Plan {
  const yearTotal = p.monthly * 10;
  return {
    name: p.name,
    tagline: p.tagline,
    pros: p.pros,
    from: brl(p.fromMonthly),
    off: p.off,
    price: brl(p.monthly),
    yearTotal: brl(yearTotal),
    yearPerMonth: brl(yearTotal / 12),
    yearSave: brl(p.monthly * 12 - yearTotal),
    featured: p.featured,
    items: p.items,
    extra: p.extra && {
      from: brl(p.extra.fromMonthly),
      price: brl(p.extra.monthly),
      yearPerMonth: brl((p.extra.monthly * 10) / 12),
    },
  };
}

export const plans: Plan[] = [
  build({
    name: "Profissional",
    tagline: "Para o consultório individual",
    pros: "1 profissional de saúde",
    fromMonthly: 89.9,
    monthly: 69.9,
    off: "22",
    featured: false,
    items: ["Agenda completa", "Prontuário eletrônico", "Financeiro e documentos", "Confirmação por WhatsApp"],
  }),
  build({
    name: "Clínica",
    tagline: "Para clínicas em crescimento",
    pros: "2 profissionais de saúde",
    fromMonthly: 159.8,
    monthly: 119.8,
    off: "25",
    featured: true,
    items: ["Tudo do Profissional", "2 profissionais inclusos", "Repasse médico", "Relatórios e exportação"],
  }),
  build({
    name: "Clínica Plus",
    tagline: "Para clínicas e centros médicos",
    pros: "4 profissionais de saúde",
    fromMonthly: 279.6,
    monthly: 199.6,
    off: "29",
    featured: false,
    items: ["Tudo da Clínica", "4 profissionais inclusos", EXTRA_ITEM, "Multi-unidade e pacotes"],
    extra: { fromMonthly: 59.9, monthly: 39.9 },
  }),
];
