# Reformulação: Mecânica Tec — by UniEjatec

Novo foco: portal sobre o universo da Mecânica que vende **Certificação por Competência** e **Cursos Técnicos**. Layout, design e cores azuis ejatec permanecem. O logo UniEjatec continua no rodapé.

## O que muda

1. **Marca**
   - Nome: "Mecânica Tec". Slogan: "Educação, Tecnologia e Carreira para Profissionais da Mecânica".
   - Novo logo no topo: "Mecânica Tec" com um pequeno "by UniEjatec", na paleta azul. Vou criar duas opções para você escolher.
   - Rodapé: mantém o logo UniEjatec e ganha a frase "Mecânica Tec é um portal UniEjatec".
   - Ícone da aba do navegador atualizado.

2. **Textos (sai EJA, graduação, pós e bolsa)**
   - Barra do topo: "Certifique sua experiência em Mecânica — Saiba mais".
   - Botões do topo: "Certifique-se" e "Cursos Técnicos".
   - Hero: título no estilo "Sua experiência em Mecânica vale um **diploma técnico**", subtítulo sobre certificação por competência e cursos técnicos; selos: Diploma Técnico, 100% Online, Validade Nacional, Certificação por Competência; número de exemplo de profissionais certificados.
   - Título e descrição do site e de cada página (resultados no Google e ao compartilhar).

3. **Imagens novas**
   - Hero: profissional adulto (35–50 anos) de uniforme numa oficina ou indústria.
   - Capas dos 3 artigos de exemplo: usinagem/torno CNC, manutenção industrial, mecânica diesel/automotiva.

4. **Conteúdo de exemplo voltado à Mecânica**
   - Artigos, cursos técnicos (Mecânica, Eletromecânica, Mecatrônica, Manutenção Automotiva…), profissões (Mecânico Industrial, Torneiro CNC, Soldador…), carreiras, categorias (Mecânica Industrial, Automotiva, Diesel e Pesada, Usinagem, Soldagem, Hidráulica e Pneumática, Metrologia, Automação…) e glossário, usando a sua lista de 52 termos.
   - Tudo continua como dado de exemplo; os números de mercado do seu texto (com fonte) podem aparecer num artigo.

## O que não muda
Layout, componentes, cores azuis, estrutura de páginas e endereços, logo UniEjatec no rodapé.

## Detalhes técnicos
- `site.config.ts`: siteConfig (name "Mecânica Tec", url `https://mecanica.tec.br`), announcementConfig, heroConfig, headerCtas.
- `site-header.tsx`: novo `logo-mecanica-tec` asset; `site-footer.tsx`: texto de vínculo.
- `adapters/mock/fixtures.ts`: reescrever todas as fixtures; `src/assets/*.jpg` regenerados.
- Rodar a varredura de SEO nas `head()`; favicon em `public/`.
- Salvar memória: posicionamento, público adulto, ofertas, paleta mantida.
