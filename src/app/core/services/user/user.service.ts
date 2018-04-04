import { Service } from '@gapi/core';

@Service()
export class UserService {
    constructor(
    ) { }

    findUser(id: number) {
        return {
            id: 1,
            email: 'test@gmail.com'
        };
    }

    addUser(id: number) {
        return {
            id: 1,
            email: 'test@gmail.com'
        };
    }

    deleteUser(id: number) {
        return {
            id: 1,
            email: 'test@gmail.com'
        };
    }

    updateUser(id) {
        return {
            id: 1,
            email: 'test@gmail.com'
        };
    }

}