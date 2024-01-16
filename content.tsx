import type { PlasmoCSConfig } from "plasmo"
import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["https://www.cnn.com/*", "https://www.npr.org/*", "https://www.dailymail.co.uk/*", "https://www.csmonitor.com/*", "https://www.cbc.ca/*"],
  run_at: "document_start"
}

function isNumeric(value) {
    return /^-?\d+(\.\d+)?$/.test(value);
}

async function redirect() {
  // Get current URL
  var current = window.location.href;
  const url = new URL('', current);
  const components = url.pathname.split('/');
  // Exclude non-text media
  var video = components.includes("video");
  var player = components.includes("player");
  var webview = components.includes("webview");
  var live = components.includes("liven-news")
  // Ensure the user is requesting redirects right now
  const storage = new Storage()
  var redirectEnabled;
  redirectEnabled = await storage.get("enabled")
  // On first use this may not be set yet
  if (redirectEnabled === undefined) {
    redirectEnabled = true
  };
  if (!video && !player && !webview && !live && redirectEnabled) {
    switch (url.hostname) {
        case "www.cnn.com":
            window.location.replace("https://lite.cnn.com" + url.pathname)
            break;
        case "www.npr.org":
            window.location.replace("https://text.npr.org" + url.pathname)
            break;
        case "www.dailymail.co.uk":
            if (!url.pathname.includes("textbased")) {
                if(url.pathname.includes("article-")) {
                    window.location.replace("https://www.dailymail.co.uk/textbased" + url.pathname.replace("article-", 'text-'))
                } else {
                    window.location.replace("https://www.dailymail.co.uk/textbased/channel-1/index.html")
                }
            }
            break;
        case "www.csmonitor.com":
            if (!url.pathname.includes("text_edition")) {
                window.location.replace("https://www.csmonitor.com/text_edition" + url.pathname)
            }
            break;
        case "www.cbc.ca":
            if (!url.pathname.includes("lite")) {
                var story = url.pathname.split("-")
                var storyid = story.pop()
                if (isNumeric(storyid)) {
                    window.location.replace("https://www.cbc.ca/lite/story/" + storyid)
                } else {
                    window.location.replace("https://www.cbc.ca/lite" + url.pathname)
                }
            }
            break;
    }
  }
}

window.addEventListener("load", () => redirect(), false)