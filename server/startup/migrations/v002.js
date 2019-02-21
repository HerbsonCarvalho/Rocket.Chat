import { RocketChatFile } from '/app/rocketchat-file';
import { FileUpload } from '/app/rocketchat-file-upload';
import { Migrations } from '/app/rocketchat-migrations';
import { Users } from '/app/rocketchat-models';
import { getAvatarSuggestionForUser } from '/app/rocketchat-lib';

Migrations.add({
	version: 2,
	up() {
		return Users.find({
			avatarOrigin: {
				$exists: false,
			},
			username: {
				$exists: true,
			},
		}).forEach((user) => {
			const avatars = getAvatarSuggestionForUser(user);
			const services = Object.keys(avatars);

			if (services.length === 0) {
				return;
			}

			const service = services[0];

			console.log(user.username, '->', service);

			const dataURI = avatars[service].blob;
			const { image, contentType } = RocketChatFile.dataURIParse(dataURI);

			const rs = RocketChatFile.bufferToStream(new Buffer(image, 'base64'));
			const fileStore = FileUpload.getStore('Avatars');
			fileStore.deleteByName(user.username);

			const file = {
				userId: user._id,
				type: contentType,
			};

			fileStore.insert(file, rs, () => Users.setAvatarOrigin(user._id, service));
		});
	},
});
