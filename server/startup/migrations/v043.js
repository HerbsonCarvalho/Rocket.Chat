import { Migrations } from '/app/rocketchat-migrations';
import { Permissions } from '/app/rocketchat-models';

Migrations.add({
	version: 43,
	up() {
		if (Permissions) {
			Permissions.update({ _id: 'pin-message' }, { $addToSet: { roles: 'admin' } });
		}
	},
});
