// Mapa central das telas do sistema para o pipeline astro:assets.
// Permite que os componentes continuem recebendo o caminho string
// (ex.: "/screens/dashboard.png") e resolvam para a imagem OTIMIZADA
// (WebP responsivo com srcset) — sem precisar mudar todos os callers.
import type { ImageMetadata } from "astro";

import dashboard from "../assets/screens/dashboard.png";
import agenda from "../assets/screens/agenda.png";
import prontuario from "../assets/screens/prontuario.png";
import financeiro from "../assets/screens/financeiro.png";
import documentos from "../assets/screens/documentos.png";
import pacientes from "../assets/screens/pacientes.png";
import confirmacao from "../assets/screens/confirmacao.png";
import equipe from "../assets/screens/equipe.png";
import relatorios from "../assets/screens/relatorios.png";
import seguranca from "../assets/screens/seguranca.png";

export const screens: Record<string, ImageMetadata> = {
  "/screens/dashboard.png": dashboard,
  "/screens/agenda.png": agenda,
  "/screens/prontuario.png": prontuario,
  "/screens/financeiro.png": financeiro,
  "/screens/documentos.png": documentos,
  "/screens/pacientes.png": pacientes,
  "/screens/confirmacao.png": confirmacao,
  "/screens/equipe.png": equipe,
  "/screens/relatorios.png": relatorios,
  "/screens/seguranca.png": seguranca,
};
