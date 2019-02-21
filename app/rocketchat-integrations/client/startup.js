import { AdminBox } from '/app/rocketchat-ui-utils';
import { hasAtLeastOnePermission } from '/app/rocketchat-authorization';

AdminBox.addOption({
	href: 'admin-integrations',
	i18nLabel: 'Integrations',
	icon: 'code',
	permissionGranted: () => hasAtLeastOnePermission(['manage-integrations', 'manage-own-integrations']),
});
