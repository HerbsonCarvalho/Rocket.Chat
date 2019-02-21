import { slashCommands } from '/app/rocketchat-utils';

slashCommands.add('create', null, {
	description: 'Create_A_New_Channel',
	params: '#channel',
});
