var mongoose = require("mongoose");
Schema = mongoose.Schema;

var ContainerSchema = new Schema({
    name: String,
    description: String,
    order: {
        type: Number,
        min: 0
    },
    parentId: String,
    orientation: String // x, y
});

mongoose.model("Container", ContainerSchema);
