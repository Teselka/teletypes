## Teletypes
Machine parsed types for the Telegram Bot API

Self-updating repository with telegram [types](https://core.telegram.org/bots/api).
You can dm me if there any issues with this repository.

### Getting started
1. Install package from npm `npm install teletypes`
2. See usage below

#### Simple usage example
```ts
import { Message, Methods } from 'teletypes'

const msg: Message = {
  message_id: 0,
  date: 0,
  chat: { id: 0, types: 'yes' }
};

const sendmsg: Methods.sendMessage = () => {};
```
