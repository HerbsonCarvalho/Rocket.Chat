import { Migrations } from '/app/rocketchat-migrations';
import { Permissions } from '/app/rocketchat-models';

Migrations.add({
	version: 78,
	up() {
		Permissions.update({ _id: { $in: ['create-c', 'create-d', 'create-p'] } }, { $addToSet: { roles: 'bot' } }, { multi: true });
	},
});
