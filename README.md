# LiteNews

![Lite News logo consisting of the text Lite News under a newspaper](LITENEWS.png)

[![Get the add-on for Firefox](https://lh4.googleusercontent.com/qNMVvYbmmhZj3t5bebHhKewVz3MijbMKcv4WZNUACjX47wTAYVmavD8TVHaBCGEEBQVvouTGu8CheQmuIAHTZ67_vozZDjokr5-4V1zZ_hRAvF6iHF0e526FSIMKL_55Sw=w1280)](https://addons.mozilla.org/en-US/firefox/addon/litenews/)[![Get the add-on for Google Chrome](https://lh4.googleusercontent.com/8ddC6LGL_94PLcfxgVcWuAZu3r3jJbajn11DH2nXuzQi93Hv4S5vdL8PqCOiKWGgevRzE04oujKgQ49TtlgOHWJ-lWp9Zy7eLwCTrqR0modZgp-P0BrQqyqBP7pa3mZm7g=w1280)](https://chromewebstore.google.com/detail/litenews/ddpeehpgbiodbpiogjghndlohokekjej)

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
