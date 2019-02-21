import { Meteor } from 'meteor/meteor';
import { RoomManager } from '/app/rocketchat-ui-utils';
import { chatMessages } from '/app/rocketchat-ui';
import { callbacks } from '/app/rocketchat-callbacks';


Meteor.startup(() => {
	callbacks.add('enter-room', () => {
		setTimeout(() => {
			if (!chatMessages[RoomManager.openedRoom].input) {
				return;
			}

			chatMessages[RoomManager.openedRoom].restoreText(RoomManager.openedRoom);

			const mediaQueryList = window.matchMedia('screen and (min-device-width: 500px)');
			if (mediaQueryList.matches) {
				chatMessages[RoomManager.openedRoom].input.focus();
			}
		}, 200);
	});
});
