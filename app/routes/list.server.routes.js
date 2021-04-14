var lists = require("../../app/controllers/list.server.controller");

module.exports = function(app) {
    app.route("/lists")
        .post(lists.create)
        .get(lists.list);

    app.route("/lists/:listId")
        .get(lists.read)
        .put(lists.update)
        .delete(lists.delete);

    app.param("listOrder", lists.listByOrder);
    app.param("listId", lists.listById);
}
