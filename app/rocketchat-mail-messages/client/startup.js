import { AdminBox } from '/app/rocketchat-ui-utils';
import { hasAllPermission } from '/app/rocketchat-authorization';

AdminBox.addOption({
	href: 'mailer',
	i18nLabel: 'Mailer',
	icon: 'mail',
	permissionGranted() {
		return hasAllPermission('access-mailer');
	},
});
