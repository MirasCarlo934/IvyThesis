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
    type: String // category/section
});

mongoose.model("Container", ContainerSchema);
