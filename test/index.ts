import { TelegramMethods as Methods, TelegramTypes as Types } from '../lib/index';

// some typescript usage to verify that our library is working
const chat: Types.Chat = {
    id: 0,
    type: 'yes'
};

const user: Types.User = {
    id: 0,
    first_name: 'yes',
    is_bot: false
}

const msg: Types.Message = {
    message_id: 0,
    date: 0,
    chat: chat
};

const fn: Methods.getMe = () => { return {
    id: 0,
    is_bot: true,
    first_name: 'yes'
}; };