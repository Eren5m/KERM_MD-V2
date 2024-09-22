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

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1iNktYdC9NVVhMT3o5WE9FVjZXWjBMVnNGVXQrU21UL3VhWVd2Q3JHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1lpY2syU0Q4K2RXS3pUek9UMXNraC9ZeWZYQk9mWnA1ZU45blc5UGF5ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUHZWazc2MzRXWCtBTG1TdTdlUHNUQlFPU0M3aHVLQnRZQ2ZoWXdvc0ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUldKYUE4c0R6ejU5SjVMSzRSbk1jYzF3L3EyUm5FQXo5dm1wOGtCZkM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQVXBsNHNOU2Qyd2s4Tm9CQ05UZlVCZUR3dVNIZDJsMW1IVmh4NDg3bDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9LcUorN1NtL21jV0s4b0ttS2o4YU1SY2NlZWlCRnRGaG51TWExN1VPRG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUN1RE1pVE9mNTBldUNOZ2ZLcVRmeVAraFZqL3FVaFpkNDNCcFBuQVNFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkFPMVgvSVE5RDRsMW1JWDNnNGJiM3pwOUUwUGQ0U2hoM1VNZlRaKzRHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJY3hlRm5qMHZMTWFuSUl6UlNWTFdadWtDMmtIZVZXcnpHbTYrWWRqZksrOWc1NW9Jc01QS1JNTjFTRWI5M3U5Yk9qREMrdXlBQllKeTJuZFRCcmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6ImNuUm1BY3BobEQwb3ozMGkwYmFtSlZaRS9CNUt6K2RmTDUxbVN3ZXMzSEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImkzVncwTVc4UVdTdFJ3N0VKdmlrLXciLCJwaG9uZUlkIjoiMmM3ZjdiODQtNmFiYS00MGEwLWI2YTEtN2U2MzI4NDVjZmIzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo4WGFlUEo5WVJGT2U4YU1TWk1MWHoyUHhlbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFNEQranMrcGJURU9MRzBwSk9KaXVnYjFnVEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVhHNktSTTIiLCJtZSI6eyJpZCI6IjUwOTQwMjQ2ODgzOjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8kvCdkInwnZqu8J2ar/CdmrTigKDwlqOY4oCg8J2aqvCdmq/wnZqv8J2Qg+C8kvCSi7LwnZCB8J2Qi/CdkIDwnZCC8J2QivCSi7LwnZ6i8J2ek/CdmYLwnZmH8J2eovCdmY4g8J2el/CdmYEg8J2Yv/CdnqLwnZ6b8J2el/CdnpzigKAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082ZG1hZ0VFSUdhd3JjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImF6WnR0ZmdEZnk5R2piRElNTHpoTFJxZ0xLR2ExdU55cU5iZ0t5WTA5Q3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1odUpsSm0zYmtqQld4SXJJNHY2b2NqdXhkbDVCblFISmtnZDA1cGkzeEdJdUdnWXZIR0NoOGJOTGJLRXhwYm9FME5oQ0QzVG9OV3N2UEZSSHZXeUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVcy9BaThjcDV6dXIwdzU3ZDFMUDdGZjFhTWZyN2Qxb0J5NThJZUdYL1owMHNJbHlYTGJvTDVWNHhTNDhySGhFdnhyblBaaVdPbWxPUHcxeWsxY3RnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQwMjQ2ODgzOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldzMmJiWDRBMzh2Um8yd3lEQzg0UzBhb0N5aG10YmpjcWpXNENzbU5QUXIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjcwNDA3ODF9
  process.env.SESSION_ID ||
  "PUT YOUR SESSION HERE"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*damon jeager𖤐*",
  ownername: process.env.OWNER_NAME || "☞⌜damon jeager☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
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
