import { Meteor } from 'meteor/meteor';
import { settings } from '/app/rocketchat-settings';
import { Permissions } from '/app/rocketchat-models';

Meteor.startup(function() {
	settings.add('Message_AllowSnippeting', false, {
		type: 'boolean',
		public: true,
		group: 'Message',
	});
	Permissions.upsert('snippet-message', {
		$setOnInsert: {
			roles: ['owner', 'moderator', 'admin'],
		},
	});
});

