import { AdminBox } from '/app/rocketchat-ui-utils';
import { hasAllPermission } from '/app/rocketchat-authorization';

AdminBox.addOption({
	href: 'admin-oauth-apps',
	i18nLabel: 'OAuth Apps',
	icon: 'discover',
	permissionGranted() {
		return hasAllPermission('manage-oauth-apps');
	},
});
