import { Migrations } from '/app/rocketchat-migrations';
import { Subscriptions } from '/app/rocketchat-models';

Migrations.add({
	version: 100,
	up() {
		Subscriptions.update({ audioNotification:{ $exists:1 } }, { $rename: { audioNotification: 'audioNotifications' } });
	},
});
