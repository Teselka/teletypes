## Teletypes
Machine parsed types for the Telegram Bot API

Self-updating repository with telegram [types](https://core.telegram.org/bots/api).
You can open an issue if there any issues with this repository.

### Getting started
1. Install package from npm `npm install teletypes`
2. See usage below

#### Simple usage example
```ts
import { TelegramTypes as T, TelegramMethods as M } from 'teletypes'

const msg: T.Message = {
  message_id: 0,
  date: 0,
  chat: { id: 0, types: 'yes' }
};

const fn: M.getMe = () => { return {
    id: 0,
    is_bot: true,
    first_name: 'yes'
}; };
```
