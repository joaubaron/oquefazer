# Oquefazer — Guia Completo

---

## 1. Subir código no GitHub

1. Acessa **github.com** e abre o repositório **joaubaron/oquefazer**
2. Clica no arquivo **index.html**
3. Clica no ícone de lápis ✏️ (editar)
4. Apaga todo o conteúdo e cola o novo código
5. Clica em **Commit changes**
6. Confirma clicando em **Commit changes** novamente

✅ Pronto — o site atualiza em menos de 1 minuto.

---

## 2. Mensagens de divulgação

**Para pessoas (grupos de WhatsApp):**
> Fiz um app pra descobrir o que fazer na sua cidade. Testa e me fala o que achou.
> 👉 https://joaubaron.github.io/oquefazer/
> 👉 https://t.ly/oquefazer
>
> Dica: abre o link e toca em "Adicionar à tela inicial" para instalar como app.

**Para anunciantes:**
> Fiz um app de agenda cultural para descobrir eventos e o que fazer na cidade. Tenho espaço de parceiro disponível para negócios locais. Queria que você conhecesse.
> 👉 https://joaubaron.github.io/oquefazer/
> 👉 https://t.ly/oquefazer

---

## 3. Estratégia de crescimento

### Semana 1 — Plantar
- Manda mensagem para pessoas em grupos de WhatsApp
- Manda mensagem individual para 5 negócios locais
- Não cobra nada, não oferece nada ainda

### Semana 2 — Acompanhar
- Configura Google Analytics no computador (analytics.google.com/analytics/web)
- Pergunta para quem respondeu o que achou
- Coleta feedback

### Semana 3 — Primeiro anunciante
- Com dados do Analytics em mãos, aborda quem respondeu positivamente
- Oferta: **R$ 99 no primeiro mês** (preço de lançamento)
- Após primeiro case, sobe para **R$ 199/mês**

### Semana 4 em diante
- Usa o primeiro anunciante como prova social
- Aborda mais negócios com número real na mão

---

## 4. Metas de acesso (Google Analytics)

| Acessos em 2 semanas | O que significa |
|---|---|
| 100 | Já tem argumento para vender |
| 300 | Justifica R$ 199 com confiança |
| 500+ | Fila de espera para os cards |

---

## 5. Quando tiver anunciante

1. Combina: nome do negócio, link do Instagram, categoria (emoji)
2. Recebe pagamento via **Pix** antes de publicar
3. Manda os dados para atualizar o código
4. Sobe no GitHub
5. Manda print para o parceiro — fideliza

### Preços
- **Parceiro do mês:** R$ 199 (card grande, fica o mês inteiro)
- **Parceiro da semana:** R$ 79 cada (3 mini cards, rotativos)
- **Receita potencial:** R$ 199 + 3 × R$ 79 × 4 semanas = **R$ 1.147/mês**

---

## 6. Google Analytics — medir acessos do app

### Configurar (fazer no computador)
1. Acessa **analytics.google.com/analytics/web**
2. Clica em **Começar a medir**
3. Nome da conta: `Oquefazer`
4. Nome da propriedade: `oquefazer` · Fuso: Brasil · Moeda: Real
5. Plataforma: **Web**
6. URL: `joaubaron.github.io/oquefazer`
7. Clica em **Criar fluxo**
8. Copia o ID no formato **G-XXXXXXXXXX**

### Adicionar ao index.html
Cola essas 2 linhas dentro do `<head>` do código, substituindo pelo seu ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');</script>
```

### O que você vai ver
- Quantas pessoas acessaram por dia
- Quantas são únicas
- De qual cidade
- Quanto tempo ficaram
- Se voltaram ou são novas

---

## 7. Bitly — medir cliques nos anunciantes

### Configurar
1. Acessa **app.bitly.com**
2. Clica em **Criar novo → Link**
3. Cola o link do Instagram do parceiro
4. Salva — ele gera um link curto tipo `bit.ly/xxxxx`

### Usar no código
No lugar do link do Instagram do parceiro, coloca o link Bitly.

**Parceiro do mês** — troca o `href` do card:
```html
href="https://bit.ly/xxxxx"
```

**Mini cards** — mesma coisa em cada um:
```html
href="https://bit.ly/xxxxx"
```

### O que você vai ver
Quantas pessoas clicaram no card de cada parceiro.

### Plano gratuito
- 5 links ativos
- 1.000 cliques/mês
- Suficiente para 1 parceiro do mês + 3 da semana

### Como mostrar ao anunciante
**Analytics** → *"X pessoas acessaram o app essa semana"*
**Bitly** → *"Y pessoas clicaram no seu card"*

---

## 8. Quando tiver parceiro — o que trocar no código

Busca no código pelo comentário:
```
PARCEIRO DO MÊS — R$ 199
```
Troca: **href** (link Instagram), **emoji** e **nome**

Para os mini cards, busca:
```
SEMANA CARD 1 / 2 / 3
```
Troca: **href**, **nome** e **emoji**

### Emojis por categoria
🍻 Bares · 🎶 Shows · 🎭 Cultura · 🌱 Natureza · 🎾 Esporte · 🛍️ Feiras
