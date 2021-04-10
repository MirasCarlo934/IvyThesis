var cards = require("../../app/controllers/card.server.controller");

module.exports = function(app) {
    app.route("/cards")
        .post(cards.create)
        .get(cards.list);

    app.route("/cards/:cardOrder")
        .get(cards.read)
        .put(cards.update)
        .delete(cards.delete);

    app.param("cardOrder", cards.cardByOrder);
}
