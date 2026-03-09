# 📚 Referências do Projeto — O Que Fazer App
© 2026 José Augusto Baron

> Guia em ordem cronológica: do desenvolvimento até a publicação e manutenção na Play Store.

---

## 1️⃣ Desenvolver o App

Crie o app usando HTML, CSS e JavaScript puro. Não precisa de framework.

| Recurso Nativo | Descrição |
|---|---|
| **Web Geolocation API** | Detecta a localização do usuário pelo GPS do celular |
| **Web Share API** | Abre o menu nativo de compartilhamento do celular |
| **Service Worker** | Permite o app funcionar offline e fazer cache |
| **localStorage** | Salva a última cidade pesquisada no celular do usuário |
| **PWA Manifest** | Define ícone, nome e comportamento ao instalar o app |

| API Externa | Descrição | Link |
|---|---|---|
| **Nominatim / OpenStreetMap** | Converte coordenadas GPS em nome de cidade | https://nominatim.openstreetmap.org |
| **Google Search AI Mode** | Busca eventos reais na cidade usando IA do Google | https://www.google.com/search?udm=50 |

---

## 2️⃣ Hospedar no GitHub Pages

Suba o código para o GitHub e ative o GitHub Pages para hospedar gratuitamente.

| Descrição | Link |
|---|---|
| **Repositório do app** | https://github.com/joaubaron/oquefazer |
| **App online (PWA)** | https://joaubaron.github.io/oquefazer/ |
| **GitHub Pages (docs)** | https://pages.github.com |

---

## 3️⃣ Configurar Repositório Pessoal (obrigatório para Play Store)

O repositório **joaubaron.github.io** contém arquivos essenciais para vincular o site ao app Android.

| Descrição | Link |
|---|---|
| **Página pessoal** | https://joaubaron.github.io |
| **Repositório** | https://github.com/joaubaron/joaubaron.github.io |

| Arquivo | Descrição |
|---|---|
| **.well-known/assetlinks.json** | Vincula o site ao app Android. Obrigatório para o PWABuilder publicar na Play Store via TWA. Sem ele o app pode ser rejeitado pelo Google |
| **.nojekyll** | Diz ao GitHub para servir os arquivos diretos, sem processar com Jekyll. Necessário para o assetlinks.json funcionar corretamente |

---

## 4️⃣ Proteger o Código Legalmente

Adicione o arquivo LICENSE na raiz do repositório antes de publicar.

| Descrição | Link |
|---|---|
| **LICENSE no repositório** | https://github.com/joaubaron/oquefazer/blob/main/LICENSE |
| **Lei Direitos Autorais BR** | https://www.planalto.gov.br/ccivil_03/leis/l9610.htm |

📌 **Prova de Autoria:**
- LICENSE registrado em: **28/02/2026 às ~13:54**
- Commit: `20a8c1d`
- Repositório público com histórico completo de commits

---

## 5️⃣ Gerar APK / AAB para Play Store

Use o PWABuilder para converter o PWA em pacote para publicação.

| Descrição | Link |
|---|---|
| **PWABuilder** | https://pwabuilder.com |
| **Download APK direto** | https://github.com/joaubaron/oquefazer/raw/main/Oquefazer.apk |

**Passos:**
1. Acesse pwabuilder.com
2. Cole a URL: `https://joaubaron.github.io/oquefazer/`
3. Gere o pacote **.aab**
4. Assine com sua chave digital

---

## 6️⃣ Publicar na Play Store

| Descrição | Link |
|---|---|
| **Google Play Console** | https://play.google.com/console |

**Passos:**
1. Acesse o Play Console
2. Crie um novo app ou nova versão
3. Faça upload do **.aab** gerado pelo PWABuilder
4. Preencha descrição, screenshots e política de privacidade
5. Envie para revisão

---

## 7️⃣ Manutenção e Atualizações

Para atualizar o app basta editar o código no GitHub. O app online atualiza automaticamente. Para atualizar na Play Store, gere um novo **.aab** pelo PWABuilder e faça upload no Play Console.

---

## 8️⃣ Em Caso de Cópia ou Violação

| Descrição | Link |
|---|---|
| **DMCA Takedown GitHub** | https://support.github.com/contact/dmca-takedown |
| **Report abuso GitHub** | https://github.com/contact/report-abuse |
| **Report app Play Store** | https://support.google.com/googleplay/android-developer/answer/9849910 |
| **Google DMCA** | https://support.google.com/legal/troubleshooter/1114905 |
| **OAB (advogado)** | https://www.oab.org.br |

---

> Guarde este documento para referência pessoal do projeto.
