console.log("🕖 Starting...")

import yargs from "yargs"
import cfonts from "cfonts"
import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { createRequire } from "module"
import { createInterface } from "readline"
import { setupMaster, fork } from "cluster"
import { watchFile, unwatchFile } from "fs"

import express from "express"
import monitor from "express-status-monitor"
const app = new express()


const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, "./package.json")) 

const randomColor = ['black', 'red', 'green', 'yellow', 'blue'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];

const spc1 = '      '
const spc2 = ''
const spc3 = '      '
const spc4 = '   '
const spc5 = '   '
const spc6 = '   '
const spc7 = '   '
const text = `
      [ Created by: ZYKO BOTZ MD ]
           
    < =============================== >
${spc1}[•]Hai         : i.m ZYKO BOTZ MD
${spc2}[•]Version     : 12.0.0
${spc3}[•]Library      : Baileys Multi Device
${spc4}[•]Status      : Online!
${spc5}[•]Owner       : ZYKO MD
${spc6}[•]Author      : ZYKO BOTZ MD
${spc7}[•]Base Ori    : ZYKO MD
    < =============================== >`;


say(text, {
  font: "console",
  align: "center",
  colors: [`yellow`]
})
say("ZYKOBOTZ MD V12 By @zykobotz", {
  font: "console",
  align: "center",
  colors: [`yellow`]
})
say("START RUN", {
  font: "shade",
  align: "center",
  colors: [`${apiColor}`]
})
var isRunning = false

function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(" "), {
    font: "console",
    align: "center",
    colors: ["magenta"]
  })
  say("🌎 MEMUAT SOURCE...", {
    font: "console",
    align: "center",
    colors: ["red"]
  })
  say("📑 MEMUAT PLUGINS...", {
    font: "console",
    align: "center",
    colors: ["yellow"]
  })
  say("✅ DONE !", {
    font: "console",
    align: "center",
    colors: ["green"]
  })
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = fork()
  p.on("message", data => {
    console.log("[RECEIVED]", data)
    switch (data) {
      case "reset":
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case "uptime":
        p.send(process.uptime())
        break
    }
  })
  p.on("exit", (_, code) => {
    isRunning = false
    console.error("[❗]Exited with code:", code)
    if (code !== 0) return start(file)
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts["test"])
    if (!rl.listenerCount()) rl.on("line", line => {
      p.emit("message", line.trim())
    })

}

start("main.js")
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/home.html")
})
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/html/home.html")
})
app.get("/game", (req, res) => {
  res.sendFile(__dirname + "/html/game.html")
})
app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/html/chat.html")
})
app.get("/tools", (req, res) => {
  res.sendFile(__dirname + "/html/tools.html")
})
app.get("/music", (req, res) => {
  res.sendFile(__dirname + "/html/music.html")
})
app.get("/views", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})
app.get("/*", (req, res) => {
  res.send({ error: "Endpoint: home, game, chat, tools, music" })
})
app.listen(5000, () => {
  console.log("BOT is up and running")
})
app.set("json spaces", 1); 
app.use(monitor())