import { Chat, User, Message, Methods } from '../lib/index.js';

// some typescript usage to verify that our library is working
const chat: Chat = {
    id: 0,
    type: 'yes'
};

const user: User = {
    id: 0,
    first_name: 'yes',
    is_bot: false
}

const msg: Message = {
    message_id: 0,
    date: 0,
    chat: chat
};

const fn: Methods.sendMessage = () => {};