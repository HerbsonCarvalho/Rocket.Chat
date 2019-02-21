const fs = require('fs');
const { execSync } = require('child_process');
const glob = require('glob');

const packagesToMove = {
	'rocketchat:sms': 'rocketchat-sms',
	'rocketchat:2fa': 'rocketchat-2fa',
	'rocketchat:accounts': 'rocketchat-accounts',
	'rocketchat:analytics': 'rocketchat-analytics',
	'rocketchat:api': 'rocketchat-api',
	'rocketchat:assets': 'rocketchat-assets',
	'rocketchat:authorization': 'rocketchat-authorization',
	'rocketchat:autolinker': 'rocketchat-autolinker',
	'rocketchat:autotranslate': 'rocketchat-autotranslate',
	'rocketchat:bot-helpers': 'rocketchat-bot-helpers',
	'rocketchat:cas': 'rocketchat-cas',
	'rocketchat:channel-settings': 'rocketchat-channel-settings',
	'rocketchat:channel-settings-mail-messages': 'rocketchat-channel-settings-mail-messages',
	'rocketchat:cloud': 'rocketchat-cloud',
	'rocketchat:colors': 'rocketchat-colors',
	'rocketchat:crowd': 'rocketchat-crowd',
	'rocketchat:custom-oauth': 'rocketchat-custom-oauth',
	'rocketchat:custom-sounds': 'rocketchat-custom-sounds',
	'rocketchat:dolphin': 'rocketchat-dolphin',
	'rocketchat:drupal': 'rocketchat-drupal',
	'rocketchat:emoji': 'rocketchat-emoji',
	'rocketchat:emoji-custom': 'rocketchat-emoji-custom',
	'rocketchat:emoji-emojione': 'rocketchat-emoji-emojione',
	'rocketchat:error-handler': 'rocketchat-error-handler',
	'rocketchat:favico': 'rocketchat-favico',
	'rocketchat:file': 'rocketchat-file',
	'rocketchat:file-upload': 'rocketchat-file-upload',
	'rocketchat:github-enterprise': 'rocketchat-github-enterprise',
	'rocketchat:gitlab': 'rocketchat-gitlab',
	'rocketchat:google-vision': 'rocketchat-google-vision',
	'rocketchat:grant': 'rocketchat-grant',
	'rocketchat:grant-facebook': 'rocketchat-grant-facebook',
	'rocketchat:grant-github': 'rocketchat-grant-github',
	'rocketchat:grant-google': 'rocketchat-grant-google',
	'rocketchat:graphql': 'rocketchat-graphql',
	'rocketchat:highlight-words': 'rocketchat-highlight-words',
	'rocketchat:iframe-login': 'rocketchat-iframe-login',
	'rocketchat:importer': 'rocketchat-importer',
	'rocketchat:importer-csv': 'rocketchat-importer-csv',
	'rocketchat:importer-hipchat': 'rocketchat-importer-hipchat',
	'rocketchat:importer-hipchat-enterprise': 'rocketchat-importer-hipchat-enterprise',
	'rocketchat:importer-slack': 'rocketchat-importer-slack',
	'rocketchat:importer-slack-users': 'rocketchat-importer-slack-users',
	'rocketchat:integrations': 'rocketchat-integrations',
	'rocketchat:irc': 'rocketchat-irc',
	'rocketchat:issuelinks': 'rocketchat-issuelinks',
	'rocketchat:katex': 'rocketchat-katex',
	'rocketchat:ldap': 'rocketchat-ldap',
	'rocketchat:lib': 'rocketchat-lib',
	'rocketchat:livestream': 'rocketchat-livestream',
	'rocketchat:logger': 'rocketchat-logger',
	'rocketchat:login-token': 'rocketchat-token-login',
	'rocketchat:mailer': 'rocketchat-mailer',
	'rocketchat:mapview': 'rocketchat-mapview',
	'rocketchat:markdown': 'rocketchat-markdown',
	'rocketchat:mentions': 'rocketchat-mentions',
	'rocketchat:mentions-flextab': 'rocketchat-mentions-flextab',
	'rocketchat:message-action': 'rocketchat-message-action',
	'rocketchat:message-attachments': 'rocketchat-message-attachments',
	'rocketchat:message-mark-as-unread': 'rocketchat-message-mark-as-unread',
	'rocketchat:message-pin': 'rocketchat-message-pin',
	'rocketchat:message-snippet': 'rocketchat-message-snippet',
	'rocketchat:message-star': 'rocketchat-message-star',
	'rocketchat:migrations': 'rocketchat-migrations',
	'rocketchat:oauth2-server-config': 'rocketchat-oauth2-server-config',
	'rocketchat:oembed': 'rocketchat-oembed',
	'rocketchat:otr': 'rocketchat-otr',
	'rocketchat:push-notifications': 'rocketchat-push-notifications',
	'rocketchat:retention-policy': 'rocketchat-retention-policy',
	'rocketchat:apps': 'rocketchat-apps',
	'rocketchat:sandstorm': 'rocketchat-sandstorm',
	'rocketchat:setup-wizard': 'rocketchat-setup-wizard',
	'rocketchat:slackbridge': 'rocketchat-slackbridge',
	'rocketchat:slashcommands-archive': 'rocketchat-slashcommands-archiveroom',
	'rocketchat:slashcommands-asciiarts': 'rocketchat-slashcommand-asciiarts',
	'rocketchat:slashcommands-create': 'rocketchat-slashcommands-create',
	'rocketchat:slashcommands-help': 'rocketchat-slashcommands-help',
	'rocketchat:slashcommands-hide': 'rocketchat-slashcommands-hide',
	'rocketchat:slashcommands-invite': 'rocketchat-slashcommands-invite',
	'rocketchat:slashcommands-invite-all': 'rocketchat-slashcommands-inviteall',
	'rocketchat:slashcommands-join': 'rocketchat-slashcommands-join',
	'rocketchat:slashcommands-kick': 'rocketchat-slashcommands-kick',
	'rocketchat:slashcommands-leave': 'rocketchat-slashcommands-leave',
	'rocketchat:slashcommands-me': 'rocketchat-slashcommands-me',
	'rocketchat:slashcommands-msg': 'rocketchat-slashcommands-msg',
	'rocketchat:slashcommands-mute': 'rocketchat-slashcommands-mute',
	'rocketchat:slashcommands-open': 'rocketchat-slashcommands-open',
	'rocketchat:slashcommands-topic': 'rocketchat-slashcommands-topic',
	'rocketchat:slashcommands-unarchive': 'rocketchat-slashcommands-unarchiveroom',
	'rocketchat:slider': 'rocketchat-slider',
	'rocketchat:smarsh-connector': 'rocketchat-smarsh-connector',
	'rocketchat:spotify': 'rocketchat-spotify',
	'rocketchat:statistics': 'rocketchat-statistics',
	'rocketchat:theme': 'rocketchat_theme',
	'rocketchat:tokenpass': 'rocketchat-tokenpass',
	'rocketchat:tooltip': 'rocketchat-tooltip',
	'rocketchat:ui': 'rocketchat-ui',
	'rocketchat:ui-account': 'rocketchat-ui-account',
	'rocketchat:ui-admin': 'rocketchat-ui-admin',
	'rocketchat:ui-clean-history': 'rocketchat-ui-clean-history',
	'rocketchat:ui-flextab': 'rocketchat-ui-flextab',
	'rocketchat:ui-login': 'rocketchat-ui-login',
	'rocketchat:ui-master': 'rocketchat-ui-master',
	'rocketchat:ui-message': 'rocketchat-ui-message',
	'rocketchat:ui-sidenav': 'rocketchat-ui-sidenav',
	'rocketchat:ui-vrecord': 'rocketchat-ui-vrecord',
	'rocketchat:user-data-download': 'rocketchat-user-data-download',
	'rocketchat:videobridge': 'rocketchat-videobridge',
	'rocketchat:webdav': 'rocketchat-webdav',
	'rocketchat:webrtc': 'rocketchat-webrtc',
	'rocketchat:wordpress': 'rocketchat-wordpress',
	'rocketchat:nrr': 'rocketchat-nrr',
	'steffo:meteor-accounts-saml': 'meteor-accounts-saml',
	'rocketchat:e2e': 'rocketchat-e2e',
	'rocketchat:blockstack': 'rocketchat-blockstack',
	'rocketchat:version-check': 'rocketchat-version-check',
	'rocketchat:search': 'rocketchat-search',
	'chatpal:search': 'chatpal-search',
	'rocketchat:lazy-load': 'rocketchat-lazy-load',
	'rocketchat:bigbluebutton': 'rocketchat-bigbluebutton',
	'rocketchat:mailmessages': 'rocketchat-mail-messages',
	'rocketchat:utils': 'rocketchat-utils',
	'rocketchat:settings': 'rocketchat-settings',
	'rocketchat:models': 'rocketchat-models',
	'rocketchat:metrics': 'rocketchat-metrics',
	'rocketchat:callbacks': 'rocketchat-callbacks',
	'rocketchat:notifications': 'rocketchat-notifications',
	'rocketchat:promises': 'rocketchat-promises',
	'rocketchat:ui-utils': 'rocketchat-ui-utils',
	'rocketchat:ui-cached-collection': 'rocketchat-ui-cached-collection',
	'rocketchat:action-links': 'rocketchat-action-links',
	'rocketchat:reactions': 'rocketchat-reactions',
};

