import { Migrations } from '/app/rocketchat-migrations';
import { Users } from '/app/rocketchat-models';

Migrations.add({
	version: 52,
	up() {
		Users.update({ _id: 'rocket.cat' }, { $addToSet: { roles: 'bot' } });
	},
});
