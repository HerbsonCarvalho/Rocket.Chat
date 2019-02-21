import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { hasPermission } from '/app/rocketchat-authorization';
import { LivechatTrigger } from '/app/rocketchat-models';

Meteor.methods({
	'livechat:removeTrigger'(triggerId) {
		if (!Meteor.userId() || !hasPermission(Meteor.userId(), 'view-livechat-manager')) {
			throw new Meteor.Error('error-not-allowed', 'Not allowed', { method: 'livechat:removeTrigger' });
		}

		check(triggerId, String);

		return LivechatTrigger.removeById(triggerId);
	},
});
