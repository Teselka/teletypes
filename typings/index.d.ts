export declare interface ChatPhoto {
}
export declare interface Message {
}
export declare interface ChatPermissions {
}
export declare interface ChatLocation {
}
export declare interface User {
}
export declare interface Chat {
}
export declare interface MessageEntity {
}
export declare interface Animation {
}
export declare interface Audio {
}
export declare interface Document {
}
export declare interface PhotoSize {
}
export declare interface Sticker {
}
export declare interface Video {
}
export declare interface VideoNote {
}
export declare interface Voice {
}
export declare interface Contact {
}
export declare interface Dice {
}
export declare interface Game {
}
export declare interface Poll {
}
export declare interface Venue {
}
export declare interface Location {
}
export declare interface MessageAutoDeleteTimerChanged {
}
export declare interface Invoice {
}
export declare interface SuccessfulPayment {
}
export declare interface PassportData {
}
export declare interface ProximityAlertTriggered {
}
export declare interface VideoChatScheduled {
}
export declare interface VideoChatEnded {
}
export declare interface VideoChatParticipantsInvited {
}
export declare interface WebAppData {
}
export declare interface InlineKeyboardMarkup {
}
export declare interface PollOption {
}
export declare interface KeyboardButton {
}
export declare interface KeyboardButtonPollType {
}
export declare interface WebAppInfo {
}
export declare interface InlineKeyboardButton {
}
export declare interface ChatInviteLink {
}
export declare interface MaskPosition {
}
export declare interface LabeledPrice {
}
export declare interface ShippingAddress {
}
export declare interface OrderInfo {
}
export declare interface EncryptedPassportElement {
}
export declare interface EncryptedCredentials {
}
export declare interface PassportFile {
}
/** This object represents a service message about a video chat started in the chat. Currently holds no information. */
declare type VideoChatStarted = any;
/** A placeholder, currently holds no information. Use BotFather to set up your game. */
declare type CallbackGame = any;
/** This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported: */
declare type ChatMember = any;
/** This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. */
declare type InputFile = any;
/** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types: */
declare type InputMessageContent = any;
/** This object represents a Telegram user or bot. */
export interface User {
    /** Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: number;
    /** True, if this user is a bot */
    is_bot: boolean;
    /** User's or bot's first name */
    first_name: string;
    /** User's or bot's last name */
    last_name: string;
    /** User's or bot's username */
    username: string;
    /** IETF language tag of the user's language */
    language_code: string;
    /** True, if the bot can be invited to groups. Returned only in getMe. */
    can_join_groups: boolean;
    /** True, if privacy mode is disabled for the bot. Returned only in getMe. */
    can_read_all_group_messages: boolean;
    /** True, if the bot supports inline queries. Returned only in getMe. */
    supports_inline_queries: boolean;
}
/** This object represents a chat. */
export interface Chat {
    /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: number;
    /** Type of chat, can be either “private”, “group”, “supergroup” or “channel” */
    type: string;
    /** Title, for supergroups, channels and group chats */
    title: string;
    /** Username, for private chats, supergroups and channels if available */
    username: string;
    /** First name of the other party in a private chat */
    first_name: string;
    /** Last name of the other party in a private chat */
    last_name: string;
    /** Chat photo. Returned only in getChat. */
    photo: ChatPhoto;
    /** Bio of the other party in a private chat. Returned only in getChat. */
    bio: string;
    /** True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user. Returned only in getChat. */
    has_private_forwards: boolean;
    /** Description, for groups, supergroups and channel chats. Returned only in getChat. */
    description: string;
    /** Primary invite link, for groups, supergroups and channel chats. Returned only in getChat. */
    invite_link: string;
    /** The most recent pinned message (by sending date). Returned only in getChat. */
    pinned_message: Message;
    /** Default chat member permissions, for groups and supergroups. Returned only in getChat. */
    permissions: ChatPermissions;
    /** For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user; in seconds. Returned only in getChat. */
    slow_mode_delay: number;
    /** The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat. */
    message_auto_delete_time: number;
    /** True, if messages from the chat can't be forwarded to other chats. Returned only in getChat. */
    has_protected_content: boolean;
    /** For supergroups, name of group sticker set. Returned only in getChat. */
    sticker_set_name: string;
    /** True, if the bot can change the group sticker set. Returned only in getChat. */
    can_set_sticker_set: boolean;
    /** Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat. */
    linked_chat_id: number;
    /** For supergroups, the location to which the supergroup is connected. Returned only in getChat. */
    location: ChatLocation;
}
/** This object represents a message. */
export interface Message {
    /** Unique message identifier inside this chat */
    message_id: number;
    /** Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
    from: User;
    /** Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
    sender_chat: Chat;
    /** Date the message was sent in Unix time */
    date: number;
    /** Conversation the message belongs to */
    chat: Chat;
    /** For forwarded messages, sender of the original message */
    forward_from: User;
    /** For messages forwarded from channels or from anonymous administrators, information about the original sender chat */
    forward_from_chat: Chat;
    /** For messages forwarded from channels, identifier of the original message in the channel */
    forward_from_message_id: number;
    /** For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message sender if present */
    forward_signature: string;
    /** Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
    forward_sender_name: string;
    /** For forwarded messages, date the original message was sent in Unix time */
    forward_date: number;
    /** True, if the message is a channel post that was automatically forwarded to the connected discussion group */
    is_automatic_forward: boolean;
    /** For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
    reply_to_message: Message;
    /** Bot through which the message was sent */
    via_bot: User;
    /** Date the message was last edited in Unix time */
    edit_date: number;
    /** True, if the message can't be forwarded */
    has_protected_content: boolean;
    /** The unique identifier of a media message group this message belongs to */
    media_group_id: string;
    /** Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
    author_signature: string;
    /** For text messages, the actual UTF-8 text of the message, 0-4096 characters */
    text: string;
    /** For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
    entities: Array<MessageEntity>;
    /** Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
    animation: Animation;
    /** Message is an audio file, information about the file */
    audio: Audio;
    /** Message is a general file, information about the file */
    document: Document;
    /** Message is a photo, available sizes of the photo */
    photo: Array<PhotoSize>;
    /** Message is a sticker, information about the sticker */
    sticker: Sticker;
    /** Message is a video, information about the video */
    video: Video;
    /** Message is a video note, information about the video message */
    video_note: VideoNote;
    /** Message is a voice message, information about the file */
    voice: Voice;
    /** Caption for the animation, audio, document, photo, video or voice, 0-1024 characters */
    caption: string;
    /** For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
    caption_entities: Array<MessageEntity>;
    /** Message is a shared contact, information about the contact */
    contact: Contact;
    /** Message is a dice with random value */
    dice: Dice;
    /** Message is a game, information about the game. More about games » */
    game: Game;
    /** Message is a native poll, information about the poll */
    poll: Poll;
    /** Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
    venue: Venue;
    /** Message is a shared location, information about the location */
    location: Location;
    /** New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
    new_chat_members: Array<User>;
    /** A member was removed from the group, information about them (this member may be the bot itself) */
    left_chat_member: User;
    /** A chat title was changed to this value */
    new_chat_title: string;
    /** A chat photo was change to this value */
    new_chat_photo: Array<PhotoSize>;
    /** Service message: the chat photo was deleted */
    delete_chat_photo: boolean;
    /** Service message: the group has been created */
    group_chat_created: boolean;
    /** Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
    supergroup_chat_created: boolean;
    /** Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
    channel_chat_created: boolean;
    /** Service message: auto-delete timer settings changed in the chat */
    message_auto_delete_timer_changed: MessageAutoDeleteTimerChanged;
    /** The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id: number;
    /** The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_from_chat_id: number;
    /** Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply. */
    pinned_message: Message;
    /** Message is an invoice for a payment, information about the invoice. More about payments » */
    invoice: Invoice;
    /** Message is a service message about a successful payment, information about the payment. More about payments » */
    successful_payment: SuccessfulPayment;
    /** The domain name of the website on which the user has logged in. More about Telegram Login » */
    connected_website: string;
    /** Telegram Passport data */
    passport_data: PassportData;
    /** Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. */
    proximity_alert_triggered: ProximityAlertTriggered;
    /** Service message: video chat scheduled */
    video_chat_scheduled: VideoChatScheduled;
    /** Service message: video chat started */
    video_chat_started: VideoChatStarted;
    /** Service message: video chat ended */
    video_chat_ended: VideoChatEnded;
    /** Service message: new participants invited to a video chat */
    video_chat_participants_invited: VideoChatParticipantsInvited;
    /** Service message: data sent by a Web App */
    web_app_data: WebAppData;
    /** Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons. */
    reply_markup: InlineKeyboardMarkup;
}
/** This object represents a unique message identifier. */
export interface MessageId {
    /** Unique message identifier */
    message_id: number;
}
/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. */
export interface MessageEntity {
    /** Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames) */
    type: string;
    /** Offset in UTF-16 code units to the start of the entity */
    offset: number;
    /** Length of the entity in UTF-16 code units */
    length: number;
    /** For “text_link” only, URL that will be opened after user taps on the text */
    url: string;
    /** For “text_mention” only, the mentioned user */
    user: User;
    /** For “pre” only, the programming language of the entity text */
    language: string;
}
/** This object represents one size of a photo or a file / sticker thumbnail. */
export interface PhotoSize {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Photo width */
    width: number;
    /** Photo height */
    height: number;
    /** File size in bytes */
    file_size: number;
}
/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export interface Animation {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Video width as defined by sender */
    width: number;
    /** Video height as defined by sender */
    height: number;
    /** Duration of the video in seconds as defined by sender */
    duration: number;
    /** Animation thumbnail as defined by sender */
    thumb: PhotoSize;
    /** Original animation filename as defined by sender */
    file_name: string;
    /** MIME type of the file as defined by sender */
    mime_type: string;
    /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size: number;
}
/** This object represents an audio file to be treated as music by the Telegram clients. */
export interface Audio {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Duration of the audio in seconds as defined by sender */
    duration: number;
    /** Performer of the audio as defined by sender or by audio tags */
    performer: string;
    /** Title of the audio as defined by sender or by audio tags */
    title: string;
    /** Original filename as defined by sender */
    file_name: string;
    /** MIME type of the file as defined by sender */
    mime_type: string;
    /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size: number;
    /** Thumbnail of the album cover to which the music file belongs */
    thumb: PhotoSize;
}
/** This object represents a general file (as opposed to photos, voice messages and audio files). */
export interface Document {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Document thumbnail as defined by sender */
    thumb: PhotoSize;
    /** Original filename as defined by sender */
    file_name: string;
    /** MIME type of the file as defined by sender */
    mime_type: string;
    /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size: number;
}
/** This object represents a video file. */
export interface Video {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Video width as defined by sender */
    width: number;
    /** Video height as defined by sender */
    height: number;
    /** Duration of the video in seconds as defined by sender */
    duration: number;
    /** Video thumbnail */
    thumb: PhotoSize;
    /** Original filename as defined by sender */
    file_name: string;
    /** MIME type of the file as defined by sender */
    mime_type: string;
    /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size: number;
}
/** This object represents a video message (available in Telegram apps as of v.4.0). */
export interface VideoNote {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Video width and height (diameter of the video message) as defined by sender */
    length: number;
    /** Duration of the video in seconds as defined by sender */
    duration: number;
    /** Video thumbnail */
    thumb: PhotoSize;
    /** File size in bytes */
    file_size: number;
}
/** This object represents a voice note. */
export interface Voice {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Duration of the audio in seconds as defined by sender */
    duration: number;
    /** MIME type of the file as defined by sender */
    mime_type: string;
    /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size: number;
}
/** This object represents a phone contact. */
export interface Contact {
    /** Contact's phone number */
    phone_number: string;
    /** Contact's first name */
    first_name: string;
    /** Contact's last name */
    last_name: string;
    /** Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    user_id: number;
    /** Additional data about the contact in the form of a vCard */
    vcard: string;
}
/** This object represents an animated emoji that displays a random value. */
export interface Dice {
    /** Emoji on which the dice throw animation is based */
    emoji: string;
    /** Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji */
    value: number;
}
/** This object contains information about one answer option in a poll. */
export interface PollOption {
    /** Option text, 1-100 characters */
    text: string;
    /** Number of users that voted for this option */
    voter_count: number;
}
/** This object represents an answer of a user in a non-anonymous poll. */
export interface PollAnswer {
    /** Unique poll identifier */
    poll_id: string;
    /** The user, who changed the answer to the poll */
    user: User;
    /** 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote. */
    option_ids: Array<number>;
}
/** This object contains information about a poll. */
export interface Poll {
    /** Unique poll identifier */
    id: string;
    /** Poll question, 1-300 characters */
    question: string;
    /** List of poll options */
    options: Array<PollOption>;
    /** Total number of users that voted in the poll */
    total_voter_count: number;
    /** True, if the poll is closed */
    is_closed: boolean;
    /** True, if the poll is anonymous */
    is_anonymous: boolean;
    /** Poll type, currently can be “regular” or “quiz” */
    type: string;
    /** True, if the poll allows multiple answers */
    allows_multiple_answers: boolean;
    /** 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
    correct_option_id: number;
    /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
    explanation: string;
    /** Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
    explanation_entities: Array<MessageEntity>;
    /** Amount of time in seconds the poll will be active after creation */
    open_period: number;
    /** Point in time (Unix timestamp) when the poll will be automatically closed */
    close_date: number;
}
/** This object represents a point on the map. */
export interface Location {
    /** Longitude as defined by sender */
    longitude: number;
    /** Latitude as defined by sender */
    latitude: number;
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy: number;
    /** Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. */
    live_period: number;
    /** The direction in which user is moving, in degrees; 1-360. For active live locations only. */
    heading: number;
    /** The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
    proximity_alert_radius: number;
}
/** This object represents a venue. */
export interface Venue {
    /** Venue location. Can't be a live location */
    location: Location;
    /** Name of the venue */
    title: string;
    /** Address of the venue */
    address: string;
    /** Foursquare identifier of the venue */
    foursquare_id: string;
    /** Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type: string;
    /** Google Places identifier of the venue */
    google_place_id: string;
    /** Google Places type of the venue. (See supported types.) */
    google_place_type: string;
}
/** Describes data sent from a Web App to the bot. */
export interface WebAppData {
    /** The data. Be aware that a bad client can send arbitrary data in this field. */
    data: string;
    /** Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. */
    button_text: string;
}
/** This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user. */
export interface ProximityAlertTriggered {
    /** User that triggered the alert */
    traveler: User;
    /** User that set the alert */
    watcher: User;
    /** The distance between the users */
    distance: number;
}
/** This object represents a service message about a change in auto-delete timer settings. */
export interface MessageAutoDeleteTimerChanged {
    /** New auto-delete time for messages in the chat; in seconds */
    message_auto_delete_time: number;
}
/** This object represents a service message about a video chat scheduled in the chat. */
export interface VideoChatScheduled {
    /** Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator */
    start_date: number;
}
/** This object represents a service message about a video chat ended in the chat. */
export interface VideoChatEnded {
    /** Video chat duration in seconds */
    duration: number;
}
/** This object represents a service message about new members invited to a video chat. */
export interface VideoChatParticipantsInvited {
    /** New members that were invited to the video chat */
    users: Array<User>;
}
/** This object represent a user's profile pictures. */
export interface UserProfilePhotos {
    /** Total number of profile pictures the target user has */
    total_count: number;
    /** Requested profile pictures (in up to 4 sizes each) */
    photos: Array<Array<PhotoSize>>;
}
/** This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile. */
export interface File {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size: number;
    /** File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. */
    file_path: string;
}
/** Describes a Web App. */
export interface WebAppInfo {
    /** An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps */
    url: string;
}
/** This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). */
export interface ReplyKeyboardMarkup {
    /** Array of button rows, each represented by an Array of KeyboardButton objects */
    keyboard: Array<Array<KeyboardButton>>;
    /** Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
    resize_keyboard: boolean;
    /** Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. */
    one_time_keyboard: boolean;
    /** The placeholder to be shown in the input field when the keyboard is active; 1-64 characters */
    input_field_placeholder: string;
    /** Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard. */
    selective: boolean;
}
/** This object represents one button of the reply keyboard. For simple text buttons String can be used instead of this object to specify text of the button. Optional fields web_app, request_contact, request_location, and request_poll are mutually exclusive. */
export interface KeyboardButton {
    /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
    text: string;
    /** If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
    request_contact: boolean;
    /** If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
    request_location: boolean;
    /** If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
    request_poll: KeyboardButtonPollType;
    /** If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only. */
    web_app: WebAppInfo;
}
/** This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed. */
export interface KeyboardButtonPollType {
    /** If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
    type: string;
}
/** Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). */
export interface ReplyKeyboardRemove {
    /** Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup) */
    remove_keyboard: boolean;
    /** Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. */
    selective: boolean;
}
/** This object represents an inline keyboard that appears right next to the message it belongs to. */
export interface InlineKeyboardMarkup {
    /** Array of button rows, each represented by an Array of InlineKeyboardButton objects */
    inline_keyboard: Array<Array<InlineKeyboardButton>>;
}
/** This object represents one button of an inline keyboard. You must use exactly one of the optional fields. */
export interface InlineKeyboardButton {
    /** Label text on the button */
    text: string;
    /** HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their ID without using a username, if this is allowed by their privacy settings. */
    url: string;
    /** Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes */
    callback_data: string;
    /** Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. */
    web_app: WebAppInfo;
    /** An HTTP URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. */
    login_url: LoginUrl;
    /** If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted.Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm… actions - in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen. */
    switch_inline_query: string;
    /** If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. */
    switch_inline_query_current_chat: string;
    /** Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row. */
    callback_game: CallbackGame;
    /** Specify True, to send a Pay button.NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages. */
    pay: boolean;
}
/** Telegram apps support these buttons as of version 5.7. */
export interface LoginUrl {
    /** An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization. */
    url: string;
    /** New text of the button in forwarded messages. */
    forward_text: string;
    /** Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details. */
    bot_username: string;
    /** Pass True to request the permission for your bot to send messages to the user. */
    request_write_access: boolean;
}
/** This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present. */
export interface CallbackQuery {
    /** Unique identifier for this query */
    id: string;
    /** Sender */
    from: User;
    /** Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old */
    message: Message;
    /** Identifier of the message sent via the bot in inline mode, that originated the query. */
    inline_message_id: string;
    /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. */
    chat_instance: string;
    /** Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. */
    data: string;
    /** Short name of a Game to be returned, serves as the unique identifier for the game */
    game_short_name: string;
}
/** Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. */
export interface ForceReply {
    /** Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
    force_reply: boolean;
    /** The placeholder to be shown in the input field when the reply is active; 1-64 characters */
    input_field_placeholder: string;
    /** Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. */
    selective: boolean;
}
/** This object represents a chat photo. */
export interface ChatPhoto {
    /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    small_file_id: string;
    /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    small_file_unique_id: string;
    /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    big_file_id: string;
    /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    big_file_unique_id: string;
}
/** Represents an invite link for a chat. */
export interface ChatInviteLink {
    /** The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”. */
    invite_link: string;
    /** Creator of the link */
    creator: User;
    /** True, if users joining the chat via the link need to be approved by chat administrators */
    creates_join_request: boolean;
    /** True, if the link is primary */
    is_primary: boolean;
    /** True, if the link is revoked */
    is_revoked: boolean;
    /** Invite link name */
    name: string;
    /** Point in time (Unix timestamp) when the link will expire or has been expired */
    expire_date: number;
    /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit: number;
    /** Number of pending join requests created using this link */
    pending_join_request_count: number;
}
/** Represents the rights of an administrator in a chat. */
export interface ChatAdministratorRights {
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: boolean;
    /** True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
    can_manage_chat: boolean;
    /** True, if the administrator can delete messages of other users */
    can_delete_messages: boolean;
    /** True, if the administrator can manage video chats */
    can_manage_video_chats: boolean;
    /** True, if the administrator can restrict, ban or unban chat members */
    can_restrict_members: boolean;
    /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean;
    /** True, if the administrator can post in the channel; channels only */
    can_post_messages: boolean;
    /** True, if the administrator can edit messages of other users and can pin messages; channels only */
    can_edit_messages: boolean;
    /** True, if the user is allowed to pin messages; groups and supergroups only */
    can_pin_messages: boolean;
}
/** Represents a chat member that owns the chat and has all administrator privileges. */
export interface ChatMemberOwner {
    /** The member's status in the chat, always “creator” */
    status: string;
    /** Information about the user */
    user: User;
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: boolean;
    /** Custom title for this user */
    custom_title: string;
}
/** Represents a chat member that has some additional privileges. */
export interface ChatMemberAdministrator {
    /** The member's status in the chat, always “administrator” */
    status: string;
    /** Information about the user */
    user: User;
    /** True, if the bot is allowed to edit administrator privileges of that user */
    can_be_edited: boolean;
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: boolean;
    /** True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
    can_manage_chat: boolean;
    /** True, if the administrator can delete messages of other users */
    can_delete_messages: boolean;
    /** True, if the administrator can manage video chats */
    can_manage_video_chats: boolean;
    /** True, if the administrator can restrict, ban or unban chat members */
    can_restrict_members: boolean;
    /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean;
    /** True, if the administrator can post in the channel; channels only */
    can_post_messages: boolean;
    /** True, if the administrator can edit messages of other users and can pin messages; channels only */
    can_edit_messages: boolean;
    /** True, if the user is allowed to pin messages; groups and supergroups only */
    can_pin_messages: boolean;
    /** Custom title for this user */
    custom_title: string;
}
/** Represents a chat member that has no additional privileges or restrictions. */
export interface ChatMemberMember {
    /** The member's status in the chat, always “member” */
    status: string;
    /** Information about the user */
    user: User;
}
/** Represents a chat member that is under certain restrictions in the chat. Supergroups only. */
export interface ChatMemberRestricted {
    /** The member's status in the chat, always “restricted” */
    status: string;
    /** Information about the user */
    user: User;
    /** True, if the user is a member of the chat at the moment of the request */
    is_member: boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean;
    /** True, if the user is allowed to pin messages */
    can_pin_messages: boolean;
    /** True, if the user is allowed to send text messages, contacts, locations and venues */
    can_send_messages: boolean;
    /** True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes */
    can_send_media_messages: boolean;
    /** True, if the user is allowed to send polls */
    can_send_polls: boolean;
    /** True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages: boolean;
    /** True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews: boolean;
    /** Date when restrictions will be lifted for this user; unix time. If 0, then the user is restricted forever */
    until_date: number;
}
/** Represents a chat member that isn't currently a member of the chat, but may join it themselves. */
export interface ChatMemberLeft {
    /** The member's status in the chat, always “left” */
    status: string;
    /** Information about the user */
    user: User;
}
/** Represents a chat member that was banned in the chat and can't return to the chat or view chat messages. */
export interface ChatMemberBanned {
    /** The member's status in the chat, always “kicked” */
    status: string;
    /** Information about the user */
    user: User;
    /** Date when restrictions will be lifted for this user; unix time. If 0, then the user is banned forever */
    until_date: number;
}
/** This object represents changes in the status of a chat member. */
export interface ChatMemberUpdated {
    /** Chat the user belongs to */
    chat: Chat;
    /** Performer of the action, which resulted in the change */
    from: User;
    /** Date the change was done in Unix time */
    date: number;
    /** Previous information about the chat member */
    old_chat_member: ChatMember;
    /** New information about the chat member */
    new_chat_member: ChatMember;
    /** Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
    invite_link: ChatInviteLink;
}
/** Represents a join request sent to a chat. */
export interface ChatJoinRequest {
    /** Chat to which the request was sent */
    chat: Chat;
    /** User that sent the join request */
    from: User;
    /** Date the request was sent in Unix time */
    date: number;
    /** Bio of the user. */
    bio: string;
    /** Chat invite link that was used by the user to send the join request */
    invite_link: ChatInviteLink;
}
/** Describes actions that a non-administrator user is allowed to take in a chat. */
export interface ChatPermissions {
    /** True, if the user is allowed to send text messages, contacts, locations and venues */
    can_send_messages: boolean;
    /** True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages */
    can_send_media_messages: boolean;
    /** True, if the user is allowed to send polls, implies can_send_messages */
    can_send_polls: boolean;
    /** True, if the user is allowed to send animations, games, stickers and use inline bots, implies can_send_media_messages */
    can_send_other_messages: boolean;
    /** True, if the user is allowed to add web page previews to their messages, implies can_send_media_messages */
    can_add_web_page_previews: boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
    can_change_info: boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean;
    /** True, if the user is allowed to pin messages. Ignored in public supergroups */
    can_pin_messages: boolean;
}
/** Represents a location to which a chat is connected. */
export interface ChatLocation {
    /** The location to which the supergroup is connected. Can't be a live location. */
    location: Location;
    /** Location address; 1-64 characters, as defined by the chat owner */
    address: string;
}
/** This object represents a bot command. */
export interface BotCommand {
    /** Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
    command: string;
    /** Description of the command; 1-256 characters. */
    description: string;
}
/** Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user. */
export interface BotCommandScopeDefault {
    /** Scope type, must be default */
    type: string;
}
/** Represents the scope of bot commands, covering all private chats. */
export interface BotCommandScopeAllPrivateChats {
    /** Scope type, must be all_private_chats */
    type: string;
}
/** Represents the scope of bot commands, covering all group and supergroup chats. */
export interface BotCommandScopeAllGroupChats {
    /** Scope type, must be all_group_chats */
    type: string;
}
/** Represents the scope of bot commands, covering all group and supergroup chat administrators. */
export interface BotCommandScopeAllChatAdministrators {
    /** Scope type, must be all_chat_administrators */
    type: string;
}
/** Represents the scope of bot commands, covering a specific chat. */
export interface BotCommandScopeChat {
    /** Scope type, must be chat */
    type: string;
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}
/** Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat. */
export interface BotCommandScopeChatAdministrators {
    /** Scope type, must be chat_administrators */
    type: string;
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}
/** Represents the scope of bot commands, covering a specific member of a group or supergroup chat. */
export interface BotCommandScopeChatMember {
    /** Scope type, must be chat_member */
    type: string;
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
}
/** Represents a menu button, which opens the bot's list of commands. */
export interface MenuButtonCommands {
    /** Type of the button, must be commands */
    type: string;
}
/** Represents a menu button, which launches a Web App. */
export interface MenuButtonWebApp {
    /** Type of the button, must be web_app */
    type: string;
    /** Text on the button */
    text: string;
    /** Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. */
    web_app: WebAppInfo;
}
/** Describes that no specific value for the menu button was set. */
export interface MenuButtonDefault {
    /** Type of the button, must be default */
    type: string;
}
/** Describes why a request was unsuccessful. */
export interface ResponseParameters {
    /** The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id: number;
    /** In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
    retry_after: number;
}
/** Represents a photo to be sent. */
export interface InputMediaPhoto {
    /** Type of the result, must be photo */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
}
/** Represents a video to be sent. */
export interface InputMediaVideo {
    /** Type of the result, must be video */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumb: InputFile | string;
    /** Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Video width */
    width: number;
    /** Video height */
    height: number;
    /** Video duration in seconds */
    duration: number;
    /** Pass True, if the uploaded video is suitable for streaming */
    supports_streaming: boolean;
}
/** Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent. */
export interface InputMediaAnimation {
    /** Type of the result, must be animation */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumb: InputFile | string;
    /** Caption of the animation to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the animation caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Animation width */
    width: number;
    /** Animation height */
    height: number;
    /** Animation duration in seconds */
    duration: number;
}
/** Represents an audio file to be treated as music to be sent. */
export interface InputMediaAudio {
    /** Type of the result, must be audio */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumb: InputFile | string;
    /** Caption of the audio to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Duration of the audio in seconds */
    duration: number;
    /** Performer of the audio */
    performer: string;
    /** Title of the audio */
    title: string;
}
/** Represents a general file to be sent. */
export interface InputMediaDocument {
    /** Type of the result, must be document */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumb: InputFile | string;
    /** Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album. */
    disable_content_type_detection: boolean;
}
/** This object represents a sticker. */
export interface Sticker {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Sticker width */
    width: number;
    /** Sticker height */
    height: number;
    /** True, if the sticker is animated */
    is_animated: boolean;
    /** True, if the sticker is a video sticker */
    is_video: boolean;
    /** Sticker thumbnail in the .WEBP or .JPG format */
    thumb: PhotoSize;
    /** Emoji associated with the sticker */
    emoji: string;
    /** Name of the sticker set to which the sticker belongs */
    set_name: string;
    /** For mask stickers, the position where the mask should be placed */
    mask_position: MaskPosition;
    /** File size in bytes */
    file_size: number;
}
/** This object represents a sticker set. */
export interface StickerSet {
    /** Sticker set name */
    name: string;
    /** Sticker set title */
    title: string;
    /** True, if the sticker set contains animated stickers */
    is_animated: boolean;
    /** True, if the sticker set contains video stickers */
    is_video: boolean;
    /** True, if the sticker set contains masks */
    contains_masks: boolean;
    /** List of all set stickers */
    stickers: Array<Sticker>;
    /** Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format */
    thumb: PhotoSize;
}
/** This object describes the position on faces where a mask should be placed by default. */
export interface MaskPosition {
    /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
    point: string;
    /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
    x_shift: number;
    /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
    y_shift: number;
    /** Mask scaling coefficient. For example, 2.0 means double size. */
    scale: number;
}
/** This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results. */
export interface InlineQuery {
    /** Unique identifier for this query */
    id: string;
    /** Sender */
    from: User;
    /** Text of the query (up to 256 characters) */
    query: string;
    /** Offset of the results to be returned, can be controlled by the bot */
    offset: string;
    /** Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
    chat_type: string;
    /** Sender location, only for bots that request user location */
    location: Location;
}
/** Represents a link to an article or web page. */
export interface InlineQueryResultArticle {
    /** Type of the result, must be article */
    type: string;
    /** Unique identifier for this result, 1-64 Bytes */
    id: string;
    /** Title of the result */
    title: string;
    /** Content of the message to be sent */
    input_message_content: InputMessageContent;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** URL of the result */
    url: string;
    /** Pass True, if you don't want the URL to be shown in the message */
    hide_url: boolean;
    /** Short description of the result */
    description: string;
    /** Url of the thumbnail for the result */
    thumb_url: string;
    /** Thumbnail width */
    thumb_width: number;
    /** Thumbnail height */
    thumb_height: number;
}
/** Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo. */
export interface InlineQueryResultPhoto {
    /** Type of the result, must be photo */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB */
    photo_url: string;
    /** URL of the thumbnail for the photo */
    thumb_url: string;
    /** Width of the photo */
    photo_width: number;
    /** Height of the photo */
    photo_height: number;
    /** Title for the result */
    title: string;
    /** Short description of the result */
    description: string;
    /** Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the photo */
    input_message_content: InputMessageContent;
}
/** Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation. */
export interface InlineQueryResultGif {
    /** Type of the result, must be gif */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the GIF file. File size must not exceed 1MB */
    gif_url: string;
    /** Width of the GIF */
    gif_width: number;
    /** Height of the GIF */
    gif_height: number;
    /** Duration of the GIF in seconds */
    gif_duration: number;
    /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumb_url: string;
    /** MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    thumb_mime_type: string;
    /** Title for the result */
    title: string;
    /** Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the GIF animation */
    input_message_content: InputMessageContent;
}
/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation. */
export interface InlineQueryResultMpeg4Gif {
    /** Type of the result, must be mpeg4_gif */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the MPEG4 file. File size must not exceed 1MB */
    mpeg4_url: string;
    /** Video width */
    mpeg4_width: number;
    /** Video height */
    mpeg4_height: number;
    /** Video duration in seconds */
    mpeg4_duration: number;
    /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumb_url: string;
    /** MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    thumb_mime_type: string;
    /** Title for the result */
    title: string;
    /** Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the video animation */
    input_message_content: InputMessageContent;
}
/** Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video. */
export interface InlineQueryResultVideo {
    /** Type of the result, must be video */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the embedded video player or video file */
    video_url: string;
    /** MIME type of the content of the video URL, “text/html” or “video/mp4” */
    mime_type: string;
    /** URL of the thumbnail (JPEG only) for the video */
    thumb_url: string;
    /** Title for the result */
    title: string;
    /** Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Video width */
    video_width: number;
    /** Video height */
    video_height: number;
    /** Video duration in seconds */
    video_duration: number;
    /** Short description of the result */
    description: string;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). */
    input_message_content: InputMessageContent;
}
/** Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio. */
export interface InlineQueryResultAudio {
    /** Type of the result, must be audio */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the audio file */
    audio_url: string;
    /** Title */
    title: string;
    /** Caption, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Performer */
    performer: string;
    /** Audio duration in seconds */
    audio_duration: number;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the audio */
    input_message_content: InputMessageContent;
}
/** Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message. */
export interface InlineQueryResultVoice {
    /** Type of the result, must be voice */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the voice recording */
    voice_url: string;
    /** Recording title */
    title: string;
    /** Caption, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Recording duration in seconds */
    voice_duration: number;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the voice recording */
    input_message_content: InputMessageContent;
}
/** Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method. */
export interface InlineQueryResultDocument {
    /** Type of the result, must be document */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** Title for the result */
    title: string;
    /** Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** A valid URL for the file */
    document_url: string;
    /** MIME type of the content of the file, either “application/pdf” or “application/zip” */
    mime_type: string;
    /** Short description of the result */
    description: string;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the file */
    input_message_content: InputMessageContent;
    /** URL of the thumbnail (JPEG only) for the file */
    thumb_url: string;
    /** Thumbnail width */
    thumb_width: number;
    /** Thumbnail height */
    thumb_height: number;
}
/** Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location. */
export interface InlineQueryResultLocation {
    /** Type of the result, must be location */
    type: string;
    /** Unique identifier for this result, 1-64 Bytes */
    id: string;
    /** Location latitude in degrees */
    latitude: number;
    /** Location longitude in degrees */
    longitude: number;
    /** Location title */
    title: string;
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy: number;
    /** Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period: number;
    /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading: number;
    /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius: number;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the location */
    input_message_content: InputMessageContent;
    /** Url of the thumbnail for the result */
    thumb_url: string;
    /** Thumbnail width */
    thumb_width: number;
    /** Thumbnail height */
    thumb_height: number;
}
/** Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue. */
export interface InlineQueryResultVenue {
    /** Type of the result, must be venue */
    type: string;
    /** Unique identifier for this result, 1-64 Bytes */
    id: string;
    /** Latitude of the venue location in degrees */
    latitude: number;
    /** Longitude of the venue location in degrees */
    longitude: number;
    /** Title of the venue */
    title: string;
    /** Address of the venue */
    address: string;
    /** Foursquare identifier of the venue if known */
    foursquare_id: string;
    /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type: string;
    /** Google Places identifier of the venue */
    google_place_id: string;
    /** Google Places type of the venue. (See supported types.) */
    google_place_type: string;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the venue */
    input_message_content: InputMessageContent;
    /** Url of the thumbnail for the result */
    thumb_url: string;
    /** Thumbnail width */
    thumb_width: number;
    /** Thumbnail height */
    thumb_height: number;
}
/** Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact. */
export interface InlineQueryResultContact {
    /** Type of the result, must be contact */
    type: string;
    /** Unique identifier for this result, 1-64 Bytes */
    id: string;
    /** Contact's phone number */
    phone_number: string;
    /** Contact's first name */
    first_name: string;
    /** Contact's last name */
    last_name: string;
    /** Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard: string;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the contact */
    input_message_content: InputMessageContent;
    /** Url of the thumbnail for the result */
    thumb_url: string;
    /** Thumbnail width */
    thumb_width: number;
    /** Thumbnail height */
    thumb_height: number;
}
/** Represents a Game. */
export interface InlineQueryResultGame {
    /** Type of the result, must be game */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** Short name of the game */
    game_short_name: string;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
}
/** Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo. */
export interface InlineQueryResultCachedPhoto {
    /** Type of the result, must be photo */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier of the photo */
    photo_file_id: string;
    /** Title for the result */
    title: string;
    /** Short description of the result */
    description: string;
    /** Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the photo */
    input_message_content: InputMessageContent;
}
/** Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation. */
export interface InlineQueryResultCachedGif {
    /** Type of the result, must be gif */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the GIF file */
    gif_file_id: string;
    /** Title for the result */
    title: string;
    /** Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the GIF animation */
    input_message_content: InputMessageContent;
}
/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation. */
export interface InlineQueryResultCachedMpeg4Gif {
    /** Type of the result, must be mpeg4_gif */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the MPEG4 file */
    mpeg4_file_id: string;
    /** Title for the result */
    title: string;
    /** Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the video animation */
    input_message_content: InputMessageContent;
}
/** Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker. */
export interface InlineQueryResultCachedSticker {
    /** Type of the result, must be sticker */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier of the sticker */
    sticker_file_id: string;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the sticker */
    input_message_content: InputMessageContent;
}
/** Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. */
export interface InlineQueryResultCachedDocument {
    /** Type of the result, must be document */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** Title for the result */
    title: string;
    /** A valid file identifier for the file */
    document_file_id: string;
    /** Short description of the result */
    description: string;
    /** Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the file */
    input_message_content: InputMessageContent;
}
/** Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video. */
export interface InlineQueryResultCachedVideo {
    /** Type of the result, must be video */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the video file */
    video_file_id: string;
    /** Title for the result */
    title: string;
    /** Short description of the result */
    description: string;
    /** Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the video */
    input_message_content: InputMessageContent;
}
/** Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message. */
export interface InlineQueryResultCachedVoice {
    /** Type of the result, must be voice */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the voice message */
    voice_file_id: string;
    /** Voice message title */
    title: string;
    /** Caption, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the voice message */
    input_message_content: InputMessageContent;
}
/** Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio. */
export interface InlineQueryResultCachedAudio {
    /** Type of the result, must be audio */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the audio file */
    audio_file_id: string;
    /** Caption, 0-1024 characters after entities parsing */
    caption: string;
    /** Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities: Array<MessageEntity>;
    /** Inline keyboard attached to the message */
    reply_markup: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the audio */
    input_message_content: InputMessageContent;
}
/** Represents the content of a text message to be sent as the result of an inline query. */
export interface InputTextMessageContent {
    /** Text of the message to be sent, 1-4096 characters */
    message_text: string;
    /** Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode: string;
    /** List of special entities that appear in message text, which can be specified instead of parse_mode */
    entities: Array<MessageEntity>;
    /** Disables link previews for links in the sent message */
    disable_web_page_preview: boolean;
}
/** Represents the content of a location message to be sent as the result of an inline query. */
export interface InputLocationMessageContent {
    /** Latitude of the location in degrees */
    latitude: number;
    /** Longitude of the location in degrees */
    longitude: number;
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy: number;
    /** Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period: number;
    /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading: number;
    /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius: number;
}
/** Represents the content of a venue message to be sent as the result of an inline query. */
export interface InputVenueMessageContent {
    /** Latitude of the venue in degrees */
    latitude: number;
    /** Longitude of the venue in degrees */
    longitude: number;
    /** Name of the venue */
    title: string;
    /** Address of the venue */
    address: string;
    /** Foursquare identifier of the venue, if known */
    foursquare_id: string;
    /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type: string;
    /** Google Places identifier of the venue */
    google_place_id: string;
    /** Google Places type of the venue. (See supported types.) */
    google_place_type: string;
}
/** Represents the content of a contact message to be sent as the result of an inline query. */
export interface InputContactMessageContent {
    /** Contact's phone number */
    phone_number: string;
    /** Contact's first name */
    first_name: string;
    /** Contact's last name */
    last_name: string;
    /** Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard: string;
}
/** Represents the content of an invoice message to be sent as the result of an inline query. */
export interface InputInvoiceMessageContent {
    /** Product name, 1-32 characters */
    title: string;
    /** Product description, 1-255 characters */
    description: string;
    /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
    payload: string;
    /** Payment provider token, obtained via @BotFather */
    provider_token: string;
    /** Three-letter ISO 4217 currency code, see more on currencies */
    currency: string;
    /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
    prices: Array<LabeledPrice>;
    /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
    max_tip_amount: number;
    /** A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts: Array<number>;
    /** A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider. */
    provider_data: string;
    /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
    photo_url: string;
    /** Photo size in bytes */
    photo_size: number;
    /** Photo width */
    photo_width: number;
    /** Photo height */
    photo_height: number;
    /** Pass True, if you require the user's full name to complete the order */
    need_name: boolean;
    /** Pass True, if you require the user's phone number to complete the order */
    need_phone_number: boolean;
    /** Pass True, if you require the user's email address to complete the order */
    need_email: boolean;
    /** Pass True, if you require the user's shipping address to complete the order */
    need_shipping_address: boolean;
    /** Pass True, if the user's phone number should be sent to provider */
    send_phone_number_to_provider: boolean;
    /** Pass True, if the user's email address should be sent to provider */
    send_email_to_provider: boolean;
    /** Pass True, if the final price depends on the shipping method */
    is_flexible: boolean;
}
/** Represents a result of an inline query that was chosen by the user and sent to their chat partner. */
export interface ChosenInlineResult {
    /** The unique identifier for the result that was chosen */
    result_id: string;
    /** The user that chose the result */
    from: User;
    /** Sender location, only for bots that require user location */
    location: Location;
    /** Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. */
    inline_message_id: string;
    /** The query that was used to obtain the result */
    query: string;
}
/** Describes an inline message sent by a Web App on behalf of a user. */
export interface SentWebAppMessage {
    /** Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. */
    inline_message_id: string;
}
/** This object represents a portion of the price for goods or services. */
export interface LabeledPrice {
    /** Portion label */
    label: string;
    /** Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    amount: number;
}
/** This object contains basic information about an invoice. */
export interface Invoice {
    /** Product name */
    title: string;
    /** Product description */
    description: string;
    /** Unique bot deep-linking parameter that can be used to generate this invoice */
    start_parameter: string;
    /** Three-letter ISO 4217 currency code */
    currency: string;
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
}
/** This object represents a shipping address. */
export interface ShippingAddress {
    /** Two-letter ISO 3166-1 alpha-2 country code */
    country_code: string;
    /** State, if applicable */
    state: string;
    /** City */
    city: string;
    /** First line for the address */
    street_line1: string;
    /** Second line for the address */
    street_line2: string;
    /** Address post code */
    post_code: string;
}
/** This object represents information about an order. */
export interface OrderInfo {
    /** User name */
    name: string;
    /** User's phone number */
    phone_number: string;
    /** User email */
    email: string;
    /** User shipping address */
    shipping_address: ShippingAddress;
}
/** This object represents one shipping option. */
export interface ShippingOption {
    /** Shipping option identifier */
    id: string;
    /** Option title */
    title: string;
    /** List of price portions */
    prices: Array<LabeledPrice>;
}
/** This object contains basic information about a successful payment. */
export interface SuccessfulPayment {
    /** Three-letter ISO 4217 currency code */
    currency: string;
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
    /** Bot specified invoice payload */
    invoice_payload: string;
    /** Identifier of the shipping option chosen by the user */
    shipping_option_id: string;
    /** Order information provided by the user */
    order_info: OrderInfo;
    /** Telegram payment identifier */
    telegram_payment_charge_id: string;
    /** Provider payment identifier */
    provider_payment_charge_id: string;
}
/** This object contains information about an incoming shipping query. */
export interface ShippingQuery {
    /** Unique query identifier */
    id: string;
    /** User who sent the query */
    from: User;
    /** Bot specified invoice payload */
    invoice_payload: string;
    /** User specified shipping address */
    shipping_address: ShippingAddress;
}
/** This object contains information about an incoming pre-checkout query. */
export interface PreCheckoutQuery {
    /** Unique query identifier */
    id: string;
    /** User who sent the query */
    from: User;
    /** Three-letter ISO 4217 currency code */
    currency: string;
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
    /** Bot specified invoice payload */
    invoice_payload: string;
    /** Identifier of the shipping option chosen by the user */
    shipping_option_id: string;
    /** Order information provided by the user */
    order_info: OrderInfo;
}
/** Describes Telegram Passport data shared with the bot by the user. */
export interface PassportData {
    /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
    data: Array<EncryptedPassportElement>;
    /** Encrypted credentials required to decrypt the data */
    credentials: EncryptedCredentials;
}
/** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
export interface PassportFile {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** File size in bytes */
    file_size: number;
    /** Unix time when the file was uploaded */
    file_date: number;
}
/** Describes documents or other Telegram Passport elements shared with the bot by the user. */
export interface EncryptedPassportElement {
    /** Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”. */
    type: string;
    /** Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials. */
    data: string;
    /** User's verified phone number, available only for “phone_number” type */
    phone_number: string;
    /** User's verified email address, available only for “email” type */
    email: string;
    /** Array of encrypted files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    files: Array<PassportFile>;
    /** Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    front_side: PassportFile;
    /** Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    reverse_side: PassportFile;
    /** Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    selfie: PassportFile;
    /** Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    translation: Array<PassportFile>;
    /** Base64-encoded element hash for using in PassportElementErrorUnspecified */
    hash: string;
}
/** Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes. */
export interface EncryptedCredentials {
    /** Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication */
    data: string;
    /** Base64-encoded data hash for data authentication */
    hash: string;
    /** Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
    secret: string;
}
/** Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes. */
export interface PassportElementErrorDataField {
    /** Error source, must be data */
    source: string;
    /** The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address” */
    type: string;
    /** Name of the data field which has the error */
    field_name: string;
    /** Base64-encoded data hash */
    data_hash: string;
    /** Error message */
    message: string;
}
/** Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes. */
export interface PassportElementErrorFrontSide {
    /** Error source, must be front_side */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: string;
    /** Base64-encoded hash of the file with the front side of the document */
    file_hash: string;
    /** Error message */
    message: string;
}
/** Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes. */
export interface PassportElementErrorReverseSide {
    /** Error source, must be reverse_side */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card” */
    type: string;
    /** Base64-encoded hash of the file with the reverse side of the document */
    file_hash: string;
    /** Error message */
    message: string;
}
/** Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes. */
export interface PassportElementErrorSelfie {
    /** Error source, must be selfie */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: string;
    /** Base64-encoded hash of the file with the selfie */
    file_hash: string;
    /** Error message */
    message: string;
}
/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. */
export interface PassportElementErrorFile {
    /** Error source, must be file */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string;
    /** Base64-encoded file hash */
    file_hash: string;
    /** Error message */
    message: string;
}
/** Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes. */
export interface PassportElementErrorFiles {
    /** Error source, must be files */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string;
    /** List of base64-encoded file hashes */
    file_hashes: Array<string>;
    /** Error message */
    message: string;
}
/** Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes. */
export interface PassportElementErrorTranslationFile {
    /** Error source, must be translation_file */
    source: string;
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string;
    /** Base64-encoded file hash */
    file_hash: string;
    /** Error message */
    message: string;
}
/** Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change. */
export interface PassportElementErrorTranslationFiles {
    /** Error source, must be translation_files */
    source: string;
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string;
    /** List of base64-encoded file hashes */
    file_hashes: Array<string>;
    /** Error message */
    message: string;
}
/** Represents an issue in an unspecified place. The error is considered resolved when new data is added. */
export interface PassportElementErrorUnspecified {
    /** Error source, must be unspecified */
    source: string;
    /** Type of element of the user's Telegram Passport which has the issue */
    type: string;
    /** Base64-encoded element hash */
    element_hash: string;
    /** Error message */
    message: string;
}
/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
export interface Game {
    /** Title of the game */
    title: string;
    /** Description of the game */
    description: string;
    /** Photo that will be displayed in the game message in chats. */
    photo: Array<PhotoSize>;
    /** Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. */
    text: string;
    /** Special entities that appear in text, such as usernames, URLs, bot commands, etc. */
    text_entities: Array<MessageEntity>;
    /** Animation that will be displayed in the game message in chats. Upload via BotFather */
    animation: Animation;
}
/** This object represents one row of the high scores table for a game. */
export interface GameHighScore {
    /** Position in high score table for the game */
    position: number;
    /** User */
    user: User;
    /** Score */
    score: number;
}
export {};
