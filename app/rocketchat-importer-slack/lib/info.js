import { ImporterInfo } from '/app/rocketchat-importer';

export class SlackImporterInfo extends ImporterInfo {
	constructor() {
		super('slack', 'Slack', 'application/zip');
	}
}
