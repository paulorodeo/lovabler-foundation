/**
 * Brand kit — emblema Mecânica Tec (by UniEjatec).
 * Só as variações usadas na interface são importadas; o kit completo
 * fica fora do app como material de referência.
 */

export const brandConfig = {
  name: "Mecânica Tec",
  signature: "by UniEjatec",
  emblem: {
    /** Emblema azul, fundo transparente — para fundos claros (header). */
    onLight: "/assets/brand/emblema-azul-256.png",
    /** Emblema branco em fundo azul — para selos e fundos escuros. */
    onBlue: "/assets/brand/emblema-badge-azul-256.png",
    alt: "Emblema Mecânica Tec: engrenagem com capelo",
  },
} as const;
