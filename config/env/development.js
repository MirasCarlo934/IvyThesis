module.exports = {
    // Development configuration options
    mongodb: {
        uri: "mongodb+srv://byronicad:mongo1131@symphonycluster.gy7bf.mongodb.net/ivythesis?retryWrites=true&w=majority"
    },
    api: {
        host: "http://localhost:3000",
        categoriesPath: "/categories",
        sectionsPath: "/sections",
        listsPath: "/lists",
        cardsPath: "/cards",
        containersPath: "/containers"
    }
}
