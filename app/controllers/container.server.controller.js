var Container = require("mongoose").model("Container");

// CRUD FUNCTIONS

exports.create = function(req, res, next) {
    var container = new Container(req.body);
    Container.exists({
        order: req.body.order
    }, function(err, exists) {

        if (err) {
            return next(err);
        } else {
            // if (exists) {
            //     res.status(400).json({
            //         errmsg: "A section already exists at specified order"
            //     });
            // } else {
                container.save(function(err) {
                    if (err) {
                        return next(err);
                    } else {
                        res.json(container);
                    }
                });
            // }
        }

    });
};

exports.list = function(req, res, next) {
    let query = {};
    if (req.query.parentId) {
        query.parentId = req.query.parentId
    }
    Container.find(query)
        .sort("order")
        .exec(function(err, containers) {
            if (err) {
                return next(err);
            } else {
                res.json(containers);
            }
    });
};

exports.read = function(req, res, next) {
    res.json(req.container);
};

exports.update = function(req, res, next) {
    if (req.container === null) {
        let container = new Container(req.body);
        container.save(function(err) {
            if (err) {
                return next(err);
            } else {
                res.json(container);
            }
        });
    } else {
        Container.findOneAndUpdate({
            order: req.container.order
        }, req.body, function (err, container) {
            if (err) {
                return next(err);
            } else {
                res.json(container);
            }
        });
    }
};

exports.delete = function(req, res, next) {
    req.container.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            return res.json(req.container);
        }
    });
};

// PATH PARAMETER FUNCTIONS

exports.containerByOrder = function(req, res, next, order) {
    Container.findOne({
        order: order
    }, function(err, container) {
        if (err) {
            return next(err);
        } else {
            req.container = container;
            next();
        }
    });
};
