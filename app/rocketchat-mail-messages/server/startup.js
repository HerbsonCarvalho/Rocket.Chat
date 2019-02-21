import { Meteor } from 'meteor/meteor';
import { Permissions } from '/app/rocketchat-models';

Meteor.startup(function() {
	return Permissions.upsert('access-mailer', {
		$setOnInsert: {
			_id: 'access-mailer',
			roles: ['admin'],
		},
	});
});
