import { Migrations } from '/app/rocketchat-migrations';
import { Messages } from '/app/rocketchat-models';

Migrations.add({
	version: 56,
	up() {
		Messages.find({ _id: /\./ }).forEach(function(message) {
			const oldId = message._id;
			message._id = message._id.replace(/(.*)\.S?(.*)/, 'slack-$1-$2');
			Messages.insert(message);
			Messages.remove({ _id: oldId });
		});
	},
});
