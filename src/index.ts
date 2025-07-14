import { TikTokLiveConnection, WebcastEvent, WebcastMemberMessage } from 'tiktok-live-connector';

const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

console.log(hello('TypeScript'));

const tiktokUsername = 'officialgeilegisela';

// Create a new wrapper object and pass the username
const connection = new TikTokLiveConnection(tiktokUsername);

// Connect to the chat (await can be used as well)
connection.connect().then(state => {
    console.info(`Connected to roomId ${state.roomId}`);
}).catch(err => {
    console.error('Failed to connect', err);
});

connection.on(WebcastEvent.MEMBER, (data: WebcastMemberMessage) => {
    console.log(`${data.user?.uniqueId} (nickname: ${data.user?.nickname}) joined the room`);
});

// // Define the events that you want to handle
// // In this case we listen to chat messages (comments)
// connection.on(WebcastEvent.CHAT, data => {
//     console.log(`${data.user.uniqueId} (userId:${data.user.uniqueId}) writes: ${data.comment}`);
// });

// // And here we receive gifts sent to the streamer
// connection.on(WebcastEvent.GIFT, data => {
//     console.log(`${data.user.uniqueId} (userId:${data.user.userId}) sends ${data.giftId}`);
// });