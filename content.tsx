import type { PlasmoCSConfig } from "plasmo"
import { Storage } from "@plasmohq/storage"
 
const storage = new Storage()

export const config: PlasmoCSConfig = {
  matches: ["https://www.cnn.com/*", "https://www.npr.org/*", "https://www.dailymail.co.uk/*", "https://www.csmonitor.com/*", "https://www.pbs.org/*", "https://www.cbc.ca/*"]
}

window.addEventListener("load", () => {
  // Get current URL
  var current = window.location.href;
  const url = new URL('', current);
  const components = url.pathname.split('/');
  var video = components.includes("video");
  var player = components.includes("player");
  if (!video && !player) {
    switch (url.hostname) {
        case "www.cnn.com":
            window.location.replace("https://lite.cnn.com" + url.pathname)
            break;
        case "www.npr.org":
            window.location.replace("https://text.npr.org" + url.pathname)
            break;
        case "www.dailymail.co.uk":
            window.location.replace("https://www.dailymail.co.uk/textbased" + url.pathname)
            break;
        case "www.csmonitor.com":
            if (!url.pathname.includes("text_edition")) {
                window.location.replace("https://www.csmonitor.com/text_edition" + url.pathname)
            }
            break;
        case "www.cbc.ca":
            if (!url.pathname.includes("lite")) {
                window.location.replace("https://www.cbc.ca/lite" + url.pathname)
            }
            break;
        case "www.pbs.org":
            window.location.replace("https://lite.pbs.org/" + url.pathname)
            break;
    }
  }
})