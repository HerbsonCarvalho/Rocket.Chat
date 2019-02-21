import { Template } from 'meteor/templating';
import { roomTypes } from '/app/rocketchat-utils';

Template.messagePopupChannel.helpers({
	channelIcon() {
		return roomTypes.getIcon(this.t);
	},
});
