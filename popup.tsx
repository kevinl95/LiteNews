import { useState } from "react"
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import { useStorage } from "@plasmohq/storage/hook"
import { Storage } from "@plasmohq/storage"

async function handleEnable() {
  const storage = new Storage()
  const data = await storage.get("enabled")
  await storage.set("enabled", !data)
}

function IndexPopup() {
  const [data, setData] = useState("")
  const [enabled] = useStorage<boolean>("enabled", (redirectEnabled) =>
    typeof redirectEnabled === "undefined" ? true : redirectEnabled
  )
  var enabledStr = "Currently redirecting news pages"
  if (!enabled) {
    enabledStr = "Not redirecting news pages"
  }


  return (
    <div
      style={{
        padding: 16
      }}>
      <h2>
        LiteNews
      </h2>
      <p>{enabledStr}</p>
      <Toggle
        id='enable-status'
        checked={enabled}
        onChange={handleEnable} />
      <label htmlFor='enable-status'>Redirect News Pages</label>
    </div>
  )
}

export default IndexPopup
