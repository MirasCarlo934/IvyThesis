var List = require("mongoose").model("List");

// CRUD FUNCTIONS

exports.create = function(req, res, next) {
    var list = new List(req.body);
    List.exists({
        order: req.body.order
    }, function(err, exists) {

        if (err) {
            return next(err);
        } else {
            // if (exists) {
            //     res.status(400).json({
            //         errmsg: "A list already exists at specified order"
            //     });
            // } else {
                list.save(function(err) {
                    if (err) {
                        return next(err);
                    } else {
                        res.json(list);
                    }
                });
            }
        // }

    });
};

exports.list = function(req, res, next) {
    let query = {};
    if (req.query.ungrouped === "true") {
        query.sectionId = null;
        query.categoryId = null;
        query.parentId = null;
    } else {
        if (req.query.sectionId) {
            query.sectionId = req.query.sectionId;
        }
        if (req.query.categoryId) {
            query.categoryId = req.query.categoryId;
        }
        if (req.query.parentId) {
            query.parentId = req.query.parentId;
        }
    }
    List.find(query)
        .sort("order")
        .exec(function(err, lists) {
            if (err) {
                return next(err);
            } else {
                res.json(lists);
            }
    });
};

exports.read = function(req, res, next) {
    res.json(req.list);
};

exports.update = function(req, res, next) {
    if (req.list === null) {
        let list = new List(req.body);
        list.save(function(err) {
            if (err) {
                return next(err);
            } else {
                res.json(list);
            }
        });
    } else {
        List.findOneAndUpdate({
            order: req.list.order
        }, req.body, function (err, list) {
            if (err) {
                return next(err);
            } else {
                res.json(list);
            }
        });
    }
};

exports.delete = function(req, res, next) {
    req.list.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            return res.json(req.list);
        }
    });
};

// PATH PARAMETER FUNCTIONS

exports.listByOrder = function(req, res, next, order) {
    List.findOne({
        order: order
    }, function(err, list) {
        if (err) {
            return next(err);
        } else {
            req.list = list;
            next();
        }
    });
};
