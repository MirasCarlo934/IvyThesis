module.exports = {
    // Production configuration options
    mongodb: {
        uri: "mongodb+srv://byronicad:mongo1131@symphonycluster.gy7bf.mongodb.net/ivythesis?retryWrites=true&w=majority"
    },
    api: {
        host: "http://35.198.231.19:3000",
        categoriesPath: "/categories",
        sectionsPath: "/sections",
        listsPath: "/lists",
        cardsPath: "/cards",
        containersPath: "/containers"
    }
}
