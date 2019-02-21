import { Migrations } from '/app/rocketchat-migrations';
import { Settings } from '/app/rocketchat-models';

Migrations.add({
	version: 96,
	up() {
		if (Settings) {
			Settings.update({ _id: 'InternalHubot_ScriptsToLoad' }, { $set: { value: '' } });
		}
	},
});
