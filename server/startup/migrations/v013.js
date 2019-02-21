import { Migrations } from '/app/rocketchat-migrations';
import { Users } from '/app/rocketchat-models';

Migrations.add({
	version: 13,
	up() {
		// Set all current users as active
		Users.setAllUsersActive(true);
		return console.log('Set all users as active');
	},
});
