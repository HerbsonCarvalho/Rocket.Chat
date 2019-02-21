import { Meteor } from 'meteor/meteor';
import { LoggerManager } from '/app/rocketchat-logger';
import { settings } from '/app/rocketchat-settings';

settings.get('Log_Package', function(key, value) {
	return LoggerManager.showPackage = value;
});

settings.get('Log_File', function(key, value) {
	return LoggerManager.showFileAndLine = value;
});

settings.get('Log_Level', function(key, value) {
	if (value != null) {
		LoggerManager.logLevel = parseInt(value);
		Meteor.setTimeout(() => LoggerManager.enable(true), 200);
	}
});
