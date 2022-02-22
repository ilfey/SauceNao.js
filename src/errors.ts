export class ServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ServerError";
    }
}

export class ClientError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ClientError";
    }
}

export class UnknownError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ClientError";
    }
}