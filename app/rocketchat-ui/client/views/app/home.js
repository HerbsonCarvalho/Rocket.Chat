import { Template } from 'meteor/templating';
import { settings } from '/app/rocketchat-settings';

Template.home.helpers({
	title() {
		return settings.get('Layout_Home_Title');
	},
	body() {
		return settings.get('Layout_Home_Body');
	},
});
