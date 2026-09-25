# Racha do Graxinha — Android / Capacitor

Este repositório continua servindo o site pelo `index.html` da raiz e agora também possui uma estrutura separada para gerar Android com Capacitor.

## Identificação Android

- App: **Racha do Graxinha**
- Package ID: `com.rachadograxinha.app`
- WebDir do Capacitor: `web`
- Capacitor: **8.5.2**

> O Package ID pode ser alterado antes da primeira publicação na Play Store. Depois que um app é publicado, ele deve ser tratado como definitivo.

## Preparar localmente

Requisitos: Node.js 22+, Java/JDK 21 e Android Studio/Android SDK.

```bash
npm install
npm run cap:add:android
```

Depois, quando o `index.html` for atualizado:

```bash
npm run cap:sync
```

Para abrir o projeto Android:

```bash
npm run cap:open
```

## Gerar APK no GitHub

Existe um workflow manual em **Actions > Build Android APK**.

Ele:
1. instala o Capacitor;
2. copia o app atual para `web/index.html`;
3. gera o projeto Android;
4. compila um APK Debug;
5. publica o arquivo `app-debug.apk` como artifact do GitHub Actions.

## Firebase / Login Google

O app web atual usa Firebase Authentication com `signInWithPopup`. A estrutura Android pode ser compilada, mas para o login Google ficar realmente nativo e confiável no APK é necessário registrar o app Android no Firebase usando o package `com.rachadograxinha.app`, cadastrar SHA-1/SHA-256 e colocar o arquivo oficial `google-services.json` em `android/app/`.

Depois disso, a autenticação Google deve ser ligada a um fluxo nativo do Capacitor/Firebase. Não gere um `google-services.json` manualmente: use o arquivo baixado do Firebase Console.

## Importante

O arquivo fonte oficial continua sendo `index.html` na raiz. Não edite `web/index.html` diretamente; ele é regenerado por `npm run web:prepare`.
