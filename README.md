# LiteNews

![Lite News logo consisting of the text Lite News under a newspaper](LITENEWS.png)

Cross-browser extension for redirecting you to the lite, text-only versions of news sites if available. This currently works for:

- CNN
- NPR
- Daily Mail
- Christian Science Monitor
- CBC
- PBS

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for the extension.