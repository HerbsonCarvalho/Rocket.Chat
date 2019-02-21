import { Migrations } from '/app/rocketchat-migrations';
import { Users } from '/app/rocketchat-models';

Migrations.add({
	version: 125,
	up() {
		Users.update({
			'settings.preferences.groupByType': { $exists: true },
		}, {
			$rename: {
				'settings.preferences.groupByType': 'settings.preferences.sidebarGroupByType',
			},
		}, {
			multi: true,
		});
	},
});
