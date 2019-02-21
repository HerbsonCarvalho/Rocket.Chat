import { Migrations } from '/app/rocketchat-migrations';
import { Messages } from '/app/rocketchat-models';

Migrations.add({
	version: 35,
	up() {
		return Messages.update({
			'file._id': {
				$exists: true,
			},
			'attachments.title_link': {
				$exists: true,
			},
			'attachments.title_link_download': {
				$exists: false,
			},
		}, {
			$set: {
				'attachments.$.title_link_download': true,
			},
		}, {
			multi: true,
		});
	},
});
