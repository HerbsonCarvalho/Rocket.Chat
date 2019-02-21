import { Meteor } from 'meteor/meteor';
import { Permissions } from '/app/rocketchat-models';

Meteor.startup(() => {
	if (Permissions) {
		Permissions.createOrUpdate('manage-sounds', ['admin']);
	}
});
