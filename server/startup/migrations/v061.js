import { Migrations } from '/app/rocketchat-migrations';
import { Users, Subscriptions } from '/app/rocketchat-models';

Migrations.add({
	version: 61,
	up() {
		Users.find({ active: false }).forEach(function(user) {
			Subscriptions.setArchivedByUsername(user.username, true);
		});
	},
});
