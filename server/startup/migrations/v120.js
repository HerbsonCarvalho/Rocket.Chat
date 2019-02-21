import { Migrations } from '/app/rocketchat-migrations';
import { Users } from '/app/rocketchat-models';

Migrations.add({
	version: 120,
	up() {
		Users.update({
			'settings.preferences.roomsListExhibitionMode': 'activity',
		}, {
			$unset: {
				'settings.preferences.roomsListExhibitionMode': 1,
			},
			$set: {
				'settings.preferences.sidebarSortby': 'activity',
				'settings.preferences.sidebarShowFavorites': true,
			},
		});

		Users.update({
			'settings.preferences.roomsListExhibitionMode': 'unread',
		}, {
			$unset: {
				'settings.preferences.roomsListExhibitionMode': 1,
			},
			$set: {
				'settings.preferences.sidebarSortby': 'alphabetical',
				'settings.preferences.sidebarShowUnread' : true,
				'settings.preferences.sidebarShowFavorites': true,
			},
		});

		Users.update({
			'settings.preferences.roomsListExhibitionMode': 'category',
		}, {
			$unset: {
				'settings.preferences.roomsListExhibitionMode': 1,
			},
			$set: {
				'settings.preferences.sidebarSortby': 'alphabetical',
				'settings.preferences.sidebarShowFavorites': true,
			},
		});
	},
});
