import { Migrations } from '/app/rocketchat-migrations';
import { Subscriptions } from '/app/rocketchat-models';

Migrations.add({
	version: 122,
	up() {
		Subscriptions.tryDropIndex('u._id_1_name_1_t_1_code_1');
		console.log('Fixing ChatSubscription u._id_1_name_1_t_1_code_1');
	},
});
