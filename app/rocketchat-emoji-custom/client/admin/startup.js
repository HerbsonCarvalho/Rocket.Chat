import { AdminBox } from '/app/rocketchat-ui-utils';
import { hasPermission } from '/app/rocketchat-authorization';

AdminBox.addOption({
	href: 'emoji-custom',
	i18nLabel: 'Custom_Emoji',
	icon: 'emoji',
	permissionGranted() {
		return hasPermission('manage-emoji');
	},
});
