# 🗺️ Roteiro do Anunciante — Oquefazer
> Jornada completa: primeiro contato → renovação

---

## ETAPA 1 — Primeiro Contato

**Objetivo:** apresentar o app e despertar interesse.

**Quando usar:** ao abordar um bar, restaurante, evento ou negócio local pela primeira vez.

### Mensagem inicial (WhatsApp / Instagram)

```
Oi [nome]! Tenho um app que recomenda o que fazer na cidade — seu negócio é apresentado para quem está decidindo onde ir agora.

Dá uma olhada: 👉 https://joaubaron.github.io/oquefazer/

Tenho três opções:
🔥 Banner Premium — destaque máximo na entrada do app (shows, eventos e grandes atrações)
⭐ Parceiro do Mês — recomendação exclusiva o mês inteiro por R$199
📅 Parceiro da Semana — recomendação semanal por R$79/semana
🔔 Notificação Patrocinada — sua mensagem direto no celular de todos os inscritos (a partir de R$49)

Posso te mostrar como funciona?
```

### Se estiver pessoalmente

- Abra o app ao vivo e mostre funcionando
- Busque a cidade do anunciante na hora
- Mostre onde o negócio dele apareceria

---

## ETAPA 2 — Objeções e Fechamento

**Objetivo:** contornar dúvidas e fechar a venda.

### "Quanto custa isso?"

```
Depende do que você quer divulgar:

🔥 Banner Premium — destaque máximo pra eventos e grandes atrações (valor conforme o porte)
⭐ Parceiro do Mês — recomendação exclusiva o mês inteiro por R$199
📅 Parceiro da Semana — recomendação semanal por R$79/semana

Em todos os casos, menos que um impulsionamento no Instagram — e aqui você aparece pra quem já está decidindo o que fazer, não pra quem está rolando o feed.

Dica: o mês inteiro sai por R$199 — se fosse semana a semana ficaria R$316.
```

### "Como funciona exatamente?"

```
Quando alguém busca o que fazer aí, o app envia um prompt para a IA do Google com seu negócio destacado — nome, descrição e Instagram — com instrução para apresentá-lo antes dos eventos. Os resultados dependem da IA, mas a instrução é clara e prioritária.
```

### "Quantas pessoas usam?"

```
Ainda estou crescendo a base, mas o diferencial não é volume — é intenção. Quem abre o app quer sair. Ele está escolhendo onde ir naquele momento.
```

### "Vou pensar..."

```
Claro! Só lembrando que o Parceiro do Mês é exclusivo — só existe 1 por vez. Quando preencher, fico te avisando se abrir vaga.
```

### "Fazem desconto?"

| Situação | O que dizer |
|---|---|
| Banner Premium — evento pequeno | `Pro primeiro evento já faço R$149 — é o melhor preço que tenho.` |
| Banner Premium — evento médio | `Pro primeiro evento posso fazer R$199. Se tiver mais eventos, fecha pacote de 3 por R$499 e sai R$166 cada.` |
| Banner Premium — evento grande | Não desconta — ofereça pacote de 3x |
| Parceiro do Mês | `Pro primeiro mês faço R$179. Renovando, volta ao R$199 normal.` |
| Parceiro da Semana | `O semanal já é o valor de entrada — R$79 pra testar sem compromisso.` |

### "Não tenho verba agora"

```
Entendo! Tenho também o modelo semanal por R$79 — dá pra testar uma semana e ver o resultado antes de decidir algo maior.
```

### "Achei caro"

```
Um anúncio de rádio custa R$150–300 por spot e passa uma vez. Aqui fica visível 24/7 pra quem está decidindo onde ir agora.
```

---

## ETAPA 3 — Anunciante Aceitou

**Objetivo:** coletar os dados e publicar o anúncio.

### 3a. Confirmar o Pix antes de publicar

```
Ótimo! Só confirmar o pagamento antes de colocar no ar:

💳 Pix — Chave CPF: 649.568.229-87 (José Augusto Baron)

[valor conforme plano escolhido]

Assim que confirmar, já subo no ar hoje!
```

### 3b. Coletar dados conforme o plano

**🔔 Notificação Patrocinada**
```
Para enviar a notificação preciso de:

1. Título (ex: "Point da Beleza ✂️")
2. Texto curto (ex: "50% off hoje! Agende agora 💇")
3. Link para onde vai ao clicar (Instagram, site ou WhatsApp)

Manda aqui que disparo ainda hoje!
```

**🔥 Banner Premium**
```
Para configurar o banner preciso de:

1. Link do site ou página do evento
2. Nome do evento
3. Data e local (ex: "10 a 26 de Outubro · Vila Germânica")
4. Emoji temático (ex: 🍻 🎶 🎭 🎪 🎤)

Manda aqui que coloco no ar ainda hoje!
```

**⭐ Parceiro do Mês**
```
Para configurar sua recomendação no app preciso de:

1. Link do seu Instagram
2. Nome do negócio
3. Frase curta descrevendo o que é (ex: "O melhor da comida típica")
4. Horário de funcionamento
5. Logo em PNG (Posso usar do Instagram, se tiver.)

Manda aqui que coloco no ar ainda hoje!
```

**📅 Parceiro da Semana**
```
Para configurar sua recomendação no app preciso de:

1. Link do seu Instagram
2. Nome do negócio
3. Um emoji que representa seu negócio 🍻🎶🎭🌱🎾🛍️🎤🍔🚴

Manda aqui que coloco no ar ainda hoje!
```

### 3c. Referência de IDs para o OneSignal

> 🔖 Use esses IDs no campo `anunciante_id` do Additional Data ao disparar notificações.

