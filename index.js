const Discord = require('discord.js'); 
const client = new Discord.Client();
function CoinFlip() 
{
    return (Math.floor(Math.random() *2) == 0)? `Tails` : `Heads`
}
client.on('message', message =>
{
    if(message.content.toLowerCase() == `&flip`)
    {
        message.reply(`It landed on : **${CoinFlip()}**`)
    }
})
let timer = ``
let clock = setInterval(() => {
    timer--;
}, 1000);
client.on("message", message => {
    if(message.content.toLowerCase() == `&timer 90`) {
    if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply('You dont have permission to do that')
        message.reply(`Timer has been set to 90s`)
    timer = 90;
    clock = setInterval(() => {
        console.log(timer)
        if(timer == 60) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 45) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 30) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 15) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 10) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 5) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 0)
        {
            clearInterval(clock)
            message.channel.send({embed :{title: `TIME`}})
        }

    }, 1000);
}
if(message.content.toLowerCase() == `&timer 60`) {
    if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply('You dont have permission to do that')
    message.reply(`Timer has been set to 60s`)
    timer = 60;
    clock = setInterval(() => {
        console.log(timer)

        if(timer == 45) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 30) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 15) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 10) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 5) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 0)
        {
            clearInterval(clock)
            message.channel.send({embed :{title: `TIME`}})
        }

    }, 1000);
}
if(message.content.toLowerCase() == `&timer 45`) {
    if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply('You dont have permission to do that')
    message.reply(`Timer has been set to 45s`)
    timer = 45;
    clock = setInterval(() => {
        console.log(timer);
        if(timer == 30) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 15) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 10) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 5) return message.channel.send({embed :{title: timer + `Seconds left!`}})
        if(timer == 0)
        {
            clearInterval(clock)
            message.channel.send({embed :{title: `TIME`}})
        }

    }, 1000);
}
})

client.login(process.env.TOKEN)
console.log(`Ready bby`)
