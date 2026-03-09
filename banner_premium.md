# 🎪 BANNER PREMIUM - Guia Completo

## 💰 Modelo de Negócio

### Tabela de Preços:
| Quantidade | Preço Total | Preço/Evento | Economia |
|------------|-------------|--------------|----------|
| 1 evento | R$199 | R$199 | - |
| 3 eventos | R$499 | R$166 | R$100 |
| 5 eventos | R$749 | R$149 | R$250 |

### Tipos de Eventos Ideais:
- 🍺 Festivais (Oktoberfest, Festival da Cerveja)
- 🎸 Shows grandes (artistas nacionais/internacionais)
- 🏃‍♂️ Eventos esportivos (maratonas, corridas)
- 🎨 Feiras e exposições
- 🍴 Festivais gastronômicos

---

## 🔄 COMO TROCAR OS BANNERS

### ✅ SITUAÇÃO 1: Vendeu um evento (Ativar Premium)

#### Passo 1: Abra o arquivo index.html

#### Passo 2: Encontre o BANNER GENÉRICO (roxo)
Procure por este trecho:
```html
<!-- VERSÃO GENÉRICA (ativa quando NÃO há evento contratado) -->
<div class="evento-premium generico">
  <a href="https://wa.me/5547991581967?text=Quero%20anunciar!" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">✨ ESPAÇO PREMIUM</div>
      <h2 class="evento-premium-titulo">📣 Divulgue seu evento aqui!</h2>
      <p class="evento-premium-info">Shows, festivais e eventos grandes · R$199 por evento</p>
    </div>
    <div class="evento-premium-cta">
      Anunciar →
    </div>
  </a>
</div>
```

#### Passo 3: COMENTE o banner genérico
Adicione `<!--` ANTES e `-->` DEPOIS:
```html
<!--
<div class="evento-premium generico">
  <a href="https://wa.me/5547991581967?text=Quero%20anunciar!" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">✨ ESPAÇO PREMIUM</div>
      <h2 class="evento-premium-titulo">📣 Divulgue seu evento aqui!</h2>
      <p class="evento-premium-info">Shows, festivais e eventos grandes · R$199 por evento</p>
    </div>
    <div class="evento-premium-cta">
      Anunciar →
    </div>
  </a>
</div>
-->
```

#### Passo 4: Encontre o BANNER PREMIUM (laranja/dourado)
Procure alguns blocos acima por este trecho:
```html
<!-- ATIVE ESTA VERSÃO QUANDO TIVER EVENTO CONTRATADO (R$199) -->
<!--
<div class="evento-premium">
  <a href="https://www.exemplo.com/oktoberfest" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">🎪 EVENTO DESTAQUE</div>
      <h2 class="evento-premium-titulo">🍺 Oktoberfest Blumenau 2026</h2>
      <p class="evento-premium-info">📆 10 a 26 de Outubro · Vila Germânica</p>
    </div>
    <div class="evento-premium-cta">
      Saiba Mais →
    </div>
  </a>
</div>
-->
```

#### Passo 5: DESCOMENTE o banner premium
REMOVA os `<!--` e `-->`:
```html
<!-- ATIVE ESTA VERSÃO QUANDO TIVER EVENTO CONTRATADO (R$199) -->
<div class="evento-premium">
  <a href="https://www.exemplo.com/oktoberfest" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">🎪 EVENTO DESTAQUE</div>
      <h2 class="evento-premium-titulo">🍺 Oktoberfest Blumenau 2026</h2>
      <p class="evento-premium-info">📆 10 a 26 de Outubro · Vila Germânica</p>
    </div>
    <div class="evento-premium-cta">
      Saiba Mais →
    </div>
  </a>
</div>
```

#### Passo 6: EDITE as informações do evento vendido

**O que editar:**

1. **Link do evento:**
```html
<a href="COLOQUE_O_LINK_AQUI" target="_blank" class="evento-premium-link">
```
Exemplos de links:
- Site oficial: `https://oktoberfestblumenau.com.br`
- Instagram: `https://instagram.com/nomedoevento`
- Sympla: `https://sympla.com.br/evento/12345`
- WhatsApp: `https://wa.me/5547999999999`

2. **Badge (opcional):**
```html
<div class="evento-premium-badge">🎸 EVENTO DESTAQUE</div>
```
Troque o emoji conforme o tipo:
- 🍺 Festival de cerveja
- 🎸 Show/música
- 🏃‍♂️ Corrida/esporte
- 🎨 Arte/cultura
- 🍴 Gastronomia

3. **Nome do evento:**
```html
<h2 class="evento-premium-titulo">Rock Festival 2026</h2>
```

4. **Data e local:**
```html
<p class="evento-premium-info">📆 15 de Março · Parque Central</p>
```

#### Passo 7: Salve o arquivo e faça upload

---

### 🔙 SITUAÇÃO 2: Evento acabou (Voltar ao Genérico)

#### Passo 1: Abra o arquivo index.html

#### Passo 2: COMENTE o banner premium
Adicione `<!--` e `-->`:
```html
<!--
<div class="evento-premium">
  <a href="...">
    ...todo o código do evento...
  </a>
</div>
-->
```

