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

### Parceiros da Semana
Busque `SEMANA 1 · ESQUERDA / MEIO / DIREITA` e edite:

| Campo | O que colocar |
|---|---|
| `href` | link do Instagram |
| `anunciante_id` | `semanal_ano_mes_sX_pos_nome` |
| `semana-nome` | nome do negócio |
| `semana-emoji` | emoji temático |

**Emojis disponíveis:** 🍻 🎶 🎭 🌱 🎾 🛍️ 🎤 🎬 🎨 🎪 🎟️ 🏆 📚 🍔 🚴 🏛️ 🥟 🍛

---

## Trocar banner Premium

### Situação 1 — Vendeu um evento (ativar premium)

1. Encontre o **banner genérico** (roxo) e **comente**:
```html
<!--
<div class="evento-premium generico">
  ...
</div>
-->
```

2. Encontre o **banner premium** (laranja) e **descomente** (remova `<!--` e `-->`):
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

3. Edite: link, nome, data/local, emoji do badge e texto do botão.
4. Salve e faça upload.

**Emojis por tipo:** 🍺 cerveja · 🎸 show · 🏃‍♂️ esporte · 🎨 arte · 🍴 gastronomia

**Textos de botão sugeridos:** `Saiba Mais →` · `Ingressos →` · `Inscreva-se →`

### Situação 2 — Evento acabou (voltar ao genérico)

1. Comente o banner premium
2. Descomente o banner genérico
3. Salve e faça upload

### Checklist rápido
- [ ] Apenas 1 banner ativo por vez
- [ ] Link correto e funcionando
- [ ] Nome, data e local atualizados
- [ ] Emoji e botão fazem sentido
- [ ] Arquivo salvo e upload feito

---

## Receber pagamento

Pix antes de publicar — **Chave CPF: 649.568.229-87** (José Augusto Baron)

| Plano | Valor |
|---|---|
| Parceiro do Mês | R$199 |
| Parceiro da Semana | R$79 |

---

## Ver métricas

Acesse **analytics.google.com** → propriedade **Oquefazer**

- **Tempo real** → cliques agora
- **Exploração** → filtrar por `clique_anuncio` para ver por anunciante
- **Relatórios** → buscas por cidade e período
