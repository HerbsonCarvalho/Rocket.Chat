import { Meteor } from 'meteor/meteor';
import { ChatMessage } from '/app/rocketchat-models';
import { Notifications } from '/app/rocketchat-notifications';

Meteor.startup(function() {
	Notifications.onLogged('Users:Deleted', ({ userId }) =>
		ChatMessage.remove({
			'u._id': userId,
		})
	);
});
