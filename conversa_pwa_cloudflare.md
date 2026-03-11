# Conversa sobre PWA, Cloudflare Pages e texto do app

## Usuário

Tenho pwa hospedado Github público Se criar oqfazer.app no Cloudflare
posso tornar Github privado?

## Assistente

Sim. 👍\
Você pode usar o domínio **oquefazer.app** no Cloudflare e tornar o
repositório do GitHub privado, mas **não usando GitHub Pages
diretamente**.

### Como funciona hoje (GitHub Pages público)

Seu app está em: https://joaubaron.github.io/oquefazer/

Isso usa GitHub Pages, que exige repositório público no plano gratuito.

-   Repo público ✔\
-   Site público ✔\
-   Grátis ✔

Mas: - Repo privado ❌

### Usando domínio no Cloudflare

Se você criar **oquefazer.app** no Cloudflare, pode apontar o domínio
para o GitHub Pages.

Porém o repositório ainda precisará ser público.

Arquitetura:

GitHub Pages\
↓\
repo público\
↓\
oquefazer.app

### Como deixar o repo privado

Para repo privado, hospede fora do GitHub Pages.

#### Opção recomendada

Cloudflare Pages

Fluxo:

GitHub (privado)\
↓\
Cloudflare Pages\
↓\
oquefazer.app

Vantagens: - código privado - deploy automático - CDN global - domínio
próprio - grátis - ideal para PWA

Arquitetura recomendada:

GitHub repo PRIVADO\
↓\
Cloudflare Pages\
↓\
oquefazer.app

Benefícios: - código privado - CDN rápida - domínio profissional - custo
praticamente zero

## Usuário

Tudo grátis?

## Assistente

Sim --- na prática pode ser tudo grátis com algumas condições.

Arquitetura:

GitHub (repo privado)\
↓\
Cloudflare Pages\
↓\
oquefazer.app

### Repositório privado

GitHub oferece repositórios privados gratuitos para projetos pessoais.

Custo: grátis.

### Hospedagem do PWA

Cloudflare Pages plano free inclui: - hospedagem de sites estáticos -
deploy automático via GitHub - HTTPS automático - CDN global - domínio
customizado - até 500 builds por mês

Para um PWA (HTML, CSS e JS) isso é suficiente.

Custo: grátis.

### CDN

A rede da Cloudflare distribui o site globalmente.

Inclui: - CDN - cache - SSL - proteção básica

Custo: grátis.

### Domínio .app

Domínios .app são do Google Registry.

Preço médio: US\$10--20 por ano\
aprox. R\$50--100 por ano.

### Resumo

GitHub privado: grátis\
Cloudflare Pages: grátis\
CDN Cloudflare: grátis\
HTTPS: grátis\
Domínio oquefazer.app: cerca de R\$50--100 por ano

Custo anual praticamente só o domínio.

## Usuário

Cloudflare Pages Oq é

## Assistente

Cloudflare Pages é um serviço da Cloudflare para hospedar sites e PWAs
diretamente do GitHub.

Funciona parecido com GitHub Pages, mas com CDN global e mais recursos.

Fluxo:

GitHub (código)\
↓\
Cloudflare Pages\
↓\
site online

Exemplo:

GitHub repo privado\
↓\
Cloudflare Pages\
↓\
https://oquefazer.app

### Funcionamento

1.  Você cria o projeto no GitHub\
2.  Conecta ao Cloudflare Pages\
3.  O serviço publica automaticamente o site

Sempre que fizer commit, o site atualiza.

### Recursos

-   CDN global
-   HTTPS automático
-   deploy automático
-   domínio próprio
-   ideal para HTML, CSS, JS e PWA

### Estrutura típica de PWA

index.html\
style.css\
app.js\
manifest.json\
service-worker.js

### Preço

Plano free inclui: - sites estáticos - 500 builds por mês - CDN global -
domínio próprio

Custo: grátis (exceto domínio).

## Usuário

O que fazer perto de você! Isso aparece quando abre app Me de sugestões
mais coerentes com PWA

## Assistente

Sugestões de textos mais modernos para PWA.

### Direto ao ponto

-   Descubra o que fazer perto de você
-   Eventos e lugares perto de você
-   O que fazer na sua cidade
-   Descubra eventos perto de você

### Estilo app

-   Descubra o que está acontecendo
-   Explore eventos perto de você
-   Encontre o que fazer agora
-   Veja o que está rolando

### Mais curto

-   Descubra eventos
-   Explore sua cidade
-   O que fazer hoje
-   Eventos perto de você

Recomendação: "Descubra o que fazer perto de você" ou "Veja o que está
acontecendo perto de você".

## Usuário

Sim

## Assistente

Três boas opções para headline inicial.

### Opção 1

Descubra o que fazer perto de você\
Subtexto: Eventos, lugares e experiências na sua cidade.

### Opção 2

Veja o que está acontecendo\
Subtexto: Eventos e lugares perto de você agora.

### Opção 3

Explore o que fazer na sua cidade\
Subtexto: Encontre eventos, atrações e experiências.

Recomendação final: Veja o que está acontecendo perto de você.

Exemplo de UX:

Descubra eventos perto de você\
Use sua localização para encontrar o que fazer agora.

## Usuário

Descubra o que fazer perto de você Sem exclamação?

## Assistente

Sim, sem exclamação é melhor.

Sem exclamação: Descubra o que fazer perto de você

Fica mais: - moderno - profissional - limpo - com cara de app

Com exclamação tende a parecer publicidade.

Regra comum de UX: - títulos sem pontuação - botões sem pontuação -
textos informativos podem usar pontuação

Recomendação final: Descubra o que fazer perto de você

## Usuário

Crie .md dessa nossa conversa com todas as palavras
