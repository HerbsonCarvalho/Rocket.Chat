import { Meteor } from 'meteor/meteor';
import { updateAvatarOfUsername } from '/app/rocketchat-ui-utils';
import { Notifications } from '/app/rocketchat-notifications';

Meteor.startup(function() {
	Notifications.onLogged('updateAvatar', function(data) {
		updateAvatarOfUsername(data.username);
	});
});
