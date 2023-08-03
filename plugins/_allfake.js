import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import { promises, readFileSync } from 'fs'
let handler = m => m
handler.all = async function (m) {
let name = await conn.getName(m.sender) 
let sap = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann']
let sapa = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann'].getRandom()
let pp
try {
pp = await this.profilePictureUrl(m.sender, 'image')
} catch (e) {
pp = hwaifu.getRandom()
} finally {
global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
global.fetch = import('node-fetch')
global.bochil = import('@bochilteam/scraper')
const _uptime = process.uptime() * 1000
global.kontak2 = [
[owner[0], await conn.getName(owner[0] + '6285751390060@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'anamisatsu12@gmail.com', true],
[owner[1], await conn.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'anamisatsu@gmail.com', true],
]
let res = JSON.parse(readFileSync('./package.json'))
global.v = `© Maya Office V${res.version} (Public Botz)`
global.api = "Zyko"
global.ucapan = ucapan()
global.ephemeral = '86400'
global.adReply = {
contextInfo: {
forwardingScore: 9999,
externalAdReply: { 
showAdAttribution: true,
title: global.ucapan,
body: "Hallo " + name,
mediaUrl: sgc,
description: 'simple bot esm',
previewType: "PHOTO",
thumbnail: await (await fetch(pp)).buffer(),
sourceUrl: "https://instagram.com/say_wibu_elit?igshid=MzNlNGNkZWQ4Mg==",
}
}
}
global.fakeig = {
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaUrl: sig,
mediaType: "VIDEO",
description: "Follow: " + sig,
title: "👋 Hay Kak :> " + name,
body: botdate,
thumbnailUrl: await (await fetch(pp)).buffer(),
sourceUrl: sgc
}
}
}
global.fakefb = {
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaUrl: sfb,
mediaType: "VIDEO",
description: "Follow: " + sfb,
title: "👋 Hay Kak :> " + name,
body: botdate,
thumbnailUrl: await (await fetch(pp)).buffer(),
sourceUrl: sgc
}
}
}
// Fake 🤥
global.fpayment = {
"key": {
"remoteJid": "0@s.whatsapp.net",
"fromMe": false,
"id": "BAE595C600522C9C",
"participant": "0@s.whatsapp.net"
},
"message": {
"requestPaymentMessage": {
"currencyCodeIso4217": "USD",
"amount1000": fsizedoc,
"requestFrom": "0@s.whatsapp.net",
"noteMessage": {
"extendedTextMessage": {
"text": "👋 Hay Kak :> " + name
}
},
"expiryTimestamp": fsizedoc,
"amount": {
"value": fsizedoc,
"offset": fsizedoc,
"currencyCode": "USD"
}
}
}
}
// Fake 🤥
global.ftroli = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount: fsizedoc,
status: 1,
surface: 1,
message: botdate,
orderTitle: wm,
sellerJid: '0@s.whatsapp.net'
}
}
}
global.fkontak = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
'contactMessage': {
'displayName': wm,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},
;;;\nFN:${wm},
\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'),
thumbnail: fs.readFileSync('./thumbnail.jpg'),
sendEphemeral: true
}
}
}
global.fkon = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true
 }
 }
}
global.fvn = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": fsizedoc,
"ptt": "true"
}
}
}
global.fvid = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
"videoMessage": {
"title": wm,
"h": `Hmm`,
'seconds': fsizedoc,
'caption': "👋 Hay Kak :> " + name,
'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
}
}
}
global.ftextt = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
"extendedTextMessage": {
"text": "👋 Hay Kak :> " + name,
"title": bottime,
'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
}
}
}
global.fliveLoc = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
"liveLocationMessage": {
"caption": "👋 Hay Kak :> " + name,
"h": `${bottime}`,
'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
}
}
}
global.fliveLoc2 = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
"liveLocationMessage": {
"title": "👋 Hay Kak :> " + name,
"h": bottime,
'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
}
}
}
global.ftoko = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync('./thumbnail.jpg') //Gambarnye
},
"title": "👋 Hay Kak :> " + name, //Kasih namalu 
"description": bottime,
"currencyCode": "IDR",
"priceAmount1000": fsizedoc,
"retailerId": "Ghost",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
global.fdocs = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: wm,
jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
}
}
}
global.fgclink = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
groupInviteMessage: {
groupJid: "17608914335-1625305606@g.us",
inviteCode: null,
groupName: wm,
caption: "👋 Hay Kak :> " + name,
jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
}
}
}
global.fgif = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
"videoMessage": {
"title": "👋 Hay Kak :> " + name,
"h": `Hmm`,
'seconds': fsizedoc,
'gifPlayback': 'true',
'caption': bottime,
'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
}
}
}
global.fimg = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
imageMessage: {
url: logo,
mimetype: 'image/jpeg',
fileLength: fsizedoc,
height: 306,
width: 366,
jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
}
}
}
global.fimgv = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
imageMessage: {
url: logo,
mimetype: 'image/jpeg',
fileLength: fsizedoc,
height: 306,
width: 366,
jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
viewOnce: true
}
}
}
global.fakeyt = {
fileLength: fsizedoc, seconds: fsizedoc,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaUrl: syt,
mediaType: 'VIDEO',
description: 'Follow: ' + syt,
title: '👋 ' + sapa + ' Kak :> ' + name,
body: botdate,
thumbnailUrl: pp,
sourceUrl: syt
}
}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------- 
let pft = [global.fimg, global.fimgv, global.fpayment, global.ftroli, global.fkontak, global.fvn, global.fvid, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fakeyt, global.fgif]
global.fakes = pft.getRandom()
}}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------- 
export default handler 

function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Selamat malam 🌙"
if (time >= 4) {
res = "Selamat pagi 🌄"
}
if (time > 10) {
res = "Selamat siang ☀️"
}
if (time >= 15) {
res = "Selamat sore 🌅"
}
if (time >= 18) {
res = "Selamat malam 🌙"
}
return res
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}