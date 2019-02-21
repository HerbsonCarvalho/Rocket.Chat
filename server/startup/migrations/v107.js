import { Migrations } from '/app/rocketchat-migrations';
import { Users } from '/app/rocketchat-models';

Migrations.add({
	version: 107,
	up() {


		Users.update({
			'preferences.roomsListExhibitionMode': 'activity',
		}, {
			$unset: {
				'preferences.roomsListExhibitionMode': 1,
			},
			$set: {
				'preferences.sidebarSortby': 'activity',
				'preferences.sidebarShowFavorites': true,
			},
		});

		Users.update({
			'preferences.roomsListExhibitionMode': 'unread',
		}, {
			$unset: {
				'preferences.roomsListExhibitionMode': 1,
			},
			$set: {
				'preferences.sidebarSortby': 'alphabetical',
				'preferences.sidebarShowUnread' : true,
				'preferences.sidebarShowFavorites': true,
			},
		});

		Users.update({
			'preferences.roomsListExhibitionMode': 'category',
		}, {
			$unset: {
				'preferences.roomsListExhibitionMode': 1,
			},
			$set: {
				'preferences.sidebarSortby': 'alphabetical',
				'preferences.sidebarShowFavorites': true,
			},
		});
	},
});