function movePackagesAndRemoveFromMeteorPackageFile() {
	execSync('mkdir -p app');
	let packagesFile = fs.readFileSync('.meteor/packages').toString();

	Object.entries(packagesToMove).forEach(([name, package]) => {
		try {
			execSync(`mv packages/${package} app/`);
			packagesFile = packagesFile.replace(`\n${name}`, '');
		} catch (error) {
			console.log(error.message);
		}
	});

	fs.writeFileSync('.meteor/packages', packagesFile)
}

function splitLivechatPackage() {
	execSync('mkdir -p app/rocketchat-livechat');
	execSync('mv packages/rocketchat-livechat/client app/rocketchat-livechat/');
	execSync('mv packages/rocketchat-livechat/imports app/rocketchat-livechat/');
	execSync('mv packages/rocketchat-livechat/lib app/rocketchat-livechat/');
	execSync('mv packages/rocketchat-livechat/server app/rocketchat-livechat/');
	execSync('cp packages/rocketchat-livechat/package.js app/rocketchat-livechat/package.js');

	const livechatFile = fs.readFileSync('packages/rocketchat-livechat/package.js').toString()
		.replace(/\n\t*'rocketchat:.+?',/g, '')
		.replace(/\n\t*api\.(addAssets|addFiles|mainModule).+/g, '');
	fs.writeFileSync('packages/rocketchat-livechat/package.js', livechatFile);
}

