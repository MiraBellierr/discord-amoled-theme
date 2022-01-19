var cssId = "discordcss";
console.log("initialize")

var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.id = cssId;
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://kannacoco.me/discord.css";
link.media = "all";
head.appendChild(link);
console.log("loaded")
