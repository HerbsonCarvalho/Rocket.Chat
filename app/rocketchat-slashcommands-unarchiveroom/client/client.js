import { slashCommands } from '/app/rocketchat-utils';

slashCommands.add('unarchive', null, {
	description: 'Unarchive',
	params: '#channel',
});
