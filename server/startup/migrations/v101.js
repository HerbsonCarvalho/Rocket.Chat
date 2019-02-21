import { Migrations } from '/app/rocketchat-migrations';
import { Subscriptions } from '/app/rocketchat-models';

Migrations.add({
	version: 101,
	up() {
		Subscriptions.update({ lastActivity:{ $exists:1 } }, { $unset: { lastActivity: '' } }, { multi: true });
	},
});
