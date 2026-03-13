# Operação — Oquefazer

---

## Publicar código

1. Acesse **github.com/joaubaron/oquefazer**
2. Clique em `index.html` → ícone ✏️
3. Apague tudo, cole o novo código
4. Clique em **Commit changes** duas vezes

✅ Site atualiza em menos de 1 minuto.

---

## Trocar anunciante no código

### Banner Premium
Busque o comentário `BANNER PREMIUM` no código e siga a situação abaixo.

**Situação 1 — Vendeu um evento (ativar premium)**

1. Comente o **banner genérico** (roxo):
```html
<!--
<div class="evento-premium generico">
  ...
</div>
-->
```

2. Descomente o **banner premium** (laranja) e edite:
```html
<div class="evento-premium">
  <a href="LINK_DO_EVENTO" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">🎪 EVENTO DESTAQUE</div>
      <h2 class="evento-premium-titulo">Nome do Evento 2026</h2>
      <p class="evento-premium-info">📆 Data · Local</p>
    </div>
    <div class="evento-premium-cta">Saiba Mais →</div>
  </a>
</div>
```

| Campo | O que colocar |
|---|---|
| `href` | link do evento/site |
| `anunciante_id` | `premium_ano_mes_nomeparceiro` (ex: `premium_2026_10_oktoberfest`) |
| badge | emoji + texto do destaque |
| título | nome do evento |
| info | data e local |
| botão | `Saiba Mais →` · `Ingressos →` · `Inscreva-se →` |

**Emojis por tipo:** 🍺 cerveja · 🎸 show · 🏃‍♂️ esporte · 🎨 arte · 🍴 gastronomia

**Situação 2 — Evento acabou (voltar ao genérico)**

1. Comente o banner premium
2. Descomente o banner genérico
3. Salve e faça upload

**Checklist rápido**
- [ ] Apenas 1 banner ativo por vez
- [ ] Link correto e funcionando
- [ ] Nome, data e local atualizados
- [ ] Emoji e botão fazem sentido

---

### Parceiro do Mês
Busque o comentário `PARCEIRO DO MÊS` e edite:

| Campo | O que colocar |
|---|---|
| `href` | link do Instagram |
| `anunciante_id` | `mensal_ano_mes_nomeparceiro` |
| `parceiro-nome` | nome do negócio |
| `parceiro-label` | frase curta + emoji |
| `parceiro-acesse` | horário de funcionamento |
| `parceiro-cidade` | cidade do anunciante |
| `logo_anunciante.png` | subir logo no GitHub |

> ⚠️ A cidade do parceiro precisa bater com a cidade que o usuário buscar.

---

### Parceiro da Semana
Busque `SEMANA 1 · ESQUERDA / MEIO / DIREITA` e edite:

| Campo | O que colocar |
|---|---|
| `href` | link do Instagram |
| `anunciante_id` | `semanal_ano_mes_sX_pos_nome` |
| `semana-nome` | nome do negócio |
| `semana-emoji` | emoji temático |
| `semana-badge` | rótulo do card — ver tabela abaixo |

**Valores do badge:**

| Badge | Quando usar |
|---|---|
| `Destaque` | anunciante pagante padrão |
| `Novidade` | negócio recém-inaugurado |
| `Parceiro` | permuta ou parceria sem pagamento |
| `Patrocinado` | conteúdo pago com identificação explícita |

**Emojis disponíveis:** 🍻 🎶 🎭 🌱 🎾 🛍️ 🎤 🎬 🎨 🎪 🎟️ 🏆 📚 🍔 🚴 🏛️ 🥟 🍛

---

## Receber pagamento

Pix antes de publicar — **Chave CPF: 649.568.229-87** (José Augusto Baron)
WhatsApp para contato/anúncios: **+55 47 99158-1967**

| Plano | Valor |
|---|---|
| Banner Premium | conforme porte do evento |
| Parceiro do Mês | R$199 |
| Parceiro da Semana | R$79/semana |

---

## Enviar notificação patrocinada

1. Acesse **onesignal.com** → Oquefazer App → **Messages → New Push**
2. Preencha:
   - **Title:** nome do anunciante ou evento (ex: `Point da Beleza ✂️`)
   - **Message:** texto da promoção (ex: `50% off hoje! Agende agora 💇`)
   - **Launch URL:** link do Instagram ou site do anunciante
3. Em **Chrome Action Buttons:**
   - Button Label 1: `Ver agora`
   - Launch URL 1: link do anunciante
4. Em **Delivery Schedule:** selecione **Immediately**
5. Clique em **Review and Send**

✅ Notificação chega em todos os inscritos em 1–5 minutos.

---

## Ver métricas

Acesse **analytics.google.com** → propriedade **Oquefazer**

- **Tempo real** → cliques agora
- **Exploração** → filtrar por `clique_anuncio` para ver por anunciante
- **Relatórios** → buscas por cidade e período
