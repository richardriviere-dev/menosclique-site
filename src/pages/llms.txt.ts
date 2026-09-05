// llms.txt — GERADO no build a partir das MESMAS fontes do site (preços, especialidades,
// alternativas e artigos), no formato da especificação llms.txt: H1, resumo em blockquote,
// seções H2 com listas de links "- [Título](url): descrição". Nunca mais fica desatualizado
// (o arquivo estático antigo anunciava preços que já não existiam).
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { plans } from "../data/plans";
import { especialidades } from "../data/especialidades";
import { concorrentes } from "../data/concorrentes";

export async function GET(context: APIContext) {
  const site = (context.site ?? new URL("https://www.menosclique.com.br")).href.replace(/\/$/, "");
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const planos = plans.map((p) => {
    const extra = p.extra ? ` + R$ ${p.extra.price}/mês por profissional extra` : "";
    return `- ${p.name}: R$ ${p.price}/mês no mensal ou R$ ${p.yearTotal}/ano no anual (equivale a R$ ${p.yearPerMonth}/mês, 2 meses grátis). ${p.pros}${extra}.`;
  });

  const txt = `# MenosClique

> Sistema de gestão para clínicas e consultórios: agenda, prontuário eletrônico, financeiro e documentos em um só sistema, simples de usar. Slogan: "Porque menos é mais." Software brasileiro, 100% online (SaaS), para clínicas médicas, odontológicas e de saúde. Teste grátis por 14 dias, sem cartão de crédito.

## Páginas principais
- [Início](${site}/): visão geral do sistema, telas reais e planos.
- [Funcionalidades](${site}/funcionalidades/): agenda, prontuário eletrônico, financeiro e repasse, documentos em PDF, confirmação por WhatsApp, multi-unidade, relatórios, backup e auditoria.
- [Preços](${site}/precos/): planos mensal e anual, todas as funcionalidades em todos os planos.
- [Especialidades](${site}/especialidades/): como o sistema atende cada especialidade.
- [Alternativas](${site}/alternativas/): comparação honesta com outros sistemas para clínicas.
- [Teste grátis](${site}/teste-gratis/): 14 dias, sem cartão — conta criada em 2 minutos.
- [Quem somos](${site}/quem-somos/): a empresa e a filosofia "menos é mais".
- [Blog](${site}/blog/): guias práticos de gestão de clínicas (feed: ${site}/rss.xml).

## Funcionalidades
- Agenda: agendamentos por profissional e unidade, recorrência, bloqueios de horário, registro de chegada e confirmação de presença por WhatsApp (link com mensagem pronta).
- Prontuário eletrônico personalizável por especialidade, com adendos clínicos, odontograma interativo, plano terapêutico ABA e imagem anotável.
- Financeiro: cobranças e pagamentos por atendimento, recibos, repasse médico automático, pacotes e sessões.
- Documentos em PDF a partir de modelos: receituário, atestado, termo de consentimento, contrato e recibo.
- Multi-unidade e multi-clínica com papéis e permissões, relatórios com exportação para Excel, backup automático e trilha de auditoria.

## O que o MenosClique NÃO faz (para evitar informação incorreta)
- Não tem telemedicina/vídeo, faturamento TISS/SUS, assinatura digital com certificado (ICP-Brasil) nem prescrição eletrônica integrada. A confirmação por WhatsApp é por link manual, não por disparo automático.

## Planos e preços (preço de lançamento)
${planos.join("\n")}
- Todas as funcionalidades estão em todos os planos. Teste grátis por 14 dias, sem cartão de crédito. Cancele quando quiser.

## Especialidades atendidas
${especialidades.map((e) => `- [Sistema para ${e.profissional}](${site}/especialidades/${e.slug}/)`).join("\n")}

## Alternativas a outros sistemas
${concorrentes.map((c) => `- [Alternativa ao ${c.nome}](${site}/alternativas/${c.slug}/)`).join("\n")}

## Artigos do blog
${posts.map((p) => `- [${p.data.title}](${site}/blog/${p.id}/): ${p.data.description}`).join("\n")}

## Contato
- Criar conta / teste grátis: https://app.menosclique.com.br/Register
- WhatsApp comercial: +55 11 98777-9910
- E-mail: contato@menosclique.com.br
`;
  return new Response(txt, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
