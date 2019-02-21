import { Migrations } from '/app/rocketchat-migrations';
import { Settings } from '/app/rocketchat-models';

Migrations.add({
	version: 32,
	up() {
		return Settings.update({
			_id: /Accounts_OAuth_Custom_/,
		}, {
			$set: {
				group: 'OAuth',
			},
		}, {
			multi: true,
		});
	},
});
