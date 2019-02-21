import { Migrations } from '/app/rocketchat-migrations';
import { Settings } from '/app/rocketchat-models';
import { getUsersInRole } from '/app/rocketchat-authorization';

Migrations.add({
	version: 117,
	up() {
		if (Settings && getUsersInRole('admin').count()) {
			Settings.upsert(
				{
					_id: 'Show_Setup_Wizard',
				}, {
					$set: { value: 'completed' },
				}
			);
		}
	},
});
