var categories = require("../../app/controllers/category.server.controller");

module.exports = function(app) {
    app.route("/categories")
        .post(categories.create)
        .get(categories.list);

    app.route("/categories/:categoryOrder")
        .get(categories.read);

    app.param("categoryOrder", categories.categoryByOrder);
}
