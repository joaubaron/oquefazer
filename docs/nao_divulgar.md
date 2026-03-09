# 🎪 BANNER PREMIUM - Guia Completo

## 💰 Modelo de Negócio

### Tabela de Preços (Pacotes):
| Quantidade | Preço Total | Preço/Evento | Economia |
|------------|-------------|--------------|----------|
| 1 evento | R$199 | R$199 | - |
| 3 eventos | R$499 | R$166 | R$100 |
| 5 eventos | R$749 | R$149 | R$250 |

### 🔒 TABELA DE PRECIFICAÇÃO POR PORTE (USO INTERNO - CONFIDENCIAL)

**NÃO divulgar publicamente. Use como referência para definir preço após saber o porte do evento:**

| Porte do Evento | Preço Sugerido | Exemplos |
|-----------------|----------------|----------|
| **Pequeno** | R$149-179 | Bar local, banda independente, workshop |
| **Médio** | R$199-249 | Show regional, feira de bairro, corrida local |
| **Grande** | R$399-499 | Oktoberfest, festival de música, evento da cidade |

**Como usar:**
1. Cliente entra em contato via WhatsApp
2. Você pergunta: "Qual evento você quer divulgar?"
3. Cliente responde: "Oktoberfest Blumenau"
4. Você consulta tabela → Grande = R$399-499
5. Você responde: "Para eventos desse porte, o investimento é R$399"

**Flexibilidade:**
- Primeiro cliente → pode dar desconto promocional
- Cliente fiel (já anunciou antes) → pode dar desconto de fidelidade
- Pacote de múltiplos eventos → use a tabela de pacotes acima

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
      <p class="evento-premium-info">Máxima visibilidade para seu evento</p>
    </div>
    <div class="evento-premium-cta">
      Consultar →
    </div>
  </a>
</div>
```

**IMPORTANTE:** O banner genérico NÃO mostra preço. Isso permite definir valores diferentes por porte após contato no WhatsApp.

#### Passo 3: COMENTE o banner genérico
Adicione `<!--` ANTES e `-->` DEPOIS:
```html
<!--
<div class="evento-premium generico">
  <a href="https://wa.me/5547991581967?text=Quero%20anunciar!" target="_blank" class="evento-premium-link">
    <div class="evento-premium-content">
      <div class="evento-premium-badge">✨ ESPAÇO PREMIUM</div>
      <h2 class="evento-premium-titulo">📣 Divulgue seu evento aqui!</h2>
      <p class="evento-premium-info">Máxima visibilidade para seu evento</p>
    </div>
    <div class="evento-premium-cta">
      Consultar →
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
4. **Custo-benefício:** "Investimento acessível comparado a rádio, jornal ou Instagram Ads"

### Estratégia de precificação (após cliente informar o evento):

**Evento Pequeno (R$149-179):**
- "Para eventos desse porte, temos uma condição especial de R$149"
- "Como é seu primeiro evento conosco, vou fazer R$149 promocional"

**Evento Médio (R$199-249):**
- "O investimento para eventos regionais é R$199"
- "São R$199 pela semana toda em destaque máximo"

**Evento Grande (R$399-499):**
- "Para eventos do porte da Oktoberfest, o valor é R$399 pela visibilidade premium"
- "Considerando o alcance, são R$399 - muito abaixo do que custaria em outras mídias"

### Para pacotes:
- "Se você já sabe que vai ter 3 shows, fecha logo o pacote por R$499 e economiza R$100"
- "Produtoras/casas de show: garantem os próximos meses com desconto no pacote"
- "Não precisa usar tudo de uma vez, vale para eventos futuros"

### Objeções comuns:

**"Achei caro"**
→ "Comparado com que? Um anúncio de rádio custa R$150-300 por spot e passa só uma vez. Aqui fica visível 24/7"

**"Quero pensar"**
→ "Tranquilo! Mas esse espaço é único - se outro evento reservar antes, você perde a data que queria"

**"Vocês fazem desconto?"**
→ "Para o primeiro evento, posso fazer R$[X] promocional. Nos próximos você já entra no pacote com desconto automático"

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
