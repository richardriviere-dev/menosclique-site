import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Coleção do Blog. O VersaAI (provider MenosCliqueStatic) publica arquivos .md
// aqui e o Astro rebuilda o HTML estático automaticamente.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),   // revisão do artigo (dateModified)
    category: z.string().default("Gestão de clínicas"),
    author: z.string().default("Equipe MenosClique"),
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
