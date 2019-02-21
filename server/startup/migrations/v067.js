import { Migrations } from '/app/rocketchat-migrations';
import { LivechatDepartment } from '/app/rocketchat-models';

Migrations.add({
	version: 67,
	up() {
		if (LivechatDepartment) {
			LivechatDepartment.model.update({}, {
				$set: {
					showOnRegistration: true,
				},
			}, { multi: true });
		}
	},
});
