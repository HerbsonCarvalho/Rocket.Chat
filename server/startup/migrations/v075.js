import { Migrations } from '/app/rocketchat-migrations';
import { ServiceConfiguration } from 'meteor/service-configuration';

Migrations.add({
	version: 71.1,
	up() {
		ServiceConfiguration.configurations.remove({});
	},
});

Migrations.add({
	version: 75,
	up() {
		ServiceConfiguration.configurations.remove({});
	},
});

