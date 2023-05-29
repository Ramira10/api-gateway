export enum RabbitMQ {
    UserQueue = 'users',
    PassengersQueue = 'passengers',
}

export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    VALID_USER = 'VALID_USER'
}

export enum PassengerMSG {
    CREATE = 'CREATE_PASSENGER',
    FIND_ALL = 'FIND_PASSENGERS',
    FIND_ONE = 'FIND_PASSENGER',
    UPDATE = 'UPDATE_PASSENGER',
    DELETE = 'DELETE_PASSENGER',
}