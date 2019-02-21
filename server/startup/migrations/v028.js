import { Migrations } from '/app/rocketchat-migrations';
import { Permissions } from '/app/rocketchat-models';

Migrations.add({
	version: 28,
	up() {
		return Permissions.addRole('view-c-room', 'bot');
	},
});
