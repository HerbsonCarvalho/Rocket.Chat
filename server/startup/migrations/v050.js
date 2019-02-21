import { Migrations } from '/app/rocketchat-migrations';
import { Subscriptions } from '/app/rocketchat-models';

Migrations.add({
	version: 50,
	up() {
		Subscriptions.tryDropIndex('u._id_1_name_1_t_1');
		Subscriptions.tryEnsureIndex({ 'u._id': 1, name: 1, t: 1 });
	},
});
