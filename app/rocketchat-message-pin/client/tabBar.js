import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { settings } from '/app/rocketchat-settings';
import { TabBar } from '/app/rocketchat-ui-utils';

Meteor.startup(function() {
	return Tracker.autorun(function() {
		if (settings.get('Message_AllowPinning')) {
			TabBar.addButton({
				groups: ['channel', 'group', 'direct'],
				id: 'pinned-messages',
				i18nTitle: 'Pinned_Messages',
				icon: 'pin',
				template: 'pinnedMessages',
				order: 10,
			});
		} else {
			TabBar.removeButton('pinned-messages');
		}
	});
});
