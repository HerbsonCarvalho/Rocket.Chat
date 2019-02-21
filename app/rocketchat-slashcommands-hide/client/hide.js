import { slashCommands } from '/app/rocketchat-utils';

slashCommands.add('hide', undefined, {
	description: 'Hide_room',
	params: '#room',
});
