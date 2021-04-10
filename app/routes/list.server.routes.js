var lists = require("../../app/controllers/list.server.controller");

module.exports = function(app) {
    app.route("/lists")
        .post(lists.create)
        .get(lists.list);

    app.route("/lists/:listOrder")
        .get(lists.read)
        .put(lists.update)
        .delete(lists.delete);

    app.param("listOrder", lists.listByOrder);
}
