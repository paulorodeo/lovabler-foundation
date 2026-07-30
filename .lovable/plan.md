# Nova dobra inicial: barra de anúncio, header e hero

Aplicar o padrão visual das referências enviadas (azul UniEjatec, header com busca e CTAs, hero split com card flutuante) somente na primeira dobra. O resto da home fica como está por enquanto.

## 1. Barra de anúncio (topo)

Faixa azul full-width acima do header:
- Texto "Pegue sua Bolsa de Estudos!" + link "Saiba mais" sublinhado.
- Botão de fechar (estado local, sem persistência).
- Conteúdo vindo de configuração, não hardcode no componente.

## 2. Header

Reescrever o header no padrão das referências:
- Logo (ícone quadrado azul + "UniEjatec").
- Menu enxuto: Home, Blog (Artigos), Cursos, Sobre, Contato — com sublinhado no item ativo.
- Campo de busca central com ícone de lupa; ao enviar, navega para a página de busca com o termo.
- CTAs à direita: "Peça sua Bolsa" (sólido) e "Matricule-se" (contorno), mais ícone de conta que leva à Área do Aluno.
- Menu mobile em drawer, com busca e CTAs empilhados.
- Os hubs que saem do menu principal continuam acessíveis pelo rodapé (já listados lá).

## 3. Hero

Substituir o hero atual por um bloco split:
- Coluna esquerda: badge "Blog UniEjatec", título grande com a palavra "transforma" em azul, subtítulo, dois botões ("Peça sua Bolsa de Estudos" e "Ver todos os artigos") e uma linha de 4 selos com ícone (Reconhecido pelo MEC, EAD Flexível, Bolsa de Estudos, Certificação Garantida).
- Coluna direita: imagem do hero com máscara curva e card flutuante branco "+15 mil alunos transformando seus futuros" (valores mock por enquanto).
- Fundo com gradiente suave azul-claro e textura de pontos, cantos arredondados.
- Responsivo: em telas menores empilha, imagem acima ou abaixo do texto, selos em grade 2x2.

## Detalhes técnicos

- Novos componentes: `src/components/layout/announcement-bar.tsx`, hero em `src/features/home-hero.tsx`; `site-header.tsx` reescrito; `app-shell.tsx` passa a renderizar a barra de anúncio.
- Menu enxuto definido em `src/config/navigation.config.ts` (novo `headerNav`), mantendo `footerNav` intacto.
- Textos e números do hero/barra em `src/config/site.config.ts` (mock, fáceis de trocar depois).
- Todas as cores via tokens existentes em `src/styles.css`; se o azul atual ficar diferente do das referências, ajusto apenas as variáveis `--primary`/`--ring` em `:root` e `.dark`.
- Ícones do lucide-react; imagem do hero: reuso do asset já existente ou nova geração se não combinar com a referência.
- Sem mudanças em adapters, services ou hooks.
