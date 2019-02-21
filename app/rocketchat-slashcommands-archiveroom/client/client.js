import { slashCommands } from '/app/rocketchat-utils';

slashCommands.add('archive', null, {
	description: 'Archive',
	params: '#channel',
});
