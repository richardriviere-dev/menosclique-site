// Fonte única do contato comercial do MenosClique (bolha do WhatsApp, rodapé, schema e llms.txt).
// Linha própria da marca desde 03/10/2026 (chip TIM pré-pago) — nunca o celular pessoal do dono.
export const WHATSAPP_E164 = "5511952224252";              // para links wa.me
export const WHATSAPP_DISPLAY = "+55 11 95222-4252";       // texto legível
export const WHATSAPP_SCHEMA = "+55-11-95222-4252";        // formato do schema.org
export const waLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_E164}` + (text ? `?text=${encodeURIComponent(text)}` : "");
