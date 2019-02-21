import { Migrations } from '/app/rocketchat-migrations';
import { Messages } from '/app/rocketchat-models';

Migrations.add({
	version: 16,
	up() {
		return Messages.tryDropIndex({
			_hidden: 1,
		});
	},
});
