import * as usersAPI from './users-api'

export async function singUp(userData) {
    const token = await usersAPI.singUp(userData);
    return token;
}