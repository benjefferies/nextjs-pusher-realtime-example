import Pusher from 'pusher-js';

type Message = {
  message: string;
};

const pusher = new Pusher(process.env.PUSHER_APP_KEY, {
  cluster: process.env.PUSHER_APP_CLUSTER,
});

pusher.subscribe('garage-door').bind('toggle', (data: Message) => {
  console.log('Received toggle:', data.message);
});