#### Passo 3: DESCOMENTE o banner genérico
REMOVA os `<!--` e `-->`:
```html
<div class="evento-premium generico">
  <a href="https://wa.me/5547991581967?text=Quero%20anunciar!" target="_blank" class="evento-premium-link">
    ...
  </a>
</div>
```

#### Passo 4: Salve e faça upload

---

## 📋 EXEMPLOS PRÁTICOS

### Exemplo 1: Oktoberfest Blumenau
```html
<div class="evento-premium">
  <a href="https://oktoberfestblumenau.com.br" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">🍺 EVENTO DESTAQUE</div>
      <h2 class="evento-premium-titulo">Oktoberfest Blumenau 2026</h2>
      <p class="evento-premium-info">📆 10 a 26 de Outubro · Vila Germânica</p>
    </div>
    <div class="evento-premium-cta">
      Saiba Mais →
    </div>
  </a>
</div>
```

### Exemplo 2: Show de Rock
```html
<div class="evento-premium">
  <a href="https://sympla.com.br/rockfestival" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">🎸 EVENTO DESTAQUE</div>
      <h2 class="evento-premium-titulo">Rock in Festival 2026</h2>
      <p class="evento-premium-info">📆 15 de Março · Parque Vila Germânica</p>
    </div>
    <div class="evento-premium-cta">
      Ingressos →
    </div>
  </a>
</div>
```

### Exemplo 3: Meia Maratona
```html
<div class="evento-premium">
  <a href="https://instagram.com/meiamaratonabnu" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">🏃‍♂️ EVENTO DESTAQUE</div>
      <h2 class="evento-premium-titulo">Meia Maratona Blumenau</h2>
      <p class="evento-premium-info">📆 22 de Junho · Largada Rua XV</p>
    </div>
    <div class="evento-premium-cta">
      Inscreva-se →
    </div>
  </a>
</div>
```

### Exemplo 4: Festival Gastronômico
```html
<div class="evento-premium">
  <a href="https://wa.me/5547991234567" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">🍴 EVENTO DESTAQUE</div>
      <h2 class="evento-premium-titulo">Festival Gastronômico 2026</h2>
      <p class="evento-premium-info">📆 5 a 7 de Maio · Centro de Eventos</p>
    </div>
    <div class="evento-premium-cta">
      Saiba Mais →
    </div>
  </a>
</div>
```

---

## ⚠️ IMPORTANTE - Regras de Ouro

### ✅ FAÇA:
- Mantenha APENAS 1 banner ativo por vez
- Sempre use emojis relacionados ao tipo de evento
- Coloque datas claras (dia, mês e local)
- Use links válidos (teste antes de publicar)

### ❌ NÃO FAÇA:
- Deixar ambos os banners ativos ao mesmo tempo
- Deixar ambos os banners comentados (nada aparece)
- Usar links quebrados ou errados
- Esquecer de salvar o arquivo após editar

---

## 🎯 CHECKLIST RÁPIDO

Ao ativar um evento vendido, confira:
- [ ] Banner genérico comentado (`<!-- -->`)
- [ ] Banner premium descomentado (sem `<!-- -->`)
- [ ] Link correto do evento
- [ ] Nome do evento atualizado
- [ ] Data e local corretos
- [ ] Emoji apropriado
- [ ] Texto do botão faz sentido ("Saiba Mais", "Ingressos", etc)
- [ ] Arquivo salvo e upload feito

---

## 💡 DICAS DE VENDA

### Argumentos para o cliente:
1. **Visibilidade máxima:** "Seu evento fica no topo da página, primeira coisa que todo mundo vê"
2. **Sempre visível:** "Banner fixo que acompanha o usuário enquanto rola a página"
3. **Público qualificado:** "Pessoas que estão ATIVAMENTE procurando eventos na região"
4. **Custo-benefício:** "R$199 é menos que um anúncio de jornal e fica visível por muito mais tempo"

### Para pacotes:
- "Se você já sabe que vai ter 3 shows, fecha logo o pacote e economiza R$100"
- "Produtoras/casas de show: garantem os próximos meses com desconto"
- "Não precisa usar tudo de uma vez, vale para eventos futuros"

---

## 📞 CONTATO PARA ANÚNCIOS

WhatsApp: **5547991581967**  
Mensagem padrão: "Quero anunciar!"

---

## 🎨 CUSTOMIZAÇÕES POSSÍVEIS

### Mudar transparência do banner:
Procure por `.evento-premium` no CSS e altere os valores `0.85`:
- `0.75` = mais transparente
- `0.90` = menos transparente
- `0.85` = padrão atual (igual à container da cidade)

### Mudar cores do banner genérico:
Procure por `.evento-premium.generico`:
```css
background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
```

Cores atuais:
- Início: rgb(102, 126, 234) - azul/roxo claro
- Fim: rgb(118, 75, 162) - roxo escuro

---

## 📊 CONTROLE DE VENDAS (SUGESTÃO)

Crie uma planilha com:
- Data da venda
- Cliente
- Evento
- Período (início/fim)
- Valor pago
- Link usado
- Status (ativo/finalizado)

Isso ajuda a:
- Controlar quando trocar os banners
- Saber quando eventos acabam
- Calcular receita mensal
- Prospectar renovações

---

**Última atualização:** Março 2026  
**Dúvidas?** Consulte os outros arquivos de documentação ou entre em contato!
