/**
 * Fotografias oficiais fornecidas para a Mecânica Tec.
 * Reutilizadas por tema; novas fotos entram aqui.
 */

const size = { width: 1672, height: 941 } as const;

export const photos = {
  hero: {
    avif: "/assets/photos/hero.avif",
    webp: "/assets/photos/hero.webp",
    alt: "Profissionais da Mecânica analisando equipamento industrial",
    ...size,
  },
  inspection: {
    url: "/assets/photos/foto-1.webp",
    alt: "Profissional experiente inspecionando carcaça de câmbio usinada na bancada",
    ...size,
  },
  dieselTruck: {
    url: "/assets/photos/foto-2.webp",
    alt: "Mecânico realizando manutenção em caminhão diesel",
    ...size,
  },
  teamPair: {
    url: "/assets/photos/foto-3.webp",
    alt: "Mecânico e mecânica trabalhando juntos em oficina",
    ...size,
  },
  cncMachining: {
    url: "/assets/photos/foto-4.webp",
    alt: "Torneiro medindo peça com paquímetro ao lado de torno CNC",
    ...size,
  },
  industrialTeam: {
    url: "/assets/photos/foto-5.webp",
    alt: "Três profissionais da Mecânica trabalhando juntos na indústria",
    ...size,
  },
} as const;

export type PhotoKey = Exclude<keyof typeof photos, "hero">;
