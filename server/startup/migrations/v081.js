import { Migrations } from '/app/rocketchat-migrations';
import { OAuthApps } from '/app/rocketchat-models';

Migrations.add({
	version: 81,
	up() {
		OAuthApps.update({ _id: 'zapier' }, {
			$set: {
				active: true,
				redirectUri: 'https://zapier.com/dashboard/auth/oauth/return/App32270API/',
			},
		});
	},
});
