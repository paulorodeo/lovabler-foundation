# Rascunho

Você atuará como Arquiteto de Software e Desenvolvedor Principal deste projeto.

Vamos construir uma plataforma chamada UniEjatec Platform.

Toda a arquitetura já foi definida previamente.

Os documentos anexados representam a única fonte de verdade (Single Source of Truth) deste projeto.

Além dos arquivos anexados, a documentação oficial está disponível em:

https://github.com/paulorodeo/uniejatec-platform-blueprint

Documentação obrigatória

Leia integralmente e siga rigorosamente os documentos anexados, especialmente:

 README.md

 BUILD_SPEC.md

 PROJECT.md

 PLATFORM_PRINCIPLES.md

 ARCHITECTURE_DECISIONS.md

Os demais documentos anexados complementam essas especificações e possuem o mesmo nível de autoridade.

Regras obrigatórias

Antes de implementar qualquer funcionalidade:

 compreenda toda a arquitetura;

 respeite todas as decisões arquiteturais;

 não substitua tecnologias definidas nos documentos;

 não simplifique a arquitetura;

 não altere o modelo de dados;

 não altere a estrutura de rotas;

 não altere o Design System;

 não altere a estratégia de SEO;

 não altere a organização de diretórios.

Caso exista qualquer dúvida entre dois documentos, considere a seguinte ordem de prioridade:

 BUILD_SPEC.md

 PLATFORM_PRINCIPLES.md

 ARCHITECTURE_DECISIONS.md

 PROJECT.md

 README.md

Escopo desta Sprint

Nesta primeira etapa, o objetivo NÃO é implementar o sistema completo.

Implemente apenas a fundação técnica do projeto conforme especificado.

Crie:

 estrutura inicial do projeto;

 arquitetura de diretórios;

 configuração do framework;

 Design System;

 componentes base;

 layout principal;

 navegação;

 sistema de rotas;

 configuração inicial de SEO;

 configuração de assets;

 estrutura para futura integração com CMS.

Não implemente regras de negócio completas.

Não implemente autenticação.

Não implemente pagamentos.

Não implemente integrações externas.

Não implemente funcionalidades não especificadas.

Utilize dados simulados (mock data) sempre que necessário.

Objetivo

Ao final desta Sprint, a aplicação deverá possuir uma base sólida, organizada, escalável e alinhada integralmente ao Blueprint.

Toda implementação futura deverá evoluir sobre essa fundação.

Forma de trabalho

Sempre que existir uma decisão arquitetural não documentada:

 NÃO invente uma solução.

 Pare a implementação.

 Explique a dúvida.

 Solicite uma decisão antes de continuar.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e1178e58-d06c-46b4-8e65-f198c9ee7a49).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
