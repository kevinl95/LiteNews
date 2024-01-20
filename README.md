# LiteNews

![Lite News logo consisting of the text Lite News under a newspaper](LITENEWS.png)

[![Get the add-on for Firefox](https://extensionworkshop.com/assets/img/documentation/publish/get-the-addon-178x60px.dad84b42.png)](https://addons.mozilla.org/en-US/firefox/addon/litenews/)[![Get the add-on for Google Chrome](https://developer.chrome.com/static/docs/webstore/branding/image/206x58-chrome-web-bcb82d15b2486.png)](https://chromewebstore.google.com/detail/litenews/ddpeehpgbiodbpiogjghndlohokekjej)

Cross-browser extension for redirecting you to the lite, text-only versions of news sites if available. This is useful if you are on a low-bandwidth connection or just want your news to load faster! This currently works for:

- CNN
- NPR
- Daily Mail
- Christian Science Monitor
- CBC

## How to Use

Navigating to pages hosted by one of the above publishers will redirect you to the "lite" version of that page, if available. Visual content such as video players will be displayed like normal.

You can disable redirection at any time by selecting the extension from the extension menu in your browser and toggling "Redirect News Pages" to off.

## Development
### Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for Chrome using manifest v3 use: `build/chrome-mv3-dev`.

### Making a production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for the extension.
