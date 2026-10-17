/**
 * Fotografias oficiais fornecidas para a Mecânica Tec.
 * Reutilizadas por tema; novas fotos entram aqui.
 */
import heroAvif from "@/assets/photos/hero.avif.asset.json";
import heroWebp from "@/assets/photos/hero.webp.asset.json";
import foto1 from "@/assets/photos/foto-1.webp.asset.json";
import foto2 from "@/assets/photos/foto-2.webp.asset.json";
import foto3 from "@/assets/photos/foto-3.webp.asset.json";
import foto4 from "@/assets/photos/foto-4.webp.asset.json";
import foto5 from "@/assets/photos/foto-5.webp.asset.json";

const size = { width: 1672, height: 941 } as const;

export const photos = {
  hero: {
    avif: heroAvif.url,
    webp: heroWebp.url,
    alt: "Profissionais da Mecânica analisando equipamento industrial",
    ...size,
  },
  inspection: {
    url: foto1.url,
    alt: "Profissional experiente inspecionando carcaça de câmbio usinada na bancada",
    ...size,
  },
  dieselTruck: {
    url: foto2.url,
    alt: "Mecânico realizando manutenção em caminhão diesel",
    ...size,
  },
  teamPair: {
    url: foto3.url,
    alt: "Mecânico e mecânica trabalhando juntos em oficina",
    ...size,
  },
  cncMachining: {
    url: foto4.url,
    alt: "Torneiro medindo peça com paquímetro ao lado de torno CNC",
    ...size,
  },
  industrialTeam: {
    url: foto5.url,
    alt: "Três profissionais da Mecânica trabalhando juntos na indústria",
    ...size,
  },
} as const;

export type PhotoKey = Exclude<keyof typeof photos, "hero">;
