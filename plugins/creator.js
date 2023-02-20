function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6287760550924@s.whatsapp.net')}\nitem1.TEL;waid=6287760550924:6287760550924\nitem1.X-ABLabel:Busy.\nURL;My Web: https://youtube.com/@leonnob2820\nEMAIL;Email Owner: https://youtube.com/@leonnob2820\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=6287760550924:6287760550924\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
