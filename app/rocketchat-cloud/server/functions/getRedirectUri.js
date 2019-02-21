import { settings } from '/app/rocketchat-settings';

export function getRedirectUri() {
	return `${ settings.get('Site_Url') }/admin/cloud/oauth-callback`.replace(/\/\/admin+/g, '/admin');
}
