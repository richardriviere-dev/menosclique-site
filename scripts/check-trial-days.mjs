// GUARDIÃO DO PRAZO DO TESTE GRÁTIS — roda antes do build (npm run build).
//
// O teste grátis anunciado tem um número só: TRIAL_DAYS (src/data/trial.ts), que casa com o app
// (SubscriptionLifecycle.SiteTrialDays). Em 03/10/2026 o prazo passou de 14 para 7 dias; o site
// tinha o número escrito à mão em 46 lugares. Este guardião reprova o build quando qualquer
// página, componente, dado ou ARTIGO DO BLOG (inclusive os escritos pelo gerador automático)
// anuncia o teste grátis com outro número de dias — prometer prazo diferente do que o app dá é
// oferta que obriga (CDC art. 30).
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1")), "..");
const trialSrc = fs.readFileSync(path.join(root, "src/data/trial.ts"), "utf8");
const TRIAL_DAYS = Number(/TRIAL_DAYS\s*=\s*(\d+)/.exec(trialSrc)?.[1]);
if (!TRIAL_DAYS) { console.error("check-trial-days: TRIAL_DAYS não encontrado em src/data/trial.ts"); process.exit(1); }

// "14 dias grátis", "grátis por 14 dias", "teste grátis 14 dias", "teste grátis de 14 dias",
// "testar grátis por 14 dias", "experimente ... por 14 dias", "teste de 14 dias", "14 dias de teste".
const patterns = [
  /\b(\d{1,3})\s*dias\s+(gr[aá]tis|de\s+teste|de\s+avalia[cç][aã]o)/gi,
  /gr[aá]tis\s+(?:de\s+|por\s+)?(\d{1,3})\s*dias/gi,
  /(?:teste|testar|experimente|experimentar)[^.\n<]{0,60}?\bpor\s+(\d{1,3})\s*dias/gi,
  /teste\s+(?:gratuito\s+)?de\s+(\d{1,3})\s*dias/gi,
  /quatorze|catorze/gi,
];

const exts = new Set([".astro", ".ts", ".mjs", ".js", ".md", ".mdx", ".json", ".txt"]);
const problems = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!["node_modules", "dist", ".astro"].includes(e.name)) walk(p); continue; }
    if (!exts.has(path.extname(e.name))) continue;
    const lines = fs.readFileSync(p, "utf8").split(/\r?\n/);
    lines.forEach((line, i) => {
      for (const re of patterns) {
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(line))) {
          const n = m[1] && /^\d+$/.test(m[1]) ? Number(m[1]) : NaN;
          if (Number.isNaN(n) ? /quatorze|catorze/i.test(m[0]) && /gr[aá]tis|teste/i.test(line) : n !== TRIAL_DAYS)
            problems.push(`${path.relative(root, p)}:${i + 1}: ${line.trim().slice(0, 160)}`);
        }
      }
    });
  }
}
walk(path.join(root, "src"));
walk(path.join(root, "public"));

if (problems.length) {
  console.error(`\n✖ O teste grátis é de ${TRIAL_DAYS} dias (src/data/trial.ts), mas há anúncio com outro prazo:\n`);
  for (const p of [...new Set(problems)]) console.error("  " + p);
  console.error("\nUse TRIAL_DAYS nas páginas/dados ou corrija o texto do artigo.\n");
  process.exit(1);
}
console.log(`✓ Prazo do teste grátis: ${TRIAL_DAYS} dias em todo o site.`);