function moveAssetsToPublicFolder() {
	// execSync('mv app/rocketchat_theme/client/vendor public/');
	// execSync('mv app/rocketchat-ui-master/public/* public/');

	execSync('mkdir -p public/font/');
	execSync('mv app/rocketchat_theme/client/vendor/fontello/font/fontello.eot public/font/fontello.eot');
	execSync('mv app/rocketchat_theme/client/vendor/fontello/font/fontello.svg public/font/fontello.svg');
	execSync('mv app/rocketchat_theme/client/vendor/fontello/font/fontello.ttf public/font/fontello.ttf');
	execSync('mv app/rocketchat_theme/client/vendor/fontello/font/fontello.woff public/font/fontello.woff');
	execSync('mv app/rocketchat_theme/client/vendor/fontello/font/fontello.woff2 public/font/fontello.woff2');

	execSync('mkdir -p public/client/vendor/fontello/font/');
	execSync('mv app/rocketchat_theme/client/vendor/fontello/demo.html public/client/vendor/fontello/demo.html');
	execSync('mv app/rocketchat_theme/client/vendor/fontello/utf8-rtl.html public/client/vendor/fontello/utf8-rtl.html');

	execSync('mkdir -p public/packages/rocketchat_videobridge/client/public/');
	execSync('mv app/rocketchat-videobridge/client/public/external_api.js public/packages/rocketchat_videobridge/client/public/external_api.js');

	execSync('mkdir -p public/assets/');
	execSync('mv packages/rocketchat-livechat/assets/demo.html public/assets/demo.html');
	// execSync('mv packages/rocketchat-livechat/assets/rocket-livechat.js public/assets/rocket-livechat.js');
	// execSync('mv packages/rocketchat-livechat/assets/rocketchat-livechat.min.js public/assets/rocketchat-livechat.min.js');

	execSync('mkdir -p public/public/');
	execSync('mv app/rocketchat-ui-master/public/icons.html public/public/icons.html');

	// TODO:
	// execSync('mv app/rocketchat-ui-message/../../node_modules/pdfjs-dist/build/pdf.worker.js'
}

