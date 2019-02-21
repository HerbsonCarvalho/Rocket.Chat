import { Migrations } from '/app/rocketchat-migrations';
import { Users } from '/app/rocketchat-models';

Migrations.add({
	version: 46,
	up() {
		if (Users) {
			Users.update({ type: { $exists: false } }, { $set: { type: 'user' } }, { multi: true });
		}
	},
});
