import { Migrations } from '/app/rocketchat-migrations';
import { Rooms } from '/app/rocketchat-models';

Migrations.add({
	version: 11,
	up() {
		/*
		 * Set GENERAL room to be default
		 */
		Rooms.update({
			_id: 'GENERAL',
		}, {
			$set: {
				default: true,
			},
		});

		return console.log('Set GENERAL room to be default');
	},
});
