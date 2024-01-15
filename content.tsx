import type { PlasmoCSConfig } from "plasmo"
import { Storage } from "@plasmohq/storage"
 
const storage = new Storage()

export const config: PlasmoCSConfig = {
  matches: ["https://www.cnn.com/*", "https://www.npr.org/*", "https://www.dailymail.co.uk/*", "https://www.csmonitor.com/*", "https://www.cbc.ca/*"],
  run_at: "document_start"
}

async function redirect() {
  // Get current URL
  var current = window.location.href;
  const url = new URL('', current);
  const components = url.pathname.split('/');
  var video = components.includes("video");
  var player = components.includes("player");
  var webview = components.includes("webview");
  var live = components.includes("liven-news")
  const storage = new Storage()
  const redirectEnabled = await storage.get("enabled")
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
                window.location.replace("https://www.dailymail.co.uk/textbased" + url.pathname.replace("article-", 'text-'))
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
                window.location.replace("https://www.cbc.ca/lite/story/" + story.pop())
            }
            break;
    }
  }
}

window.addEventListener("load", () => redirect(), false)