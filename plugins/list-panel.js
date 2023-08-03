import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let menu_nya = `
*LIST HARGA PANEL BY ZYKO MD*

RAM 1GB CPU 30% Hanya 2K/BULAN
RAM 2GB CPU 50% Hanya 5K/BULAN
RAM 3GB CPU 75% Hanya 8K/BULAN
RAM 4GB CPU 100% Hanya 12K/BULAN
RAM 5GB CPU 130% Hanya 17K/BULAN
RAM 6GB CPU 150% Hanya 22K/BULAN
RAM 7GB CPU 175% Hanya 27K/BULAN
RAM 8GB CPU 175% Hanya 32K/BULAN

_Paket unlimited juga tersedia dengan harga menarik:_
_RAM, CPU, DISK UNLIMITED Hanya 15K/BULAN_
_*(Batas penggunaan berlaku)*_
_RAM, CPU, DISK UNLIMITED Hanya 40K/BULAN (unlimited)_


_Selain itu, tersedia juga Admin Panel dengan harga yang terjangkau:_

_ADMIN PANEL Hanya 45K/BULAN_
_Dapatkan keuntungan menggunakan panel ini:_

[ KEUNTUNGAN PANEL ]

_Bisa menjalankan bot tanpa ribet_
_Website/Aplikasi tetap berjalan meskipun bot ditutup_
_Tidak boros kuota internet_
_Tidak membebani memori perangkat_
_Bisa membuka murmurbug_
[ KEUNTUNGAN ADMIN PANEL ]

_Bisa membuat panel sendiri_
_Membuat panel sebanyak yang Anda inginkan_
_Menjual panel kepada orang lain_
_Bisa melakukan balmod jika Anda berencana untuk menjualnya_
_Ayo, jangan lewatkan kesempatan ini! Jika Anda berminat_
_silakan hubungi kami melalui WhatsApp di nomor ini:_
_wa.me/6283133329293_

© ZYKO MD`
conn.sendMessage(m.chat, {
text: menu_nya,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['panel', 'listpanel']
handler.tags = ['ownerstore']
handler.command = /^(panel|listpanel)$/i;
export default handler;