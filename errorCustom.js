class StatusHTTP extends Error {
    constructor(message,status) {
        super(message),
        this.status = status || 400
    }
}

export {StatusHTTP}