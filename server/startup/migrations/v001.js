import { Migrations } from '/app/rocketchat-migrations';
import { Users } from '/app/rocketchat-models';
import { generateUsernameSuggestion } from '/app/rocketchat-lib';

Migrations.add({
	version: 1,
	up() {
		return Users.find({
			username: {
				$exists: false,
			},
			lastLogin: {
				$exists: true,
			},
		}).forEach((user) => {
			const username = generateUsernameSuggestion(user);
			if (username && username.trim() !== '') {
				return Users.setUsername(user._id, username);
			} else {
				return console.log('User without username', JSON.stringify(user, null, ' '));
			}
		});
	},
});
