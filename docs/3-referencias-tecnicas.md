# Referências Técnicas — Oquefazer
© 2026 José Augusto Baron

---

## Stack

| Recurso | Descrição |
|---|---|
| HTML/CSS/JS puro | sem framework |
| Web Geolocation API | detecta localização pelo GPS |
| Web Share API | menu nativo de compartilhamento |
| Service Worker | app funciona offline + cache |
| localStorage | salva última cidade pesquisada |
| PWA Manifest | ícone, nome e comportamento ao instalar |
| Nominatim/OSM | converte GPS em nome de cidade |
| Google Search AI | busca eventos reais na cidade |

---

## Links principais

| Descrição | Link |
|---|---|
| Repositório | https://github.com/joaubaron/oquefazer |
| App online | https://joaubaron.github.io/oquefazer/ |
| Página pessoal | https://joaubaron.github.io |

---

## Arquivos essenciais (repo pessoal)

| Arquivo | Função |
|---|---|
| `.well-known/assetlinks.json` | vincula o site ao app Android — obrigatório para Play Store via TWA |
| `.nojekyll` | GitHub serve os arquivos diretos sem Jekyll — necessário para o assetlinks funcionar |

---

## Gerar APK/AAB para Play Store

1. Acesse pwabuilder.com
2. Cole: `https://joaubaron.github.io/oquefazer/`
3. Gere o `.aab`
4. Assine com sua chave digital
5. Faça upload no Play Console

---

## Autoria e proteção

- LICENSE registrado em **28/02/2026 ~13:54** · commit `20a8c1d`
- Lei de Direitos Autorais BR: https://www.planalto.gov.br/ccivil_03/leis/l9610.htm

**Em caso de cópia:**

| Ação | Link |
|---|---|
| DMCA GitHub | https://support.github.com/contact/dmca-takedown |
| Report abuso GitHub | https://github.com/contact/report-abuse |
| Report app Play Store | https://support.google.com/googleplay/android-developer/answer/9849910 |
| Google DMCA | https://support.google.com/legal/troubleshooter/1114905 |
| OAB | https://www.oab.org.br |