function moveAssetsToPrivateFolder() {
	execSync('mkdir -p private/server/asset/');
	execSync('mv app/chatpal-search/server/asset/chatpal-enter.svg private/server/asset/chatpal-enter.svg');
	execSync('mv app/chatpal-search/server/asset/chatpal-logo-icon-darkblue.svg private/server/asset/chatpal-logo-icon-darkblue.svg');

	execSync('mkdir -p private/client/imports/general/');
	execSync('cp app/rocketchat_theme/client/imports/general/variables.css private/client/imports/general/variables.css');

	execSync('mkdir -p private/server/');
	execSync('mv app/rocketchat_theme/server/colors.less private/server/colors.less');
	execSync('mv app/rocketchat-ui-master/server/dynamic-css.js private/server/dynamic-css.js');

	execSync('mkdir -p private/public/');
	// execSync('mv packages/rocketchat-livechat/public/head.html private/public/head.html');
	execSync('mv app/rocketchat-ui-master/public/icons.svg private/public/icons.svg');
}

function importMovedPackagesIntoMainFiles() {
	let importsFile = Object.values(packagesToMove)
		.filter((package) => {
			const file = fs.readFileSync(`app/${package}/index.js`).toString();
			if (file.match(/Meteor\.(isClient|isServer)/g)) {
				return file.match(/Meteor\.isClient/g);
			}
			return true;
		})
		.map((package) => `import '/app/${package}';`).join('\n');
	importsFile += '\nimport \'/app/rocketchat-livechat\';\n';
	fs.writeFileSync('client/importPackages.js', importsFile);

	importsFile = Object.values(packagesToMove)
		.filter((package) => {
			const file = fs.readFileSync(`app/${package}/index.js`).toString();
			if (file.match(/Meteor\.(isClient|isServer)/g)) {
				return file.match(/Meteor\.isServer/g);
			}
			return true;
		})
		.map((package) => `import '/app/${package}';`).join('\n');
	importsFile += '\nimport \'/app/rocketchat-livechat\';\n';
	fs.writeFileSync('server/importPackages.js', importsFile);

	let importsCss = `
import '/app/chatpal-search/client/style.css';
import '/app/rocketchat_theme/client/main.css';
import '/app/rocketchat_theme/client/vendor/photoswipe.css';
import '/app/rocketchat_theme/client/vendor/fontello/css/fontello.css';
import '/app/rocketchat-action-links/client/stylesheets/actionLinks.css';
import '/app/rocketchat-authorization/client/stylesheets/permissions.css';
import '/app/rocketchat-autotranslate/client/stylesheets/autotranslate.css';
import '/app/rocketchat-channel-settings/client/stylesheets/channel-settings.css';
import '/app/rocketchat-colors/client/style.css';
import '/app/rocketchat-custom-sounds/assets/stylesheets/customSoundsAdmin.css';
import '/app/rocketchat-dolphin/client/login-button.css';
import '/app/rocketchat-drupal/client/login-button.css';
import '/app/rocketchat-e2e/client/stylesheets/e2e.less';
import '/app/rocketchat-emoji-custom/assets/stylesheets/emojiCustomAdmin.css';
import '/app/rocketchat-emoji-emojione/client/sprites.css';
import '/app/rocketchat-github-enterprise/client/github-enterprise-login-button.css';
import '/app/rocketchat-gitlab/client/gitlab-login-button.css';
import '/app/rocketchat-integrations/client/stylesheets/integrations.css';
import '/app/rocketchat-katex/client/style.css';
import '/app/rocketchat-livechat/client/stylesheets/livechat.less';
import '/app/rocketchat-livestream/client/styles/liveStreamTab.css';
import '/app/rocketchat-mentions-flextab/client/views/stylesheets/mentionsFlexTab.less';
import '/app/rocketchat-message-action/client/stylesheets/messageAction.css';
import '/app/rocketchat-message-attachments/client/stylesheets/messageAttachments.css';
import '/app/rocketchat-message-pin/client/views/stylesheets/messagepin.css';
import '/app/rocketchat-message-snippet/client/page/stylesheets/snippetPage.css';
import '/app/rocketchat-message-star/client/views/stylesheets/messagestar.css';
import '/app/rocketchat-oauth2-server-config/client/oauth/stylesheets/oauth2.css';
import '/app/rocketchat-otr/client/stylesheets/otr.css';
import '/app/rocketchat-push-notifications/client/stylesheets/pushNotifications.css';
import '/app/rocketchat-reactions/client/stylesheets/reaction.css';
import '/app/rocketchat-search/client/style/style.css';
import '/app/rocketchat-tokenpass/client/login-button.css';
import '/app/rocketchat-tokenpass/client/channelSettings.css';
import '/app/rocketchat-tokenpass/client/styles.css';
import '/app/rocketchat-tooltip/client/tooltip.css';
import '/app/rocketchat-ui-clean-history/client/views/stylesheets/cleanHistory.css';
import '/app/rocketchat-ui-vrecord/client/vrecord.css';
import '/app/rocketchat-videobridge/client/stylesheets/video.less';
import '/app/rocketchat-wordpress/client/wordpress-login-button.css';
`;
	// import '/app/rocketchat-katex/`${ katexPath }katex.min.css`;
	fs.writeFileSync('client/importsCss.js', importsCss);

	let mainFile = fs.readFileSync('client/main.js').toString();
	mainFile = 'import \'./importsCss\';\nimport \'./importPackages\';\n' + mainFile;
	fs.writeFileSync('client/main.js', mainFile);

	mainFile = fs.readFileSync('server/main.js').toString();
	mainFile = 'import \'./importPackages\';\n' + mainFile;
	fs.writeFileSync('server/main.js', mainFile);
}

