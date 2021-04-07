var mongoose = require("mongoose");
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: String,
    description: String,
    order: {
        type: Number,
        min: 0
    }
});

mongoose.model("Category", CategorySchema);
