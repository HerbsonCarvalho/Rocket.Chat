import { Roles } from '/app/rocketchat-models';

export const getUsersInRole = (roleName, scope, options) => Roles.findUsersInRole(roleName, scope, options);