function createIndexForEachMovedPackage() {
	function mountIndex(file, packageName) {
		let newFile = file.match(/api\.mainModule\('.+?'(, '.+?')?\);/g);

		if (newFile) {
			newFile = newFile.map((item) => item.replace(/api\.mainModule\('(.+?)', 'client'\);/, 'if (Meteor.isClient) {\n\tmodule.exports = require(\'./$1\');\n}'));
			newFile = newFile.map((item) => item.replace(/api\.mainModule\('(.+?)', 'server'\);/, 'if (Meteor.isServer) {\n\tmodule.exports = require(\'./$1\');\n}'));
			newFile = newFile.map((item) => item.replace(/api\.mainModule\('(.+?)'\);/, 'module.exports = require(\'./$1\');'));

			if (file.match(/api\.mainModule\('.+?', '.+?'\);/g)) {
				newFile.unshift('import { Meteor } from \'meteor/meteor\';\n');
			}

			// console.log(newFile.join('\n'));
			fs.writeFileSync(`app/${packageName}/index.js`, newFile.join('\n')+'\n');
		} else {
			console.log(`Package without mainModule: ${packageName}`);
		}
	}

	const app = fs.readdirSync('app');
	app.forEach((packageName) => {
		let file = fs.readFileSync(`app/${packageName}/package.js`).toString();

		const name = file.match(/name: '(.+?)'/)[1];

		mountIndex(file, packageName);
	});
}

