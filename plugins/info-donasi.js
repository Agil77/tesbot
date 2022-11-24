let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
gak terima donasi mks

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
