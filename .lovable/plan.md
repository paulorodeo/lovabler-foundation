# Mecânica Tec — Educação, Tecnologia e Carreira para Profissionais da Mecânica · by UniEjatec

Transformar o projeto atual num portal especializado em Mecânica, sem reconstruir nada. Layout, componentes e paleta azul ficam. Foco no visual; ligações reais, regras e conteúdo definitivo ficam para depois (Codex).

## Diagnóstico rápido do que existe hoje
- Marca, textos e botões falam de EJA, graduação, pós e "Bolsa de Estudos".
- O topo e o hero usam números e selos de exemplo ("+15 mil alunos", "Reconhecido pelo MEC") — vão sair.
- Artigos, cursos, profissões e categorias de exemplo não falam de Mecânica.
- Já existem páginas de Cursos, Categorias, Profissões, Carreiras, Artigos, Guias, Glossário e Busca — vamos reaproveitá-las.
- Ainda não existe página de Certificação.

## Três frentes, claramente separadas
1. **Certificação Técnica por Competência** (nova página `/certificacao`): o que é, para quem é, requisitos gerais, áreas que podem ser avaliadas, passo a passo e botão "Avaliar minha experiência" (formulário só visual, sem envio real ainda).
2. **Cursos Técnicos de Mecânica** (`/cursos`): Mecânica, Eletromecânica, Mecatrônica, Manutenção Automotiva etc., marcados como dados demonstrativos.
3. **Universo da Mecânica** (`/categorias`, renomeado no menu para "Áreas da Mecânica"): 8 áreas que agrupam os 52 termos — Mecânica Geral e Aplicada; Industrial e Manutenção; Eletromecânica e Automação; Automotiva; Pesada e Agrícola; Fabricação e Metalomecânica; Hidráulica, Pneumática e Transmissão; Desenho, Projetos e Metrologia. Cada área liga para artigos, profissões e para a certificação ou cursos relacionados.

## Página inicial
- Barra do topo: "Você já trabalha com Mecânica? Avalie sua experiência — Saiba mais".
- Hero (mesmo layout):
  - Título: "Sua carreira na Mecânica começa ou evolui aqui."
  - Subtítulo: "Explore cursos técnicos, descubra possibilidades de certificação por competência e encontre conhecimento especializado para avançar na profissão."
  - Botões: "Avaliar minha experiência" e "Conhecer Cursos Técnicos".
  - Selos neutros, sem promessas (ex.: Certificação por Competência, Cursos Técnicos, Conteúdo especializado, Ecossistema UniEjatec). Sai o card "+15 mil".
- Logo abaixo do hero: acesso às Áreas da Mecânica em destaque, junto do bloco com as 3 frentes.
- Em seguida: artigos em destaque, cursos técnicos e profissões (seções já existentes).

## Menu
Início · Certificação por Competência (rótulo completo onde houver espaço; endereço /certificacao) · Cursos Técnicos · Áreas da Mecânica · Artigos · Sobre. Botões do topo: "Avaliar experiência" (principal) e "Cursos Técnicos".

## Marca
- Crio **duas opções de logo** "Mecânica Tec" com "by UniEjatec" visível, na paleta azul, e mostro para você escolher. O logo atual só é trocado depois da sua escolha.
- Rodapé: mantém o logo UniEjatec e adiciona "Mecânica Tec é um portal do ecossistema UniEjatec".
- Ícone da aba atualizado junto com o logo escolhido.

## Imagens (fotografia realista premium, tons que conversam com o azul)
- Hero: usar a foto enviada "Colaboração na Oficina de Engenharia" (homem e mulher de uniforme técnico em oficina). Carregada com prioridade (sem espera), em AVIF com WebP como alternativa para navegadores antigos. Mesmo tamanho e proporção do hero atual. As demais fotos enviadas servem de referência de estilo.
- Artigos: usinagem/torno CNC, manutenção industrial, mecânica diesel, eletromecânica, metrologia.
- Cursos técnicos: formação prática em oficina/laboratório.
- Profissões: o profissional no trabalho real (mecânico industrial, torneiro CNC, soldador...).
- Áreas da Mecânica: uma imagem específica para cada uma das 8 áreas.
- Imagem enviada do instrutor de uniforme azul (mecanica-tec_4) é mantida e usada na página de Certificação por Competência. Antes, removo o logo "SENAI" e o bordado "Instrutor Técnico" da camisa e o texto da parede, pois são de outra instituição.
- Foto enviada "profissional certificado" (mecânico de caminhão) é usada na área Mecânica Pesada e Agrícola, no curso/profissão de Mecânico Diesel e no artigo de mecânica diesel (AVIF com WebP alternativo).
- Imagens atuais genéricas são substituídas. Os cards de cursos, profissões e áreas passam a exibir imagem (mesmo componente de card já usado nos artigos).

## Conteúdo e cuidados
- Sem números inventados, depoimentos, selos do MEC ou "100% online garantido".
- Dados de exemplo ficam separados, com a marcação demo: true; páginas que mostram dados fictícios ficam ocultas do Google (noindex e fora do sitemap) até receberem conteúdo definitivo.
- Endereços antigos de EJA/graduação: não existem como páginas próprias hoje; só textos serão limpos. Nenhuma página é removida.
- Título, descrição e prévia de compartilhamento de todas as páginas atualizados para o domínio `https://mecanica.tec.br`.

## Detalhes técnicos
- `site.config.ts`: siteConfig (name, url `https://mecanica.tec.br`, organization com `parentOrganization` UniEjatec), announcementConfig, heroConfig, headerCtas; novo `pillarsConfig`.
- `navigation.config.ts` e `routes.config.ts`: nova entrada `certification` (`/certificacao`), labels "Cursos Técnicos" e "Áreas da Mecânica".
- Nova rota `src/routes/certificacao.tsx` usando componentes existentes; novo `src/features/home-pillars.tsx`; `home-hero.tsx` sem card de estatística.
- Hero: `<picture>` com `<source type="image/avif">` + `<img>` WebP, `width=1672 height=941`, `loading="eager"`, `fetchPriority="high"`, `decoding="async"`; ambos os arquivos enviados como assets CDN; `preload` do AVIF no `head()` da home.
- `adapters/mock/fixtures.ts`: reescrever categorias (8 áreas com os termos), artigos, cursos, profissões, carreiras e glossário; flag `demo: true` nas fixtures.
- Sitemap inclui `/certificacao`; JSON-LD Organization/WebSite atualizado.
- Logos via imagegen premium (2 candidatos) apresentados para escolha; identidade atual permanece até a escolha.
- Rotas alimentadas por fixtures `demo: true` recebem `robots: noindex` e saem do sitemap.
- Memória: posicionamento, três frentes, público adulto, proibição de promessas/números fictícios, paleta azul mantida. `AGENTS.md`: separação config/dados/interface para continuação no Codex.
