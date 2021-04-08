var categories = require("../../app/controllers/category.server.controller");

module.exports = function(app) {
    app.route("/categories")
        .post(categories.create)
        .get(categories.list);

    app.route("/categories/:categoryOrder")
        .get(categories.read)
        .put(categories.update)
        .delete(categories.delete);

    app.param("categoryOrder", categories.categoryByOrder);
}
