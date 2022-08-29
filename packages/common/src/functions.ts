import { User } from "./types";

const getUserFullName = (user: User) => `${user.firstName} ${user.lastName}`;

export { getUserFullName };
