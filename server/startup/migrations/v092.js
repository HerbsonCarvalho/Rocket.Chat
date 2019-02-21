import { Migrations } from '/app/rocketchat-migrations';
import { Integrations } from '/app/rocketchat-models';

Migrations.add({
	version: 92,
	up() {
		const outgoingIntegrations = Integrations.find({ type: 'webhook-outgoing', event: 'sendMessage' }, { fields: { name: 1 } }).fetch();

		outgoingIntegrations.forEach((i) => {
			Integrations.update(i._id, { $set: { runOnEdits: true } });
		});
	},
});
