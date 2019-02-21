import { Migrations } from '/app/rocketchat-migrations';
import { Settings } from '/app/rocketchat-models';

Migrations.add({
	version: 25,
	up() {
		return Settings.update({
			_id: /Accounts_OAuth_Custom/,
		}, {
			$set: {
				persistent: true,
			},
			$unset: {
				hidden: true,
			},
		}, {
			multi: true,
		});
	},
});
