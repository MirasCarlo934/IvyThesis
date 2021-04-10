var Card = require("mongoose").model("Card");

// CRUD FUNCTIONS

exports.create = function(req, res, next) {
    var category = new Card(req.body);
    Card.exists({
        order: req.body.order
    }, function(err, exists) {

        if (err) {
            return next(err);
        } else {
            if (exists) {
                res.status(400).json({
                    errmsg: "A card already exists at specified order"
                });
            } else {
                category.save(function(err) {
                    if (err) {
                        return next(err);
                    } else {
                        res.json(category);
                    }
                });
            }
        }

    });
};

exports.list = function(req, res, next) {
    Card.find({})
        .sort("order")
        .exec(function(err, cards) {
            if (err) {
                return next(err);
            } else {
                res.json(cards);
            }
    });
};

exports.read = function(req, res, next) {
    res.json(req.card);
};

exports.update = function(req, res, next) {
    if (req.card === null) {
        let card = new Card(req.body);
        card.save(function(err) {
            if (err) {
                return next(err);
            } else {
                res.json(card);
            }
        });
    } else {
        Card.findOneAndUpdate({
            order: req.card.order
        }, req.body, function (err, card) {
            if (err) {
                return next(err);
            } else {
                res.json(card);
            }
        });
    }
};

exports.delete = function(req, res, next) {
    req.card.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            return res.json(req.card);
        }
    });
};

// PATH PARAMETER FUNCTIONS

exports.cardByOrder = function(req, res, next, order) {
    Card.findOne({
        order: order
    }, function(err, card) {
        if (err) {
            return next(err);
        } else {
            req.card = card;
            next();
        }
    });
};
