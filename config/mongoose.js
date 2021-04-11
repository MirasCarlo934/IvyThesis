var config = require("./config"),
    mongoose = require("mongoose");

module.exports = function() {
    var db = mongoose.connect(config.mongodb.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    require("../app/models/category.server.model");
    require("../app/models/section.server.model");
    require("../app/models/list.server.model");
    require("../app/models/card.server.model");
    require("../app/models/container.server.model");

    return db;
}
