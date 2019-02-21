import { Meteor } from 'meteor/meteor';
import { LivechatCustomField } from '/app/rocketchat-models';

Meteor.methods({
	'livechat:getCustomFields'() {
		return LivechatCustomField.find().fetch();
	},
});
