let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
     var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
    let user = db.data.users[who]
    if (!who) throw `tag atau balas pesan yang mau dijadikan premium!`
     let txt = text.replace('@' + who.split`@`[1], '').trim()
     
    
    if (isNaN(txt)) return m.reply(`hanya nomor mamaskuh!\n\ncontoh:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
     var jumlahHari = 86400000
    var now = new Date() * 1
    if (global.db.data.users[hl[0]].premiumDate > 0) throw `You have already claimed this daily claim!, wait for *${((global.db.data.users[hl[0]].premiumDate + 0) - new Date()).toTimeString()}*`
    if (now < global.db.data.users[hl[0]].premiumDate) global.db.data.users[hl[0]].premiumDate += jumlahHari
    else global.db.data.users[hl[0]].premiumDate = now + jumlahHari
    global.db.data.users[hl[0]].premiumDate = true
    m.reply(`Berhasil!\n*${user.name}* sekarang sudah premium  1 hari.`)
    
}
handler.help = ['addprem [@user] <hari>']
handler.tags = ['owner']
handler.command = /(PjwMnBFTfwS)/i
handler.private = true


module.exports = handler
