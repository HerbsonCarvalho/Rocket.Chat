import { Meteor } from 'meteor/meteor';
import { Notifications } from '/app/rocketchat-notifications';
import { deleteEmojiCustom } from '../lib/emojiCustom';

Meteor.startup(() =>
	Notifications.onLogged('deleteEmojiCustom', (data) => deleteEmojiCustom(data.emojiData))
);
