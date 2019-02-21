import { Meteor } from 'meteor/meteor';
import { Notifications } from '/app/rocketchat-notifications';
import { updateEmojiCustom } from '../lib/emojiCustom';

Meteor.startup(() =>
	Notifications.onLogged('updateEmojiCustom', (data) => updateEmojiCustom(data.emojiData))
);
