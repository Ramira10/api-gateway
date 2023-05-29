export enum RabbitMQ {
    UserQueue = 'users',
}

export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    VALID_USER = 'VALID_USER'
}