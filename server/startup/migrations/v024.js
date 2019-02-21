import { Migrations } from '/app/rocketchat-migrations';
import { Permissions } from '/app/rocketchat-models';

Migrations.add({
	version: 24,
	up() {
		return Permissions.remove({
			_id: 'access-rocket-permissions',
		});
	},
});
