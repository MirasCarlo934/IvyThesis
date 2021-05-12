var mongoose = require("mongoose");
Schema = mongoose.Schema;

var CardSchema = new Schema({
    name: String,
    description: String,
    image: String,
    order: {
        type: Number,
        min: 0
    },
    listId: String
});

mongoose.model("Card", CardSchema);
