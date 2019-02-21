import { Migrations } from '/app/rocketchat-migrations';
import { Messages } from '/app/rocketchat-models';

Migrations.add({
	version: 26,
	up() {
		return Messages.update({
			t: 'rm',
		}, {
			$set: {
				mentions: [],
			},
		}, {
			multi: true,
		});
	},
});
