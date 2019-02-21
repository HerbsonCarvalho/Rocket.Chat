import { Migrations } from '/app/rocketchat-migrations';
import { Settings } from '/app/rocketchat-models';

Migrations.add({
	version: 76,
	up() {
		if (Settings) {
			Settings.find({ section: 'Colors (alphas)' }).forEach((setting) => {
				Settings.remove({ _id: setting._id });
			});
		}
	},
});
