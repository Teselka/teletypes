import { TelegramMethods as M, TelegramTypes as T } from '../lib/index';

// some typescript usage to verify that our library is working
const chat: T.Chat = {
    id: 0,
    type: 'yes'
};

const user: T.User = {
    id: 0,
    first_name: 'yes',
    is_bot: false
}

const msg: T.Message = {
    message_id: 0,
    date: 0,
    chat: chat
};

const fn: M.getMe = () => { return {
    id: 0,
    is_bot: true,
    first_name: 'yes'
}; };