function convertImportsToNewPath(done) {
	const files = glob.sync('@(app|imports|client|lib|server)/**/*.js')
	files.forEach((filePath) => {
		let file = fs.readFileSync(filePath).toString();

		if (file.match(/((from|import) 'meteor\/)|(await import\('meteor\/)/g)) {
			let count = 0;
			file = file.replace(/((from|import) )'meteor\/(.+)?'/g, (str, p0, p1, name) => {
				if (packagesToMove[name]) {
					count++;
					return `${p1} '/app/${packagesToMove[name]}'`;
				}
				return str;
			});

			file = file.replace(/(await import\()'meteor\/(.+)?'/g, (str, p1, name) => {
				if (packagesToMove[name]) {
					count++;
					return `${p1}'/app/${packagesToMove[name]}'`;
				}
				return str;
			});

			if (count > 0) {
				// console.log(filePath);
				fs.writeFileSync(filePath, file);
			}
		}
	});
}

function removeOldPackageJSFiles() {
	const files = glob.sync('app/**/package.js');
	files.forEach((filePath) => {
		fs.unlinkSync(filePath);
	});
}

function addMissingMeteorPackages() {
	let packagesFile = fs.readFileSync('.meteor/packages').toString();

	packagesFile += '\n' + [
		'edgee:slingshot',
		'jalik:ufs-local@0.2.5',
		'accounts-base',
		'accounts-oauth',
		'autoupdate',
		'babel-compiler',
		'emojione:emojione@2.2.6',
		'google-oauth',
		'htmljs',
		'less',
		'matb33:collection-hooks',
		'meteorhacks:inject-initial',
		'oauth',
		'oauth2',
		'raix:eventemitter',
		'routepolicy',
		'sha',
		'swydo:graphql',
		'templating',
		'webapp',
		'webapp-hashing',
		'rocketchat:oauth2-server',
		'rocketchat:i18n',
	].join('\n');

	fs.writeFileSync('.meteor/packages', packagesFile);
}

function removeCors() {
	let packagesFile = fs.readFileSync('.meteor/packages').toString();

	packagesFile = packagesFile.replace(/(rocketchat:cors)/, '#$i');

	fs.writeFileSync('.meteor/packages', packagesFile)
}

function fixEslintignore() {
	let file = fs.readFileSync('.eslintignore').toString();

	file = file.replace('packages/rocketchat-emoji-emojione/generateEmojiIndex.js', 'app/rocketchat-emoji-emojione/generateEmojiIndex.js');
	file = file.replace('packages/rocketchat-favico/favico.js', 'app/rocketchat-favico/favico.js');
	file = file.replace('packages/rocketchat-katex/client/katex/katex.min.js', 'app/rocketchat-katex/client/katex/katex.min.js');
	file = file.replace('packages/rocketchat_theme/client/minicolors/jquery.minicolors.js', 'app/rocketchat_theme/client/minicolors/jquery.minicolors.js');
	file = file.replace('packages/rocketchat_theme/client/vendor/', 'app/rocketchat_theme/client/vendor/');
	file = file.replace('packages/rocketchat-ui/client/lib/customEventPolyfill.js', 'app/rocketchat-ui/client/lib/customEventPolyfill.js');
	file = file.replace('packages/rocketchat-ui/client/lib/Modernizr.js', 'app/rocketchat-ui/client/lib/Modernizr.js');
	file = file.replace('packages/rocketchat-ui/client/lib/recorderjs/recorder.js', 'app/rocketchat-ui/client/lib/recorderjs/recorder.js');
	file = file.replace('packages/rocketchat-videobridge/client/public/external_api.js', 'public/packages/rocketchat_videobridge/client/public/external_api.js');

	fs.writeFileSync('.eslintignore', file);
}

function fixStylelintignore() {
	let file = fs.readFileSync('.stylelintignore').toString();

	file = file.replace('packages/rocketchat_theme/client/vendor/fontello/css/fontello.css', 'app/rocketchat_theme/client/vendor/fontello/css/fontello.css');

	fs.writeFileSync('.stylelintignore', file);
}

function fixUnittests() {
	const files = glob.sync('app/**/*.mocks.js');
	files.forEach((filePath) => {
		let file = fs.readFileSync(filePath).toString();

		if (file.match(/mock\('meteor\/rocketchat:/g)) {
			let count = 0;
			file = file.replace(/mock\('(meteor\/(rocketchat:.+?))'/g, (str, p1, name) => {
				if (packagesToMove[name]) {
					count++;
					return `mock('/app/${packagesToMove[name]}'`;
				}
				return str;
			});

			if (count > 0) {
				// console.log(filePath);
				fs.writeFileSync(filePath, file);
			}
		}
	});

	let file = fs.readFileSync('package.json').toString();

	file = file.replace(/packages\/\*\*\//g, 'app/**/');

	fs.writeFileSync('package.json', file);
}

function fixKatex() {
	const rm = `
const fs = require('fs');

fs.unlinkSync('node_modules/pdfjs-dist/build/pdf.js');
fs.unlinkSync('node_modules/pdfjs-dist/build/pdf.worker.js');
fs.unlinkSync('node_modules/blockstack/dist/blockstack.js');
`;
	fs.writeFileSync('.scripts/remove-uncessary-files.js', rm);

	let file = fs.readFileSync('package.json').toString();

	file = file.replace(/"postinstall":.+?"/, '"postinstall": "node .scripts/remove-uncessary-files.js"');

	fs.writeFileSync('package.json', file);

	execSync('meteor npm install --save katex@^0.9.0');
	fs.unlinkSync('app/rocketchat-katex/package.json');
	fs.unlinkSync('app/rocketchat-katex/package-lock.json');
	// TODO: need to add fonts and css
}

movePackagesAndRemoveFromMeteorPackageFile();
splitLivechatPackage();
moveAssetsToPublicFolder();
moveAssetsToPrivateFolder();
createIndexForEachMovedPackage();
importMovedPackagesIntoMainFiles();
convertImportsToNewPath();
addMissingMeteorPackages();
removeOldPackageJSFiles();
fixEslintignore();
fixStylelintignore();
fixUnittests();
fixKatex();
removeCors(); // TODO: remove


// // "postinstall": "cd packages/rocketchat-katex && npm i",
