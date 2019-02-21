import { Migrations } from '/app/rocketchat-migrations';
import { OAuthApps } from '/app/rocketchat-models';

Migrations.add({
	version: 98,
	up() {
		OAuthApps.update({ _id: 'zapier' }, {
			$set: {
				redirectUri: 'https://zapier.com/dashboard/auth/oauth/return/RocketChatDevAPI/',
			},
		});
	},
});
