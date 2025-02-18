//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Amiya Bot Inc. Amiya Dragon Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me Amiya ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Amiya's youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '805a6c3fa9',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Lily_Ella.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['254723413973'] //ur owner number
global.ownername = "😎 shadrack 〽️ 😈" //ur owner name
global.ytname = "YT - TechwithAmee" //ur yt chanel name
global.socialm = "amiyaprogramer@gmail.com" //ur github or insta name
global.location = "Kenya , Coast province , anywhere" //ur location

//bot bomdy 
global.owner = ['254723413973']
global.ownertag = '94767453646' //ur tag number
global.botname = '🐉 SHEDDY 𝙳𝚁𝙰𝙶𝙾𝙽 𝙱𝙾𝚃 🐉' //ur bot name
global.linkz = "https://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ" //ur website to be displayed
global.botscript = 'This whatsapp md bot is testing now. we release this bot immediatly🥰.' //script link
global.reactmoji = "🇱🇰" //ur menu react emoji
global.themeemoji = "🐉" //ur theme emoji
global.packname = "🐉 𝙰𝙼𝙸𝚈𝙰 𝙳𝚁𝙰𝙶𝙾𝙽 𝙼𝙳 🐉" //ur sticker watermark packname
global.author = "༺៚ᴍʀͥ.ᴀͣᴍͫɪʏᴀッ༒ッʙ͋ᴏ̐̈́ᴛ͋乡࿐" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/botsis.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/botsis.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/botsis.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/botsis.jpg") //ur thumb pic

//damtabase
global.premium = ['254723413973'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ඔන්න හරි 🔥💯\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    admin: 'ඇඩ්මින්ලට විතරයි මේක පුලුවන් ළමයෝ 🌝\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    botAdmin: 'ඇඩ්මින් දියන්කෝ මුලින් 😒\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    owner: 'Owner ට විතරයි ළමයෝ ඕක පුලුවන් 🙏\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    group: 'group වල විතරයි ඕක😒\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    private: 'inbox විතරයි පුලුවන්🌝\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    bot: 'මේක මට විතරයි පුලුවන්😌👍 ඔයා පාඩුවේ ඉන්න 😒\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    wait: '😘 චුට්ටක් ඉන්න බබා 🥰🙏\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    linkm: 'කෝ 𝚕𝚒𝚗𝚔 එක 😒\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    error: 'Error!!\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.\n\n𝚠𝚊.𝚖𝚎/+94767453646\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    banChat: 'The bot was banned in this group, please contact the owner to unban\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/botsis.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
