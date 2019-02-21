import { Meteor } from 'meteor/meteor';
import { settings } from '/app/rocketchat-settings';
import { ChatMessage, Subscriptions } from '/app/rocketchat-models';

Meteor.methods({
	pinMessage(message) {
		if (!Meteor.userId()) {
			return false;
		}
		if (!settings.get('Message_AllowPinning')) {
			return false;
		}
		if (Subscriptions.findOne({ rid: message.rid }) == null) {
			return false;
		}
		return ChatMessage.update({
			_id: message._id,
		}, {
			$set: {
				pinned: true,
			},
		});
	},
	unpinMessage(message) {
		if (!Meteor.userId()) {
			return false;
		}
		if (!settings.get('Message_AllowPinning')) {
			return false;
		}
		if (Subscriptions.findOne({ rid: message.rid }) == null) {
			return false;
		}
		return ChatMessage.update({
			_id: message._id,
		}, {
			$set: {
				pinned: false,
			},
		});
	},
});
