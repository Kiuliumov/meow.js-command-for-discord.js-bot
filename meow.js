const Discord = require('discord.js');
const superagent = require('superagent')


module.exports = {
    name: 'meow',
    description: 'meow',
    aliases:['randomcat'],
    async execute(message, args){
       const msg = await message.channel.send('Generating...') 
       let{ body } = await superagent.get('https://aws.random.cat/meow')
    const catEmbed = new Discord.MessageEmbed()
    .setColor('03fccf')
   .setTitle('MEOW!')
   .setImage(body.file)
   .setDescription('Random cat for you!')
       .setFooter('Kenobi Bot® by Kiuliumov')

   
         msg.delete()

        message.channel.send(catEmbed);
       
            
            
       

    }
    
