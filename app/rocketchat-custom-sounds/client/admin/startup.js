import { AdminBox } from '/app/rocketchat-ui-utils';
import { hasAtLeastOnePermission } from '/app/rocketchat-authorization';

AdminBox.addOption({
	href: 'custom-sounds',
	i18nLabel: 'Custom_Sounds',
	icon: 'volume',
	permissionGranted() {
		return hasAtLeastOnePermission(['manage-sounds']);
	},
});
