import { Migrations } from '/app/rocketchat-migrations';
import { Settings } from '/app/rocketchat-models';

Migrations.add({
	version: 62,
	up() {
		Settings.remove({ _id: 'Atlassian Crowd', type: 'group' });
	},
});
