import { Roles } from '/app/rocketchat-models';

export const getRoles = () => Roles.find().fetch();
