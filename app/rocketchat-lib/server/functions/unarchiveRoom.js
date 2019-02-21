import { Rooms, Subscriptions } from '/app/rocketchat-models';

export const unarchiveRoom = function(rid) {
	Rooms.unarchiveById(rid);
	Subscriptions.unarchiveByRoomId(rid);
};