| Plano | ID padrão | Exemplo atual |
|---|---|---|
| 🔥 Banner Premium | `premium_ANO_MES_nome` | `premium_2026_10_oktoberfest` |
| ⭐ Parceiro do Mês | `mensal_ANO_MES_nome` | `mensal_2026_03_pointdabeleza` |
| 📅 Semana esquerda | `semanal_ANO_MES_sX_esq_nome` | `semanal_2026_03_s1_esq_innatura` |
| 📅 Semana meio | `semanal_ANO_MES_sX_meio_nome` | `semanal_2026_03_s1_meio_bonikoski` |
| 📅 Semana direita | `semanal_ANO_MES_sX_dir_nome` | `semanal_2026_03_s1_dir_eguabest` |
| 🔔 Só notificação | `notif_ANO_MES_nome` | `notif_2026_03_feiradofulano` |

> ⚠️ O ID da notificação deve ser **idêntico** ao `anunciante_id` usado no `index.html` para que o painel cruze os dados corretamente. Para anunciantes apenas de notificação (sem card no app), use o prefixo `notif_`.

---

## ETAPA 4 — Anúncio Publicado

**Objetivo:** confirmar a publicação e gerar confiança.

### Mensagem após publicar

```
Sua recomendação já está no ar! 🎉

Abre o link/app e veja como ficou:
👉 https://joaubaron.github.io/oquefazer/

Qualquer ajuste é só falar!
```

> ✅ **Checklist antes de enviar:**
> - [ ] Pix confirmado
> - [ ] Dados corretos (nome, link, data, local)
> - [ ] Apenas 1 banner ativo por vez
> - [ ] Link funcionando

> 🔔 **Se incluir notificação no plano:**
> - [ ] No OneSignal → New Push → Additional Data → Add Field
> - [ ] Key: `anunciante_id` · Value: ID correspondente (ver tabela Etapa 3c)
> - [ ] Confirmar que o link de destino da notificação está correto

---

## ETAPA 5 — Período do Anúncio Ativo

**Objetivo:** manter o anunciante engajado e sentindo resultado.

### Na metade do período — check-in

*Envie em torno da metade do prazo contratado (ex: dia 15 de um mês, ou dia 4 de uma semana)*

```
Oi [nome]! Tudo certo com o anúncio no ar 🎉

Você pode acompanhar clicando no app:
👉 https://joaubaron.github.io/oquefazer/

Se quiser algum ajuste no texto ou informação, é só falar!
```

> 💡 Se tiver acesso ao Google Analytics, mencione dados reais de cliques no anunciante.

---

## ETAPA 6 — Período Terminando

**Objetivo:** plantar a renovação antes do anúncio sair do ar.

*Envie 2–3 dias antes do prazo acabar.*

### Parceiro da Semana

```
Oi [nome]! Sua semana no app está chegando ao fim 📅

Quer renovar por mais uma semana por R$79, ou fechar o mês inteiro por R$199?

O mensal é mais em conta e fica no ar o mês todo — sem interrupção.
```

### Parceiro do Mês

```
Oi [nome]! Seu mês no app termina em breve ⭐

Quer renovar? Para quem já anunciou, é R$199 o próximo mês.

Confirma aqui que deixo no ar sem parar!
```

### Banner Premium (evento encerrado)

```
Oi [nome]! O período do banner do [nome do evento] encerra [data/hoje].

Já tem algum evento novo no radar? Posso preparar um novo destaque quando quiser 🎪
```

---

## ETAPA 7 — Anúncio Encerrado

**Objetivo:** fazer a retirada com cuidado e já abrir porta para retorno.

### Mensagem de encerramento + convite

```
Oi [nome]! O anúncio de [nome do negócio/evento] saiu do ar hoje conforme combinado.

Foi um prazer ter vocês no app! 🙌

Assim que quiserem voltar — semana, mês ou um novo evento — é só chamar. Já tenho tudo salvo aqui para colocar no ar rápido.
```

---

## ETAPA 8 — Retorno (Reativação)

**Objetivo:** trazer o anunciante de volta com o menor atrito possível.

### 1ª tentativa — 1 semana após o encerramento

```
Oi [nome]! Passando pra saber como foi a experiência com o app 😊

Algum retorno de clientes que viram pelo Oquefazer?

Tenho uma vaga aberta essa semana se quiser dar continuidade!
```

### 2ª tentativa — 2 semanas após o encerramento

```
Oi [nome]! Temos um novo período disponível e lembrei de vocês 🎯

Uma semana no app é R$79 — dá pra testar de novo sem compromisso.

Topa?
```

### 3ª tentativa — 1 mês após o encerramento (gancho de contexto)

*Use um gancho real: feriado, data comemorativa, alta temporada, evento da cidade.*

```
Oi [nome]! Com [Oktoberfest / Dia das Mães / alta temporada / etc.] chegando, a busca por "o que fazer" dispara aqui na região 📈

É uma boa hora pra aparecer no app pra quem está decidindo onde ir. Tenho o Banner Premium disponível essa semana — posso fechar pra vocês?
```

---

## Resumo visual da jornada

```
[Primeiro contato]
       ↓
[Objeções → Fechamento]
       ↓
[Pix + Dados coletados]
       ↓
[Anúncio publicado → Confirmação]
       ↓
[Check-in na metade do período]
       ↓
[Aviso 2-3 dias antes do fim]
       ↓
[Encerramento com convite]
       ↓
[Retorno: 1 semana → 2 semanas → 1 mês]
```

---

> 📌 **Lembre-se:** o primeiro anunciante é o mais difícil. Com ele no ar, a venda para o próximo fica muito mais fácil. Use prints e métricas reais para acelerar o fechamento nas próximas vendas.
