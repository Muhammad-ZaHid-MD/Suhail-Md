const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Muhammad786:Muhammad786@cluster0.fwvspqh.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==";
global.website=process.env.GURL || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/36eb746e1fbda08fccbe2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "> `𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923288330023";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923288330026";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/36eb746e1fbda08fccbe2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_54_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OSxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9qeVRhSkpuVkhHYitkaDBFOUJHcDlIdGNqblRra3BwdWliV3lWT2dKbkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVOWWp3bFNFVHYyd3o0MjN6emVnTUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzE4YzkxOGMtNThiYy00MzE2LWE2NzMtYzQ5YzVmOTk0NWQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MCxcbiAgICAgIDEzMSxcbiAgICAgIDk3LFxuICAgICAgMjE5LFxuICAgICAgMjQ0LFxuICAgICAgMTMxLFxuICAgICAgMTg0LFxuICAgICAgMTg4LFxuICAgICAgMjI1LFxuICAgICAgMjU0LFxuICAgICAgMixcbiAgICAgIDEyLFxuICAgICAgNTUsXG4gICAgICAxNzMsXG4gICAgICAzLFxuICAgICAgMzYsXG4gICAgICAzNSxcbiAgICAgIDEyMSxcbiAgICAgIDk3LFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxMDEsXG4gICAgICAxMTgsXG4gICAgICAxNCxcbiAgICAgIDk4LFxuICAgICAgOTAsXG4gICAgICAxNTIsXG4gICAgICAxMzIsXG4gICAgICAxMTksXG4gICAgICAxMTMsXG4gICAgICAyNTMsXG4gICAgICAxNTAsXG4gICAgICA3LFxuICAgICAgMCxcbiAgICAgIDI0NixcbiAgICAgIDE1NSxcbiAgICAgIDEzNixcbiAgICAgIDEyMyxcbiAgICAgIDI0MSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQjZQUUcxUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTA0Njk3ODAwOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjA0MTUzMjg2MjUyNDoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcUVwN29DRUxhQWo3UUdHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktmZU50UmwzMGQvT1B6TXNZRENQcytSWnR0akdKeTc2QVRjSTVWbEF6U009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidlJDekhJOE13SXRuS0g1V3o5cWMvaFR0bVUyM3I4VmtlWFRJTGtkNGtIcTdBanVHMlFyYTA4eENYNnNqc09PV25XOFltaE5tRDRhblFnRGVlVjBjQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVE1kSERUTGNPNW1FL2pvQ3I2bEp1UUo2RGZKT3N3Mkg5enBEVHFkUHlzRG03Q3U4VldEZ3dNc2xoV0tyVlJZaUlYSUdRSVBNdlVmNGVhS0E0Y1FBZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTA0Njk3ODAwOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTEwNDU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWtsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFa2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRSlliL05meWN6NjZmalNHM0kvMXN0TU85TFZsKzUzQUFmbm9FTXk4cTJvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1OTE0NTI3MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ">,-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "> `𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🦋",
  packname: process.env.PACK_NAME || "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",
  botname : process.env.BOT_NAME  || "`𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`",
  ownername:process.env.OWNER_NAME|| "𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿",


  errorChat : process.env.ERROR_CHAT || "923288330026",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "`𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
