// Feed RSS do blog — descoberta por agregadores, leitores e motores de IA (GEO).
// Fonte única: a coleção "blog" (mesma dos artigos e do sitemap).
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: "Blog MenosClique — gestão de clínicas e consultórios",
    description: "Conteúdo prático para quem gerencia clínicas: agenda, prontuário eletrônico, financeiro, redução de faltas e marketing.",
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
      categories: [p.data.category],
    })),
    customData: "<language>pt-BR</language>",
  });
}
