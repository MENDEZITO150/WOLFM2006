let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.xteam.xyz/randomimage/ppcouple?APIKEY=29d4b59a4aa687ca')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButtonImg(m.chat, json.result.female,  'Chica 🙆‍♀️', '🐱‍🐉 botwolf 🐱‍🐉', 'Siguiente 🔄', '.compartirfoto', m)
conn.sendButtonImg(m.chat, json.result.male, 'Chico 🙆‍♂️', '🐱‍🐉 botwolf 🐱‍🐉', 'Siguiente 🔄', '.compartirfoto', m)}
handler.command = /^compartirfoto$/i
module.exports = handler
