const mongoose = require('mongoose');
const { Schema } = mongoose;

const challengesSchema = new Schema(
    {
        name: Schema.Types.String,
        description: Schema.Types.String,
        objective: Schema.Types.Mixed,
        type: Schema.Types.String,
        worth: Schema.Types.Number,
    },
);

module.exports = mongoose.model('Challenges', challengesSchema);
