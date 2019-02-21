import { Migrations } from '/app/rocketchat-migrations';
import { Messages } from '/app/rocketchat-models';

Migrations.add({
	version: 22,
	up() {
		/*
		 * Update message edit field
		 */
		Messages.upgradeEtsToEditAt();

		return console.log('Updated old messages\' ets edited timestamp to new editedAt timestamp.');
	},
});
