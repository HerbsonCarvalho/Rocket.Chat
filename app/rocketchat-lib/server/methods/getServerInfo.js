import { Meteor } from 'meteor/meteor';
import { Info } from '/app/rocketchat-utils';

Meteor.methods({
	getServerInfo() {
		return Info;
	},
});
