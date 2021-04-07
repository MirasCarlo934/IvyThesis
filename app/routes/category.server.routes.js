var categories = require("../../app/controllers/category.server.controller");

module.exports = function(app) {
    app.route("/categories").post(categories.create);
}
