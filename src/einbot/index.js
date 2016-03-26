import config from '../../config';
import {createBot} from '../lib/bot';

const einbot = createBot('einbot', config.einbot);

einbot.on('open', function() {
  console.log(`Connected to ${this.team.name} as @${this.self.name}`);
});

einbot.on('message', function(message) {
  const channel = this.getChannelGroupOrDMByID(message.channel);
  if (channel.is_im && message.type === 'message' && !message.subtype) {
  	if (message.text === 'whos a good boy') {
  		channel.send(`:doge:`);
  	} else {
  		channel.send('arffff');
  	}
  }
});


export default einbot;