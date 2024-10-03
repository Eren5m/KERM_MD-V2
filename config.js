//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION ID=eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09Ma0ZEYnFjOXVoZmVpVlZwS1JmMTVHSFhxeHFwbmpnS2VZUmpxemkzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVR4aFBtTXBVQTdSK1lQbyt0Z2tjeWZjMUN1cjlYN2RTc0Z6NVNUU2FVUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SXEvS3RHeGpYYXpGVDNEM0JJZEEzaVNqSnc0WHVyRWJyQkRSNmFMY1ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlK2FqeU1sRFgvMEZqdVdmSEc5Mkx2TW5PeFNFMi9HWGZmUEVtRVFnQ2l3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJQ0tZT01SaTM1NW5DcG5tNFB6dkZsWGpBVWlJRmZJYndnTDJPbmtVVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNzRzJzL244REFhOHJreUNoWmpUc1Eycm52eGN3WUJ4bFp6NUFsQzdYMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05ianNzRjY3RWlOU3Qra0NlZ1lLSExaaWovYmFYMXNreHZQdDU1TnNYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemZLZjdOeFROSU9IUnFhUW91Z0xkaUE5WGtJRkdSakVZQjJhV3hNK3dSND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAxYXhkamtSTzUvL0N3M1RROGk5L3ZDN1NPQ1hMTExtZWtEWWZsa1FoZ2V2QSthWmNSMHZXeHBrdXNORlRCZStremdwSXJ5b1pMaGt4Z0xHZU1KQ0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IjgrVFgwS2krZHdTa1ZpOHFKZnNEVjNxSVRYcEN5VlRJZTU0T3hHdnQvNjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InlyNGtMTzdZUldLa1FFb1dZd0l0bXciLCJwaG9uZUlkIjoiOWIyOGNjYjctYjM5Yi00ZGNhLWEzNWQtMDhlOWMwYWM5ZTZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBZNVA1Y2lZZFQ4OGcvb2RlOVJ5RDQ4R2pmND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3TVFBdTIzb0M0cERObGNad3YyeDJraWY0NUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjU3TjY4VEwiLCJtZSI6eyJpZCI6IjIzNzY5MTk2MzUxMDoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik3gvoPgv4Zl4L6D4L+GaeC+g+C/hiDwnZKa8J2SgvCdko7wnZKC8J2ShfCdkoJf8J2RtfCdkoAg8J2Rr/CdkajwnZGr8J2RrPCdkbrCssK5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMUHdpZXNHRVBxZityY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0UG83bkgwRWNyTWh6SXJxMzVmVExwek45ZEtNZzZTNUJ0SlJpL3czY1dFPSIsImFjY291bnRTaWduYXR1cmUiOiJyM1RvS2MwbzczL0NoaGtsZTdNeU05L3JhVEFPMWc5TGVsam1ZVGJNQ3gzcHlZamZBUXF5Rmc4Ung3ZTdIUDFOLzJOYnFFUlFrR1lEdnF5MHNuSXNBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicWhieHBJZExZRlA5aFl2dmZjS0ppYjZtaFRSNGMrbDAwdnMyQkZtNi8xYWxMMlBXWXNNR0lmMXhmSU9uaHZRWTNhMnFrOHR3eHZFR2R5Qkk2cVcrQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTE5NjM1MTA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiVDZPNXg5QkhLekljeUs2dCtYMHk2Y3pmWFNqSU9rdVFiU1VZdjhOM0ZoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTU5MDQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURqeCJ9
  process.env.SESSION_ID ||
  "PUT YOUR SESSION HERE"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD
  botname: process.env.BOT_NAME || "*mei Yamada",
  ownername: process.env.OWNER_NAME || "mei Yamada"
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: proces
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
