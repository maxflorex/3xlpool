export const options = {
    definition: {
        info: {
            title: "Pool API",
            version: "1.0.0",
            description: "A Simple Express Library API"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
    },
    apis: ["/server/src/routes/*.js"]
}