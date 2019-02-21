import { Migrations } from '/app/rocketchat-migrations';
import { Users, Settings } from '/app/rocketchat-models';
import { settings } from '/app/rocketchat-settings';

Migrations.add({
	version: 137,
	up() {
		const firstUser = Users.getOldest({ emails: 1 });
		const reportStats = settings.get('Statistics_reporting');

		Settings.updateValueById('Organization_Email', firstUser && firstUser.emails && firstUser.emails[0].address);
		Settings.updateValueById('Register_Server', reportStats);
	},
});
