// Migration to give delete channel, delete group permissions to owner
import { Migrations } from '/app/rocketchat-migrations';
import { Permissions } from '/app/rocketchat-models';

Migrations.add({
	version: 111,
	up() {
		if (Permissions) {
			Permissions.update({ _id: 'delete-c' }, { $addToSet: { roles: 'owner' } });
			Permissions.update({ _id: 'delete-p' }, { $addToSet: { roles: 'owner' } });
		}
	},
});
