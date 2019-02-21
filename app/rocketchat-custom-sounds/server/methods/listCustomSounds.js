import { Meteor } from 'meteor/meteor';
import { CustomSounds } from '/app/rocketchat-models';

Meteor.methods({
	listCustomSounds() {
		return CustomSounds.find({}).fetch();
	},
});
